import { enhance } from '$lib/form';

export const load = async ({ fetch }) => {
  let kittens
	let res = await fetch('/deta/get-kittens');
	if (res.ok) {
		kittens = await res.json();
	}
  return { kittens };
    
}

