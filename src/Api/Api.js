import axios from "axios"
export const getApi = (dummyjsonURL ,params, success, error) => {
    axios.get(dummyjsonURL ).then((response) => { 
        if (response.status === 200) { 
            success(response.data);
        }
    }).catch((err) => { 
        error(err) 
    })
}


export const getSingeEntityApi = ( dummyjsonURL , id, success, error) => {
    axios.get(`${ dummyjsonURL }/${id}`)
        .then((response) => {
            if (response.status === 200) {
                success(response.data);
            } else {
                error(new Error("Unexpected response status: " + response.status));
            }
        })
        .catch((err) => {
            error(err);
        });
};
