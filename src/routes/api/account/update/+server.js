

// this is required to update server-side (and cookies) of login / user
import { updateProfile } from '$plasmid/modules/pocket/'



import { json, error } from '@sveltejs/kit';
export async function POST({ locals, request }) {
  const {user, profile} = await request.json();

  try {
    const newProfile = await updateProfile(user, profile);
    locals.user.profile = newProfile;

    return json(locals.user);
  } catch (error) {
    console.error('[api/account/update/+server.js] Update not completed', error?.response?.data?.message)
    throw error(500, error?.response?.data)
  }
}
