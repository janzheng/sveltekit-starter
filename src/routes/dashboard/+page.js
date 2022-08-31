export async function load({ fetch }) {
	try {
		const response = await fetch('/api/account/data.json', {
			method: 'GET',
			credentials: 'same-origin'
		});
		return { datum: { ...(await response.json()) } };
	} catch (error) {
		console.error(`Error in route /dashboard: ${error}`);
	}
}
