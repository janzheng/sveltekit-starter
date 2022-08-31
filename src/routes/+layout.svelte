

<script>
  import { fade } from 'svelte/transition'
	import { prefetch } from '$app/navigation'
	import { onMount } from 'svelte'
	import { currentPage, isMenuOpen, user } from '$lib/store'
	import { navItems } from '$lib/config'
  import { page } from '$app/stores'

  import Head from '$lib/components/shared/Head.svelte'
	import Header from '$lib/layouts/Header.svelte'
	import Footer from '$lib/layouts/Footer.svelte'
	import '../app.scss'

  export let data

	const transitionIn = { delay: 150, duration: 150 }
	const transitionOut = { duration: 100 }

	
	$: currentPage.set(data.path)
	onMount(() => {
    navItems?.forEach(item => prefetch(item.route))
	})
  
  $user = $page.data?.user || null
  $: console.log('[+layout.svelte] $page.data:', $page.data, $user)
</script>

<Head />


<div class="layout" class:open={$isMenuOpen}>

  {#if !data.path.includes('sidekit')}
    <Header />
    {#key data.path}
      <main
        id="main"
        tabindex="-1"
        in:fade={transitionIn}
        out:fade={transitionOut}
      >
        <slot />
      </main>
    {/key}
    <Footer />
  {:else}
    <slot></slot>
  {/if}
</div>