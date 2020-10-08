import axios from 'axios';
import Vue from 'vue';
import router from '../router';
import Cookies from 'js-cookie';

// 创建一个公用的永远是pending的prom来应对ajax中所有的错误情况，这样可以让
// 组件中的代码更优雅
const alwaysPendingPromise = new Promise(() => {});
// 创建axios实例
const instance = axios.create();

// 设置实例请求发出前的拦截器
instance.interceptors.request.use(
        config => {
                config.headers = {
                        "Content-Type": 'application/json',
                        "Authorization": Cookies.get('token')
                };
                if(config.data) config.data = JSON.stringify(config.data);
                return config;
        },
        (error) => {
                Vue.prototype.$alert(error.message);
                return alwaysPendingPromise;
        }
);
// 设置实例响应后的拦截器
instance.interceptors.response.use(
        response => {
                if(response.status === 200) {
                        let { code, data, msg } = response.data;
                        switch(code) {
                                case 200:
                                        // 如果响应头的authorization中包含最新的token，更新到Cookies的token中
                                        if(response.headers.authorization) Cookies.set('token', response.headers.authorization);
                                        return data;
                                case 401:
                                        Cookies.remove('token');
                                        router.replace({ path: '/login', query: { back: router.currentRoute.fullpath  } });
                                case 404:
                                case 199:
                                case 500:
                                        if(msg) Vue.prototype.$alert(msg);
                                        return alwaysPendingPromise;
                        }
                } else {
                        Vue.prototype.$alert(response.status);
                        return alwaysPendingPromise;
                }
        },
        (error) => { Vue.prototype.$alert(error.message); return alwaysPendingPromise; }
);

// 导出加强版的axios
export default instance;