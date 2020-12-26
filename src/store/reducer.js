import { combineReducers } from 'redux'
import {
  reducer as shopcar
} from '@v/shoppingcar'

import {
  reducer as comlist
} from '@v/home/comlist'

import {
  reducer as order
} from '@v/home/index'
import {
  reducer as grabfresh
} from "@v/home/grabfresh"

const reducer = combineReducers({
  shopcar,
  comlist,
  order,
  grabfresh
})

export default reducer