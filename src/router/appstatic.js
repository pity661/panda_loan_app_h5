// APPH5静态页面理由
const Appabout = resolve => require.ensure([], () => resolve(require('../views/appStaticH5/Appabout.vue')), 'Appabout')
const Appaddress = resolve => require.ensure([], () => resolve(require('../views/appStaticH5/Appaddress.vue')), 'Appaddress')
const Appsetaddress = resolve => require.ensure([], () => resolve(require('../views/appStaticH5/Appsetaddress.vue')), 'Appsetaddress')
const Appagreement = resolve => require.ensure([], () => resolve(require('../views/appStaticH5/Appagreement.vue')), 'Appagreement')
const Appbankcard = resolve => require.ensure([], () => resolve(require('../views/appStaticH5/Appbankcard.vue')), 'Appbankcard')
const Appfeedback = resolve => require.ensure([], () => resolve(require('../views/appStaticH5/Appfeedback.vue')), 'Appfeedback')
const Apphelpcenter = resolve => require.ensure([], () => resolve(require('../views/appStaticH5/Apphelpcenter.vue')), 'Apphelpcenter')
const Appconter = resolve => require.ensure([], () => resolve(require('../views/appStaticH5/appconter.vue')), 'Appconter')
const Appaccounthelpcenter = resolve => require.ensure([], () => resolve(require('../views/appStaticH5/Appaccounthelpcenter.vue')), 'Appaccounthelpcenter')
const AppaccountAbouts = resolve => require.ensure([], () => resolve(require('../views/appStaticH5/AppaccountAbouts.vue')), 'AppaccountAbouts')
const AppaccountFeedback = resolve => require.ensure([], () => resolve(require('../views/appStaticH5/AppaccountFeedback.vue')), 'AppaccountFeedback')
const AppaccountFind = resolve => require.ensure([], () => resolve(require('../views/appStaticH5/AppaccountFind.vue')), 'AppaccountFind')
const AppaccountDetails = resolve => require.ensure([], () => resolve(require('../views/appStaticH5/AppaccountDetails.vue')), 'AppaccountDetails')


// 我的路由配置
const Appcoupon = resolve => require.ensure([], () => resolve(require('../views/appStaticH5/Appcoupon.vue')), 'Appcoupon')
export default [

    // APPH5静态页面个人中心块
    {
        path: '/appabout',
        component: Appabout,
        name: '关于我们',
        hidden: true
    },
    {
        path: '/appaddress',
        component: Appaddress,
        name: '我的收货地址',
        hidden: true
    },
    {
        path: '/appsetaddress',
        component: Appsetaddress,
        name: '添加地址',
        hidden: true
    },
    {
        path: '/appxieyi',
        component: Appagreement,
        name: '代收付协议',
        hidden: true
    },
    {
        path: '/appbankcard',
        component: Appbankcard,
        name: '绑定银行卡',
        hidden: true
    },
    {
        path: '/appfeedback',
        component: Appfeedback,
        name: '意见反馈',
        hidden: true
    },
    {
        path: '/apphelpcenter',
        component: Apphelpcenter,
        name: '帮助中心',
        hidden: true
    },
    {
        path: '/appcoupon',
        component: Appcoupon,
        name: '我的加价券',
        hidden: true
    },


    // 我的H5路由配置

    {
        path: '/appconter',
        component: Appconter,
        name: '我的',
        hidden: true
    },
    {
        path: '/appaccountabouts',
        component: AppaccountAbouts,
        name: '关于我们',
        hidden: true
    },
    {
        path: '/appaccounthelpcenter',
        component: Appaccounthelpcenter,
        name: '常见问题',
        hidden: true
    },


    // ios记账路由配置

    {
        path: '/appaccountfeedback',
        component: AppaccountFeedback,
        name: '意见反馈',
        hidden: true
    },
    {
        path: '/appaccountfind',
        component: AppaccountFind,
        name: '发现',
        hidden: true
    },
    {
        path: '/appaccountdetails',
        component: AppaccountDetails,
        name: '发现',
        hidden: true
    },









]