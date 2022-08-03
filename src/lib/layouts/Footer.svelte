
<script>
	import { page } from '$app/stores';
	// import logo from './svelte-logo.svg';

  export const logo = '/icon.png'
</script>



<footer class="footer ">
  <div class="_content md:flex-row md:flex _items-center gap-8">

    <div class="footer-title grow">
      <div class="p-2 pr-4 border-r border-r-white border-r-half">
        <a class="decoration-transparent hover:fill-_hover" href='/'>
          <img src={logo} width="40" alt="SvelteKit" />
        </a>
        <div class="pt-2">© 2012 - { new Date().getFullYear() } Starter Kit</div>
      </div>
    </div>

    <!-- <div class="footer-subcribe-container py-8 md:hidden ">
      <Signup />
    </div> -->

    <div class="footer-links 
      ---
      relative md:flex items-start flex-wrap gap-8 w-full 
    ">
      <section class="footer-links-section grow">
        <div class="footer-links-section-header ">Explore</div>
      </section>
      <section class="footer-links-section grow">
        <div class="footer-links-section-header ">Get involved</div>
      </section>
    </div>    

    <!-- <div class="footer-subcribe-container py-8 md:hidden ">
      <Signup />
    </div> -->

  </div>
</footer>

