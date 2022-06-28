<main> 
  {#if browser}
    <Dashboard 
        uppy={uppy} 
        plugins={["DragDrop"]}
    />
  {/if}
</main>

<script>
	import { browser } from '$app/env';
  import { Dashboard } from '@uppy/svelte'

  import Uppy from '@uppy/core'
  
  import Tus from '@uppy/tus'
  import XHRUpload from '@uppy/xhr-upload'
  import AwsS3Multipart from '@uppy/aws-s3-multipart'

  import DragDrop from '@uppy/drag-drop'
  import FileInput from '@uppy/file-input'
  import DropTarget from '@uppy/drop-target'

  let uppy

  if(browser) {
    uppy = new Uppy().use(DragDrop);
    
    // uppy.use(Tus, {
    //   endpoint: 'https://drive.deta.sh/v1/tuiq7q/uploads/uploads/name=banana',
    //   headers: {
    //     'X-Api-Key': 'b0mp9xi4_dwrRQE6DHrWTE6x7UEzmgLHnUFxibmPa'
    //   }
    // })
    uppy.use(XHRUpload, {
      endpoint: 'https://drive.deta.sh/v1/tuiq7q/uploads/uploads/name=banana',
      headers: {
        'X-Api-Key': 'b0mp9xi4_dwrRQE6DHrWTE6x7UEzmgLHnUFxibmPa'
      }
    })
    // uppy.use(AwsS3Multipart, {
    //   limit: 4,
    //   companionUrl: 'https://drive.deta.sh/v1/tuiq7q/uploads',
    // })

  }

</script>

<style global>
@import '@uppy/core/dist/style.css';
@import '@uppy/dashboard/dist/style.css';
</style>