import {deleteAsync} from 'del';

//delete files in directori  /dist
export const reset = async () => {
    return await deleteAsync(app.path.clean)
}
