<script context="module">
	// import { enhance } from '$lib/form';

	// // see https://kit.svelte.dev/docs#loading
	// export const load = async ({ fetch }) => {
	// 	const res = await fetch('/deta/api');

	// 	if (res.ok) {
	// 		const items = await res.json();

	// 		return {
	// 			props: { items }
	// 		};
	// 	}

	// 	const { message } = await res.json();

	// 	return {
	// 		error: new Error(message)
	// 	};
	// };

</script>




<div class="_content">
	<!-- <h1>Supabase Upload Example</h1>

	<form
		class="new"
		method="post"
    on:submit={async (e)=>{
      e.preventDefault()
      handleSubmit(e)
      }}
	>
    <h3>form</h3>
    <label class="_form-label" for="fname">File to add to Airtable:</label><br>
    <input class="form-control _form-file mb-2" type="file" name="file" bind:files>
    <input class="form-control _form-submit" type="submit" value="Submit">
	</form>
   -->


</div>


<script>

  // import { createClient } from '@supabase/supabase-js'

  // console.log('?!', import.meta.env.VITE_SUPABASE_URL)
  // export const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_PUBKEY)

  // let files

  // async function handleSubmit(e) {
  //   let file = files[0]
  //   console.log('---> file', file.name)
    
  //   const { data, error } = await supabase.storage
  //     .from('uploads')
  //     .upload(file.name, file)

  //   let url = encodeURI(`${import.meta.env.VITE_SUPABASE_URL}/storage/v1/object/public/uploads/${file.name}`)
  //   console.log(data,error,'file:', url)
  
  //   const res = await fetch(
  //     `/api/airupload`, 
  //     {
  //       headers: {'Content-Type': 'application/json',},
  //       method: 'POST',
  //       body: JSON.stringify({
  //         tableName: 'Test',
  //         fieldName: 'Attachments',
  //         url: url
  //       })
  //     })
  // }

</script>