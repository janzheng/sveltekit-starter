<script>
  export let editor;
	export let key;
</script>

{#if editor}
  <!-- <button class:active={editor.isActive(key)} on:click|preventDefault|stopPropagation|self> -->
  <button type="button" class:active={editor.isActive(key)} on:click|preventDefault>
    <slot>{key}</slot>
  </button>
{/if}

<style lang="postcss">
	button {
    margin: 0;
    background: #eee !important;
    color: black !important;
    padding: 0.5rem;

    &.active {
      border-color: rgb(7, 75, 121);
    }
	}
	
</style>