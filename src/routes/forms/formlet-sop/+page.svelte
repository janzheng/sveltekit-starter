
<script context="module">
  
  export const load = async ({ params, url }) => {
    let page = url.searchParams.get('page')

    if(!page || page < 1)
      page = 1
    page -= 1 // 1-indexed
    return { props: {page} }
  }
</script>



<div class="max-w-xl md:max-w-4xl mx-auto py-12 ">
	<div class="Card " > 
    <!-- <Formlet
      formStore={SimpleForm} 
      formData={formData} 
      bind:formState={formState} 
      bind:resetForm={resetForm}
      on:update={(evt => {console.log('[testSimple] formlet updated', evt.detail)})}
      on:submit={(evt => {console.log('[testSimple] formlet submitted')})}
      on:clear={(() => {console.log('[testSimple] formlet cleared')})}
    /> -->

    
    <FormletPaged 
      formStore={SimpleForm} 
      formData={formData}
      surveysCompleted={$Completed}
      bind:formState={formState} 
      bind:resetForm={resetForm}
      bind:submitted={formSubmitted}
      bind:submitting={formSubmitting}
      bind:curPageNumber={page}
      bind:furthestPageNumber={furthestPageNumber}
      on:nextPage={(evt => {
        //console.log('[stateOPhage] next page:', evt.detail); 
        // handleSave(evt.detail)
      })}
      on:prevPage={(evt => {
        //console.log('[stateOPhage] next page:', evt.detail); 
        // handleSave(evt.detail)
      })}
      on:update={(evt => {
        //console.log('[stateOPhage] formlet updated:', evt.detail); 
        // handleUpdate(evt.detail)
      })}
      on:submit={(evt => {
        //console.log('[stateOPhage] formlet submitted:', evt.detail); 
        // handleSubmit(evt.detail)
      })}
      on:reset={(evt => {
        //console.log('[stateOPhage] formlet reset', evt.detail); 
        // handleReset(evt.detail)
      })}
    />

  </div>
  <!-- <button on:click={resetForm()}>Reset form</button> -->
</div>


<script>
  import { getContext, onMount } from 'svelte';
  import { writable } from "svelte-local-storage-store";
  // import { writable } from "svelte/store";
  export let SimpleForm = writable("FormdataSOP", {});
  export let curPage = writable("curPage", {})

  import { formData } from "./formSop.js";
  // import Formlet from '$lib/components/formlet/Formlet.svelte'
  import FormletPaged from '$lib/components/formlet/FormletPaged.svelte'

  export let formState, resetForm
  export let page, formSubmitted, formSubmitting, furthestPageNumber

  $: {
    $curPage = page // update the store for nav and other things
  }
  let Completed = getContext('Completed')
  
  // $: console.log('SOP Data:', page, formState, formData)

</script>


<style lang="postcss">
</style>



