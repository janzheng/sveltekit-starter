
/* 

  ENDPOINT / SERVER-SIDE

  gets stuff from Grabby'd whimsy data (already local); if that doesn't work, use the API

  https://kit.svelte.dev/docs/routing#endpoints

*/

import { json, error } from '@sveltejs/kit';

import { getBlockValues } from '$plasmid/utils/notion'
import data from '$lib/data/grabbydata.json'
import grabby from '$lib/data/grabby.json'




// takes: 
// http://localhost:3030/api/grabby/about,members
export const getGrabbyMultiParam = (data, config) => {
  const _getter = async ({ params }) => {
    // let id = request.params.id
    let id = params.slug

    // console.log('grabby multi param endpoint ::', params.slug)

    if (!id)
      throw error(400, 'id is required')

    let arr = id.split(',')

    if (arr.length > 1) {
      let body = {}

      arr.map(id => {
        let item = data[id]
        if (config) {
          let source = config.sources.find(f => f.name == id)
          let type = source.type
          if (type == "whimsy" && source.inputs.ids && source.inputs.ids.filter(o => o.includes('collection')).length == 0) {
            item = getBlockValues(data[id])
          }
        }

        body = { ...body, [id]: item }
      })
      // console.log('[grabby] : body :', id)
      return json(body)
    }
    else if (data && id && data[id]) {
      // console.log('[grabby] : data[id] :', id)

      // get blocks from whimsy notion, w/o client needing to get block values
      if (config) {
        let source = config.sources.find(f => f.name == id)
        let type = source.type
        // if (type == "whimsy" && !source.inputs.ids.includes('collection'))
        if (type == "whimsy" && source.inputs.ids && source.inputs.ids.filter(o => o.includes('collection')).length == 0)
          return json(getBlockValues(data[id]))
      }

      // console.log('data??', data[id])
      return json(data[id])
    }

    // console.log('nothing')
    return json({})
  }

  return _getter
}






// import { getGrabbyMulti } from '$plasmid/utils/grabby'
export const GET = getGrabbyMultiParam(data, grabby)


