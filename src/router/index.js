import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '@/views/HomeView'
import AboutView from '@/views/AboutView'
import CorpusView from '@/views/CorpusView'
import KnowledgeGraphView from "@/views/KnowledgeGraphView";
import BioNLPView from "@/views/BioNLPView";
import SearchEngineView from "@/views/SearchEngineView";
import CodeView from "@/views/CodeView";
import QAView from "@/views/QAView";
import ServicesView from "@/views/ServicesView";
import TextSearchView from "@/views/TextSearchView";
import DrugView from "@/views/DrugView";
import DiseaseView from "@/views/DiseaseView";
import ResourcesView from "@/views/ResourcesView";
import PapersView from "@/views/PapersView";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/services/',
    component: ServicesView
  },
  {
    path: '/services/bio-nlp',
    component: BioNLPView
  },
  {
    path: '/services/search-engine',
    component: SearchEngineView
  },
  {
    path: '/services/search/drug/:id',
    name: 'search-drug',
    component: DrugView
  },
  {
    path: '/services/search/disease/:id',
    name: 'search-disease',
    component: DiseaseView
  },
  {
    path: '/services/qa',
    component: QAView
  },
  {
    path: '/knowledge-graph',
    component: KnowledgeGraphView
  },
  {
    path: '/corpus',
    component: CorpusView
  },
  {
    path: '/corpus/text-search',
    component: TextSearchView
  },
  {
    path: '/resources',
    component: ResourcesView
  },
  {
    path: '/resources/code',
    component: CodeView
  },
  {
    path: '/resources/papers',
    component: PapersView
  },
  {
    path: '/about',
    component: AboutView
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
