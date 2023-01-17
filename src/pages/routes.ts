import { createRouter } from 'vue-router'
import HeadLine from './Headlines.vue'
import NewsItem from './Article.vue'
import Help from './Docs.vue'
import Setting from './Settings.vue'
import Front from './Front.vue'
import PostsView  from "./PostsView.vue";
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
    path: '/posts/',
    name: 'posts',
    component: PostsView
  },
  {
    path: '/news-item/',
    component: NewsItem
  },
  {
    path: '/settings/',
    component: Setting
  },
  {
    path: '/help/',
    component: Help
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../pages/About.vue')
  }
]

export default function ( history: any ) {
  return createRouter( {
    history,
    routes
  } )
}