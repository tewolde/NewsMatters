import { createRouter } from 'vue-router'
import HeadLine from './Headlines.vue'
import NewsItem from './Article.vue'
import Setting from './Settings.vue'
import Front from './Front.vue'

const routes = [
  {
    path: '/',
    component: Front
  },
  {
    path: '/headline/',
    component: HeadLine
  },
  {
    path: '/news-item/:id',
    component: NewsItem
  },
  {
    path: '/settings/',
    component: Setting
  },
  {
    path: '/Help',
    name: 'help',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../pages/Docs.vue')
  }
]

export default function ( history: any ) {
  return createRouter( {
    history,
    routes
  } )
}