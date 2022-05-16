
<script>

	import { page } from '$app/stores';

  // console.log('page:', $page, $page.url.pathname)
  let active = true


  // inspired by markdoc docs
  export let toc = []

</script>

<nav class="Docs-SideNav xs:hidden sm:block">
  {#each toc as item}
    <div>
      <h3>{item.title}</h3>
      <ul class="flex flex-col">
        {#each item.links as link}
          <li class="{$page.url.pathname == link.href ? 'active' : ''}">
            <a sveltekit:prefetch href="{link.href}">{link.title}</a>
          </li>
        {/each}
      </ul>
    </div>
  {/each}
</nav>

<style lang="scss">
  :root {
    --nav-height: 0vh;
  }

  nav {
    /* https://stackoverflow.com/questions/66898327/how-to-keep-footer-from-pushing-up-sticky-sidebar */
    position: sticky;
    top: var(--nav-height);
    height: calc(100vh - var(--nav-height) - var(--footer-height));
    flex: 0 0 240px;
    overflow-y: auto;
    
    @apply px-4;
  }
  
  h3 {
    @apply text-lg font-bold mb-1 pt-0 pb-1;
  }

  a {
    @apply no-underline;
  }
  ul {
    @apply mb-8;
  }

  li {
    @apply list-none mx-1 text-base font-normal;
  }
  li a:hover, 
  li.active > a {
    @apply underline;
  }

</style>


