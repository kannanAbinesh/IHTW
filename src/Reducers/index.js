import { reducer as formReducer } from 'redux-form';
import { configureStore } from '@reduxjs/toolkit';

/* Reducers */
import { checkReducers } from '../Reducers/checkReducers';

export default configureStore({
    reducer: {
        form: formReducer,
        checkReducers
    },
});