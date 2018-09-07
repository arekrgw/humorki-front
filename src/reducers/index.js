import { combineReducers } from 'redux';

import humorsData from './humorsData';

const allReducers = combineReducers({
    humors: humorsData
});

export default allReducers;