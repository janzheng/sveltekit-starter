

<script>
  import DocShell from '$lib/components/docs/DocShell.svelte'

  export let data
  export let {toc, doc} = data
</script>


<div class="_content">
  <DocShell {toc} {doc} />
</div>
