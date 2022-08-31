
export const load = async ({ params, url }) => {
  let page = url.searchParams.get('page')

  if(!page || page < 1)
    page = 1
  page -= 1 // 1-indexed
  return {page}
}
