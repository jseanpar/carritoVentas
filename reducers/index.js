import { combineReducers } from 'redux'

import navigation from './navigation'
import characterReducer from './character-reducer'
import sellcartReducer from './sellcart-reducer'

const reducer = combineReducers({ navigation, characterReducer, sellcartReducer })

export default reducer;