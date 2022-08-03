
<script>
  import { prefetch, prefetchRoutes } from '$app/navigation'
	import { page } from '$app/stores';
	import { onMount } from "svelte";
	import { browser } from '$app/env';

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

<!-- 
<div class="">
  <Subnav></Subnav>
</div>
<div
  id="navbar-menu"
  class="accordion-collapse collapse | sm:hidden"
  class:show={isMobileNavOpen}
  data-bs-parent="#navbar"
>
  <Sidenav show={isMobileNavOpen}></Sidenav>
</div> -->


<div class="dashboard | flex h-screen |">
  <aside class="dashboard-sidebar | flex flex-col gap-4 min-w-fit">
    <Sidenav></Sidenav>
  </aside>
  <main class="dashboard-main | flex-1 flex p-2">
    whee
  </main>
</div>



<style lang="postcss">
  :root {
    font-size: 0.875rem; // 14 px for components

    // --sidebarWidth: 5rem;
    --sidebarWidth: 9rem;
    --dashSidebarWidth: 12rem;
    --sidebarBg: white;
    --sidebarBorder: #dee3e8;
  }

  .dashboard {
    @apply bg-slate-50;
  }

  .dashboard-sidebar {
    width: var(--sidebarWidth);
    border-right: var(--sidebarBorder) 1px solid;
    background-color: var(--sidebarBg);
    @apply py-2 px-2;

    .sidebar-icon {
      @apply rounded-md hover:bg-slate-100 ease-in-out px-1;
    }

    .--active {
      @apply rounded-md bg-slate-100;
      svg {
        stroke: rgb(59 130 246/var(--tw-bg-opacity)) !important;
      }
    }
  }

  .dashboard-main-sidebar {
    width: var(--dashSidebarWidth);
    border-right: var(--sidebarBorder) 1px solid;
    background-color: var(--sidebarBg);

    @apply p-4 h-full;

    .dashboard-main-sidebar-icon {
      @apply rounded-md hover:bg-slate-100 ease-in-out px-2;

    }
  }
</style>


