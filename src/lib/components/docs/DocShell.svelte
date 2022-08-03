
<script>
	import { page } from '$app/stores';

  import SideNav from './SideNav.svelte'
  import DocBase from './DocBase.svelte'

  export let toc = [], doc = '', headings, useHeadings=true


  let filterHeadings = headings
  
  $: if(headings) filterHeadings = headings.filter(
    (item) =>
      item.id &&
      // (item.level === 2 || item.level === 3) &&
      (item.tag == 'h2' || item.tag == 'h3')
      // (item.tag == 'h1' || item.tag == 'h2' || item.tag == 'h3' || item.tag == 'h4')
  );

  $: console.log('filterHeadings:', headings, filterHeadings)

</script>


<div class="DocShell flex | py-8">
  <SideNav {toc} />
  <div class="DocShell-main flex flex-1 mb-16">
    <div>
      <DocBase {doc} bind:headings={headings} />
      <slot>
        <!-- This is a doc shell! -->
      </slot>
    </div>
    {#if useHeadings && filterHeadings}
      <nav class="toc">
        <ul class="flex flex-col">
          {#each filterHeadings as item}
            <li class="{window && window.location.hash == `#${item.id}` ? 'active' : ''} {item.tag == 'h3' ? 'pl-4' : ''}">
              <a href="{$page.url.pathname}#{item.id}">{item.title}</a>
            </li>
          {/each}
        </ul>
      </nav>
    {/if}
  </div>
</div>


<style lang="scss" global>

  .DocShell h1 {
    &:first-of-type {
      padding-top: 0;
    }
  }

  .DocShell {

    nav {
      /* https://stackoverflow.com/questions/66898327/how-to-keep-footer-from-pushing-up-sticky-sidebar */
      position: sticky;
      top: calc(2.5rem + var(--nav-height));
      max-height: calc(100vh - var(--nav-height) - var(--footer-height));
      flex: 0 0 240px;
      overflow-y: auto;
      
      align-self: flex-start;
      @apply px-4;
    }
    
    h3 {
      @apply text-lg font-bold mb-1 pt-0 pb-1;
    }
  
    a {
      @apply no-underline;
    }
    ul {
      @apply mb-2;
    }
  
    li {
      @apply list-none mx-1 text-base font-normal pb-2;
    }
    li a:hover, 
    li.active > a {
      @apply underline;
    }

  }

</style>