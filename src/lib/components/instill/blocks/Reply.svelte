
<!-- 
  
  this takes the ROOT reply, as well as the entire list of replies in the thread and shows them recursively


-->
<script>
	import { page } from '$app/stores';
	import { writable } from 'svelte/store';
	import { user } from '$lib/store'
  import { dateTo, dateFromLocal } from "$plasmid/utils/date.js";
  import { getReplies, doReply } from '$plasmid/modules/instill/replies'

  export let replies, reply, profiles, source, root
  export let showEditor = false, refreshData

  let isDataLoaded, error

  export let newReply = writable({
    source: `${source}`,
    parentId: reply.id,
    userId: $user?.id,
  })

  // $: console.log('TR::', profiles, '|||', reply)

  $: if($user) {
    $newReply.userId = $user?.id
  }
</script>


  <!-- root: {reply.id} | parent: {reply?.parentId} -- {root} -- {reply?.body} -->

  {#if reply.parentId == root}
    <div class="py-2">
      {profiles?.find(p=>p.userId==reply.userId).username} | {dateFromLocal(reply.created)} | id: {reply?.id} | parent: {reply?.parentId}
      <div class="pb-1">{reply.body}</div>
      <div class="text-sm cursor-pointer btn-link" on:click={()=>{showEditor=!showEditor}}>reply</div>

      {#if reply.children && reply.children.length > 0}
        {#each reply.children as childReplyId}
          {@const subReply = replies.find(c=>c.id==childReplyId)}
          <div class="pl-12">
            <svelte:self {refreshData} replies={replies} reply={subReply} {profiles} {source} root={reply.id} />
          </div>
        {/each}
      {/if}

      {#if showEditor}
        <form class="form-solid content my-4" on:submit|preventDefault={async ()=>{
          await doReply($newReply);
          showEditor = false
          await refreshData()
        }}>
          <div class="grid grid-cols-1 gap-6">
            <label class="block">
              <!-- <span class="text-gray-700">Text</span> -->
              <textarea bind:value={$newReply.body} class="form-textarea mt-1 block w-full h-24" rows="3" placeholder="Write something fun!"></textarea>
            </label>
          </div>
          <input class="Btn-solid ease-in-out block mt-2" type="submit" value="Reply">
        </form>
      {/if}
    <!-- {/if} -->
    </div>
  {:else}
    <!-- not rendered ::: {reply.id} — {reply.parentId} — {reply.body} -->
    <!-- NESTED: reply: {reply.id} | parent: {reply.parentId} -->
    <!-- new reply:  -->
    <!-- <pre>{JSON.stringify(replies.find(c=>c?.id==reply.parentId), null, 2)}</pre> -->
    <!-- <svelte:self {replies} reply={replies.find(c=>c.id==reply.parentId)} {profiles} {source} root={reply.parentId} /> -->
  {/if}
