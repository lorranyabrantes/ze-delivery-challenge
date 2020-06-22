import axios from "axios";
import ENDPOINT from "./endpoints";

const mapService = {
    apiKey: "72edba7fdc994ded8436f3455323fe39",
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