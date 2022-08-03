
<script>

  import PocketBase from 'pocketbase';
	import { session } from '$app/stores';


  export const client = new PocketBase('https://pocket.phage.directory');
  let user, isDataLoaded
	$: user = $session.user;
  // $: console.log('user:', user)



  export const votesBySource = async (source) => {
    try {
      let records = await client.Records.getList("interactions", {
        filter: `source='${source}'`
      })
      return records.items
    } catch(e) {
      console.error('[votesBySource] error', e, e.response)
    }
    return []
  }

  export const votesBySourceAndUser = async (source, userid) => {
    try {
      let records = await client.Records.getList("interactions", {
        filter: `source='${source}&userId=${userid}'`
      })
      return records.items
    } catch(e) {
      console.error('[votesBySourceAndUser] error', e, e.response)
    }
    return []
  }

  export const upvote = async (points, data) => {
    try {
      data = {
        ... data,
        doots: points,
      }

      return await client.Records.create("interactions", data)
    } catch(e) {
      console.error('[upvote] error', e.response)
    }
  }






  const refreshData = async () => {
    // votesBySource('playground-example-1').then(res => allVotes = res)
    allVotes = await votesBySource('playground-example-1')
    myVotes = await votesBySourceAndUser('playground-example-1', user.id)

    isDataLoaded = true
  }


  let allVotes = []
  let myVotes = []

  refreshData()

</script>


<div class="_content mx-auto">
  
  {#if isDataLoaded}
  
    <div class="Card-active --thin">
      <button class="Btn-solid" on:click={()=>{
        upvote(1, {
          userId: user.id,
          source: 'playground-example-1',
          type: 'points',
          project: 'playground',
        }); 
        refreshData()}}>Upvote</button>
      <div class="mt-4">
        My votes: {myVotes.length}
      </div>
      <div class="mt-4">
        {#if allVotes}
          {#each allVotes as vote}
            <div class="mb-2">{vote.doots} | {vote.updated} | {vote.userId}</div>
          {/each}
        {/if}
      </div>
    </div>
  {:else}
    Loading ...
  {/if}
  
</div>