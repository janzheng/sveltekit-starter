

<!-- goto this route to trigger log out -->
<script context="module">
  import { browser } from '$app/env';
  
	export const load = async () => {
		try {
      await fetch('/api/account/logout', {
        method: 'GET',
        credentials: 'same-origin'
      });

      if(!browser) {
        return {
          status: 301,
          redirect: process.env['ACCOUNT_LOGOUT_ROUTE'] || '/',
        };
      }
		} catch (error) {
			console.error(`Error in route /logout: ${error}`);
		}

    return {
      status: 301,
      redirect: '/',
    };
	};
</script>
