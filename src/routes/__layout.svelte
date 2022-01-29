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

<Header />

<!-- <main>
	<slot />
</main> -->


{#key currentRoute}
  <main in:fade={{ duration: 150, delay: 150 }} out:fade={{ duration: 150 }}>
    <slot />
  </main>
{/key}


<Footer />



<style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 1024px;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>
