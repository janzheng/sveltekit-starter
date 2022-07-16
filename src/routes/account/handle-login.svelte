
<!-- goto this route to trigger log in -->
<script context="module">
  import { server } from '$app/env';

  export async function load({ fetch, session }) {
		try {
      if(server) {
        if (session.user) {
          console.info('Already logged in:', session.user, process.env['ACCOUNT_ROUTE'])
          return {
            redirect: process.env['ACCOUNT_ROUTE'] || '/',
            status: 302
          };
        }
        await fetch('/api/account/user', {
          method: 'GET',
          credentials: 'include'
        });
        console.info('Logged in:', session.user)
        return {
          redirect: process.env['ACCOUNT_ROUTE'] || '/',
          status: 302
        };
      }
		} catch (error) {
			console.error(`Error in route login: ${error}`);
		}
	}
</script>
