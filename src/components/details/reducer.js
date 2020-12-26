import { LOADDATA } from './actionTypes'

const defaultState = {
  list: ["a", "b"]
}

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case LOADDATA:
      return {
        ...state,
        list: ["s", "ss"]
      }
    default:
      return state
  }
}

export default reducer