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

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/services/',
    name: 'services',
    component: ServicesView
  },
  {
    path: '/services/bio-nlp',
    name: 'bio-npl',
    component: BioNLPView
  },
  {
    path: '/services/search-engine',
    name: 'search-engine',
    component: SearchEngineView
  },
  {
    path: '/services/qa',
    name: 'qa',
    component: QAView
  },
  {
    path: '/knowledge-graph',
    name: 'knowledge-graph',
    component: KnowledgeGraphView
  },
  {
    path: '/corpus',
    name: 'corpus',
    component: CorpusView
  },
  {
    path: '/resources/code',
    name: 'code',
    component: CodeView
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
