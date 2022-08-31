import { error } from '@sveltejs/kit';
import { enhance } from '$lib/form';

// see https://kit.svelte.dev/docs#loading
export const load = async ({ fetch }) => {
	const res = await fetch('/deta/example-api');

	if (res.ok) {
		const items = await res.json();

		return { items };
	}

	const { message } = await res.json();

	throw error(500, message);
};

