<script>
	let todos = [
		{ done: false, text: 'finish Svelte tutorial' },
		{ done: false, text: 'build an app' },
		{ done: false, text: 'world domination' }
	];

	function add() {
		todos = todos.concat({ done: false, text: '' });
	}

	function clear() {
		todos = todos.filter(t => !t.done);
	}

	$: remaining = todos.filter(t => !t.done).length;
</script>


<div class="_content">

  <h1>Todos</h1>
  
  {#each todos as todo}
    <div class:done={todo.done}>
      <input
        type=checkbox
        bind:checked={todo.done}
      >
  
      <input
        placeholder="What needs to be done?"
        bind:value={todo.text}
      >
    </div>
  {/each}
  
  <p class="mt-4">{remaining} remaining</p>
  
  <button class="btn-solid --short mr-2" on:click={add}>
    Add new
  </button>
  
  <button on:click={clear}>
    Clear completed
  </button>
</div>

<style>
	.done {
		opacity: 0.4;
	}
</style>