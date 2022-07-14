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
</script>



this is the dashboard!

<pre>
  {JSON.stringify(session,0,2)}
</pre>