
<script>
	import { page } from '$app/stores';
	import logo from './svelte-logo.svg';
</script>



<footer class="footer ">
  <div class="_content md:flex-row md:flex items-center gap-8">

    <div class="footer-title py-8 grow">
      <div class="p-8 pr-8 md:mr-8 border-r border-r-white border-r-half">
      <a class="decoration-transparent hover:fill-_hover" href='/'>
        <img src={logo} alt="SvelteKit" />
      </a>
      </div>
    </div>

    <!-- <div class="footer-subcribe-container py-8 md:hidden ">
      <Signup />
    </div> -->

    <div class="footer-links relative md:flex items-start flex-wrap gap-16 w-full ">
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

