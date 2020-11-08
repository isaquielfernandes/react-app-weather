import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
//import { persistStore, persistReducer } from 'redux-persist'
//import storage from 'redux-persist/lib/storage'
import forecastReducer from './reducers/forecast.reducer'

const rootReducer = combineReducers({
  forecast: forecastReducer
})

/*const persistedReducer = persistReducer({
  key: 'root',
  storage
}, rootReducer)*/

export const store = createStore(rootReducer, applyMiddleware(thunk))
//export const persisetdStore = persistStore(store)
