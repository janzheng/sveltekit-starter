// export const prerender = true;

// see https://kit.svelte.dev/docs#loading
export const load = async ({ fetch }) => {
  try {
    let blocks, res
    
    res = await fetch('/api/endpoints/grabby?id=approach');
    if (res.ok) {
      let json = await res.json();
      blocks = json
      return { 
        blocks
      };
    }

  } catch(e) {
    console.error('notion page.js error:', e)
  }
};
