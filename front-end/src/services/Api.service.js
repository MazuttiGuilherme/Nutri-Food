import { store } from "../store/store"
import { selectUser } from "../store/User/User.selectors"

export const apiUrl = ('http://localhost:3001')

export const getAuthorizationHeaders = () => {
    const state = store.getState()
    const user = selectUser(state)
    if (user){
        return {
            'authorization': `Bearer ${user.accessToken}`
        }
    }
    return {}
}
