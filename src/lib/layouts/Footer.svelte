
<script>
	import { page } from '$app/stores';
	// import logo from './svelte-logo.svg';

  export const logo = '/icon.png'
</script>



<footer class="footer ">
  <div class="_content md:flex-row md:flex _items-center gap-8">

    <div class="footer-links 
      ---
      flex-1
      relative md:flex items-center flex-row gap-8  
    ">
      <section class="footer-links-section">
        <div class="footer-links-section-header ">Explore</div>
      </section>
      <section class="footer-links-section">
        <div class="footer-links-section-header ">Get involved</div>
      </section>
    </div>    


    <div class="footer-title">
      <div class="p-2 border-r border-r-white border-r-half | flex flex-row items-center gap-4">
        <span class="pr-2">© 2012 - { new Date().getFullYear() } Starter Kit</span>
        <a class="decoration-transparent hover:fill-_hover inline" href='/'>
          <img src={logo} width="40" alt="SvelteKit" />
        </a>
      </div>
    </div>

  </div>
</footer>

