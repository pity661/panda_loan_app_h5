import babelpolyfill from 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router/index'
import resources from './resources'
import rem from './config/rem' //rem js配置
import axios from 'axios'
import md5 from 'js-md5'
import VueLazyload from 'vue-lazyload' //默认图
import { Picker } from 'mint-ui';
import { Swipe, SwipeItem } from 'mint-ui';
import { Loadmore } from 'mint-ui';
import { Spinner } from 'mint-ui';
// require('./mock') //此部分引入的是我们所编写的mockjs文档
// 等待loading
Vue.component(Spinner.name, Spinner);
// 下拉加载
Vue.component(Loadmore.name, Loadmore);
// swiper
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
// 地址
Vue.component(Picker.name, Picker);
// vue图片懒加载
Vue.use(VueLazyload, {
    preLoad: 1.3,
    error: require('@/assets/imgdefault.png'),
    loading: require('@/assets/imgdefault.png'),
    attempt: 1
})


Vue.prototype.$ajax = axios;

new Vue({
    el: '#app',
    router,
    render: h => h(App)
}).$mount('#app')