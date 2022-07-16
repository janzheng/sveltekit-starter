
<!-- this is specific to the dashboard folder -->
<script context="module">
  import { server } from '$app/env';
  
	export function load({ session }) {
		if (!session.user && server) {
      console.info('User logged out')
			return {
				redirect: process.env['ACCOUNT_LOGIN_ROUTE'] || '/',
				status: 302
			};
		}
		return {};
	}
</script>

<script>
	import { goto, prefetch } from '$app/navigation';
	import { session } from '$app/stores';

	$: user = $session.user;

	async function handleLogout() {
		session.set({ user: null });
		await prefetch('/account/handle-logout');
		await goto('/account/handle-logout');
	}
</script>




<div class="_page">
  
  (dashboard layout)
  <button type="button" on:click={handleLogout}>Logout {user}</button>

  <main class="container">
    <slot />
  </main>
</div>


<style>
</style>
