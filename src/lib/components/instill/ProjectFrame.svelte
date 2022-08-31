
<script>
	// import { writable } from 'svelte/store';
	// import { page } from '$app/stores';
	import { onMount } from "svelte";
	import { browser } from '$app/environment';

	import Navbar from '$lib/components/sidekit/navbar.svelte';
	import Pages from '$lib/components/instill/GroupFrame.svelte';

	onMount(async () => {
		if (browser) {
			await import("tw-elements");
		}
	})	

  export let project = {
    name: 'Phage Biobank Working Group',
    slug: 'phage-biobank-working-group',
  }

</script>



<div class="Instill-Project my-12 _content">
  <header id="navbar" class="Instill-nav">
    <Navbar useMobileMenu={false} showLogo={false}>
      <span slot="logo"></span>
      <span slot="leftnav">
        <div class="text-2xl">{project.name}</div>
      </span>
      
      <span slot="rightnav">
        (look @ gh or ph for ideas: sponsor, watch, fork, star, etc.)
      </span>
    </Navbar>
  </header>

  <Pages {project} />

</div>

