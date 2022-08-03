
// fake data endpoint

export function GET({ locals }) {
  const data = locals.user ? { 
    sales: 100, 
    newCustomers: 54,
    user: locals.user,
  } : {};

  return {
    body: JSON.stringify(data),
    status: 200,
    headers: {
      'Content-Type': 'application/json'
    }
  };
}
