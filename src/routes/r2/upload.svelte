

<div class="_content">
	<h1>R2 Worker Upload Example</h1>

  
  <!-- this exposes keys, but allows for large uploads -->
	<form
		class="new"
    on:submit|preventDefault={async ()=>{
      let file = await uploadFileToR2(files[0])
    }}
	>
    <h3>R2 upload</h3>
    <label class="_form-label" for="fname">File upload</label><br>
    <input 
      class="form-control _form-file mb-2" type="file" name="file"
      bind:files
    >
    <input class="form-control _form-submit" type="submit" value="R2 Worker Upload">
    
	</form>

  {#if uploadComplete}
    <pre>{JSON.stringify(uploadComplete, null, 2)}
    </pre>
  {/if}
  

  {#if files}
    <h2>File:</h2>
    <!-- {#each Array.from(files) as file} -->
      <p>{files[0].name} ({files[0].size} bytes) || CID: {hash}</p>
    <!-- {/each} -->
  {/if}


  <div>
    {#if preview && files[0].type.includes('image')}
      <img src={preview} alt="Preview" />
    {/if}
  </div>

</div>








<script>
  import { session } from "$app/stores"; 

  import { getFileImagePreview } from '$plasmid/utils/uploads/fileImagePreview' 
  import { getFileHash } from '$plasmid/utils/uploads/fileHash' 

  export let files, uploadComplete
  const PDR2_AUTH = $session.env['PDR2_AUTH']
  const PDR2_ENDPOINT = $session.env['PDR2_ENDPOINT']


  // file preview & CID hash
  let preview, hash
  $:if(files && files[0]) {
    async function getPreview() {
      preview = await getFileImagePreview({file: files[0]})
    }
    getPreview()

    async function getHash() {
      hash = await getFileHash({file: files[0]})
    }
    getHash()
  }

  async function uploadFileToR2() {

    // move file to Airtable using /deta/airtable endpoint
    const res = await fetch(
      `${PDR2_ENDPOINT}/${files[0].name}`, {
      method: 'PUT',
      body: files[0],
      headers: {
        'X-Custom-Auth-Key': PDR2_AUTH
      },
    })

    if(res.ok) {
      const resText = await res.text()
      console.log('Uploaded!:', resText)
      // access file at 
    } 
  }



  // async function uploadFileAirtable() {
  //   uploadComplete = await uploadFileToDeta(files[0], 'b0mp9xi4', 'uploads', detaKey, progress, fetch)
  //   console.log('Upload complete!!', uploadComplete)

  //   // move file to Airtable using /deta/airtable endpoint
  //   const res = await fetch(
  //     '/deta/airtable', {
  //     method: 'POST',
  //     body: JSON.stringify({
  //       filename: uploadComplete.name,
  //       path: '/deta/uploads/',
  //       tableName: 'StarterKit',
  //       fieldName: 'Attachments'
  //     })
  //   })

  //   if(res.ok) {
  //     const resJson = await res.json()
  //     console.log('Uploaded to Airtable:', resJson)
  //   } 
  // }


</script>