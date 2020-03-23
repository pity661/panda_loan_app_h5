const debug = process.env.NODE_ENV === 'development' ? true : false;
// 测试环境地址
if (debug) {
    // var host = 'http://192.168.2.116:8080/panda_loan'; //倪军本级
    // var host = 'https://api.pinganzhiyuan.com/panda_loan'; //正式
    // var host = 'http://119.23.12.36:8081/panda_loan'; //测试
     var host = 'http://127.0.0.1:8080/panda_loan'; //huguo本机
    // var host = 'http://119.23.236.252:8080/panda_loan'; //huguo252测试
    // var host = 'http://192.168.2.181:8080/panda_loan'; //辉哥本机
} else {
    //正式环境地址 !!!注意，复制这里的地址的时候要去掉 https 中的 “s”，特此标记。
    var host = 'https://api.pinganzhiyuan.com/panda_loan'; //正式
    // var host = 'http://119.23.12.36:8081/panda_loan'; //测试
}

console.warn('当前resource: ', host);

let resources = {
    host: host,
    // graphQL查询Api
    graphQlApi: `${host}\/graphql`,
    users(id) {
        return `${host}\/users\/${id}`
    },
    imageCode() {
        return `${host}\/imageCaptchas`
    },
    smsCaptcha() {
        return `${host}\/smsCaptcha`
    },
    token() {
        return `${host}\/tokens`
    },
    landingPage() {
        return `${host}\/landingPage`
    },
    recordUrl() {
        return `${host}\/recordH5`
    },
    h5DownloadUrl() {
        return `${host}\/h5DownloadUrl`
    },
    recordDownload() {
        return `${host}\/recordDownload`
    },
    jsonParameter() { //APP内嵌H5页面取值
        return `${host}\/jsonParameter`
    },
    v2(userid, partner) { //百融测试
        return `${host}\/v2/partner/diversion/product/list?userId=` + userid + '&partner=' + partner
    },
    loan360() {
        return `${host}\/v2/partner/diversion/product/list`
    },
    client() { //认证状态
        return `${host}\/client`
    },
    getProductUrl() {
        return `${host}\/v2/partner/diversion/getProductUrl`
    }
};

export default resources;