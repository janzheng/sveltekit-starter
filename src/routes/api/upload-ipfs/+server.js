

import { json, error } from '@sveltejs/kit'
import { uploadFileToIpfs } from '$plasmid/utils/uploads/uploadIpfs'

// uploading files from form actions will change soon — add as TODO 
/** @type {import('../../../.svelte-kit/types/src/routes/todos/$types').Action} */
export const POST = async ({ request }) => {
  try {
    const form = await request.formData();
    const file = form.get('file')
    const fname = form.get('fname')
    let res
  
    let fileref
    if (file) {
      res = await uploadFileToIpfs(form)
      // const buffer = await file.arrayBuffer();
      // const uintarr = new Uint8Array(buffer)
      // console.log('buff:', uintarr)
      // fileref = await getDrive().put(file.name, {
      //   data: uintarr,
      // })
    }
  
    // console.log('file ref?', file.name, fileref, res)
    
  
    console.log('uploadIPFS:', fname, file,  ' --> ', typeof(form.get('file')))
    // await api('POST', `todos/${locals.userid}`, {
    //   text: form.get('text')
    // });
  
    return json('banana!')
  } catch (e) {
    console.error('upload-ipfs error:', e)
  }
};
