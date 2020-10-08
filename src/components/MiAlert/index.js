// 以函数形式调用的组件写法
import Vue from 'vue';
import MiAlert from './MiAlert.vue';

// const MiAlertConstructor = Vue.extend(require('./MiAlert.vue').default);
// 创建一个MiAlert组件的构造函数MiAlertConstructor
const MiAlertConstructor = Vue.extend(MiAlert);

export default (text) => {
        // new MiAlertConstructor().$mount(document.getElementById('root'));
        // 动态new创建MiAlert组件，并挂载渲染到document.body中
        const instance =   new MiAlertConstructor({ data: { text } }).$mount();
        document.body.appendChild(instance.$el);
};
