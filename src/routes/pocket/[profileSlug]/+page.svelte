
<script>

  import { env } from '$env/dynamic/public';
  import {marked} from 'marked'
  import { getProfile, getAvatar, getCover } from '$plasmid/modules/pocket/'
  import Notion from '@yawnxyz/sveltekit-notion'
  import SocialBox from '$plasmid/components/SocialBox.svelte'

  export let data
  export let {slug} = data
  let profile

  async function loadProfile() {
    try {
      profile = await getProfile(slug)
    } catch(e) {
      console.error('error:', e, e?.response)
    }
  }
  loadProfile()

</script>





<div class="_content">
  {#if profile}
    <div class="Profile-header">
      {#if profile.cover}
        <div class="Profile-cover | ">
          <img class="" src={getCover(profile)} alt={ profile.name + " cover"} />
        </div>
      {/if}
      {#if profile.avatar}
        <div class="Profile-image | ">
          <img class="rounded-full border-8 border-white" src={getAvatar(profile, '200x200')} alt={ profile.name + " profile"} />
        </div>
      {/if}
      <h1 class="Profile-name | pt-4 pb-0 mb-4">
        {profile.name}{#if profile.title}, {profile.title}{/if}
      </h1>
      {#if profile.emailPublic || profile.social}
        <div class="Profile-social mb-4">
          <SocialBox showFull={false} email={profile.emailPublic} socialText={profile.social} />
        </div>
      {/if}
    </div>

    <div class="Profile-intro | mb-4 __md:grid grid-cols-3-1 gap-8">
      <div class="Profile-about">{@html marked(profile.about)}</div>
    </div>

    <div class="Profile-body">
      {#if profile.description}
        <div class="Profile-description mb-4">{@html marked(profile.description)}</div>
      {/if}
      {#if profile.notionId}
        <div class="Profile-notion mb-4">
          <Notion classes={''} api={env.PUBLIC_NOTION_API_URL} id={profile.notionId} />
        </div>
      {/if}
      
    </div>



    <div class="Profile-footer">
    </div>
  {/if}
</div>







<style lang="scss">
  :root {
    --notion-page-width: 100%;
  }

  .Profile-image img {
    width: 200px; height: 200px;
  }

  .Profile-cover + .Profile-image {
    position: relative;
    margin-top: -3rem;
  }

  :global(.Profile-notion .notion-page) {
    padding-left: 0;
    padding-right: 0;
  }
</style>