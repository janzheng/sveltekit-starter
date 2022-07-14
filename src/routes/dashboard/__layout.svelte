
<!-- this is specific to the dashboard folder -->
<script context="module">
	export function load({ session }) {
		if (!session.user) {
      console.error('__layout-dashboard: Not logged in')
			return {
				redirect: '/',
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




(dashboard layout)
<button type="button" on:click={handleLogout}>Logout {user}</button>

<main class="container">
  <slot />
</main>

<style>
</style>
