

<script context="module">
  import { browser } from '$app/environment';
  
	export function load({ session }) {
		if (!session.user && !browser) {
			return {
				redirect: process.env['ACCOUNT_LOGIN_ROUTE'] || '/',
				status: 302
			};
		}
		return {};
	}
</script>




<div class="_page">
  <h2>Profile</h2>
  <Profile>
  </Profile>
</div>

<script>

  import Profile from '$plasmid/modules/pocket/components/Profile.svelte'

</script>