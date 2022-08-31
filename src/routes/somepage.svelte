

<div class="_content">
  <h2>This is some page</h2>

  <div on:click={()=>btn+=1}>{btn}</div>

  <div class="text-center mx-auto max-w-full">
    <Hooray />
  </div>

</div>


<script>
  import Hooray from '$plasmid/components/Hooray.svelte'

  console.log('hey ya!')

  let btn = 1

</script>