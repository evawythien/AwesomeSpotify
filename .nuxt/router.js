import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _cce11692 = () => interopDefault(import('..\\pages\\music-2.vue' /* webpackChunkName: "pages_music-2" */))
const _85ad9164 = () => interopDefault(import('..\\pages\\successlist.vue' /* webpackChunkName: "pages_successlist" */))
const _3b4f5c3f = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/music-2",
    component: _cce11692,
    name: "music-2"
  }, {
    path: "/successlist",
    component: _85ad9164,
    name: "successlist"
  }, {
    path: "/",
    component: _3b4f5c3f,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
