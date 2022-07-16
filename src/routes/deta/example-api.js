
import { getDrive, getBase } from '$plasmid/utils/deta/deta';


// 
// Server-side Examples
// 

// GET /deta
export const get = async () => {
  let res = await getBase().fetch();
  let allItems = res.items;

  // continue fetching until last is not seen
  while (res.last) {
    res = await getBase().fetch({}, { last: res.last });
    allItems = allItems.concat(res.items);
  }

  return {
    body: allItems,
  };
};


// POST /deta example
export const post = async ({request}) => {

  const form = await request.formData();
  const file = form.get('file')

  let fileref 
  if (file) {
    const buffer = await file.arrayBuffer();
    const uintarr = new Uint8Array(buffer)
    // console.log('buff:', uintarr)
    fileref = await getDrive().put(file.name, {
      data: uintarr,
    })
  }

  console.log('file ref?', fileref)
  await getBase().put({
    name: form.get('fname'),
    filename: fileref,
  })

  console.log('uploaded!!')
  return {
    body: {
      result: "ok!"
    },
  };
};






