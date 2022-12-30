import * as httpRequest from '~/ultis/httpRequest';


export const profile = async (nickName = '') => {
    try {
        const res = await httpRequest.get(`users/@${nickName}`);
        return res.data;
    }
    catch (error) {
        console.log(error)
    }
};