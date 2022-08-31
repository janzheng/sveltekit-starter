import { error } from '@sveltejs/kit';
import { browser, dev, prerendering } from '$app/environment';
import { getSource } from '$plasmid/modules/instill/atoms'
import { getPostById } from '$plasmid/modules/instill/posts'
import { getProfiles } from '$plasmid/modules/instill/profiles'
import { getVotes } from '$plasmid/modules/instill/votes'
import { getReplies } from '$plasmid/modules/instill/replies'

export const load = async ({ fetch, params }) => {
  const slug = params.post

  const post = await getPostById(slug)
  const profiles = await getProfiles()
  const source = `${post.source}-${post.id}`
  const author = profiles.find(profile => profile.userId === post.userId)
  let votes = await getVotes(source)
  // votes = votes.find(vote => vote.source === `${post.source}-${post.id}`)
  const replies = await getReplies(source)
  // const src = await getSource(source)

  if(!post) {
    throw error(404);
  }

  return {
    post,
    slug,
    profiles,
    author,
    votes,
    replies,
    source,
    // src
  }
}
