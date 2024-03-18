import { reducer as formReducer } from 'redux-form';
import { configureStore } from '@reduxjs/toolkit';

/* Reducers */
import { languageModalReducer } from './languageModalReducer';
import { sideBarReducer } from './sideBarReducers';

export default configureStore({
    reducer: {
        form: formReducer,
        languageModalReducer,
        sideBarReducer
    },
});