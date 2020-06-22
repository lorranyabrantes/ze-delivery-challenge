import axios from "axios";
import ENDPOINT from "./endpoints";

const storeService = {
    search(query, callback) {
        axios({
            url: ENDPOINT.ZE,
            method: 'post',
            data: query
        }).then((result) => {
            callback(result.data.data);
        });
    }
}

export default storeService;