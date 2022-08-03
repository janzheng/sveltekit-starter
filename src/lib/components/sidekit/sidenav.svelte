
<!-- also used as mobile nav, when expanded -->
<script>
  import { prefetch, prefetchRoutes } from '$app/navigation'
	import { page } from '$app/stores';

	import Dropdown from '$lib/components/sidekit/dropdown.svelte';

  export let show=false
</script>

<!-- can be used for mobile too, if hooked to show mobile and accordion -->
 
<div class="
  sidenav desktop |
  ---
  py-0 leading-6
  flex flex-col relative
  "
  >

  <nav class="sidenav-items 
    ---
    relative flex-1 flex-wrap 
    sm:flex sm:gap-2 
    justify-between w-full
    ">
    <slot>
      <ul class="sidenav-items-left
        ---
        flex flex-col  list-none
        ">
        <li><a class="link" class:active={$page.url.pathname === '/sidekit'} sveltekit:prefetch href="/sidekit">😸 Sidekit</a></li>
        <li><a class="link" class:active={$page.url.pathname === '/playground'} sveltekit:prefetch href="/playground">🎈 Playground</a></li>

        <li>
          <div class="" id="sectionOne">
            <div class="accordion-item">
              <div class="accordion-header mb-0" id="sectionOneHeading">
                <button class="accordion-button
                    relative flex items-center
                    py-2 px-2 w-full
                    text-base text-gray-800 text-left 
                  " 
                  type="button" 
                  data-bs-toggle="collapse" 
                  data-bs-target="#sectionOneContent" 
                  aria-expanded="false"
                  aria-controls="sectionOneContent"
                >
                  <div class="flex-1">Expandable nav item</div>
                </button>
              </div>
              <div id="sectionOneContent" class="accordion-collapse collapse" class:show={show} aria-labelledby="sectionOneHeading">
                <div class="pl-3">
                  <li><a class="link sublink" class:active={$page.url.pathname === '/sidekit'} sveltekit:prefetch href="/sidekit">😸 Sidekit</a></li>
                  <li><a class="link sublink" class:active={$page.url.pathname === '/playground'} sveltekit:prefetch href="/playground">🎈 Playground</a></li>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li><a class:active={$page.url.pathname === '/'} class="btn inline-block" sveltekit:prefetch href="/">
          <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path></svg> Github
        </a></li>
      </ul>
    </slot>
  </nav>

</div>






<style lang="postcss">
  :root {
    --sidenav-logo-height: 2rem;
    --sidenav-active-color: 2rem;
  }

  .sidenav li {
    @apply mb-1;
    &:last-child {
      @apply pr-0;
    }
  }

  .sidenav {
    .link {
      @apply block rounded-md;
    }
    .link, .accordion-button {
      @apply
        border-b-2 border-solid border-transparent
        w-full py-2 px-2
        text-gray-900 hover:bg-gray-100
        font-normal whitespace-nowrap no-underline hover:no-underline hover:text-inherit
        bg-transparent
        ;
    }
    .link.active {
      /* border-bottom-color: var(--color-blue-600); */
      @apply text-blue-600;
    }


    .sublink {
      @apply pl-2;
      border-left-color: var(--color-gray-200);
      &.active {
        border-left-color: var(--color-blue-300);
      }
    }
  }

  a.btn {
    @apply text-gray-900 no-underline;
  }

  .accordion-button {
    box-shadow: inherit;
    color: inherit;
    @apply rounded-md;

    &:after {
      /* svg arrow */

      /* background-size: 1rem; */
      content: "";
      transition: none;
      display: inline-block;
      vertical-align: 0.306em;
      width: 0.5em;
      height: 0.5em;
      border-bottom: 1px solid;
      border-left: 1px solid;
      margin-right: 0.1em;
      margin-left: 0.4em;
      transform: rotate(-45deg);
      background-image: inherit;
      top: -1px;
      position: relative;
    }

    &:not(.collapsed):after {
      transform: rotate(135deg);
      top: 2px;
      position: relative;
    }
  }
  

</style>