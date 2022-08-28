<script context="module">
	export const prerender = true;

	// see https://kit.svelte.dev/docs#loading
	export const load = async ({ fetch }) => {
		let res = await fetch('/api/endpoints/content');
		if (res.ok) {
      return {props: { 
        content: await res.json()
      }}
		}
	};
</script>



<script>
	import { Store as Content } from "$plasmid/modules/content/store"

  export let content

  $: $Content = content
  $: console.log('Content Store:', $Content)

</script>


<div class="Home _content ">

  <h1>Check the logs for how the content store works</h1>
  Oh and make sure you're using the right base, e.g. the Phage Australia base for testing (anything with a Content table, since that's what we're pulling)

</div>
