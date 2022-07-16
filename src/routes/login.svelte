

<div class="_page">

  <!-- <form class="content" action="/api/form" method="post"> -->
  <form class="Card-light" on:submit|preventDefault={handleSubmit}>
    <slot></slot>
    <div class="my-4">
      <div class="grid grid-cols-1 gap-6">
        <label class="block">
          <span class="text-gray-700">Email address</span>
          <input bind:value={user.email} type="email" class="form-input mt-1 block w-full" placeholder="john@example.com" required>
        </label>
        <label class="block">
          <div class="flex">
            <span class="text-gray-700">Password</span>
            <span class="text-gray-700 align-end text-right flex-1"><a href={forgotLink}>Forgot?</a></span>
          </div>
          <input bind:value={user.password} type="password" class="form-input mt-1 block w-full" placeholder="••••" required>
        </label>
      </div>
      <input class="Btn-solid | text-center w-full mt-4 ease-in-out block" type="submit" value="Sign in">
      <input class="Btn-outline | text-center w-full mt-4 ease-in-out block" type="submit" value="Sign in with Google">
      <!-- <input class="Btn-outline | text-center w-full mt-4 ease-in-out block" type="submit" value="Sign in with Twitter"> -->
  
      {#if error}
        <div class="Card-error | mt-4 ">
          {error?.message}
        </div>
      {/if}
    </div>
  
  </form>
  <div class="text-small text-center mt-4">
    Don't have an account? <a href={signupLink}>Create an account</a>
  </div>
  

  <div>
    <button class="Btn-outline mt-8" on:click={()=>authHandler()}>Do something server-side (unauthorized)</button>
  </div>
</div>








<script>
	import { browser } from '$app/env';
  // import { goto } from '$app/navigation';
  // import { userLogin } from '$plasmid/modules/pocket/'

  let user = {}, User, error
  export let forgotLink = "/forgot-password"
  export let successLink = "/"
  export let signupLink = "/signup"

  // async function handleSubmit() {
  //   try {
  //     User = await userLogin(user.email, user.password)
  //   } catch (e) {
  //     error = e.response
  //   }

  //   if($User) {
  //     console.log('Logged in!', $User)
  //     goto(successLink)
  //   }
  // }

	async function handleSubmit() {
		try {
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
				window.location.replace('/account/handle-login');
			} 
      if(!res.ok) {
        error = await res.json()
        console.log('error!!', error)
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






