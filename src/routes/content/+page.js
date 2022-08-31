export const prerender = true;

// see https://kit.svelte.dev/docs#loading
export const load = async ({ fetch }) => {
	let res = await fetch('/api/endpoints/content');
	if (res.ok) {
    return { 
      content: await res.json()
    }
	}
};
