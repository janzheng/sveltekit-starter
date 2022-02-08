<script context="module">
	import { enhance } from '$lib/form';

	// see https://kit.svelte.dev/docs#loading
	export const load = async ({ fetch }) => {
		const res = await fetch('/deta/api');

		if (res.ok) {
			const items = await res.json();

			return {
				props: { items }
			};
		}

		const { message } = await res.json();

		return {
			error: new Error(message)
		};
	};

</script>




<div class="_content">
	<h1>Deta Airtable Upload Example</h1>

  <!-- action="/deta/airtable" -->
  <!-- https://pqn512.deta.dev/ -->
	<form
		class="new"
		action="http://localhost:3001/"
		method="post"
    enctype="multipart/form-data"
		use:enhance={{
			result: async (res, form) => {
        console.log('result :::: ', res)

				console.log('response:',await res.json())

			}
		}}
	>
    <h3>form</h3>
    <label class="_form-label" for="fname">File to add to Airtable:</label><br>
    <input class="form-control _form-file mb-2" type="file" name="file">
    <input class="form-control _form-submit" type="submit" value="Submit">
	</form>
  


</div>


<script>

  import { browser } from '$app/env';

  // if(browser)
  //   load()

</script>