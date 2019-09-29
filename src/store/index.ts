import { combineReducers, createStore } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import { composeWithDevTools } from 'redux-devtools-extension';

const reducer = combineReducers({
  form: reduxFormReducer,
});

const store = createStore(reducer, composeWithDevTools());

export default store;
