import {combineReducers} from 'redux';
import texts from './textReducer';

const rootReducer = combineReducers({
    texts
});

export default rootReducer;