<script>
  import Select from 'svelte-select';

  let items = [
    {value: 'chocolate', label: 'Chocolate'},
    {value: 'pizza', label: 'Pizza'},
    {value: 'cake', label: 'Cake'},
    {value: 'chips', label: 'Chips'},
    {value: 'ice-cream', label: 'Ice Cream'},
  ];

  let value = {value: 'cake', label: 'Cake'};

  function handleSelect(event) {
    console.log('selected item', event.detail);
    // .. do something here 🙂
  }
</script>


<div class="_content">
  <Select {items} {value} on:select={handleSelect}></Select>
</div>