
<!-- 

  Handles threaded replies
  and/or comments

-->

<script>
  import { tick } from "svelte";
	import { writable } from 'svelte/store';
	import { session, page } from '$app/stores';
  import { getReplies, doReply } from '$plasmid/modules/instill/replies'

	import Reply from '$lib/components/instill/blocks/Reply.svelte';
  import debounce from 'lodash/debounce'

  import { doUpvote, getVotes } from '$plasmid/modules/instill/votes'

  export let source, replies, profiles, root


  let allReplies = writable(replies)
  let user, isDataLoaded, error
	$: user = $session.user;

  export let newReply = writable({
    source: `${source}`,
    parentId: root,
    userId: user?.id,
  })

  $: console.log('replies???', $allReplies)


  const refreshData = async () => {
    await tick()
    $allReplies = await getReplies(source) || $allReplies
  }


  $: if(user) {
    $newReply.userId = user?.id
  }
  
</script>



<form class="form-solid content my-4" on:submit|preventDefault={async ()=>{
  await doReply($newReply);
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




<div class="Card-light">
  {#each $allReplies as reply}
    <Reply {refreshData} replies={$allReplies} {reply} {profiles} {source} {root} />
  {/each}

  <!-- <div class="Card-body">
    <div class="text-2xl">{post.title} | {post.id}</div>
    <div class="text-gray-600 mt-2">{#if post.url}{post.url}{/if}</div>
    <div class="text-gray-600 mt-2">{#if post.text}{post.text}{/if}</div>
    <div class="text-gray-600 mt-2">{#if author?.username}{author?.username}{/if}</div>
    <div class="text-gray-600 mt-2">
      {#if votes}
        <button class="btn-link"
          on:click={debounce(async ()=>{
            $myVote.number++; $allVotes = $allVotes // refresh votes array
            await doUpvote($myVote); 

            debounce(async ()=>{
              $allVotes = await getVotes(source) || $allVotes
            },500)
            
          },100)}>
          ({$allVotes.reduce((acc, vote) => acc + vote.number, 0)}) upvote!
        </button>
      {/if}
    </div>
  </div> -->
</div>


