import Axios from "axios";
import store from "@/store/index.js"

export default {
    bioNerEntities,
    solrQueryService,
    qaAnswers,
    bioAPISearch,
}

function bioNerEntities(text, lang) {
    return Axios({
        method: 'POST',
        url: lang==="es" ?
            store.state.links.d4c.bioNerEntitiesES :
            store.state.links.librairy.bioNerEntities,
        data: {
            text: text,
        },
    });
}

function solrQueryService(core, query, fieldList, filterQuery, rows) {
    return Axios({
        method: 'GET',
        url: store.state.links.librairy.solrApi + core + '/select',
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
        url: store.state.links.d4c.qaAnswers,
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
        url: store.state.links.librairy.bioApi + '/' + type,
        params: {
            size: size,
            keywords: keywords,
            ...((type!=='texts' && level) && {
                level:level
            })

        },
    });
}

