
<script>
  export let data

  console.log(`[dynamic page router: "${data.slug}"]`)
</script>


<svelte:component this={data.content}/>