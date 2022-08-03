
<script>

  import { tick } from "svelte";
	import { writable } from 'svelte/store';

  import PocketBase from 'pocketbase';
	import { session } from '$app/stores';


  export const client = new PocketBase('https://pocket.phage.directory');
  let user, isDataLoaded
	$: user = $session.user;

  // let upvoteRecord
  let allVotes = []

	let myVote = writable({});





  // export const getVotesBySource = async (source) => {
  //   try {
  //     let records = await client.Records.getList("interactions", {
  //       filter: `source='${source}'`
  //     })
  //     return records.items
  //   } catch(e) {
  //     console.error('[getVotesBySource] error', e)
  //   }
  //   return {}
  // }
  // const refreshData = async () => {
  //   getVotesBySource('playground-example-1').then(res => allVotes = res)
  //   allVotes = await getVotesBySource('playground-example-1')
  //   myVotes = await getVotesBySourceAndUser('playground-example-1', user.id)

  //   isDataLoaded = true
  // }





  export const getVoteBySourceAndUser = async (source, userid) => {
    try {
      let records = await client.Records.getList("interactions", {
        filter: `source='${source}&userId=${userid}'`
      })
      console.log('returning :::', records.items)
      return records.items[0] || {}
    } catch(e) {
      console.error('[getVotesBySourceAndUser] error', e, e.response)
    }
    return {}
  }




  export const upvote = async (points, data) => {
    try {
      if($myVote.doots) {
        // increment
        $myVote.doots = $myVote.doots+1
        console.log('optimistic upvoting:', $myVote.doots)

        await tick() // slow down sending to server
        $myVote = await client.Records.update("interactions", $myVote.id, {doots: $myVote.doots})
        console.log('after server response', $myVote.doots)
      } else {
        // console.log('creating & subscribing!!')
        // myVote = await client.Records.create("interactions", data)
      }

      // await refreshData()
    } catch(e) {
      // errors happen when too many votes
      // console.error('[upvote] error', e)
    }
  }






  const getMyData = async () => {
    // getVotesBySource('playground-example-1').then(res => allVotes = res)
    // allVotes = await getVotesBySource('playground-example-1')
    // console.log('gMD user', user)
    if(user) {

      // set a blank vote
      $myVote = {
        userId: user.id,
        source: 'playground-example-1',
        type: 'points',
        project: 'playground',
        doots: 0,
      }

      // get the server data
      $myVote = await getVoteBySourceAndUser('playground-example-1', user.id)
      console.log('my Vote??', $myVote, $myVote.doots)
      isDataLoaded = true

      if($myVote.id) {
        console.log('myVote:', $myVote.id)
        // client.Realtime.subscribe(`interactions/${$myVote.id}`, function (e) {
        //   console.log('[realtime] doots:', e.record.doots);
        //   // refreshData()
        //   // $myVote = e.record
        // });
      }
    }
  }






  $: if(user) {
    getMyData()
    // console.log('user:', user, myVote)
    // refreshData()
  }

</script>


<div class="_content mx-auto">
  
  {#if isDataLoaded}
  
    <div class="Card-active --thin">
      <button class="Btn-solid" on:click={()=>{
        upvote(1); 
        }}>Upvote</button>
      <div class="mt-4">
        My votes: {$myVote.doots || 0}
      </div>
      <div class="mt-4">
        {#if allVotes}
          {#each allVotes.reverse() as vote}
            <div class="mb-2">{vote.doots} | {vote.updated} | {vote.userId}</div>
          {/each}
        {/if}
      </div>
    </div>
  {:else}
    Loading ...
  {/if}
  
</div>