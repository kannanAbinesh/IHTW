/* Actions and helpers */
import store from '../../Reducers';
import { adminLogin } from "../../Actions/adminLoginAction";

export async function submit(value) {
    await store.dispatch(
        adminLogin({
            email: value?.email, 
            password: value?.password
        }));
};