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

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
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
    path: '/resources/code',
    name: 'code',
    component: CodeView
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
