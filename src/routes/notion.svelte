<script context="module">
	// export const prerender = true;
  
	// see https://kit.svelte.dev/docs#loading
	export const load = async ({ fetch }) => {
    let blocks, res
    
		res = await fetch('/api/endpoints/grabby?id=approach');
		if (res.ok) {
			let json = await res.json();
      return {
        props: { 
          blocks: json
        }
      };
		}
	};
</script>

<script>
  import Notion from '@yawnxyz/sveltekit-notion'
	import { browser } from '$app/env';

  export let blocks
  
</script>


<div class="_content --page">

  {#if browser && blocks}
    <div class="Narrative | _section-page mx-auto">
      <Notion loadingMsg='' classes={''} blocks={blocks[0]} />
    </div>
  {/if}

</div>
