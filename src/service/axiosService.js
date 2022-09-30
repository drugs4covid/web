import Axios from "axios";

export default {
    bioNLPAnalyze,
    solrQueryService,
    qaAnswers,
    bioAPISearch,
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

function qaAnswers(question, maxAnswers, useWiki, useDBPedia, useD4C) {
    return Axios({
        method: 'GET',
        url: 'https://d4c.linkeddata.es/qa/answers',
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
        url: 'https://librairy.linkeddata.es/bio-api/' + type,
        params: {
            size: size,
            keywords: keywords,
            ...((type!=='texts' && level) && {
                level:level
            })

        },
    });
}

