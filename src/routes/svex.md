---
# frontmatter goes here
# this is a demo of using markdown + Svex for content
---
<script>
	import { page } from '$app/stores';
	import logo from '$lib/layouts/svelte-logo.svg';
  import Desktop from '$lib/components/shared/MenuDesktop.svelte'
</script>

# Markdown content here

<Desktop {logo} {page} />

More markdown _here_!