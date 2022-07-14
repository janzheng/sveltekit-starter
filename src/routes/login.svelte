<script>
	import { browser } from '$app/env';

	$: isSubmitting = false;
	let email = 'my@email.com';
	let password = 'password';
	let errors = { password: null, email: null };

	async function handleSubmit() {
		try {
			await fetch('/api/account/login', {
				method: 'POST',
				credentials: 'same-origin',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ email, password })
			});
      // logged in; redirect to dashboard
			if (browser) {
				window.location.replace('/account/handle-login');
			}
		} catch (error) {
			console.error(`Error in handleSubmit on / route: ${error}`);
		}
	}
</script>

<svelte:head>
	<title>SvelteKit Session Cookies</title>
	<html lang="en-GB" />
	<meta name="description" content="Register for narcissus dashboard to get going." />
</svelte:head>



<div class="_page">
	<form on:submit|preventDefault={handleSubmit}>
    <button class="Btn-solid" type="submit" disabled={isSubmitting}>Login</button>
  </form>
</div>