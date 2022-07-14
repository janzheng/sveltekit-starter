<script>
  import { form, field } from 'svelte-forms';
  import { required } from 'svelte-forms/validators';

  const name = field('name', '', [required()])
  const myForm = form(name);

  $: {
    console.log('myForm:', myForm.summary(), $myForm.dirty, $myForm.valid, $myForm.errors, $myForm.hasError(), $name)
  }
</script>






<section class="form-solid | max-w-xl mx-auto py-12 md:max-w-4xl form-solid">
  <label class="block">
    Name
    <input class="form-input mt-1 block" type="text" bind:value={$name.value}>
  </label>
  {#if $myForm.hasError('name.required')}
    <div>Name is required</div>
  {/if}

  {#if !$myForm.valid}
    <div>Errors exist in the form</div>
  {/if}

  {#if !$myForm.dirty}
    <div>Please enter something in the form</div>
  {/if}

  {#if $myForm.dirty && $myForm.valid}
    <div>Form is ready to submit!</div>
  {/if}

  <div>
    <pre class="p-4 mt-2 rounded-md bg-gray-100">{JSON.stringify($name,null,2)}
    </pre>
  </div>
</section>

<style lang="scss" global>

</style>