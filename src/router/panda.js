// 熊猫贷款不登录
const AppProductList = resolve => require.ensure([], () => resolve(require('../views/notLoginpanda/ProductList.vue')), 'AppProductList')
const NoDetailspage = resolve => require.ensure([], () => resolve(require('../views/notLoginpanda/Detailspage.vue')), 'NoDetailspage')
const NoDetailsOfclassification = resolve => require.ensure([], () => resolve(require('../views/notLoginpanda/DetailsOfclassification.vue')), 'DetailsOfclassification')
export default [

    // 不登录版本熊猫贷款
    {
        path: '/appProductList/:Uid',
        component: AppProductList,
        name: '首页',
        hidden: true
    },
    {
        path: '/noDetailspage',
        component: NoDetailspage,
        name: '',
        hidden: true
    },
    {
        path: '/appClassification',
        component: NoDetailsOfclassification,
        name: '',
        hidden: true
    }
]