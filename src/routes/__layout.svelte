<script context="module">
  export const load = ({ url }) => {
    const currentRoute = url.pathname

    return {
      props: {
        currentRoute
      }
    }
  }
</script>


<script>
  import { fade } from 'svelte/transition'
  import Head from '$lib/components/shared/Head.svelte'
	import Header from '$lib/layouts/Header.svelte'
	import Footer from '$lib/layouts/Footer.svelte'
	import '../app.scss'

  export let currentRoute
</script>

<Head />

<!-- <main>
	<slot />
</main> -->

{#key currentRoute}
  {#if !currentRoute.includes('sidekit')}
    <Header />
    <main in:fade={{ duration: 150, delay: 150 }} out:fade={{ duration: 150 }}>
      <slot />
    </main>
    <Footer />
  {:else}
    <slot></slot>
  {/if}
{/key}


