
<script>
  import { prefetch, prefetchRoutes } from '$app/navigation'
	import { page } from '$app/stores';

	import Dropdown from '$lib/components/sidekit/dropdown.svelte';
  
  export let show = true
  export let classes
</script>

<!-- desktop -->
<div class="
  subnav desktop | 
  ---
  hidden
  content-center items-center leading-6
  {classes}
  {show ? ' sm:block sm:visible sm:relative sm:flex' : ' '}
  ">

  <nav class="subnav-items 
    ---
    relative flex-1 justify-center content-center items-center flex-wrap 
    sm:flex sm:gap-2 
    justify-between w-full px-8 sm:pl-0
    ">
    <slot>
      <ul class="subnav-items-left
        ---
        sm:space-x-2 sm:flex flex-row place-content-end list-none
        ">
        <li class:active={$page.url.pathname === '/instill'}><a sveltekit:prefetch href="/instill">Instill</a></li>
        <li class:active={$page.url.pathname === '/svex'}><a sveltekit:prefetch href="/svex">Svex</a></li>
        <li class:active={$page.url.pathname === '/playground'}><a sveltekit:prefetch href="/playground">Playground</a></li>
        
        <!-- markdoc docs examples -->
        <li>
          <Dropdown>
            <span slot="title">Markdoc</span>

            <div class="grid grid-cols-2 gap-2 px-2">
              <a class="dropdown-button" href={'/docs'}>Markdoc</a>
              <a class="dropdown-button" href={'/docs/getting-started'}>Getting Started</a>
              <a class="dropdown-button" href={'/docs/overview'}>Overview</a>
            </div>
          </Dropdown>
        </li>
        

        <!-- sidekit links -->
        <li>
          <Dropdown>
            <span slot="title">Sidekit</span>

            <div class="grid grid-cols-2 gap-2 px-2">
              <a class="dropdown-button" href={'/sidekit'}>Sidekit</a>
              <a class="dropdown-button" href={'/sidekit/vertical'}>Vertical Dash</a>
              <a class="dropdown-button" href={'/sidekit/forms'}>Form Elements</a>
            </div>
          </Dropdown>
        </li>
        
        <!-- pocket links -->
        <li>
          <Dropdown>
            <span slot="title">Pocket</span>

            <div class="grid grid-cols-2 gap-2 px-2">
              <div>
                <a class="dropdown-button" href={'/pocket/dashboard'}>Dashboard</a>
                <a class="dropdown-button" href={'/pocket/profile'}>Profile</a>
                <a class="dropdown-button" href={'/pocket/votes'}>Votes</a>
              </div>
              <div>
                <a class="dropdown-button" href={'/login'}>Login</a>
                <a class="dropdown-button" href={'/signup'}>Signup</a>
                <a class="dropdown-button" href={'/pocket/forgot'}>Forgot</a>
              </div>
            </div>
          </Dropdown>
        </li>

        <!-- form experiments -->
        <li>
          <Dropdown>
            <span slot="title">Form Experiments</span>

            <div class="grid grid-cols-2 gap-2 px-2">
              <div>
                <a class="dropdown-button" href={'/forms/simple'}>Simple</a>
                <a class="dropdown-button" href={'/forms/svelte-forms'}>Svelte Forms</a>
                <a class="dropdown-button" href={'/forms/simple-todo'}>Simple Todo</a>
                <a class="dropdown-button" href={'/forms/select'}>Select</a>
              </div>
              <div>
                <a class="dropdown-button" href={'/forms/formlet-evg'}>Formlet Evergreen</a>
                <a class="dropdown-button" href={'/forms/formlet-simple'}>Formlet Simple</a>
                <a class="dropdown-button" href={'/forms/formlet-sop'}>Formlet SoP</a>
                <a class="dropdown-button" href={'/forms/formlet-vom'}>Formlet VoM</a>
              </div>
            </div>
          </Dropdown>
        </li>
      </ul>
    </slot>
  </nav>

  <div class="subnav-items-right">
    <slot name="rightnav">
      <ul class="subnav-items-right
        ---
        sm:space-x-4 sm:flex 
        flex-row place-content-end list-none
        ">
        <!-- <a class="btn inline-block" href="https://github.com/janzheng">
          <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path></svg> Github
        </a> -->
      </ul>
    </slot>
  </div>
</div>

<!-- for mobile, use the vertical nav -->

<style lang="postcss" global>
  :root {
    --subnav-logo-height: 2rem;
    --subnav-active-color: 2rem;
  }

  .subnav li {
    @apply 
      border-b-2 
      border-solid border-transparent
      whitespace-nowrap
    ;
    /* @apply rounded-md; // screws up active state border */


    & > a {
      @apply 
        inline-block
        py-2 px-2 text-gray-900 no-underline
        border-solid border-transparent rounded-md 
        hover:bg-gray-100
      ;
    }

    &:last-child {
      /* using this looks weird on links-only subnavs */
      /* @apply pr-0; */
    }

    &.active {
      border-bottom-color: var(--color-blue-600);
    }
  
    a.btn {
      @apply text-gray-900 no-underline;
    }
  }

</style>