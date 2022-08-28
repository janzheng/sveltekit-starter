

<div class="_page">

  
  <Login bind:user={user} bind:message={message} bind:error={error} handleSubmit={handleSubmit}>
    <h2 class="py-2">Log in</h2>
  </Login>
  
  <div>
    <button class="Btn-outline mt-8" on:click={()=>authHandler()}>Do something server-side (unauthorized)</button>
  </div>
</div>








<script>
  
  import Login from '$plasmid/modules/pocket/components/Login.svelte'
	import { browser } from '$app/environment';
  import { userLogin } from '$plasmid/modules/pocket/'
  import { session } from '$app/stores';

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
        $session['user'] = _user

        console.log('session: ', _user)
				window.location.replace('/account/handle-login');
			} 
      if(!res.ok) {
        let _error = await res.json()
        error = _error.message
        console.log('Login error: ', error)
      }
		} catch (error) {
			console.error(`Error in handleSubmit on / route: ${error}`);
		}
	}

  const authHandler = async () => {
    const res = await fetch(
      '/dashboard/dashboard-auth', {
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






