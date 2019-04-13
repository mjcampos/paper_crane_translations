import {combineReducers} from 'redux';
import clicks from './clicks';
import facts from './facts';

const rootReducer = combineReducers({
	clicks,
	facts
});

export default rootReducer;