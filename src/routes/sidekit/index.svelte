
<script>
  import { prefetch, prefetchRoutes } from '$app/navigation'
	import { page } from '$app/stores';
	import { onMount } from "svelte";
	import { browser } from '$app/env';

	import Navbar from '$lib/components/sidekit/navbar.svelte';
	import Subnav from '$lib/components/sidekit/subnav.svelte';
	import SubnavMobile from '$lib/components/sidekit/sidenav.svelte';
  
	onMount(async () => {
		if (browser) {
			await import("tw-elements");
		}
	})	

  export let isMobileNavOpen = false
</script>

<header id="navbar" class="_content-wide">
  <Navbar bind:isMobileNavOpen={isMobileNavOpen}>
  <!-- <span slot="leftnav">
    </span> -->

    <!-- <span slot="rightnav">
      <ul class="navbar-items-right | md:space-x-4 md:flex flex-row place-content-end pr-8 list-none">
        <li class:active={$page.url.pathname === '/'}><a sveltekit:prefetch href="/">Home</a></li>
        <li class:active={$page.url.pathname === '/playground'}><a sveltekit:prefetch href="/playground">Playground</a></li>
        <li class:active={$page.url.pathname === '/deta/upload'}><a sveltekit:prefetch href="/deta/upload">Upload example</a></li>
        <li class:active={$page.url.pathname === '/todos'}><a sveltekit:prefetch href="/todos">Todos</a></li>
      </ul>
    </span> -->
  </Navbar>
</header>

<div class="_content-wide py-0">
  <Subnav ></Subnav>
</div>

<!-- collapsible mobile nav — kept separate from subnav for optionality -->
<div
  id="navbar-menu"
  class="accordion-collapse collapse px-2 | sm:hidden"
  class:show={isMobileNavOpen}
  data-bs-parent="#navbar"
>
  <SubnavMobile show={isMobileNavOpen}></SubnavMobile>
</div>



<style lang="postcss">
  :root {
    font-size: 0.875rem; // 14 px for components
  }
</style>


