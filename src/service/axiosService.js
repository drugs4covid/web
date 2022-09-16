import Axios from "axios";

export default {
    bioNLPAnalyze
}

function bioNLPAnalyze(text) {
    return Axios({
        method: 'POST',
        url: 'https://librairy.linkeddata.es/bio-ner/entities',
        data: {
            text: text,
        },
    });
}