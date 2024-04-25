/* Actions and helpers */
import { adminContact } from '../../Actions/adminContact';
import store from '../../Reducers';

export async function submit (value) {
    await store.dispatch(
        adminContact({
            id: value?.id,
            header: value?.header,
            contactUs: value?.contactUs,
            details: value?.details
        })
    );
};