<script>
	import { Store as Content } from "$plasmid/modules/content/store"

  export let data
  export let {content} = data

  $: $Content = content
  $: console.log('Content Store:', $Content)

</script>


<div class="Home _content ">

  <h1>Check the logs for how the content store works</h1>
  Oh and make sure you're using the right base, e.g. the Phage Australia base for testing (anything with a Content table, since that's what we're pulling)

</div>
