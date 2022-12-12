import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '@/views/HomeView'
import AboutView from '@/views/AboutView'
import CorpusView from '@/views/CorpusView'
import KnowledgeGraphView from "@/views/KnowledgeGraphView";
import BioNERView from "@/views/BioNERView";
import BioSearchView from "@/views/BioSearchView";
import BioQAView from "@/views/BioQAView";
import ServicesView from "@/views/ServicesView";
import TextSearchView from "@/views/TextSearchView";
import ResourcesView from "@/views/ResourcesView";
import PapersView from "@/views/PapersView";
import ExternalLinkView from "@/views/ExternalLinkView";
import NotebooksView from "@/views/NotebooksView";
import RepositoryView from "@/views/RepositoryView";
import PlatformEs from "@/views/PlatformEs"

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
    path: '/services/bio-ner',
    name: 'bio-ner',
    component: BioNERView
  },
  {
    path: '/services/bio-search',
    name: 'bio-search',
    component: BioSearchView
  },
  {
    path: '/services/bio-search/drug/:id',
    name: 'bio-search-drug',
    component: ExternalLinkView
  },
  {
    path: '/services/bio-search/disease/:id',
    name: 'bio-search-disease',
    component: ExternalLinkView
  },
  {
    path: '/services/bio-qa',
    name: 'bio-qa',
    component: BioQAView
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
    component: RepositoryView
  },
  {
    path: '/corpus/keyQ',
    name: 'keyQ',
    component: ExternalLinkView
  },
  {
    path: '/corpus/annotated-corpus',
    name: 'annotated-corpus',
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
    path: '/platform_es',
    name: 'platform_es',
    component: PlatformEs
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
