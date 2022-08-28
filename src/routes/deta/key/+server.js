
import { exposeDetaKey } from '$plasmid/utils/deta/deta';

// Expose the deta key on purpose
export const GET = async () => {
  return {
    body: {
      key: exposeDetaKey(),
    }
  }
}