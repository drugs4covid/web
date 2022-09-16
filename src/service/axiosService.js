import Axios from "axios";

export default {
    bioNLPAnalyze
}

function bioNLPAnalyze(text) {
    return Axios({
        method: 'POST',
        url: 'https://librairy.github.io/bio-ner/drugs',
        params: {
            text: text,
        },
    });
}