
// fake data endpoint
import { json } from '@sveltejs/kit';

export const GET = async ({ locals }) => {
  console.log('[api/account/data.json/+server.js] locals', locals )
  const data = locals.user ? { 
    sales: 100, 
    newCustomers: 54,
    user: locals.user,
  } : {};

  return json(data)
}
