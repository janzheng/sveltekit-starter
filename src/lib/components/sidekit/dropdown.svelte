
<script>
	import { onMount } from "svelte";
	import { browser } from '$app/environment';

  export let showArrow = true, isBtn = false
  
	onMount(async () => {
		if (browser) {
			await import("tw-elements");
		}
	})	

</script>

<span class="dropdown relative">
  <button
    class="
      py-2 px-2 text-gray-900 no-underline
      border-solid border-transparent rounded-md 
      hover:bg-gray-100
    "
    class:btn={isBtn}
    type="button"
    id="dropdownMenuButton1"
    data-bs-toggle="dropdown"
    aria-expanded="false"
  >
    <slot name="title">
      Dropdown button
    </slot>
    {#if showArrow}
      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-down" class="w-2 ml-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 590"
      >
        <path
          fill="currentColor"
          d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
        ></path>
      </svg>
    {/if}
  </button>


  <!-- options -->
  <div class="
    dropdown-menu
    ---
    absolute hidden bg-clip-padding
    bg-white text-base border border-gray-100 rounded-lg shadow-lg
    min-w-max py-2 mt-1 m-0 z-50
    float-left text-left list-none
  " aria-labelledby="dropdownMenuButton1">
    <slot>
      <div class="grid grid-cols-2 gap-2 px-2">
        <ul class="">
          <li>
            <a class="dropdown-button" href={'#'}>Action 1 Action 1</a>
          </li>
          <li>
            <a class="dropdown-button" href={'#'}>Action 1 Action 1</a>
          </li>
          <li>
            <a class="dropdown-button" href={'#'}>Action 1 Action 1</a>
          </li>
        </ul>
        <ul class="">
          <li>
            <a class="dropdown-button" href={'#'}>Action 2 Action 2</a>
          </li>
          <li>
            <a class="dropdown-button" href={'#'}>Action 2 Action 2</a>
          </li>
          <li>
            <a class="dropdown-button" href={'#'}>Action 2 Action 2</a>
          </li>
        </ul>
      </div>
    </slot>
  </div>
</span>


<style lang="postcss" global>
  :root {
  }

  /* .dropdown-menu {
    @apply
      absolute hidden bg-clip-padding
      bg-white text-base border border-gray-100 rounded-lg shadow-lg
      min-w-max py-2 mt-1 m-0 z-50
      float-left text-left list-none
      ;
  } */

  .dropdown-button {
    @apply 
      dropdown-item
      block w-full py-2 px-2
      font-normal text-gray-700 hover:bg-gray-100 whitespace-nowrap
      no-underline hover:no-underline hover:text-inherit
      rounded-xs bg-transparent
      ;
  }
</style>



