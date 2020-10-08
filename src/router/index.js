import VueRouter from "vue-router";
import Views from "../views";
import Vue from "vue";
import Cookies from 'js-cookie';

// 向Vue体系中注册VueRouter中定义的相关软件
Vue.use(VueRouter);

// 创建路由对象
let router = new VueRouter({
        routes: [
                { path: "/", component: Views.Home },
                { path: "/category", component: Views.Category },
                { path: "/taste", component: Views.Taste },
                { path: "/cart", component: Views.Cart, meta: { requireAuth: true } },
                { path: "/profile", component: Views.Profile },
                {
                        path: "/login",
                        component: Views.Login,
                        redirect: './login/pwd',
                        children: [
                                { path: 'pwd', component: Views.LoginPwd },
                                { path: 'phone', component: Views.LoginPhone }
                        ]
                },
                { path: "/list/:cid", component: Views.List },
                { path: "/detail/:pid", component: Views.Detail },
                { path: "/address", component: Views.Address, meta: { requireAuth: true } },
                { path: "/order_confirm", component: Views.OrderConfirm, meta: { requireAuth: true } },
                { path: "/order", component: Views.Order, meta: { requireAuth: true } },
                { path: "/pay", component: Views.Pay, meta: { requireAuth: true } },
                { path: "/register", component: Views.Register},
        ]
});
// 给路由对象添加路由守卫
router.beforeEach((to,from,next) => {
        if(to.meta.requireAuth) {
                if(Cookies.get('token')) next();
                // 需要登录没登录，跳转到登录页面，且在路由中藏登录成功后要跳回的页面
                else next({ path:'/login', query: { back: to.path } });
        }
        else next();
});

// 导出路由对象
export default router;

