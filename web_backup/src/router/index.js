import { createRouter, createWebHistory } from 'vue-router'
import PkIndexView from '@/views/pk/PkIndexView.vue'
import RecordIndexView from '@/views/record/RecordIndexView.vue'
import NotFoundView from '@/views/error/NotFoundView.vue'
import RankListIndexView from '@/views/ranklist/RankListIndexView.vue'
import MyBotIndexView from '@/views/user/mybot/MyBotIndexView.vue'

const routes = [
  {
    path: '/pk/',
    name: 'pk_index',
    component: PkIndexView
  },
  {
    path: '/ranklist//',
    name: 'ranklist_index',
    component: RankListIndexView
  },
  {
    path: '/record/',
    name: 'record_index',
    component: RecordIndexView
  },
  {
    path: '/pk/',
    name: 'pk_index',
    component: PkIndexView
  },
  {
    path: '/mybot/',
    name: 'mybot_index',
    component: MyBotIndexView
  },
  {
    path: '/404/',
    name: 'notfound_index',
    component: NotFoundView
  },
  {
    path: '/',
    name: 'home',
    redirect: '/pk/'
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/404/'
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
