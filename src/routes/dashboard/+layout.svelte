
<!-- this is specific to the dashboard folder -->
<script context="module">
  
	export function load({ session }) {
		if (!session.user) {
      console.info('User logged out')
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

  let user
	$: user = $session.user;

	async function handleLogout() {
		session.set({ user: null });
		await prefetch('/account/handle-logout');
		await goto('/account/handle-logout');
	}
</script>




<div class="_page">

  {#if user}
    (dashboard layout)
    <button type="button" on:click={handleLogout}>Logout {user}</button>

    <main class="container">
      <slot />
    </main>
  {/if}

  <!-- not logged in; will redirect; this prevents "null state" page -->
</div>


<style>
</style>
