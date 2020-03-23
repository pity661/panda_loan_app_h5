const DmpProductlist = resolve => require.ensure([], () => resolve(require('../views/dmpProcuct/dmpProductlist.vue')), 'DmpProductlist') //DMP流量分析
const mockdemo = resolve => require.ensure([], () => resolve(require('../views/singer/mock.vue')), 'mockdemo') //测试
const demo = resolve => require.ensure([], () => resolve(require('../views/singer/demo.vue')), 'demo') //测试2
export default [

    {
        path: '/dmpproductlist/:partner',
        component: DmpProductlist,
        name: '首页',
        hidden: true
    },
    {
        path: '/mockdemo',
        component: mockdemo,
        name: '首页',
        hidden: true
    },
    {
        path: '/demo',
        component: demo,
        name: '测试传参',
        hidden: true
    },


]