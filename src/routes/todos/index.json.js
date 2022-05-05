import { api } from './_api';

// GET /todos.json
export const get = async ({locals}) => {
  const response = await api('get', `todos/${locals.userid}`);

	if (response.status === 404) {
		// user hasn't created a todo list.
		// start with an empty array
		// return { body: { todos: [] } };
		return { body: [] };
	}

  if (response.status === 200) {
    // return { body: { todos: await response.json } };
    return { body: await response.json() };
  }

	return { status: response.status };
};



// POST /todos.json
export const post = async ({ request, locals }) => {
  const form = await request.formData()

  console.log('posting::', form.get('text'))

  let res = await api('post', `todos/${locals.userid}`, {
    text: form.get('text')
  });

  return { body: await res.json() }
};




// If the user has JavaScript disabled, the URL will change to
// include the method override unless we redirect back to /todos
const redirect = {
  status: 303,
  headers: {
    location: '/todos'
  }
};



export const patch = async ({ request, locals }) => {
  const form = await request.formData()

  console.log('patching::', form.get('uid'), form.get('text'), form.get('done'))

  let res = await api('patch', `todos/${locals.userid}/${form.get('uid')}`, {
    text: form.has('text') ? form.get('text') : undefined,
    done: form.has('done') ? !!form.get('done') : undefined
  });


  return { body: await res.json() }
  // return redirect
};


export const del = async ({ request, locals }) => {
  const form = await request.formData()

  console.log('deleting::', form.get('uid'))

  await api('delete', `todos/${locals.userid}/${form.get('uid')}`);

  return redirect
};


