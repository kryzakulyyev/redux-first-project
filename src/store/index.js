import { createStore, combineReducers } from 'redux'
import articleReducer from '../reducers/articlelistReducer'
import searchReducer from '../reducers/searchReducer';

const rootReducer = combineReducers({
  articlesState: articleReducer,
  searchState: searchReducer
})

export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());