

<div class="max-w-xl md:max-w-4xl mx-auto py-12 ">
	<div class="Card " > 
    <Formlet
      formStore={SimpleForm} 
      formData={formData} 
      bind:formState={formState} 
      bind:resetForm={resetForm}
      on:update={(evt => {console.log('[testSimple] formlet updated', evt.detail)})}
      on:submit={(evt => {console.log('[testSimple] formlet submitted')})}
      on:clear={(() => {console.log('[testSimple] formlet cleared')})}
    />
  </div>
  <!-- <button on:click={resetForm()}>Reset form</button> -->
</div>


<script>

  import { writable } from "svelte-local-storage-store";
  export const SimpleForm = writable("FormdataSimple", {
    // form: {}
  });

  import { formData } from "../formEvg.js";
  import Formlet from '$lib/components/formlet/Formlet.svelte'
  // import Formlet from '$lib/components/formlet/FormletPaged.svelte'

  export let formState, resetForm
  
  // $: console.log('Data:', formData, formState)

</script>


<style lang="postcss">
</style>



