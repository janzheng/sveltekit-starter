

<script>
	import Post from '$lib/components/instill/blocks/Post.svelte';
	import ReplyList from '$lib/components/instill/blocks/ReplyList.svelte';

  // export let slug, post, profiles, author, votes, replies, source
  export let data
  export let {post, author, votes, replies, source, profiles} = data


</script>


<div class="_content">
  <Post {post} {author} {votes} {source} />
  <ReplyList root={post.id} {source} {replies} {profiles} />
</div>
