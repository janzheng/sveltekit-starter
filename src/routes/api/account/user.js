
/* 

gets pinged by login.svelte page route:

<script context="module">
	export async function load({ fetch, session }) {
		try {
			if (session.user) {
				return {
					redirect: '/dashboard',
					status: 302
				};
			}
			await fetch('/api/user', {
				method: 'GET',
				credentials: 'include'
			});
			return {
				redirect: '/dashboard',
				status: 302
			};
		} catch (error) {
			console.error(`Error in route login: ${error}`);
		}
	}
</script>


*/
export function GET() {
  return {
    status: 200
  };
}
