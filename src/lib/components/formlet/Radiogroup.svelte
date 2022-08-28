
<div id="formlet--{id}" class="Formlet Formlet-radiogroup _form-control {styles['formletClasses']} {$errors[id] && $errors[id].length>0 ? '_error' : ''}">
	<div class="">
		<div id={id} class="" >

			<slot name="label">
				<div class="{styles['labelContainer']||'paraWrap'}">
					{#if label}<label class={`Formlet-label ${styles['labelClasses']||''} ${$errors[id] && $errors[id].length>0 ? '_errortext' : ''}`} for={id}>{@html marked(label)}</label>{/if}
					{#if description}<label class={`Formlet-description ${styles['descriptionClasses']||''}`} for={id}>{@html marked(description)}</label>{/if}
				</div>
		  </slot>

			{#each options as item}
		  	<label class={`${styles['fieldLabelClasses'] || 'block w-full input-formlet-checkers-label'} | _form-radio-label __radiomark | mb-2`} for={item['id'] || item['value']}>

					<input type="radio" 
				    id={item['id'] || item['value']}
				    value={item['value']}
				    name={item['name'] || item['value']}
						bind:group={value}
				    on:change={e=>handleInput(e,item)}
            data-label={item['label']}
				    class={`inline-block align-middle | ${styles['fieldClasses']} ${$errors[id] && $errors[id].length>0 ? '_form-error' : ''}`}
					/>

	        <div class="inline-block align-middle | radiomark p-2" for={item['value']}>
	          <div class="radiomark-content">
							<slot name='itemlabel'>
								<div class="{styles['labelItemContainer']||'paraWrap'}">
						  		{@html marked(item['label'] || '')}
						  	</div>
							</slot>
	            <!-- <div v-if="option.name" class="_font-bold">name here</div> -->
	            <!-- <div v-if="option.description" class="" v-html="$md.strip($md.render(option.description || ''))" /> -->
	          </div>
	        </div>

		  	</label>
		  {/each}

		</div>

	  <!-- for things like "you must check this box" -->
	  {#if $errors[id] && $errors[id].length>0}
			<slot name="error">
	  		<div class="Card-error mt-2 _error">{$errors[id]}</div>
			</slot>
	  {/if}
	</div>
</div>


<script>
  import {marked} from 'marked';

	export let form, handleChange, errors
  export let field = {}, formState
  let value=''
  let {id, name, label, description, styles={}, type, options=[]} = field
  id = id || name // make sure id exists by id or name values

	$: if($form[id]) { // bind value
		// console.log('radiogroup new value??', id, $form[id], value)
    // value = $form[id] // for when only storing value
    value = $form[id]['value'] // for value + label
		formState = $form[id]
  }

  const handleInput = (e, item) => {
		// console.log('radiogroup new input:', e.target.value, item, $form[id])
    // $form[id] = e.target.value // this is more control than bind:value
    
    $form[id] = item // this is more control than bind:value
		// trick the form builder into accepting the new value
  	e = {target: {
  		name: id,
  		value: item, // item['value']
		}}

    // console.log('radio target:', item)
  	handleChange(e)



    // console.log('radio target:', e.target, e.target.data, e.target.getAttribute('data-label'))
	
    // send just the value
    // $form[id] = e.target.value // this is more control than bind:value

    // send value + label as an obj
    // let obj = {
    //   value: e.target.value, // this is more control than bind:value
    //   label: e.target.getAttribute('data-label')
    // }
    // $form[id] = obj

		// // trick the form builder into accepting the new value
		// let name = e.target.name 
		// // console.log('**** name::', name, id)
  	// e.target.name = id
  	// e.target.value = obj
		// handleChange(e)
		// e.target.name = name
  	// e.target.value = obj.value
  }
</script>





<style lang="postcss">


  // .__inline {
	// 	.__radiomark {
	// 		display: inline-block !important;
	// 		margin-right: 0.5rem;
	// 		&:last-child {
	// 			margin-right: 0
	// 		}

	// 		.radiomark {
	// 			padding: 0.2rem 0.5rem;
	// 			&:before {
	// 				left: 7px;
	// 			}
	// 			&:after {
	// 				left: 11px;
	// 			}
	// 		}
	// 	}
  // }
</style>

