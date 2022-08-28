<script context="module">
  export function load({ error, status }) {

    return {
      props: {
        status,
        message: error.message,
        stack: error.stack
      }
    };
  }
</script>


<script>
  export let status, message, stack
</script>


<div class="_content">

  <h1>Error: {status}</h1>

  <div class="mb-2">
    {message}
  </div>

  <pre class="bg-gray-100 rounded-md p-4">
    {stack}
  </pre>

</div>