import * as httpRequest from '~/ultis/httpRequest';

export const suggest = async (page = '0', per_page) => {
    try {
        const res = await httpRequest.get(`users/suggested`, {
            params: {
                page,
                per_page,
            },
        });

        return res.data;
    }
     catch (error) {
        console.log(error)
    }
};






