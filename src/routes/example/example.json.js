// endpoints: https://kit.svelte.dev/docs#routing-endpoints

// notes:
// always returns json
// used as a simple helper to return data
// no acces to req/res

// Use this Example to create new endpoints!
// Keep endpoints small
// Order of Preference: PD API; /project/something getter; getter implemented here

import { api } from  '$lib/project/example/example'

// export async function get({ params }) {
//   // the `slug` parameter is available because this file
//   // is called [slug].json.js
//   const { slug } = params;

//   // const article = await db.get(slug);

//   // if (article) {
//     return {
//       body: {
//         hello: "world"
//       }
//     };
//   // }
// }


// GET /todos.json
export const get = async (request) => {
  // request.locals.userid comes from src/hooks.js
  const response = await api(request, `todos/${request.locals.userid}`);

  if (response.status === 404) {
    // user hasn't created a todo list.
    // start with an empty array
    return { body: [] };
  }

  return response;
};

// POST /todos.json
export const post = async (request) => {
  const response = await api(request, `todos/${request.locals.userid}`, {
    // because index.svelte posts a FormData object,
    // request.body is _also_ a (readonly) FormData
    // object, which allows us to get form data
    // with the `body.get(key)` method
    text: request.body.get('text')
  });

  return response;
};
