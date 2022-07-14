
import { exposeDetaKey } from '$plasmid/utils/deta/deta';

// Expose the deta key on purpose
export const get = async () => {
  return {
    body: {
      key: exposeDetaKey(),
    }
  }
}