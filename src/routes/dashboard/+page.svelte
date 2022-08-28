<script context="module">
	export async function load({ fetch }) {
		try {
			const response = await fetch('/api/account/data.json', {
				method: 'GET',
				credentials: 'same-origin'
			});
			return {
				props: { data: { ...(await response.json()) } }
			};
		} catch (error) {
			console.error(`Error in route /dashboard: ${error}`);
		}
	}
</script>



<script>
	import { session } from '$app/stores';

	export let data;
	$: console.log('session:', $session, 'data from mock endpoint:', data);


  const authHandler = async () => {
    const res = await fetch(
      '/dashboard/dashboard-auth', {
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

<pre>{JSON.stringify($session,0,2)}
</pre>
