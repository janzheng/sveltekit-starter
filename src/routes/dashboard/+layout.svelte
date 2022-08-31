
<!-- this is specific to the dashboard folder -->
<script>
	import { goto, prefetch } from '$app/navigation';
	import { user } from '$lib/store'
	import { page } from '$app/stores';

	async function handleLogout() {
    $user = null
		// await prefetch('/api/account/logout');
		await goto('/api/account/logout');
		// await prefetch('/account/handle-logout');
		// await goto('/account/handle-logout');
	}
</script>




<div class="_page">

  {#if $user}
  <div class="my-4 Card-flat">
      (Dashboard +layout.svelte)
      <div class="mt-4">
        <button class="btn-solid " type="button" on:click={handleLogout}>Logout {$user?.email}</button>
      </div>
    </div>

    <main class="container Card-light">
      <slot />
    </main>
  {/if}

  <!-- not logged in; will redirect; this prevents "null state" page -->
</div>


<style>
</style>
