const c1 = () => import(/* webpackChunkName: "page--src--pages--detail--name-vue" */ "/Users/engineer/Desktop/release/src/pages/Detail/[name].vue")
const c2 = () => import(/* webpackChunkName: "page--src--pages--journal-detail-vue" */ "/Users/engineer/Desktop/release/src/pages/JournalDetail.vue")
const c3 = () => import(/* webpackChunkName: "page--src--pages--journal-vue" */ "/Users/engineer/Desktop/release/src/pages/Journal.vue")
const c4 = () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Users/engineer/Desktop/release/node_modules/gridsome/app/pages/404.vue")
const c5 = () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/engineer/Desktop/release/src/pages/Index.vue")

export default [
  {
    name: "__detail_name",
    path: "/detail/:name",
    component: c1,
    meta: {
      dataPath: "/detail/_name.json",
      dynamic: true
    }
  },
  {
    path: "/journal-detail/",
    component: c2
  },
  {
    path: "/journal/",
    component: c3
  },
  {
    name: "404",
    path: "/404/",
    component: c4
  },
  {
    name: "home",
    path: "/",
    component: c5
  },
  {
    name: "*",
    path: "*",
    component: c4
  }
]
