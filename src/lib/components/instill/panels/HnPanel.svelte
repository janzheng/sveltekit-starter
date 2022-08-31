


<script>
  import { tick } from "svelte";
  import { v4 as uuid } from '@lukeed/uuid';
	import { writable } from 'svelte/store';
	import { page } from '$app/stores';
	import { onMount } from "svelte";
	import { browser } from '$app/environment';
  import debounce from 'lodash/debounce'

	import { user } from '$lib/store'

	import Post from '$lib/components/instill/blocks/Post.svelte';

	// import Dropdown from '$lib/components/sidekit/dropdown.svelte';
  import { getVotes } from '$plasmid/modules/instill/votes'
  import { getPosts, doPost } from '$plasmid/modules/instill/posts'
  import { getProfiles } from '$plasmid/modules/instill/profiles'

	onMount(async () => {
		if (browser) {
			await import("tw-elements");
		}
	})	

  // parent data
  export let project
  export let group
  export let panel = {
    name: 'HN Panel',
    slug: 'hn-panel',
    // id: uuid(), // this needs to be a new db entry
    description: 'A panel for the HN website',
  }
  export let source = `${project?.slug}--${panel.slug}`


  // panel data
  let isDataLoaded, error

  // post data
  export let showEditor = false
  export let posts = writable([])
  export let profiles = writable([])
  export let votes = writable([])


  export let newPost = writable({
    source: `${source}`,
    userId: $user?.id,
  })

  const refreshData = async () => {
    await tick()
    $posts = await getPosts(source) || $posts
    $votes = await getVotes(source) || $votes
    $profiles = await getProfiles() || $profiles

    // if($posts.length > 0 && $votes.length > 0 && $profiles.length > 0) {
      isDataLoaded = true
      console.log('source:', source, 'posts:', $posts, 'profiles', $profiles, 'votes:', $votes)
    // }
  }



  // init
  refreshData()

  $: if(user) {
    $newPost.userId = user?.id
  }
  
</script>




<div class="Instill-Panel HnPanel">

  <div class="Panel-Controller | mt-4">
    <div class="Card bg-gray-100">
      <div class="Card-body">
        <div class="text-2xl">
          <span class="text-gray-800">👉</span> Start Here
        </div>
        <div class="text-gray-600 mt-2">
          This is the HN Panel in action.
        </div>
        <span class="btn-solid mt-2" on:click={()=>{showEditor=!showEditor}}>New post</span>
      </div>

      {#if showEditor}
        <form class="form-solid content my-4" on:submit|preventDefault={async ()=>{
          await doPost($newPost);
          showEditor = false
          await refreshData()
        }}>
          <div class="grid grid-cols-1 gap-6">
            <label class="block">
              <span for="name" class="text-gray-700">Title</span>
              <input bind:value={$newPost.title} type="text" class="form-input mt-1 block w-full" placeholder="Some cool title" required>
            </label>
            <label class="block">
              <span class="text-gray-700">URL</span>
              <input bind:value={$newPost.url} type="text" class="form-input mt-1 block w-full" placeholder="https://phage.directory">
            </label>
            <label class="block">
              <span class="text-gray-700">Text</span>
              <textarea bind:value={$newPost.text} class="form-textarea mt-1 block w-full h-24" rows="3" placeholder="Write something fun!"></textarea>
            </label>
          </div>
          <input class="Btn-solid ease-in-out block mt-2" type="submit" value="Submit">
        </form>
      {/if}

    </div>
  </div>




  {#if isDataLoaded}
    <div class="Panel-Posts">
      {#if $posts}
        {#each $posts as post}
          {@const author = $profiles.find(profile => profile.userId === post.userId)}
          {@const postSource = `${post.source}-${post.id}`}
          {@const votes = $votes.filter(vote => vote.source === postSource )}
          <!-- <Post {group} {author} {project} {panel} {post} source={postSource} votes={votes||[]} {refreshData} /> -->
          <Post {author} {post} source={postSource} votes={votes||[]} showLink={true} />
        {/each}
      {/if}
    </div>
  {:else}
    <div class="Card-light">Loading ...</div>
  {/if}


</div>