

<div class="_page">

  <Signup bind:user={user} bind:profile={profile} bind:message={message} handleSubmit={handleSubmit}>
    <h2 class="py-2">Sign up</h2>
  </Signup>
  
</div>








<script>
	import { browser } from '$app/environment';
  import { env } from '$env/dynamic/public';  
  import { userLogin } from '$plasmid/modules/pocket/'

  import Signup from '$plasmid/modules/pocket/components/Signup.svelte'
  // import { session } from '$app/stores';

  let user = {}, profile = {}, error, message

  const handleSubmit = async () => {
		try {

      message = 'Creating account ...'
			let res = await fetch('/api/account/signup', {
				method: 'POST',
				credentials: 'same-origin',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
          email: user.email,
          password: user.password,
          profile
        })
			});
      // logged in; redirect to dashboard
			if (res.ok && browser) {
        // log-in as the newly created account
        let _user = await userLogin(user.email, user.password)
        // $session['user'] = _user
        console.log('new account:', _user)
				window.location.replace(env['PUBLIC_ROUTE_LOGGEDIN']);
			} 
      if(!res.ok) {
        error = await res.json()
        console.log('error!!', error)
      }
		} catch (error) {
			console.error(`Error in handleSubmit on / route: ${error}`);
		}
	}
  
</script>






