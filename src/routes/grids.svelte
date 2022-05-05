<script>
  import Grid from "gridjs-svelte"

  const data = [
    { name: "John", email: "john@example.com" },
    { name: "Mark", email: "mark@gmail.com" },
  ]

  const columns = ['Name', 'Email', 'Phone Number']

</script>

<div class="_content">
  <Grid {data} {columns} sort={true} />
</div>


<link
  href="https://unpkg.com/gridjs/dist/theme/mermaid.min.css"
  rel="stylesheet"
/>
<style>
  /* @import "https://cdn.jsdelivr.net/npm/gridjs/dist/theme/mermaid.min.css"; */
</style>