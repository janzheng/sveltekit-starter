// import { error } from '@sveltejs/kit';
// import { enhance } from '$lib/form';

// // see https://kit.svelte.dev/docs#loading
// export const load = async ({ fetch }) => {
//   console.log('todos page.js')
//   let todos = []
// 	const res = await fetch('/api/todos.json');

// 	if (res.ok) {
// 		const todos = await res.json();

//     console.log('todos/index loaded todos:', todos)
// 		return {todos};
// 	}

// 	const { message } = await res.json();
// 	throw error(500, message);
// };



import { error } from '@sveltejs/kit';
import { api } from './api';
// import type { PageServerLoad, Action } from './$types';

// type Todo = {
//   uid: string;
//   created_at: Date;
//   text: string;
//   done: boolean;
//   pending_delete: boolean;
// };

/**
 * @typedef {{
 *   uid: string;
 *   created_at: Date;
 *   text: string;
 *   done: boolean;
 *   pending_delete: boolean;
 * }} Todo
 */

/** @type {import('../../../.svelte-kit/types/src/routes/todos/$types').PageServerLoad} */
export const load = async ({ locals }) => {
  // locals.userid comes from src/hooks.js
  const response = await api('GET', `todos/${locals.userid}`);
  // console.log('---todos/index loaded todos:', locals, response)

  if (response.status === 404) {
    // user hasn't created a todo list.
    // start with an empty array
    return {
      /** @type {Todo[]} */
      todos: []
    };
  }

  if (response.status === 200) {
    return {
      /** @type {Todo[]} */
      todos: (await response.json())
    };
  }

  throw error(response.status);
};





/** @type {import('../../../.svelte-kit/types/src/routes/todos/$types').Action} */
export const POST = async ({ request, locals }) => {
  const form = await request.formData();

  await api('POST', `todos/${locals.userid}`, {
    text: form.get('text')
  });
};

/** @type {import('../../../.svelte-kit/types/src/routes/todos/$types').Action} */
export const PATCH = async ({ request, locals }) => {
  const form = await request.formData();

  await api('PATCH', `todos/${locals.userid}/${form.get('uid')}`, {
    text: form.has('text') ? form.get('text') : undefined,
    done: form.has('done') ? !!form.get('done') : undefined
  });
};

/** @type {import('../../../.svelte-kit/types/src/routes/todos/$types').Action} */
export const DELETE = async ({ request, locals }) => {
  const form = await request.formData();

  await api('DELETE', `todos/${locals.userid}/${form.get('uid')}`);
};