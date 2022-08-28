

<!-- 
  
  This is an example of Pocket's login; for full implementation of SvelteKit
  w/ routing, locals.user, coookies and session, refer to  routes/login 

-->

<div class="_page">
  <h2>Sign in</h2>
  <Login>
    <h4>Login experience</h4>
    Log in here! or Sign in. Either way.
  </Login>
</div>

<script>

  import Login from '$plasmid/modules/pocket/components/Login.svelte'

</script>