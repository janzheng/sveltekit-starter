


<div class="_content">
	<h1>Deta Airtable Upload Example</h1>

  <!-- this doesn't work well with lambas/micros/workers b/c file limit -->
	<!-- <form
		class="new"
		action="/deta/airtable"
		method="post"
    enctype="multipart/form-data"
		use:enhance={{
			result: async (res, form) => {
        console.log('result ... ')
			}
		}}
	>
    <h3>form</h3>
    <label class="_form-label" for="fname">File to add to Airtable:</label><br>
    <input class="form-control _form-file mb-2" type="file" name="file">
    <input class="form-control _form-submit" type="submit" value="Submit">
	</form> -->
  
  <!-- this exposes keys, but allows for large uploads -->
	<form
		class="new"
		action="/api/upload-ipfs"
		method="post"
    enctype="multipart/form-data"
		use:enhance={{
			result: async ({ form }) => {
				// form.reset();
      // let file = await uploadFileToIpfs(files[0])
      console.log('IPFS Estuary server-side upload TODO')
			}
		}}
	>
    <!-- <input type="text" id="fname" name="fname" value="John"> -->
    <h3>Chunked upload</h3>
    <label class="_form-label" for="file">File to upload:</label><br>
    <input class="form-control _form-file mb-2" id="file" type="file" name="file" bind:files>
    <!-- <input 
      class="form-control _form-file mb-2" type="file" name="file"
      accept="image/png, image/jpeg"
      bind:files
    > -->
    <button type="button" class="btn-solid --short form-control _form-submit" on:click|preventDefault={()=>uploadFileAirtable()} >Deta/Airtable Upload</button>  
    <button class="btn-solid --short form-control _form-submit" type="submit" >IPFS Upload </button>
    (Sep 1 2022: Estuary doesn't seem to be working)
    
	</form>

  <div class="mt-4">
    <pre>{JSON.stringify($progress, null, 2)}</pre>
  </div>
  
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
  
	import { enhance } from '$lib/form';
  import { env } from '$env/dynamic/public';
  
  import { getFileImagePreview } from '$plasmid/utils/uploads/fileImagePreview' 
  import { getFileHash } from '$plasmid/utils/uploads/fileHash' 
  // import { uploadFileToIpfs } from '$plasmid/utils/uploads/uploadIpfs' 
  import { uploadFileToDeta } from '$plasmid/utils/uploads/uploadDeta' 

  import * as store from 'svelte/store'


  export const progress = store.writable({
    loaded: 0,
    percent: 0,
    status: 'Not started'
  })

  export let files, uploadComplete
  const PUBLIC_DETA_KEY = env['PUBLIC_DETA_KEY']
  
  

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



  $: console.log('Upload progress:', $progress)
  async function uploadFileAirtable() {
    uploadComplete = await uploadFileToDeta(files[0], 'b0mp9xi4', 'uploads', PUBLIC_DETA_KEY, progress, fetch)
    console.log('Upload complete!!', uploadComplete)

    // move file to Airtable using /deta/airtable endpoint
    const res = await fetch(
      '/deta/airtable', {
      method: 'POST',
      body: JSON.stringify({
        filename: uploadComplete.name,
        path: '/deta/uploads/',
        tableName: 'StarterKit',
        fieldName: 'Attachments'
      })
    })

    if(res.ok) {
      const resJson = await res.json()
      console.log('Uploaded to Airtable:', resJson)
    } 
  }


</script>