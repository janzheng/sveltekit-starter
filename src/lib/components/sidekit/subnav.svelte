
<script>
  import { prefetch, prefetchRoutes } from '$app/navigation'
	import { page } from '$app/stores';

	import Dropdown from '$lib/components/sidekit/dropdown.svelte';
  
  export let show = true
</script>

<!-- desktop -->
<div class="
  subnav desktop | 
  ---
  py-1 hidden
  content-center items-center leading-6
  {show ? ' sm:block sm:visible sm:relative sm:flex' : ' '}
  ">

  <nav class="subnav-items 
    ---
    relative flex-1 justify-center content-center items-center flex-wrap 
    sm:flex sm:gap-2 
    justify-between w-full px-8 sm:pl-0
    ">
    <slot name="leftnav">
      <ul class="subnav-items-left
        ---
        sm:space-x-2 sm:flex flex-row place-content-end list-none
        ">
        <li class:active={$page.url.pathname === '/sidekit'}><a sveltekit:prefetch href="/sidekit">Sidekit</a></li>
        <li class:active={$page.url.pathname === '/playground'}><a sveltekit:prefetch href="/playground">Playground</a></li>
        <li class:active={$page.url.pathname === '/playground'}>
        <Dropdown></Dropdown></li>
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
        <a class="btn inline-block" href="https://github.com/janzheng">
          <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path></svg> Github
        </a>
      </ul>
    </slot>
  </div>
</div>

<!-- for mobile, use the vertical nav -->

<style lang="postcss">
  :root {
    --subnav-logo-height: 2rem;
    --subnav-active-color: 2rem;
  }

  .subnav li {
    @apply 
      py-2 px-2 border-b-2 
      border-solid border-transparent
      whitespace-nowrap
      hover:bg-gray-100
    ;
    /* @apply rounded-md; // screws up active state border */


    a {
      @apply text-gray-900 no-underline;
    }

    &:last-child {
      @apply pr-0;
    }
  }

  li.active {
    border-bottom-color: var(--color-blue-600);
  }

  a.btn {
    @apply text-gray-900 no-underline;
  }
</style>