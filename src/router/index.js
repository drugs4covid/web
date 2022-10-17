import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '@/views/HomeView'
import AboutView from '@/views/AboutView'
import CorpusView from '@/views/CorpusView'
import KnowledgeGraphView from "@/views/KnowledgeGraphView";
import BioNLPView from "@/views/BioNLPView";
import SearchEngineView from "@/views/SearchEngineView";
import QAView from "@/views/QAView";
import ServicesView from "@/views/ServicesView";
import TextSearchView from "@/views/TextSearchView";
import DrugView from "@/views/DrugView";
import DiseaseView from "@/views/DiseaseView";
import ResourcesView from "@/views/ResourcesView";
import PapersView from "@/views/PapersView";
import ExternalLinkView from "@/views/ExternalLinkView";
import NotebooksView from "@/views/NotebooksView";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/services',
    name: 'services',
    component: ServicesView
  },
  {
    path: '/services/bio-nlp',
    name: 'bio-ner',
    component: BioNLPView
  },
  {
    path: '/services/search-engine',
    name: 'bio-search',
    component: SearchEngineView
  },
  {
    path: '/services/search/drug/:id',
    name: 'bio-search-drug',
    component: DrugView
  },
  {
    path: '/services/search/disease/:id',
    name: 'bio-search-disease',
    component: DiseaseView
  },
  {
    path: '/services/qa',
    name: 'bio-qa',
    component: QAView
  },
  {
    path: '/knowledge-graph',
    name: 'knowledge-graph',
    component: KnowledgeGraphView
  },
  {
    path: '/knowledge-grap/rdf',
    name: 'rdf',
    component: ExternalLinkView
  },
  {
    path: '/knowledge-graph/sparql',
    name: 'sparql',
    component: ExternalLinkView
  },
  {
    path: '/knowledge-graph/ontology',
    name: 'ontology',
    component: ExternalLinkView
  },
  {
    path: '/corpus',
    name: 'corpus',
    component: CorpusView
  },
  {
    path: '/corpus/text-search',
    name: 'text-search',
    component: TextSearchView
  },
  {
    path: '/corpus/repository',
    name: 'repository',
    component: ExternalLinkView
  },
  {
    path: '/corpus/keyQ',
    name: 'keyQ',
    component: ExternalLinkView
  },
  {
    path: '/resources',
    name: 'resources',
    component: ResourcesView
  },
  {
    path: '/resources/code',
    name: 'code',
    component: ExternalLinkView
  },
  {
    path: '/resources/notebooks',
    name: 'notebooks',
    component: NotebooksView
  },
  {
    path: '/resources/annotated-corpus',
    name: 'annotated-corpus',
    component: ExternalLinkView
  },
  {
    path: '/papers',
    name: 'papers',
    component: PapersView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
