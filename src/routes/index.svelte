<script context="module">
	export const prerender = true;
</script>

<script>
	import Counter from '$lib/Counter.svelte'
  import Hooray from '$plasmid/components/Hooray.svelte'
  
	import { onMount } from "svelte";
	import { browser } from '$app/environment';

	onMount(async () => {
		if (browser) {
			await import("tw-elements");
		}
	})	
</script>

<!-- <svelte:head>
	<title>Home</title>
</svelte:head> -->

<section class="_content theme-plasmid mx-auto">

  <div class="text-center mx-auto max-w-full">
    <Hooray />
  </div>
  
  <div class="welcome ">
    <picture>
      <source srcset="/svelte-welcome.webp" type="image/webp" />
      <img src="/svelte-welcome.png" alt="Welcome" />
    </picture>
  </div>

  <div class="w-1/3 mx-auto">
    <Counter />
  </div>

</section>
