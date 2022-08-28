
<script>

	import { writable } from 'svelte/store';
	import { session } from '$app/stores';
  import debounce from 'lodash/debounce'

  import { getVotes, getVotesByUser, doUpvote } from '$plasmid/modules/instill/votes'


  let user, isDataLoaded, error
	$: user = $session.user;

  // let upvoteRecord
  let votes = writable([])
  let source = 'playground-vote-example'

	let myVote = writable({
    userId: user?.id,
    source,
    parentId: post.id,
    type: 'vote',
    number: 0,
  });



  const refreshData = async () => {
    // getVotes('playground-example-1').then(res => allVotes = res)
    $votes = await getVotes(source)
    if(user) {
      $myVote = $votes?.find(vote => vote.userId === user.id) || $myVote
      isDataLoaded = true
    }
  }

  $: if(user) {
    $myVote.userId = user?.id
    refreshData()
  } else {
    error = true
  }

</script>


<div class="_content mx-auto">
  
  {#if !error}
    {#if isDataLoaded}
      <div class="Card-active --thin">
        <button class="Btn-solid" on:click={debounce(async ()=>{
          $myVote.number++; $votes = $votes // refresh votes array
          await doUpvote($myVote); 
          debounce(async ()=>{
            $votes = await getVotes(source) || $votes
          },500)
          }, 100)}>Upvote</button>
        <div class="mt-4">
          My votes: {$myVote?.number}
        </div>
        <div class="mt-4">
          <div>
            Total votes: {$votes.reduce((acc, vote) => acc + vote.number, 0)}
          </div>
          # of vote records: {$votes?.length}
          <div class="my-4">
            {#if $votes}
              {#each $votes.reverse() as vote}
                <div class="mb-2">{vote.number} | {vote.updated} | {vote?.userId}</div>
              {/each}
            {/if}
          </div>
        </div>
      </div>
    {:else}
      Loading ...
    {/if}
  {:else}
    <div class="Card-error text-red-500">
      You need to be logged in to vote.
    </div>
  {/if}


  
</div>