
<script>
	// import { writable } from 'svelte/store';
	import { page } from '$app/stores';
	// import { onMount } from "svelte";
	// import { browser } from '$app/environment';

	import Panel from '$lib/components/instill/panels/HnPanel.svelte';
	import Subnav from '$lib/components/sidekit/subnav.svelte';
	// import SubnavMobile from '$lib/components/sidekit/sidenav.svelte';
  
  export let project
  export let group = {
    name: "playground-example-1",
  }

</script>



<div class="Instill-Pages">

  <div id="subnav" class="Instill-tabs mt-2">
    <Subnav classes={"border-b border-gray-100 border-solid"}>
      <ul class="subnav-items-left
        ---
        sm:space-x-2 sm:flex flex-row place-content-end list-none
        ">
        <li class:active={$page.url.pathname === '/instill'}><a sveltekit:prefetch href="/instill"><span class="text-2xl">👉</span> Start Here</a></li>
        <li class:active={$page.url.pathname === '/instill/sidekit'}><a sveltekit:prefetch href="/sidekit"><span class="text-2xl"> </span> Sidekit</a></li>
      </ul>
    </Subnav>
  </div>

  <Panel {project} {group} />

</div>