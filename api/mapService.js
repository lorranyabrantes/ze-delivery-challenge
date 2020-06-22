import axios from "axios";
import ENDPOINT from "./endpoints";

const mapService = {
    apiKey: "4b269dbbb2db4695a710644cc520023e",
    getGeocoding(address, callback) {
        axios({
            url: `${ENDPOINT.GEOCODING}?key=${this.apiKey}&q=${address}&pretty=1&no_annotations=1`,
            method: 'get',
        }).then((result) => {
            callback(result.data.results);
        });
    }
}

export default mapService;