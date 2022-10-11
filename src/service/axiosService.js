import Axios from "axios";
import store from "@/store/index.js"

export default {
    bioNLPAnalyze,
    solrQueryService,
    qaAnswers,
    bioAPISearch,
}

function bioNLPAnalyze(text) {
    return Axios({
        method: 'POST',
        url: store.state.api.bioNerEntities,
        data: {
            text: text,
        },
    });
}

function solrQueryService(core, query, fieldList, filterQuery, rows) {
    return Axios({
        method: 'GET',
        url: store.state.api.solr + core + '/select',
        params: {
            q: query,
            ...((fieldList) && {fl: fieldList}),
            ...((filterQuery) && {fq: filterQuery}),
            ...((rows) && {rows: rows}),
        },
    });
}

function qaAnswers(question, maxAnswers, useWiki, useDBPedia, useD4C) {
    return Axios({
        method: 'GET',
        url: store.state.api.qa,
        params: {
            q: question,
            max: maxAnswers,
            wiki: useWiki,
            dbpedia: useDBPedia,
            d4c: useD4C
        },
    });
}

function bioAPISearch(type, size, keywords, level) {
    return Axios({
        method: 'GET',
        url: store.state.api.bioApi + type,
        params: {
            size: size,
            keywords: keywords,
            ...((type!=='texts' && level) && {
                level:level
            })

        },
    });
}

