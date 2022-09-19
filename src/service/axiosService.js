import Axios from "axios";

export default {
    bioNLPAnalyze,
    solrQueryService,
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

function solrQueryService(core, fieldList, filterQuery, query, rows) {
    return Axios({
        method: 'GET',
        url: 'https://librairy.linkeddata.es/solr/' + core + '/select',
        params: {
            fl: fieldList,
            fq: filterQuery,
            q: query,
            rows: rows,
        },
    });
}
