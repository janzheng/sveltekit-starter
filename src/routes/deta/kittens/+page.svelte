

<script>
  export let data
  export let {kittens} = data

</script>

<div class="_content">
  DB Kittens: 
  <pre>
    {JSON.stringify(kittens,null,2)}
  </pre>
</div>