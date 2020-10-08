// 统一导入view文件夹中的所有页面级组件
// 并整合后统一导出
// 便于使用方代码更加优雅
import Home from './Home/Home.vue';
import Category from './Category/Category.vue';
import Taste from './Taste/Taste.vue';
import Cart from './Cart/Cart.vue';
import Profile from './Profile/Profile.vue';
import Login from './Login/Login.vue';
import List from './List/List.vue';
import Detail from './Detail/Detail.vue';
import LoginPhone from './Login/LoginPhone.vue';
import LoginPwd from './Login/LoginPwd.vue';
import Address from './Address/Address.vue';
import OrderConfirm from './OrderConfirm/OrderConfirm.vue';
import Pay from './Pay/Pay.vue';
import Order from './Order/Order.vue';
import Register from './Register/Register.vue';

export default {
        Home,
        Category,
        Taste,
        Cart,
        Profile,
        Login,
        List,
        Detail,
        LoginPhone,
        LoginPwd,
        Address,
        OrderConfirm,
        Pay,
        Order,
        Register,
};