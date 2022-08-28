
/* 

FAVES endpoints

*/

import arrayPage from 'array-page'
import { env } from '$env/dynamic/public';
import { cacheGet, cacheSet, cacheClear, getCacheKeys } from "$plasmid/utils/cache"
import { getTable, getTablePaged, postToAirtable } from '$plasmid/utils/airfetch.js'



// arrayPage.applyPrototype() // usage: arr.page(2,3) page number,  page size





// 
// exportable functions
// 

// search
export const getFaveSearch = async (keyword, pageSize) => {
  try {
    let pageObj = await getTablePaged(
      pageSize, 'Quicksaves',
      {
        view: 'Published',
        keyword: `${keyword}`,
        matchKeywordWithFields: ['Name', 'Description', 'URL'],
        matchStyle: 'partial',
        // maxRecords: 100,
      },
      true, null, env.PUBLIC_AIRTABLE_FAVES_BASE
    )
    console.log('--->', pageObj)
    return pageObj.results

  } catch (e) {
    console.log('getPagedFaves error', e)
  }
}

export const getUserSearch = async (keyword, pageSize) => {
  try {
    let pageObj = await getTablePaged(
      pageSize, 'Quicksaves',
      {
        view: 'Published',
        keyword: `${keyword}`,
        matchKeywordWithField: ['User'],
        matchStyle: 'exact',
        // maxRecords: 100,
      },
      true, null, env.PUBLIC_AIRTABLE_FAVES_BASE
    )
    return pageObj.results

  } catch (e) {
    console.log('getPagedFaves error', e)
  }
}


// let pageObj // <-- this accumulates results for EVERYONE
export const getPagedFaves = async (pageSize) => {
  try {
    let pageObj = await getTablePaged(
      pageSize, 'Quicksaves', 
      {
        view: 'Published'
      }, 
      true, null, env.PUBLIC_AIRTABLE_FAVES_BASE
    )
    return pageObj.results

  } catch (e) {
    console.log('getPagedFaves error', e)
  }
}


// add (post to Airtable)







// get endpoint
export const getFavorites = async ({ locals, url, params, request }) => {

  let pages = url.searchParams.get('pages') && parseInt(url.searchParams.get('pages'))
  let search = url.searchParams.get('search')
  let user = url.searchParams.get('user')
  
  // console.log('search?', search, user, pages, localUser)
  console.log('search?', params, search, user, pages)

  if (search) {
    let results = await getFaveSearch(search, pages)
    console.log('fave len:', results.length)
    return {
      body: results // return global var
    }
  } else if (user) {
    let results = await getUserSearch(user, pages)
    console.log('user len:', results.length)
    return {
      body: results // return global var
    }
  } else {
    try {
      let results = await getPagedFaves(pages)
      console.log('len:', results.length)
      return {
        body: results // return global var
      }
    } catch (e) {
      console.log('GET error', e)
    }
  }
}

// post endpoint
export const postFavorites = async ({ locals, url, params, request }) => {

  const localUser = locals.user
  // this uses signed-in user
  // if(localUser) {
  //   user = localUser.profile.username
  // }

  return {
    body: {}
  }
}








// takes a {url, tableName, fieldName} object and attempts to insert that into an airtable location
export const GET = getFavorites
export const POST = postFavorites

