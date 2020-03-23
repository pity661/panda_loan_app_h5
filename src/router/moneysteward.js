const Mslogin = resolve => require.ensure([], () => resolve(require('../views/moneysteward/mslogin.vue')), 'Mslogin') //登录
const Msreement = resolve => require.ensure([], () => resolve(require('../views/moneysteward/msreement.vue')), 'Msreement') //协议
const Mslist = resolve => require.ensure([], () => resolve(require('../views/moneysteward/mslist.vue')), 'Mslist') //首页
const Msclassify = resolve => require.ensure([], () => resolve(require('../views/moneysteward/msclassify.vue')), 'Msclassify') //首页分类
const Msdetails = resolve => require.ensure([], () => resolve(require('../views/moneysteward/msdetails.vue')), 'Msdetails') //甲方详情页
const Mstabbar = resolve => require.ensure([], () => resolve(require('../views/moneysteward/mstabbar.vue')), 'Mstabbar') //TABBAR
const Msconter = resolve => require.ensure([], () => resolve(require('../views/moneysteward/msconter.vue')), 'Msconter') //我的
const Msaboutus = resolve => require.ensure([], () => resolve(require('../views/moneysteward/msaboutus.vue')), 'Msaboutus') //关于我们
const Mssetting = resolve => require.ensure([], () => resolve(require('../views/moneysteward/mssetting.vue')), 'Mssetting') //设置

export default [

    {
        path: '/mslogin/:Uid',
        component: Mslogin,
        name: '登录',
        hidden: true
    },
    {
        path: '/msreement',
        component: Msreement,
        name: '注册协议',
        hidden: true
    },
    {
        path: '/msclassify',
        component: Msclassify,
        name: '',
        hidden: true
    },
    {
        path: '/msdetails',
        component: Msdetails,
        name: '',
        hidden: true
    },
    {
        path: '/msaboutus',
        component: Msaboutus,
        name: '关于我们',
        hidden: true
    },
    {
        path: '/mssetting',
        component: Mssetting,
        name: '设置',
        hidden: true
    },
    {
        path: '/mstabbar',
        component: Mstabbar,
        children: [{
                path: '/mslist',
                component: Mslist,
                name: 'mslist',
                hidden: true
            },
            {
                path: '/msconter',
                component: Msconter,
                name: 'msconter',
                hidden: true,
            },

        ]
    },




]