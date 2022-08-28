

<form class={`${formletClasses.container ? formletClasses.container : '_form-control'}`} on:submit={handleSubmit}>

  {#if form}
    {#each formFields as field (`${field.name}-${$touched[field.id] || $touched[field.name]}`)}
      <div class={`${formletClasses.formField ? formletClasses.formField : 'mb-4'}`}>
        <svelte:component this={fieldComponents[field.fieldType]} 
          field={field} {handleChange} {errors} {form} >
        </svelte:component>
      </div>
    {/each}

    {#if formData.settings && formData.settings.submitText}
      <div class="mt-4">
        <input type="submit" value={formData.settings && formData.settings.submitText} class="Btn-solid ease-in-out block {formStyles['submittingButtonClasses'] || ''} "> 
      </div>
    {/if}
  {/if}
</form>



<script>
import { tick } from "svelte";
import { createForm } from "svelte-forms-lib";
import * as yup from "yup";

import { get } from "svelte/store";

import Input from "$lib/components/formlet/Input.svelte";
import Textarea from "$lib/components/formlet/Textarea.svelte";
import Checkbox from "$lib/components/formlet/Checkbox.svelte";
import Radiogroup from "$lib/components/formlet/Radiogroup.svelte";
import Checkboxgroup from "$lib/components/formlet/Checkboxgroup.svelte";
import Select from "$lib/components/formlet/Select.svelte";
import SelectRadio from "$lib/components/formlet/SelectRadio.svelte";
import CheckInput from "$lib/components/formlet/CheckInput.svelte";

import { createEventDispatcher } from 'svelte';
const dispatch = createEventDispatcher();



const fieldComponents = {
  Input: Input,
  Textarea: Textarea,
  Checkbox: Checkbox,
  Radiogroup: Radiogroup,
  Checkboxgroup: Checkboxgroup,
  Select: Select,
  SelectRadio: SelectRadio,
  CheckInput: CheckInput,
};

// yup schema: https://www.npmjs.com/package/yup
export let formData, formStore=undefined, formletClasses={}
export let formFields = formData.fields
export let formStyles = formData['styles'] || {}

let success = false

export let form, errors, state, handleChange, handleSubmit, touched

$: if(formData) {
  // let newForm
  let newForm = createForm(
    {
      initialValues: formStore && get(formStore)["form"] ? get(formStore)["form"] : formData.yup.initialValues,
      validationSchema: yup.object().shape(formData.yup.validators),
      onSubmit: async data => {
        if(formData.submitHandler) {
          formData.submitHandler({state: get(form), data: formData})
        }
        dispatch('submit', {state: get(form), data: formData})
      }
    }
  )
  if(newForm) {
    form = newForm['form']
    errors = newForm['errors']
    state = newForm['state']
    handleChange = newForm['handleChange']
    handleSubmit = newForm['handleSubmit']
    touched = newForm['touched']
  }

}

$: if ($touched) {
  // console.log('[Formlet] update', $touched, $errors)
  success = false;

  if(formStore) {
    formStore.update(store => {
      store["form"] = get(form);
      return store;
    });
  }

  dispatchUpdate()
}

let dispatchUpdate = async () => {
  await tick()
  // console.log('[dispatch::update]',formData, get(form))
  dispatch('update', {state: get(form), data: formData})
}

// $: console.log('form:', $errors)
</script>


<style lang="postcss">
</style>



