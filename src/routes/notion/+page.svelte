<script context="module">
	// export const prerender = true;
  
	// see https://kit.svelte.dev/docs#loading
	export const load = async ({ fetch }) => {
    let blocks, res
    
		res = await fetch('/api/endpoints/grabby?id=approach');
		if (res.ok) {
			let json = await res.json();
      blocks = json
      return {
        props: { 
          blocks
        }
      };
		}
	};
</script>

<script>
  import Notion from '@yawnxyz/sveltekit-notion'
	import { browser } from '$app/environment';

  export let blocks
  
</script>


<div class="_content --page">

  {#if browser && blocks}
    <div class="_section-page _margin-center">
      <Notion loadingMsg='' api='https://notion-cloudflare-worker.yawnxyz.workers.dev' classes={''} blocks={blocks[0]} />
    </div>
  {/if}

</div>
