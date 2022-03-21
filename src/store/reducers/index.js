import { combineReducers } from 'redux';
import { researcherReducer } from './researcherReducer';

export const rootReducer = combineReducers({
  researchersStore: researcherReducer
});
