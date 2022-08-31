<script>
  import Notion from '@yawnxyz/sveltekit-notion'
	import { browser } from '$app/environment';

  export let data
  export let {blocks} = data
  
  // $: console.log('blocks:', blocks)
</script>


<div class="_content --page">

  {#if browser && blocks}
    <div class="_section-page _margin-center">
      <Notion loadingMsg='' api='https://notion-cloudflare-worker.yawnxyz.workers.dev' classes={''} blocks={blocks[0]} />
    </div>
  {/if}

</div>
