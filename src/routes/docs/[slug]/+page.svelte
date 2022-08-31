

<script>

  import DocShell from '$lib/components/docs/DocShell.svelte'

  export let data
  export let {toc, doc} = data
</script>



<div class="_content">
  {#if doc}
    <DocShell {toc} {doc} />
  {:else}
    <h2>No doc found</h2>
  {/if}
</div>