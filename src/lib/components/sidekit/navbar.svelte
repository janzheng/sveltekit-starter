
<!-- borrowed from tabler.io -->


<!-- desktop nav -->
<script>
  import { prefetch, prefetchRoutes } from '$app/navigation'
	import { page } from '$app/stores';

  export let logo = '/icon.png'
  export let isMobileNavOpen = false
  export let useMobileMenu = true
  export let showLogo = true

	import { session } from '$app/stores';
  import { getAvatar } from '$plasmid/modules/pocket/'
  let user = $session.user

</script>
 
<!-- desktop -->
<div class="navbar desktop | sm:block sm:visible sm:relative sm:flex content-center items-center leading-6 | {useMobileMenu ? ' hidden sm:block ' : ' block '}" >
  {#if showLogo}
    <div class="navbar-logo px-2 sm:mr-2 border-r border-r-white border-r-half">
      <slot name="logo">
        <a sveltekit:prefetch class="decoration-transparent hover:fill-_hover" href='/'>
          <img class="logo" src={logo} alt="" height="2" />
        </a>
      </slot>
    </div>
  {/if}

  <nav class="navbar-items relative sm:flex flex-1 justify-center content-center items-center flex-wrap sm:gap-2 justify-between w-full px-8 sm:pl-0">
    <slot name="leftnav">
      <ul class="navbar-items-left | sm:space-x-2 sm:flex flex-row place-content-end list-none">
        <li class:active={$page.url.pathname === '/'}><a sveltekit:prefetch href="/dashboard">Dashboard</a></li>
        <li class:active={$page.url.pathname === '/blog'}><a sveltekit:prefetch href="/blog">Blogs!</a></li>
        <li class:active={$page.url.pathname === '/deta/upload'}><a sveltekit:prefetch href="/deta/upload">Uploader</a></li>
        <li class:active={$page.url.pathname === '/r2/upload'}><a sveltekit:prefetch href="/r2/upload">R2 Upload</a></li>
        <li class:active={$page.url.pathname === '/todos'}><a sveltekit:prefetch href="/todos">Todos</a></li>
        <li class:active={$page.url.pathname === '/calendar'}><a sveltekit:prefetch href="/calendar">Event Cal</a></li>
        <li class:active={$page.url.pathname === '/content'}><a sveltekit:prefetch href="/content">Content</a></li>
        <li class:active={$page.url.pathname === '/notion'}><a sveltekit:prefetch href="/notion">Notion</a></li>
      </ul>
    </slot>
  </nav>

  <div class="navbar-items-right">
    <slot name="rightnav">
      <ul class="navbar-items-right | sm:space-x-4 sm:flex flex-row items-baseline list-none">
        <li class:active={$page.url.pathname === '/'}>
          <a class="btn font-small text-sm py-1 mr-2 inline-block" href="https://github.com/janzheng/sveltekit-starter">
          <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path></svg> Github
        </a></li>
        {#if user}
          <li>
            <a sveltekit:prefetch href="/pocket/profile">
              <div><img class="Avatar inline-block" src={getAvatar(user?.profile)} alt="user profile"/></div>
            </a>
          </li>
        {:else}
          <div>
            <a sveltekit:prefetch href="/login">Log in</a>
          </div>
        {/if}
      </ul>
    </slot>
  </div>
</div>



<!-- mobile -->
{#if useMobileMenu}
  <div class="navbar mobile | _content p-0 | block sm:hidden relative flex content-center items-center leading-6">
    <div class="24 pr-2 border-r border-r-white border-r-half">
      <button on:click={()=>{isMobileNavOpen=!isMobileNavOpen}} class="navbar-toggler collapsed | border-gray-100 border-2" type="button" 
        data-bs-toggle="collapse" 
        data-bs-target="#navbar-menu" 
        aria-expanded={isMobileNavOpen}>
        <span class="navbar-toggler-icon"></span>
      </button>
    </div>

    <div class="p-2 pr-2 border-r border-r-white border-r-half flex-1 text-center">
      <a sveltekit:prefetch class="decoration-transparent hover:fill-_hover" href='/'>
        <img class="logo block text-center mx-auto" src={logo} alt="" height="2" />
      </a>
    </div>

    <div class="navbar-items-right">
      <slot name="rightnav-mobile">
        <ul class="| flex flex-row items-baseline list-none">
          <li class:active={$page.url.pathname === '/'}>
            <a class="btn font-small mr-2 inline-block" sveltekit:prefetch href="https://github.com/janzheng/sveltekit-starter">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path></svg>Github
          </a></li>
           {#if user}
            <li>
              <a sveltekit:prefetch href="/pocket/profile">
                <div><img class="Avatar inline-block" src={getAvatar(user?.profile)} alt="user profile"/></div>
              </a>
            </li>
          {:else}
            <div>
              <a sveltekit:prefetch href="/login">Log in</a>
            </div>
          {/if}
        </ul>
      </slot>
    </div>
  </div>
{/if}


<!-- from tabler.io -->
<style lang="postcss">
  :root {
    --avatarSize: 2.5rem !important;

    --navbar-logo-height: 2rem;
    
    --tblr-navbar-padding-x: 0;
    --tblr-navbar-padding-y: 0.25rem;
    --tblr-navbar-color: #1e293b;
    --tblr-navbar-hover-color: rgba(0, 0, 0, 0.7);
    --tblr-navbar-disabled-color: rgba(30, 41, 59, 0.3);
    --tblr-navbar-active-color: #1e293b;
    --tblr-navbar-brand-padding-y: 0.5rem;
    --tblr-navbar-brand-margin-end: 1rem;
    --tblr-navbar-brand-font-size: 1rem;
    --tblr-navbar-brand-color: #1e293b;
    --tblr-navbar-brand-hover-color: #1e293b;
    --tblr-navbar-nav-link-padding-x: 0.75rem;
    --tblr-navbar-toggler-padding-y: 0;
    --tblr-navbar-toggler-padding-x: 0;
    --tblr-navbar-toggler-font-size: 1rem;
    --tblr-navbar-toggler-icon-bg: url(data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='%231e293b' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e);
    --tblr-navbar-toggler-border-color: rgba(0, 0, 0, 0.1);
    --tblr-navbar-toggler-border-radius: 4px;
    --tblr-navbar-toggler-focus-width: 0;
    --tblr-navbar-toggler-transition: box-shadow 0.15s ease-in-out;
  }
  

  .logo {
    height: var(--navbar-logo-height)
  }



  a {
    @apply 
      text-gray-900 no-underline
      hover:text-blue-700;
  }

  a.btn {
    @apply text-gray-900 no-underline;
  }

  li.active a:not(.btn) {
    @apply text-blue-600 font-bold;
  }

  /* mobile menu shenanigans */
  .navbar-toggler-icon:before {
    top: -0.45em;
  }

  .navbar-toggler {
    color: #1e293b;
    border-color: transparent;
    
    border: 0;
    width: 2rem;
    height: 2rem;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    padding: var(--tblr-navbar-toggler-padding-y) var(--tblr-navbar-toggler-padding-x);
    font-size: var(--tblr-navbar-toggler-font-size);
    line-height: 1;
    color: var(--tblr-navbar-color);
    background-color: transparent;
    border: var(--tblr-border-width) solid var(--tblr-navbar-toggler-border-color);
    border-radius: var(--tblr-navbar-toggler-border-radius);
    transition: var(--tblr-navbar-toggler-transition);
  }
    
  .navbar-toggler-icon {
    /* display: inline-block;
    width: 1.5em;
    height: 1.5em;
    vertical-align: middle;
    background-image: var(--tblr-navbar-toggler-icon-bg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100%; */

    height: 2px;
    width: 1.25em;
    background: currentColor;
    border-radius: 10px;
    transition: top .2s .2s,bottom .2s .2s,transform .2s,opacity 0s .2s;
    position: relative;
  }

  .navbar-toggler-icon:after, .navbar-toggler-icon:before {
    content: " ";
    display: block;
    height: inherit;
    width: inherit;
    border-radius: inherit;
    background: inherit;
    position: absolute;
    left: 0;
    transition: inherit;
  }
  .navbar-toggler[aria-expanded=true] .navbar-toggler-icon {
    transform: rotate(45deg);
    transition: top .3s,bottom .3s,transform .3s .3s,opacity 0s .3s;
  }
  .navbar-toggler[aria-expanded=true] .navbar-toggler-icon:before {
    top: 0;
    transform: rotate(-90deg);
  }
  .navbar-toggler[aria-expanded=true] .navbar-toggler-icon:after {
    bottom: 0;
    opacity: 0;
  }
  .navbar-toggler-icon:after {
    bottom: -0.45em;
  }
</style>






