<script>
	import { page } from '$app/stores';

	export let data;
	// $: console.log('[dashboard/+page.svelte] :', $page, 'data from mock endpoint:', data);


  const authHandler = async () => {
    const res = await fetch(
      '/api/authorized', {
      method: 'POST',
      body: JSON.stringify({
        message: "secret message"
      })
    })
    if(res.ok) {
      let jsonRes = await res.json()
      console.log('ping:', jsonRes)
    }
  }
  
</script>





<div>
  this is the dashboard!
  <div>
    <button class="Btn-outline my-2" on:click={()=>authHandler()}>Do something server-side</button>
  </div>
</div>
