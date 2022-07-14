




<div class="max-w-xl mx-auto py-12 md:max-w-4xl">
  <h1>Simple form inputs</h1>
  <p>Basic tailwinds-based inputs with SvelteKit bindings. Examples of POST or formdata submission.
  </p>
  <!-- <form class="content" action="/api/form" method="post"> -->
  <form class="form-solid content" on:submit|preventDefault={handleSubmit}>
    <div class="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
      <div class="grid grid-cols-1 gap-6">
        <label class="block">
          <span for="name" class="text-gray-700">Input (text)</span>
          <input bind:value={user.name} type="text" class="form-input mt-1 block w-full" placeholder="Jan Z" required>
        </label>
        <label class="block">
          <span class="text-gray-700">Input (email)</span>
          <input bind:value={user.email} type="email" class="form-input mt-1 block w-full" placeholder="john@example.com">
        </label>
        <label class="block">
          <span class="text-gray-700">Input (password)</span>
          <input bind:value={user.password} type="password" class="form-input mt-1 block w-full" placeholder="john@example.com">
        </label>
        <label class="block">
          <span class="text-gray-700">Input (date)</span>
          <input bind:value={user.date} type="date" class="form-input mt-1 block w-full">
        </label>
        <label class="block">
          <span class="text-gray-700">Input (datetime-local)</span>
          <input type="datetime-local" class="form-input mt-1 block w-full">
        </label>
        <label class="block">
          <span class="text-gray-700">Input (month)</span>
          <input bind:value={user.phomonthne} type="month" class="form-input mt-1 block w-full">
        </label>
        <label class="block">
          <span class="text-gray-700">Input (number)</span>
          <input bind:value={user.number} min=0 max=10 type="number" class="form-input mt-1 block w-full">
        </label>
        <label class="block">
          <span class="text-gray-700">Input (search)</span>
          <input bind:value={user.search} type="search" class="form-input mt-1 block w-full">
        </label>
        <label class="block">
          <span class="text-gray-700">Input (time)</span>
          <input bind:value={user.time} type="time" class="form-input mt-1 block w-full">
        </label>
        <label class="block">
          <span class="text-gray-700">Input (week)</span>
          <input bind:value={user.week} type="week" class="form-input mt-1 block w-full">
        </label>
      </div>
      <div class="grid grid-cols-1 gap-6">
        <label class="block">
          <span class="text-gray-700">Input (tel)</span>
          <input bind:value={user.tel} type="tel" multiple="" class="form-input mt-1 block w-full" placeholder="+1 (234) 456-7890">
        </label>
        <label class="block">
          <span class="text-gray-700">Input (url)</span>
          <input bind:value={user.url} type="url" multiple="" class="form-input mt-1 block w-full" placeholder="https://google.com">
        </label>
        <label class="block">
          <span class="text-gray-700">Select</span>
          <select bind:value={user.select} class="form-select block w-full mt-1">
            <option value="Option 1">Option 1</option>
            <option value="Option 2">Option 2</option>
            <option value="Option 3">Option 3</option>
            <option value="Option 4">Option 4</option>
          </select>
        </label>
        <label class="block">
          <span class="text-gray-700">Select (multiple)</span>
          <select bind:value={user.selectMany} class="form-multiselect block w-full mt-1" multiple>
            <option value="Option 1">Option 1</option>
            <option value="Option 2">Option 2</option>
            <option value="Option 3">Option 3</option>
            <option value="Option 4">Option 4</option>
            <option value="Option 5">Option 5</option>
          </select>
        </label>
        <label class="block">
          <span class="text-gray-700">Textarea</span>
          <textarea bind:value={user.textarea} class="form-textarea mt-1 block w-full h-24" rows="3" placeholder="Enter some long form content."></textarea>
        </label>
        <fieldset class="block">
          <legend class="text-gray-700">Checkboxes</legend>
          <div class="mt-2">
            <div>
              <label class="inline-flex items-center">
                <input bind:checked={user.checkboxSingle} class="form-checkbox" type="checkbox">
                <span class="ml-2">Single Checkbox Option</span>
              </label>
            </div>
          </div>
          <div class="mt-2">
            <div>
              <label class="inline-flex items-center">
                <input value={'Checkbox Group Option 1'} bind:group={user.checkboxGroup} class="form-checkbox" type="checkbox" checked="">
                <span class="ml-2">Checkbox Group Option 1</span>
              </label>
            </div>
            <div>
              <label class="inline-flex items-center">
                <input value={'Checkbox Group Option 2'} bind:group={user.checkboxGroup} class="form-checkbox" type="checkbox">
                <span class="ml-2">Checkbox Group Option 2</span>
              </label>
            </div>
            <div>
              <label class="inline-flex items-center">
                <input value={'Checkbox Group Option 3'} bind:group={user.checkboxGroup} class="form-checkbox" type="checkbox">
                <span class="ml-2">Checkbox Group Option 3</span>
              </label>
            </div>
          </div>
        </fieldset>
        <fieldset class="block">
          <legend class="text-gray-700">Radio Buttons</legend>
          <div class="mt-2">
            <div>
              <label class="inline-flex items-center">
                <input value={'Radio Group Option 1'} bind:group={user.radioGroup} class="form-radio" type="radio" checked="" name="radio-direct">
                <span class="ml-2">Option 1</span>
              </label>
            </div>
            <div>
              <label class="inline-flex items-center">
                <input value={'Radio Group Option 2'} bind:group={user.radioGroup} class="form-radio" type="radio" name="radio-direct" >
                <span class="ml-2">Option 2</span>
              </label>
            </div>
            <div>
              <label class="inline-flex items-center">
                <input value={'Radio Group Option 3'} bind:group={user.radioGroup} class="form-radio" type="radio" name="radio-direct" >
                <span class="ml-2">Option 3</span>
              </label>
            </div>
          </div>
        </fieldset>
        
        <div class="contenteditable"
          contenteditable="true"
          bind:innerHTML={html}
        ></div>
        <pre>{html}</pre>

      </div>
    </div>
    <div class="max-w-4xl mx-auto py-12">
      <h2 class="text-2xl font-bold">Untouched</h2>
      <p class="mt-2 text-lg text-gray-500">
        These are form elements we don't handle (yet?), but we use this to make sure we haven't
        accidentally styled them by mistake.
      </p>
      <div class="mt-8 grid grid-cols-2 gap-6 items-start">
        <div class="grid grid-cols-1 gap-6">
          <label class="block">
            <span class="text-gray-700">Input (range)</span>
            <input bind:value={user.number} min=0 max=10 type="range" class="mt-1 block w-full">
          </label>
          <label class="block">
            <span class="text-gray-700">Input (color)</span>
            <input bind:value={user.color} type="color" class="mt-1 block w-full">
          </label>
          <label class="block">
            <span class="text-gray-700">Input (file)</span>
            <input bind:value={user.file} type="file" class="mt-1 block w-full">
          </label>
          <label class="block">
            <span class="text-gray-700">Input (file, multiple)</span>
            <input bind:value={user.files} type="file" multiple="" class="mt-1 block w-full">
          </label>
        </div>
      </div>
    </div>

    <div>
      <input class="Btn-solid ease-in-out block" type="submit" value="Submit">
      <pre class="mt-4 bg-slate-100 radius-sm p-4">{JSON.stringify(user, 0, 2)}</pre>
    </div>

    {#if apiJson}
      <div class="mt-4">
        <h3>API Response</h3>
        <pre class="mt-4 bg-slate-100 radius-sm p-4">{JSON.stringify(apiJson, 0, 2)}</pre>
      </div>
    {/if}
  </form>
  
</div>


















<script>

  let user = { 
    select: "Option 1",
    selectMany: "Option 3",
    checkboxGroup: [],
  }

	let html = '<p>Write some text!</p>'
  let apiJson

  async function handleSubmit() {
    // Send a POST request to src/routes/contact.js endpoint
    let res = await fetch('/api/form', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: { 'content-type': 'application/json' },
    })
    if(res.ok)
      apiJson = await res.json()
  }

</script>
