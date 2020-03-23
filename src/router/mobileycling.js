// android回收：闪电手机周转换钱
const Sdaddress = resolve => require.ensure([], () => resolve(require('../views/androidSdH5/sdaddress.vue')), 'Sdaddress')
const Sdsetaddress = resolve => require.ensure([], () => resolve(require('../views/androidSdH5/sdsetaddress.vue')), 'Sdsetaddress')
const Sdhelp = resolve => require.ensure([], () => resolve(require('../views/androidSdH5/sdhelp.vue')), 'Sdhelp')
const Sdbankcard = resolve => require.ensure([], () => resolve(require('../views/androidSdH5/sdbankcard.vue')), 'Sdbankcard')
const Sdcoupon = resolve => require.ensure([], () => resolve(require('../views/androidSdH5/sdcoupon.vue')), 'Sdcoupon')
const Sdfeedback = resolve => require.ensure([], () => resolve(require('../views/androidSdH5/sdfeedback.vue')), 'Sdfeedback')
const Sdagreement = resolve => require.ensure([], () => resolve(require('../views/androidSdH5/sdagreement.vue')), 'Sdagreement')
const Sdabouts = resolve => require.ensure([], () => resolve(require('../views/androidSdH5/sdabouts.vue')), 'DidiaboutUs')

// ios滴滴白卡回收个人中心
const Didiaddress = resolve => require.ensure([], () => resolve(require('../views/IosdidiH5/didiaddress.vue')), 'Didiaddress')
const Didisetaddress = resolve => require.ensure([], () => resolve(require('../views/IosdidiH5/didisetaddress.vue')), 'Didisetaddress')
const Didihelpcenter = resolve => require.ensure([], () => resolve(require('../views/IosdidiH5/didihelpcenter.vue')), 'Didihelpcenter')
const DidiBindingBankcard = resolve => require.ensure([], () => resolve(require('../views/IosdidiH5/didiBindingBankcard.vue')), 'DidiBindingBankcard')
const Didicoupon = resolve => require.ensure([], () => resolve(require('../views/IosdidiH5/didicoupon.vue')), 'Didicoupon')
const Didifeedback = resolve => require.ensure([], () => resolve(require('../views/IosdidiH5/didifeedback.vue')), 'Didifeedback')
const Didiagreement = resolve => require.ensure([], () => resolve(require('../views/IosdidiH5/didiagreement.vue')), 'Didiagreement')
const DidiaboutUs = resolve => require.ensure([], () => resolve(require('../views/IosdidiH5/didiaboutUs.vue')), 'DidiaboutUs')

// 绿色安卓个人中心页面
const IosGreenAddress = resolve => require.ensure([], () => resolve(require('../views/IosGreenH5/Address.vue')), 'IosGreenAddress')
const IosGreenSetaddress = resolve => require.ensure([], () => resolve(require('../views/IosGreenH5/Setaddress.vue')), 'IosGreenSetaddress')
const IosGreenH5HelpCenter = resolve => require.ensure([], () => resolve(require('../views/IosGreenH5/HelpCenter.vue')), 'IosGreenH5HelpCenter')
const IosGreenBindingBankcard = resolve => require.ensure([], () => resolve(require('../views/IosGreenH5/BindingBankcard.vue')), 'IosGreenBindingBankcard')
const IosGreenCoupon = resolve => require.ensure([], () => resolve(require('../views/IosGreenH5/Coupon.vue')), 'IosGreenCoupon')
const IosGreenFeedback = resolve => require.ensure([], () => resolve(require('../views/IosGreenH5/Feedback.vue')), 'IosGreenFeedback')
const IosGreenAgreement = resolve => require.ensure([], () => resolve(require('../views/IosGreenH5/FeeDeductionAgreement.vue')), 'IosGreenAgreement')
const IosGreenH5AboutUs = resolve => require.ensure([], () => resolve(require('../views/IosGreenH5/AboutUs.vue')), 'IosGreenH5AboutUs')

// 绿色安卓个人中心页面
const AndroidGreenAddress = resolve => require.ensure([], () => resolve(require('../views/androidGreenH5/Address.vue')), 'AndroidGreenAddress')
const AndroidGreenSetaddress = resolve => require.ensure([], () => resolve(require('../views/androidGreenH5/Setaddress.vue')), 'AndroidGreenSetaddress')
const AndroidGreenH5HelpCenter = resolve => require.ensure([], () => resolve(require('../views/androidGreenH5/HelpCenter.vue')), 'AndroidGreenH5HelpCenter')
const AndroidGreenBindingBankcard = resolve => require.ensure([], () => resolve(require('../views/androidGreenH5/BindingBankcard.vue')), 'AndroidGreenBindingBankcard')
const AndroidGreenCoupon = resolve => require.ensure([], () => resolve(require('../views/androidGreenH5/Coupon.vue')), 'AndroidGreenCoupon')
const AndroidGreenFeedback = resolve => require.ensure([], () => resolve(require('../views/androidGreenH5/Feedback.vue')), 'AndroidGreenFeedback')
const AndroidGreenAgreement = resolve => require.ensure([], () => resolve(require('../views/androidGreenH5/FeeDeductionAgreement.vue')), 'AndroidGreenAgreement')
const AndroidGreenH5AboutUs = resolve => require.ensure([], () => resolve(require('../views/androidGreenH5/AboutUs.vue')), 'AndroidGreenH5AboutUs')

// 红色
const AndroidRedAddress = resolve => require.ensure([], () => resolve(require('../views/androidRedH5/Address.vue')), 'AndroidRedAddress')
const AndroidRedSetaddress = resolve => require.ensure([], () => resolve(require('../views/androidRedH5/Setaddress.vue')), 'AndroidRedSetaddress')
const AndroidRedH5HelpCenter = resolve => require.ensure([], () => resolve(require('../views/androidRedH5/HelpCenter.vue')), 'AndroidRedH5HelpCenter')
const AndroidRedMyCoupon = resolve => require.ensure([], () => resolve(require('../views/androidRedH5/MyCoupon.vue')), 'AndroidRedBindingBankcard')
const AndroidRedBindingBankcard = resolve => require.ensure([], () => resolve(require('../views/androidRedH5/BindingBankcard.vue')), 'AndroidRedBindingBankcard')
const AndroidRedCoupon = resolve => require.ensure([], () => resolve(require('../views/androidRedH5/Coupon.vue')), 'AndroidRedCoupon')
const AndroidRedFeedback = resolve => require.ensure([], () => resolve(require('../views/androidRedH5/Feedback.vue')), 'AndroidRedFeedback')
const AndroidRedAgreement = resolve => require.ensure([], () => resolve(require('../views/androidRedH5/FeeDeductionAgreement.vue')), 'AndroidRedAgreement')
const AndroidRedH5AboutUs = resolve => require.ensure([], () => resolve(require('../views/androidRedH5/AboutUs.vue')), 'AndroidRedH5AboutUs')

// 淡棕色
const AndroidBrownAddress = resolve => require.ensure([], () => resolve(require('../views/androidBrownH5/Address.vue')), 'AndroidBrownAddress')
const AndroidBrownSetaddress = resolve => require.ensure([], () => resolve(require('../views/androidBrownH5/Setaddress.vue')), 'AndroidBrownSetaddress')
const AndroidBrownH5HelpCenter = resolve => require.ensure([], () => resolve(require('../views/androidBrownH5/HelpCenter.vue')), 'AndroidBrownH5HelpCenter')
const AndroidBrownBindingBankcard = resolve => require.ensure([], () => resolve(require('../views/androidBrownH5/BindingBankcard.vue')), 'AndroidBrownBindingBankcard')
const AndroidBrownCoupon = resolve => require.ensure([], () => resolve(require('../views/androidBrownH5/Coupon.vue')), 'AndroidBrownCoupon')
const AndroidBrownFeedback = resolve => require.ensure([], () => resolve(require('../views/androidBrownH5/Feedback.vue')), 'AndroidBrownFeedback')
const AndroidBrownAgreement = resolve => require.ensure([], () => resolve(require('../views/androidBrownH5/FeeDeductionAgreement.vue')), 'AndroidBrownAgreement')
const AndroidBrownH5AboutUs = resolve => require.ensure([], () => resolve(require('../views/androidBrownH5/AboutUs.vue')), 'AndroidBrownH5AboutUs')

// ios红色回收个人中心
const IosRedH5HelpCenter = resolve => require.ensure([], () => resolve(require('../views/iosReclaimH5/HelpCenter.vue')), 'IosRedH5HelpCenter')
const IosRedH5AboutUs = resolve => require.ensure([], () => resolve(require('../views/iosReclaimH5/AboutUs.vue')), 'IosRedH5AboutUs')
const IosRedSetaddress = resolve => require.ensure([], () => resolve(require('../views/iosReclaimH5/Setaddress.vue')), 'IosRedSetaddress')
const IosRedAddress = resolve => require.ensure([], () => resolve(require('../views/iosReclaimH5/Address.vue')), 'IosRedAddress')
const IosRedFeedback = resolve => require.ensure([], () => resolve(require('../views/iosReclaimH5/Feedback.vue')), 'IosRedFeedback')
const IosRedBindingBankcard = resolve => require.ensure([], () => resolve(require('../views/iosReclaimH5/BindingBankcard.vue')), 'IosRedBindingBankcard')
const IosRedCoupon = resolve => require.ensure([], () => resolve(require('../views/iosReclaimH5/Coupon.vue')), 'IosRedCoupon')
const IosRedAgreement = resolve => require.ensure([], () => resolve(require('../views/iosReclaimH5/FeeDeductionAgreement.vue')), 'IosRedAgreement')



export default [

    // android回收：闪电手机周转换钱
    {
        path: '/sdhelp',
        component: Sdhelp,
        name: '帮助中心',
        hidden: true
    },
    {
        path: '/sdabouts',
        component: Sdabouts,
        name: '关于我们',
        hidden: true
    },
    {
        path: '/sdsetaddress',
        component: Sdsetaddress,
        name: '添加地址',
        hidden: true
    },
    {
        path: '/sdaddress',
        component: Sdaddress,
        name: '我的收货地址',
        hidden: true
    },
    {
        path: '/sdcoupon',
        component: Sdcoupon,
        name: '我的加价券',
        hidden: true
    },
    {
        path: '/sdfeedback',
        component: Sdfeedback,
        name: '意见反馈',
        hidden: true
    },
    {
        path: '/sdbankcard',
        component: Sdbankcard,
        name: '绑定银行卡',
        hidden: true
    },
    {
        path: '/sdagreement',
        component: Sdagreement,
        name: '代收付协议',
        hidden: true
    },

    // 滴滴白卡回收个人中心H5页面
    {
        path: '/dihelpcenter',
        component: Didihelpcenter,
        name: '帮助中心',
        hidden: true
    },
    {
        path: '/diaboutUs',
        component: DidiaboutUs,
        name: '关于我们',
        hidden: true
    },
    {
        path: '/disetaddress',
        component: Didisetaddress,
        name: '添加地址',
        hidden: true
    },
    {
        path: '/diaddress',
        component: Didiaddress,
        name: '我的收货地址',
        hidden: true
    },
    {
        path: '/dicoupon',
        component: Didicoupon,
        name: '我的加价券',
        hidden: true
    },
    {
        path: '/difeedback',
        component: Didifeedback,
        name: '意见反馈',
        hidden: true
    },
    {
        path: '/dibindingbankcard',
        component: DidiBindingBankcard,
        name: '绑定银行卡',
        hidden: true
    },
    {
        path: '/diagreement',
        component: Didiagreement,
        name: '代收付协议',
        hidden: true
    },


    //IOS端绿色手机回收H5页面
    {
        path: '/iosgreenhelpcenter',
        component: IosGreenH5HelpCenter,
        name: '帮助中心',
        hidden: true
    },
    {
        path: '/iosgreenaboutUs',
        component: IosGreenH5AboutUs,
        name: '关于我们',
        hidden: true
    },
    {
        path: '/iosgreensetaddress',
        component: IosGreenSetaddress,
        name: '添加地址',
        hidden: true
    },
    {
        path: '/iosgreenaddress',
        component: IosGreenAddress,
        name: '我的收货地址',
        hidden: true
    },
    {
        path: '/iosgreencoupon',
        component: IosGreenCoupon,
        name: '我的加价券',
        hidden: true
    },
    {
        path: '/iosgreenfeedback',
        component: IosGreenFeedback,
        name: '意见反馈',
        hidden: true
    },
    {
        path: '/iosgreencard',
        component: IosGreenBindingBankcard,
        name: '绑定银行卡',
        hidden: true
    },
    {
        path: '/iosgreenagreement',
        component: IosGreenAgreement,
        name: '代收付协议',
        hidden: true
    },

    // Android端绿色手机回收H5页面
    {
        path: '/androidgreenhelpcenter',
        component: AndroidGreenH5HelpCenter,
        name: '帮助中心',
        hidden: true
    },
    {
        path: '/androidgreenaboutUs',
        component: AndroidGreenH5AboutUs,
        name: '关于我们',
        hidden: true
    },
    {
        path: '/androidgreensetaddress',
        component: AndroidGreenSetaddress,
        name: '添加地址',
        hidden: true
    },
    {
        path: '/androidgreenaddress',
        component: AndroidGreenAddress,
        name: '我的收货地址',
        hidden: true
    },
    {
        path: '/androidgreencoupon',
        component: AndroidGreenCoupon,
        name: '我的加价券',
        hidden: true
    },
    {
        path: '/androidgreenfeedback',
        component: AndroidGreenFeedback,
        name: '意见反馈',
        hidden: true
    },
    {
        path: '/androidgreencard',
        component: AndroidGreenBindingBankcard,
        name: '绑定银行卡',
        hidden: true
    },
    {
        path: '/androidgreenagreement',
        component: AndroidGreenAgreement,
        name: '代收付协议',
        hidden: true
    },

    // ios红色回收个人中心
    {
        path: '/iosredh5helpcenter',
        component: IosRedH5HelpCenter,
        name: '帮助中心',
        hidden: true
    },
    {
        path: '/iosredh5aboutUs',
        component: IosRedH5AboutUs,
        name: '关于我们',
        hidden: true
    },
    {
        path: '/iosredh5setaddress',
        component: IosRedSetaddress,
        name: '添加地址',
        hidden: true
    },
    {
        path: '/iosredh5address',
        component: IosRedAddress,
        name: '我的收货地址',
        hidden: true
    },
    {
        path: '/iosredh5coupon',
        component: IosRedCoupon,
        name: '我的加价券',
        hidden: true
    },
    {
        path: '/iosredh5feedback',
        component: IosRedFeedback,
        name: '意见反馈',
        hidden: true
    },
    {
        path: '/iosredh5card',
        component: IosRedBindingBankcard,
        name: '绑定银行卡',
        hidden: true
    },
    {
        path: '/iosredh5agreement',
        component: IosRedAgreement,
        name: '代收付协议',
        hidden: true
    },


    // 淡棕色手机回收H5页面

    {
        path: '/androidbrownhelpcente',
        component: AndroidBrownH5HelpCenter,
        name: '帮助中心',
        hidden: true
    },
    {
        path: '/androidbrownaboutUs',
        component: AndroidBrownH5AboutUs,
        name: '关于我们',
        hidden: true
    },
    {
        path: '/androidbrownsetaddress',
        component: AndroidBrownSetaddress,
        name: '添加地址',
        hidden: true
    },
    {
        path: '/androidbrownaddress',
        component: AndroidBrownAddress,
        name: '我的收货地址',
        hidden: true
    },
    {
        path: '/androidbrowncoupon',
        component: AndroidBrownCoupon,
        name: '我的加价券',
        hidden: true
    },
    {
        path: '/androidbrownfeedback',
        component: AndroidBrownFeedback,
        name: '意见反馈',
        hidden: true
    },
    {
        path: '/androidbrowncard',
        component: AndroidBrownBindingBankcard,
        name: '绑定银行卡',
        hidden: true
    },
    {
        path: '/androidbrownagreement',
        component: AndroidBrownAgreement,
        name: '代收付协议',
        hidden: true
    },

    // android红色手机回收h5页面
    {
        path: '/androidredHelpCenter',
        component: AndroidRedH5HelpCenter,
        name: '帮助中心',
        hidden: true
    },
    {
        path: '/androidRedAboutUs',
        component: AndroidRedH5AboutUs,
        name: '关于我们',
        hidden: true
    },
    {
        path: '/androidRedSetaddress',
        component: AndroidRedSetaddress,
        name: '添加地址',
        hidden: true
    },
    {
        path: '/androidRedAddress',
        component: AndroidRedAddress,
        name: '我的收货地址',
        hidden: true
    },
    {
        path: '/androidRedCoupon',
        component: AndroidRedCoupon,
        name: '我的加价券',
        hidden: true
    },
    {
        path: '/androidRedFeedback',
        component: AndroidRedFeedback,
        name: '意见反馈',
        hidden: true
    },
    {
        path: '/androidRedBindingBankcard',
        component: AndroidRedBindingBankcard,
        name: '绑定银行卡',
        hidden: true
    },
    {
        path: '/androidRedAgreement',
        component: AndroidRedAgreement,
        name: '代收付协议',
        hidden: true
    }
]