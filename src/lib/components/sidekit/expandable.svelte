
<!-- also used as mobile nav, when expanded -->
<script>
	import { page } from '$app/stores';
  
  export let show=false
</script>

<!-- can be used for mobile too, if hooked to show mobile and accordion -->
 
<div class="expandable" id="expandable">
  <div class="accordion-item">
    <div class="accordion-header mb-0" id="expandableHeading">
      <button class="accordion-button
          relative flex items-center
          py-2 px-2 w-full
          text-base text-gray-800 text-left 
        " 
        type="button" 
        class:collapsed={!show}
        data-bs-toggle="collapse" 
        data-bs-target="#expandableContent" 
        aria-expanded="false"
        aria-controls="expandableContent"
      >
        <slot name="title">
          <div class="flex-1">Expandable nav item</div>
        </slot>
      </button>
    </div>
    <div id="expandableContent" 
      class="accordion-collapse collapse" 
      class:show={show} 
      aria-labelledby="expandableHeading"
      >
      <slot>
        <div class="pl-3">
          <li><a class="block rounded p-2" class:active={$page.url.pathname === '/sidekit'} sveltekit:prefetch href="/sidekit">😸 Sidekit</a></li>
          <li><a class="block rounded p-2" class:active={$page.url.pathname === '/playground'} sveltekit:prefetch href="/playground">🎈 Playground</a></li>
        </div>
      </slot>
    </div>
  </div>
</div>






<style lang="postcss">

  .sublink {
    @apply pl-2;
    border-left-color: var(--color-gray-200);
    &.active {
      border-left-color: var(--color-blue-300);
    }
  }
  
  .accordion-button {
    box-shadow: inherit !important;
    color: inherit;
    @apply rounded-md;
    @apply
      border-b-2 border-solid border-transparent
      w-full py-2 px-2
      text-gray-900 hover:bg-gray-100
      font-normal whitespace-nowrap no-underline hover:no-underline hover:text-inherit
      bg-transparent
      ;

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