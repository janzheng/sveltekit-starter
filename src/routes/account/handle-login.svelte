
<!-- goto this route to trigger log in -->
<script context="module">
	export async function load({ fetch, session }) {
		try {
			if (session.user) {
        console.info('Already logged in:', session.user)
				return {
					redirect: '/dashboard',
					status: 302
				};
			}
			await fetch('/api/account/user', {
				method: 'GET',
				credentials: 'include'
			});
      console.info('Logged in:', session.user)
			return {
				redirect: '/dashboard',
				status: 302
			};
		} catch (error) {
			console.error(`Error in route login: ${error}`);
		}
	}
</script>
