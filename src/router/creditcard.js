const Creditcardh5 = resolve => require.ensure([], () => resolve(require('../views/CreditCard/creditcardh5.vue')), 'Creditcardh5') //app信用卡页面
export default [

    {
        path: '/creditcardh5/',
        component: Creditcardh5,
        name: '信用卡',
        hidden: true
    }


]