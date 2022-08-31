

<div class="_page">

  
  <Login bind:user={user} bind:message={message} bind:error={error} handleSubmit={handleSubmit}>
    <h2 class="py-2">Log in</h2>
  </Login>
  
  <div>
    <button class="Btn-outline mt-8" on:click={()=>authHandler()}>Do something server-side (unauthorized)</button>
  </div>
</div>








<script>
  
	import { browser } from '$app/environment';
  import { env } from '$env/dynamic/public';
  
  import Login from '$plasmid/modules/pocket/components/Login.svelte'
  import { userLogin } from '$plasmid/modules/pocket/'
  // import { session } from '$app/stores';

  let user = {}, error, message

  const handleSubmit = async () => {
		try {

      message = 'Logging in ...'
			let res = await fetch('/api/account/login', {
				method: 'POST',
				credentials: 'same-origin',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(user)
			});
      // logged in; redirect to dashboard
			if (res.ok && browser) {
        // log-in as client as well, and set session
        let _user = await userLogin(user.email, user.password)
        // $session['user'] = _user

        console.log('[login/+page.svelte] session: ', _user)
				window.location.replace(env['PUBLIC_ROUTE_LOGGEDIN']);
			} 
      if(!res.ok) {
        let _error = await res.json()
        // error = _error.message
        console.log('[login/+page.svelte] Login error: ', res, _error)
        message = _error?.data?.message
      }
		} catch (error) {
			console.error(`[login/+page.svelte] Error in handleSubmit on / route: ${error}`);
		}
	}

  const authHandler = async () => {
    const res = await fetch(
      '/api/authorized', {
      method: 'POST',
      body: JSON.stringify({
        message: "secret message"
      })
    })
    if(res.ok) {
      let jsonRes = await res.json()
      console.log('ping:', jsonRes)
    }
  }
  
</script>






