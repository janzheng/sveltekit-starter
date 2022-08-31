
<script>

  import { prefetch, prefetchRoutes } from '$app/navigation'
	import { page } from '$app/stores';
	import { onMount } from "svelte";
	import { browser } from '$app/environment';

	import Navbar from '$lib/components/sidekit/navbar.svelte';
	import Subnav from '$lib/components/sidekit/subnav.svelte';
	import Sidenav from '$lib/components/sidekit/sidenav.svelte';
  
	onMount(async () => {
		if (browser) {
			await import("tw-elements");
		}
	})	

  export let isMobileNavOpen = false
</script>

<header id="navbar" class="p-4">
  <Navbar bind:isMobileNavOpen={isMobileNavOpen}>
  </Navbar>
</header>

<div class="mobile sm:hidden">
  <div
      id="navbar-menu"
      class="accordion-collapse collapse px-2 block"
      class:show={isMobileNavOpen}
      data-bs-parent="#navbar"
  >
    <Sidenav></Sidenav>
  </div>
</div>

<article class="dashboard | flex h-screen |">
  <aside class="dashboard-sidebar | hidden sm:flex flex-col gap-4 min-w-fit min-w-[150px] ">
    <Sidenav></Sidenav>
  </aside>
  <main class="dashboard-main | flex-1 flex p-2">
    Content here
  </main>
</article>



<style lang="postcss">
  :root {
    font-size: 0.875rem; // 14 px for components

    // --sidebarWidth: 5rem;
    --sidebarWidth: 9rem;
    --dashSidebarWidth: 12rem;
    --sidebarBg: white;
    --sidebarBorderColor: #dee3e8;
    --sidebarBorderWidth: 0px;

    --mainBg: var(--color-slate-50);
  }

  aside {
    width: var(--sidebarWidth);
    border-right: var(--sidebarBorderColor) var(--sidebarBorderWidth) solid;
    background-color: var(--sidebarBg);
    @apply py-2 px-2;
  }

  main {
    @apply rounded-md border border-transparent;
    background-color: var(--mainBg);
  }

</style>


