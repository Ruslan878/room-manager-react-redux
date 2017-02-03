import { ROUTING } from '../constants/Routing'

export function redirect(nextUrl) {
  return {
        type: ROUTING,
        payload: {
          method: 'push',
          nextUrl: nextUrl
        }
  }
}