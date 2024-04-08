/* Actions and helpers */
import { adminAbout } from '../../Actions/adminAboutAction';
import store from '../../Reducers';

export async function submit(value) {
    await store.dispatch(
        adminAbout ({
            id: value?.id,
            header: value?.header,
            aboutus: value?.aboutus,
            projects: value?.projects,
            clients: value?.clients,
            destination: value?.destination,
            year: value?.year,
            storyHeader: value?.storyHeader,
            story: value?.story
        })
    )
};