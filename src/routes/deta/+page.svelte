
<div class="_content">
	<h1>Deta Example</h1>

  <ul>
    {#each items as item}
    <li class="mb-8">
      <!-- deta/uploads/cnt-purple.png -->
      {#if item.filename}
        <img class="block" width="100" src={`/deta/uploads/${item.filename}`} alt="yes" />
      {/if}
      Name: {item.name}
    </li>
    {/each}
  </ul>

	<form
		class="new"
		action="/deta/example-api"
		method="post"
    enctype="multipart/form-data"
		use:enhance={{
			result: async ({form, data, response}) => {
        const json = await response.json();
        console.log('result ... err', json, response)
				// todos = [...todos, created];

				// form.reset();
			}
		}}
	>
  <!-- enctype="multipart/form-data" -->

  <h3>form</h3>
  <label for="fname">First name:</label><br>
  <input type="text" id="fname" name="fname" value="John">
  <input type="file" name="file">
  <input type="submit" value="Submit">
	</form>
  
</div>


<script>
  import { enhance } from '$lib/form';

  export let data
	export let {items} = data;

  console.log('items ::', items)

  // export const load = async () => {
  //   // const res = await fetch('/deta/api')
  //   try {
  //     const res = await fetch(`/deta/example-api`, {
  //       // method: 'POST',
  //       method: 'POST',
  //       headers: {
  //         'content-type': 'application/json'
  //       },
  //       body: JSON.stringify({
  //         text: "hello!"
  //       })
  //     });

  //     // if (res.ok) {
  //     //   const result = await res.json();
  //     //   console.log('result?!?!?!:', result)
  //     // }
  //     // console.log('res:', res)

  //   } catch (e) {
  //     console.log('error:', e)
  //   }

  // };

  // if(browser)
  //   load()

</script>