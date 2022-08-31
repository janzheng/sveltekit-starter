import { redirect } from '@sveltejs/kit';
  import { browser } from '$app/environment';
  
export async function load({ parent }) {
  let data = await parent()

  if (!data.user && !browser) {
		throw redirect(302, process.env['PUBLIC_ROUTE_LOGGEDOUT'] || '/');
	}
	return {};
}
