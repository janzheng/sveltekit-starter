


<script>
	import { writable } from 'svelte/store';
	import { page } from '$app/stores';
	import { user } from '$lib/store'

  import debounce from 'lodash/debounce'

  import { doUpvote, getVotes } from '$plasmid/modules/instill/votes'


  // parent data
  // export let project
  // export let group
  // export let panel
  export let source, showLink=false
  // 
  export let post
  export let author
  export let votes 
  // export let refreshData


  let allVotes = writable(votes)
  let isDataLoaded, error

  // post data
  // export let profiles = writable([])

  export let myVote = writable({
      userId: user?.id,
      source,
      parentId: post.id,
      type: 'vote',
      number: 0,
    })



  $: if($user) {
    $myVote.userId = user?.id
    if($allVotes.length == 0) $allVotes.push($myVote)
    $myVote = $allVotes.find(vote => vote.userId === $user.id)
  } else {
    error = true
  }

  $: {
    // console.log('votes / myvotes:', $myVote, $allVotes)
    // console.log('post author:', author)
    // console.log('post votes:', $allVotes)
  }



  export let upvote = async () => {
    debounce(async ()=>{
      $myVote.number++; $allVotes = $allVotes // refresh votes array
      await doUpvote($myVote);

      debounce(async ()=>{
        $allVotes = await getVotes(source) || $allVotes
      },500)()
      
    },100)()
  }
  
</script>






<div class="Card-light">
  <div class="Card-body">
    <div class="text-2xl">
      <span class="arrow-up | inline-block mb-[0.1rem] cursor-pointer" on:click={()=>upvote()}> </span>
      {#if showLink}
        <a href={`/instill/${post?.id}`}>{post?.title} | {post?.id}</a>
      {:else}
        {post?.title} | {post?.id}
      {/if}
    </div>
    <div class="text-gray-600 mt-2">{#if post?.url}{post.url}{/if}</div>
    <div class="text-gray-600 mt-2">{#if post?.text}{post.text}{/if}</div>
    <div class="text-gray-600 mt-2">{#if author?.username}{author?.username}{/if}</div>
    <div class="text-gray-600 mt-2">
      {#if votes}
        <!-- <button class="btn-link"
          on:click={()=>upvote()}>
          ({$allVotes.reduce((acc, vote) => acc + vote.number, 0)}) upvote!!!
        </button> -->
        <div class="text-sm">{$allVotes.reduce((acc, vote) => acc + vote.number, 0)} votes</div>
      {/if}
    </div>
  </div>
</div>

<style lang="scss">

  :root {
    --tw-arrow-height: 6px;
    --tw-arrow-width: 10px;
    --tw-arrow-color: rgb(29, 78, 216);
  }
</style>