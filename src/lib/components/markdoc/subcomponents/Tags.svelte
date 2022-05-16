<!-- adapted from https://github.com/movingbrands/svelte-portable-text -->
<script>
  export let children = [];
  export let components = new Map;
</script>
<!-- everything on one line to prevent weird spacing -->
{#each children as child}
  <!-- ---{JSON.stringify(child)}--- -->
  {#if typeof child === "string"}{child}{/if}
  {#if child && child.children}
  {#if components.has(child.name)}<svelte:component this={components.get(child.name)} {...child.attributes}><svelte:self children={child.children} /></svelte:component>{:else}<svelte:element this={child.name} {...child.attributes}><svelte:self children={child.children} /></svelte:element>{/if}{/if}{/each}