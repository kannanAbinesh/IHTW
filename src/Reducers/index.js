import { reducer as formReducer } from 'redux-form';
import { configureStore } from '@reduxjs/toolkit';

/* Reducers */
import { languageModalReducer } from './languageModalReducer';

export default configureStore({
    reducer: {
        form: formReducer,
        languageModalReducer
    },
});