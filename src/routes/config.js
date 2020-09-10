export default {
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("@/views/Home"),//路由的按需加载,这样写是最合理的,在前面导入会默认全部导入
    },
    {
      path: "/login",
      name: "Login",
      component: () => import("@/views/Login"),
    },
    {
      path: "/reg",
      name: "Reg",
      component: () => import("@/views/Reg"),
    },
    {
      path: "/personal",
      name: "Personal",
      component: () => import("@/views/Personal.vue"),
      meta: {
        auth: true,//路由元信息,用来标记该路由是需要权限的
      },
    },
    {
      path: "/protected",
      name: "Protected",
      component: () => import("@/views/Protected.vue"),
      meta: { //  路由元信息,用来标记该路由是需要权限的
        auth: true,
      },
    },
    {
      path: "/auth",
      name: "Auth",
      component: () => import("@/views/Auth.vue"),
    },
    {
      path: "/channel/:id",
      name: "ChannelNews",
      component: () => import("@/views/ChannelNews"),
    },
    {
      path: "*", //匹配上述路径以外的所有路径,就是匹配所有错误路由的意思
      name: "404",
      component: () => import("@/views/NotFound"),
    },
  ],
  mode: "history",
};
