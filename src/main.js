// ES6导入vue
import Vue from "vue";
import App from "./App.vue";            // 1.导入自定义子组件
import router from "./router/index.js";
import http  from './util/http.js';       // 封装的http
import Cookies from 'js-cookie';
// 引入CSS文件
import './assets/reset.css';
import './assets/public.css';
import miAlert from './components/MiAlert/index.js';


// 自定义扩展Vue对象的原型对象Vue.prototype扩展
Vue.prototype.$http = http;
Vue.prototype.$cookies = Cookies;
Vue.prototype.$alert = miAlert;

new Vue({
        el: "#app",
        components: {                           // 2.注册自定义子组件
                App
        } ,
        template: "<App></App>"     ,// 3.使用自定义子组件
        router
});
