import Vue from 'vue'
import VueRouter from 'vue-router'
import panda from './panda'
import mycenter from './mycenter'
import mobileycling from './mobileycling'
import single from './single'
import account from './account'
import appstatic from './appstatic'
import moneysteward from './moneysteward'
import creditcard from './creditcard'


Vue.use(VueRouter)
const router = new VueRouter({
    base: "/panda_loan_app_web/",
    mode: 'history',
    routes: [
        ...panda, // 熊猫贷款
        ...mycenter, //个人中心单页面
        ...mobileycling, //手机回收
        ...single, //单个页面
        ...account, //记账软件
        ...appstatic, //动态传参的appH5页面
        ...moneysteward, //财管家
        ...creditcard //信用卡
    ]
})

router.beforeEach((to, from, next) => {
    /* 路由发生变化修改页面title */
    if (to.name) {
        document.title = to.name;
    }
    next();
})

export default router;