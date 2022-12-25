import * as httpRequest from '~/ultis/httpRequest';


export const post = async (type, page = '1') => {
    try {
        const res = await httpRequest.get(`videos`, {
            params: {
                type,  
                page   
           },
        });

        return res.data;
    }
     catch (error) {
        console.log(error)
    }
};