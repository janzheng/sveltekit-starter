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


<!-- https://drive.deta.sh/v1/b0mp9xi4/files/uploads/LAJU82VH7PDDnCH8EkrwThwklzj0XqpZl73bOvhavR1MqFbwA8ubNs2zGqoqZbpCmIES8RjrkcgPwAjt._gIcsvjtZOjSaRaIwXmJLtpqFozezPqgJpJr3LLbJrMxyCQ?name=jafral-producing-phages-then-and-now%20(1).jpg -->

<div class="_content">
	<h1>Deta Airtable Upload Example</h1>

	<form
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
	</form>
  
	<form
		class="new"
    on:submit|preventDefault={()=>chunky(files[0])}
	>
    <h3>chunked form</h3>
    <label class="_form-label" for="fname">File to add to Airtable:</label><br>
    <input 
      class="form-control _form-file mb-2" type="file" name="file"
      bind:files
    >
    <!-- <input 
      class="form-control _form-file mb-2" type="file" name="file"
      accept="image/png, image/jpeg"
      bind:files
    > -->
    <input class="form-control _form-submit" type="submit" value="Submit"
    >
    
	</form>
  

  {#if files}
    <h2>Selected files:</h2>
    {#each Array.from(files) as file}
      <p>{file.name} ({file.size} bytes) </p>
    {/each}
  {/if}

</div>


<script>

  import { browser } from '$app/env';
  import { Deta } from 'deta'
  import {Buffer} from 'buffer'

  let files
  
  // const upload = async () => {
    
  //   // add your Project Key
  //   const _deta = Deta('b0mp9xi4_dwrRQE6DHrWTE6x7UEzmgLHnUFxibmPa');
  //   const drive = _deta.Drive("files");
    
  //   console.log('file 0:', files[0], files[0].name, files[0].data)
  //   const buffer = Buffer.from(files[0].arrayBuffer);
    
  //   // const fileres = await drive.put(files[0].name, { data: buffer });
  //   // const fileres = await drive.put('hello.txt', {data: Buffer.from('Hello World'), contentType: 'text/plain'});
  //   const fileres = await drive.put(files[0].name, {data: Buffer.from(files[0].arrayBuffer), contentType: files[0].mimetype});
    
  //   console.log (fileres)
  // }
  
  
  
  
  // https://stackoverflow.com/questions/33537769/how-to-upload-a-file-with-ajax-in-small-chunks-and-check-for-fails-re-upload-th
  const chunky = async (file) => {
    console.log('initializing upload', file.name)
    // init chunked upload
    let initUploadJson 
    const projId = 'b0mp9xi4'
    const baseName = 'uploads'
    const apiKey = 'b0mp9xi4_dwrRQE6DHrWTE6x7UEzmgLHnUFxibmPa'
    const initUpload = await fetch(
      `https://drive.deta.sh/v1/${projId}/${baseName}/uploads?name=${file.name}`, {
        method: 'POST',
        headers: {
          'X-Api-Key': apiKey
        }
    })


    if(initUpload.ok) {
      initUploadJson = await initUpload.json()
      console.log(initUploadJson)
      // {
      //     "name": "file name",
      //     "upload_id": "a unique upload id"
      //     "project_id": "deta project id",
      //     "drive_name": "deta drive name"
      // }
      
      let loaded = 0;
      let step = 1024 * 1024 * 7 // size of one chunk
      let total = file.size;  // total size of file
      let start = 0;          // starting position
      let reader = new FileReader();
      let blob = file.slice(start,step); //a single chunk in starting of step size
      let part = 1
      reader.readAsBinaryString(blob);   // reading that chunk. when it read it, onload will be invoked

      reader.onload = async function(e){      
        
        let d = {file: reader.result}
  
        const upchunk = await fetch(
          `https://drive.deta.sh/v1/${projId}/${baseName}/uploads/${initUploadJson.upload_id}/parts?name=${file.name}&part=${part}`, {
          headers: {
            'X-Api-Key': apiKey
          },
          method: 'POST',
          body: blob
        })
        
        if(upchunk.ok) {
          let upchunkJson = await upchunk.json()
          console.log(' ---- chunk:', upchunkJson)
          // $('.record_reply_g').html(r);   //updating status in html view
    
          loaded += step;                 //increasing loaded which is being used as start position for next chunk
          part++
          console.log(' --------- upload progress: ', file.name, file.type, (loaded/total) * 100, 'step', step, 'loaded', loaded, 'total', total)
    
          if(loaded + step > total) {      // last chunk
            console.log(' closing :::: ')
            const closeRes = await fetch(
              `https://drive.deta.sh/v1/${projId}/${baseName}/uploads/${initUploadJson.upload_id}?name=${file.name}`, {
              headers: {
                'X-Api-Key': apiKey
              },
              method: 'PATCH',
              body: blob
            })
  
            if(closeRes.ok) {
              let closeResJson = await closeRes.json()
              console.log('uploaded & closed ::', closeResJson)
            }
          } else if(loaded <= total){            // if file is not completely uploaded
            blob = file.slice(loaded,loaded+step);  // getting next chunk
            reader.readAsBinaryString(blob);        //reading it through file reader which will call onload again. So it will happen recursively until file is completely uploaded.
          } else {                       // if file is uploaded completely
            loaded = total;            // just changed loaded which could be used to show status.
          }
        }
      }
    }

  }
  
</script>