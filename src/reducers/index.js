import formReducer from "./fornReducer";
import { combineReducers } from "redux";
import storage from 'redux-persist/lib/storage'

const appReducer = combineReducers({
    form: formReducer
})

const rootReducer = (state, action) =>  {
    if (action.type === 'CLEAR_STORE') { // Clear everything in the store
        storage.removeItem('persist:root') 
        state = undefined
    }
    return appReducer(state, action)
}

export default rootReducer