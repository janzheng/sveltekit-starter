<script>
  /** @type {"check"} */
	export let type;

  if (type != "check") console.warn("Callout.svelte only supports type: check");
</script>

<div class="callout {type}">
  <slot></slot>
</div>

<style lang="scss" global>
  .callout {
    display: inline-flex;
    line-height: 20px;
    padding: 12px 20px;
    border: 1px solid #dce6e9;
    border-radius: 4px;
  }

  .callout p {
    padding-bottom: 0;
  }

  .check {
    background-color: #f6f9fc;
  }
</style>