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
	import { Store as Content } from "./api/endpoints/content/store.js"

  export let content

  $: $Content = content
  $: console.log('Content Store:', $Content)

</script>


<div class="Home _content ">

  <h1>oop</h1>

</div>
