// 用户注册协议协议
const Appagreement = resolve => require.ensure([], () => resolve(require('../views/account/accountPn/agreement.vue')), 'Appagreement')

// 用平安花记账页面
const Pnaccountabouts = resolve => require.ensure([], () => resolve(require('../views/account/accountPn/pnaccountabouts.vue')), 'Pnaccountabouts')
const Pnaccountfeedback = resolve => require.ensure([], () => resolve(require('../views/account/accountPn/pnaccountfeedback.vue')), 'Pnaccountfeedback')
const Pnaccountind = resolve => require.ensure([], () => resolve(require('../views/account/accountPn/pnaccountind.vue')), 'Pnaccountind')
const Pnaccountdetails = resolve => require.ensure([], () => resolve(require('../views/account/accountPn/pnaccountdetails.vue')), 'Pnaccountdetails')

// 红色版本记账页面
const Redaccountabouts = resolve => require.ensure([], () => resolve(require('../views/account/RedaccountH5/redaccountAbouts.vue')), 'Redaccountabouts')
const RedAccountfeedback = resolve => require.ensure([], () => resolve(require('../views/account/RedaccountH5/redaccountFeedback.vue')), 'RedAccountfeedback')
const RedAccountfind = resolve => require.ensure([], () => resolve(require('../views/account/RedaccountH5/redaccountFind.vue')), 'RedAccountfind')
const RedAccountDetails = resolve => require.ensure([], () => resolve(require('../views/account/RedaccountH5/redaccountDetails.vue')), 'RedAccountDetails')

// 记账H5页面
const Accountabouts = resolve => require.ensure([], () => resolve(require('../views/account/accountH5/accountAbouts.vue')), 'Accountabouts')
const Accountfeedback = resolve => require.ensure([], () => resolve(require('../views/account/accountH5/accountFeedback.vue')), 'Accountfeedback')
const Accountfind = resolve => require.ensure([], () => resolve(require('../views/account/accountH5/accountFind.vue')), 'Accountfind')
const AccountDetails = resolve => require.ensure([], () => resolve(require('../views/account/accountH5/accountDetails.vue')), 'AccountDetails')

export default [

    // 注册协议
    {
        path: '/appagreement',
        component: Appagreement,
        name: '注册协议',
        hidden: true
    },
    // 用平安花记账页面
    {
        path: '/pnaccountabouts',
        component: Pnaccountabouts,
        name: '关于我们',
        hidden: true
    },
    {
        path: '/pnaccountfeedback',
        component: Pnaccountfeedback,
        name: '意见反馈',
        hidden: true
    },
    {
        path: '/pnaccountind',
        component: Pnaccountind,
        name: '发现',
        hidden: true
    },
    {
        path: '/pnaccountdetails',
        component: Pnaccountdetails,
        name: '发现',
        hidden: true
    },

    // 红色版本记账H5页面
    {
        path: '/redaccountabouts',
        component: Redaccountabouts,
        name: '关于我们',
        hidden: true
    },
    {
        path: '/redaccountfeedback',
        component: RedAccountfeedback,
        name: '意见反馈',
        hidden: true
    },
    {
        path: '/redaccountfind',
        component: RedAccountfind,
        name: '发现',
        hidden: true
    },
    {
        path: '/redaccountDetails',
        component: RedAccountDetails,
        name: '发现',
        hidden: true
    },

    // 记账H5页面
    {
        path: '/accountabouts',
        component: Accountabouts,
        name: '关于我们',
        hidden: true
    },
    {
        path: '/accountfeedback',
        component: Accountfeedback,
        name: '意见反馈',
        hidden: true
    },
    {
        path: '/accountfind',
        component: Accountfind,
        name: '发现',
        hidden: true
    },
    {
        path: '/accountDetails',
        component: AccountDetails,
        name: '发现',
        hidden: true
    },

]