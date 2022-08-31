import { json } from '@sveltejs/kit';


// https://dev.to/danawoodman/getting-form-body-data-in-your-sveltekit-endpoints-4a85`
function getFormBody(body) {
  return [...body.entries()].reduce((data, [k, v]) => {
    let value = v;
    if (value === 'true') value = true;
    if (value === 'false') value = false;
    if (k in data)
      data[k] = Array.isArray(data[k]) ? [...data[k], value] : [data[k], value];
    else data[k] = value;
    return data;
  }, {});
}

// handles action="/api/form"
// export const POST = async ({params, request}) => {
//   let formData = await request.formData()
//   let form = getFormBody(formData)

//   console.log('form:', form)
//   return {
//     body: form
//   }
// }


// handles JSON Post endpoints
export const POST = async ({ params, request }) => {
  let form = await request.json()
  console.log('form:', form)
  return json(form);
  // return {
  //   body: form
  // }
}