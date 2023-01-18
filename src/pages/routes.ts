import { createRouter } from 'vue-router'
import Posts from './Posts.vue'
import NewsItem from './Post.vue'
import Setting from './Settings.vue'
import Front from './Home.vue'

const routes = [
  {
    path: '/',
    component: Front
  },
  {
    path: '/posts/',
    component: Posts
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
    component: () => import('./Help.vue')
  }
]

export default function ( history: any ) {
  return createRouter( {
    history,
    routes
  } )
}