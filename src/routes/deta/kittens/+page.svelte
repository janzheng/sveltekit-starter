<script context="module">
	import { enhance } from '$lib/form';

	export const load = async ({ fetch }) => {
    let dbKittens, detaKey
		let res = await fetch('/deta/get-kittens');
		if (res.ok) {
			const { kittens } = await res.json();
      dbKittens = kittens
		}
    return {
      props: { dbKittens }
    };
    
	}

</script>




<script>

  export let dbKittens

</script>

<div>
  DB Kittens: 
  <pre>
    {JSON.stringify(dbKittens,null,2)}
  </pre>
</div>