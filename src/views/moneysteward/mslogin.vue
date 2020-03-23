<template>
    <div class="mslogin">
        <!-- logo -->
        <div class="mslogo">
            <img src="~@/assets/qjjguanjialogo.jpg" alt="">
        </div>
        <!-- phone -->
        <div class="msphoneinput"> 
            <div class="msphoneinputimg">
            <img src="~@/assets/loginicon.png" alt="">
            </div>
            <input type="number" class="pnone-input" placeholder="请输入手机号码" v-model="phone"/>
        </div>
        <!-- password -->
        <div class="mspasswordinput"> 
            <div class="mspasswordinputimg">
            <img src="~@/assets/duanxinicon.png" alt="">
            </div>
            <input type="number" class="password-input" placeholder="请填写短信验证码" v-model="smsCode"/>
            <div class="password-button" v-bind:class="{passwordClick:is_show}" :value="count+codeButtonText"  @click="getCode()">{{overtime+count+codeButtonText}}</div>
        </div>
        <!-- imgcode -->
        <div class="msimgcode" v-if="picCode"> 
            <div class="msimgcodeimg">
                <img src="~@/assets/imgcode.png" alt="">
            </div>
            <input type="number" class="msimgcode-input" placeholder="请填写验证码" v-model="imaCode"/>
            <div class="imgcode"> 
                <span></span>
                <img :src="imageCode" alt="" class="msgetcodeimg" @click="getImageCode">
            </div>
        </div>
        <!-- login -->
        <div class="msloginbutton"  @click="comfirm()">
            登录
        </div> 
        <!-- mscopy -->
        <div class="mscopy">
            <span class="mscopy-left">点击立即借款既表示同意</span>
            <span class="mscopy-right" @click="agreement()">《平台服务协议》</span>
        </div>
    </div>
</template>

<script>
    import resources from "../../resources";
    import { Toast } from 'mint-ui';

    export default {
        data() {
            return {
                iphone: false,
                picCode: false,
                is_show: false,
                is_click: false,
                codeButtonText: '获取验证码',
                show: true,
                overtime:false,
                count: '',
                timer: null,
                flagNum: 0,
                imageCode: '',
                Sid: '0',
                phone: '',
                smsCode: '',
                imaCode: '',
                keySMSCapt: '',
                keyImage:'',
                Uid: this.$route.params.Uid,
                overtime:''
            };
        },
        methods: {
            agreement(){ //跳转协议
                this.$router.push({ path: '/msreement'  })
            },
            toProduct(){ //跳转产品列表页面
                this.$router.push({ path: '/mslist' })
            },
            getCode(){
                //倒计时的时候不能点按钮
                if (this.is_show) {return;}
                //如果输入的手机号不符合格式直接返回，不走下面的逻辑
                if (!(/^1\d{10}$/.test(this.phone))){ Toast('手机号格式不符');;return ;}
                //获取验证码
                this.smsCaptcha();
                //倒计时开始
                this.is_show = true;
                this.is_click = true;
                this.codeButtonText = "S";
                this.overtime = '剩余';
                const TIME_COUNT = 60;
                if (!this.timer) {
                    this.count = TIME_COUNT;
                    this.show = false;
                    this.timer = setInterval(() => {
                        if (this.count > 0 && this.count <= TIME_COUNT) {
                            this.count--;
                        } else {
                            this.show = true;
                            clearInterval(this.timer);
                            this.timer = null;
                            this.count = '';
                            this.codeButtonText = '获取验证码';
                            this.is_show = false;
                            this.overtime = '';
                        }
                    }, 1000)
                }
            },
            smsCaptcha(){ //表单手机号正确时调用返回验证码
                let url = resources.smsCaptcha();
                let params = {
                    'phone': this.phone
                }
                var qs = require('qs');
                this.$ajax.post(url, qs.stringify(params),{
                    headers: {
                        'H5-Web-Name': 'moneysteward',
                        'Landing-Channel-Uid': this.Uid,
                        'Sid': this.Sid,
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                }).then(res => {
                    // console.log(res)
                    this.keySMSCapt = res.data.obj1.keySMSCapt;
                })
            },
            comfirm(){
                if (!this.is_click) {
                    return ;
                }
                if (this.phone == '') {
                    Toast('手机号不能为空');
                    return ;
                } else if (this.smsCode == ''){
                    Toast('短信验证码不能为空');
                    return ;
                }
                if (this.flagNum < 4) {
                    this.postMes();
                    this.flagNum ++;
                } else {
                    if (this.imaCode == '') {
                        Toast('图片验证码不能为空');
                        return ;
                    }
                    this.postMes();
                }
            },
            postMes(){  //登录
                let url = resources.token();
                let params = { }
                if (this.keyImage != '') {
                    params = {
                        'username': this.phone,
                        'keySMSCapt': this.keySMSCapt,
                        'smsCapt': this.smsCode,
                        'keyImageCapt': this.keyImage,
                        'imageCapt': this.imaCode
                    }
                } else {
                    params = {
                        'username': this.phone,
                        'keySMSCapt': this.keySMSCapt,
                        'smsCapt': this.smsCode
                    }
                }
                var qs = require('qs');
                this.$ajax.post(url, qs.stringify(params), {
                    headers: {
                        'H5-Web-Name': 'moneysteward',
                        'Landing-Channel-Uid': this.Uid,
                        'Sid': this.Sid,
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                }).then(res => {
                    this.toProduct()
                    // console.log(res.data)
                    localStorage.setItem("Uid",this.Uid)
                    localStorage.setItem("userId",res.data.obj1.id)
                    localStorage.setItem("phone",this.phone)
                }).catch(error => {
                    Toast(error.response.data.statusMsg);
                    if (error.response.data.statusMsg === '短信验证码不正确') {
                        this.smsCode = '';
                    }
                    if (this.flagNum > 2) {
                        this.imaCode = '';
                        this.getImageCode()
                    }
                });
            },
            enterMes(){
                let url = resources.landingPage();
                var qs = require('qs');
                let params = { }
                this.$ajax.post(url,qs.stringify(params),{
                    headers: {
                        'H5-Web-Name': 'moneysteward',
                        'Landing-Channel-Uid': this.Uid,
                        'Sid': this.Sid,
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                }).then(res => {
                    // console.log(res)
                })
            },
            getImageCode(){ //获取验证码
                let url = resources.imageCode();
                var qs = require('qs');
                let params = { };
                this.$ajax.post(url, qs.stringify(params), {
                    headers: {
                        'H5-Web-Name': 'moneysteward',
                        'Landing-Channel-Uid': this.Uid,
                        'Sid': this.Sid,
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    responseType: 'arraybuffer'
                }).then(res => {
                    // console.log(res.data)
                    this.keyImage = res.headers.keyimagecapt
                    return 'data:image/jpeg;base64,' + btoa(
                    new Uint8Array(res.data)
                        .reduce((data, byte) => data + String.fromCharCode(byte), '')
                    );
                }).then(data => {
                    // console.log(data)
                    this.imageCode = data;
                    this.picCode = true;
                });
            },
            createSid(){  //生成用户操作唯一标识
                this.Sid = this.S4()+"-"+this.S4()+"-"+this.S4()+"-"+this.S4()+"-"+(new Date()).valueOf().toString(16);
            },
            S4() {     //生成一个4位16进制字符串
                return (((1+Math.random())*0x10000)|0).toString(16).substring(1);  
            }
        },
        mounted(){
            this.createSid();
            this.enterMes();
        },
        created(){
            if(localStorage.getItem("userId")==null){

            }else{
                this.$router.push({ path: '/mslist' })
            }
        }
    };

</script>

<style lang="scss" scoped>
    $rem:1rem/40;
    .mslogin{ //最外层
        .mslogo{ // logo
            margin: 258*$rem 0rem 75*$rem 0rem;
            text-align: center;
            img{
                width: 145*$rem;
            }
        }
        .msphoneinput{ //手机号
            margin:0 auto;
            margin-bottom: 40*$rem;
            width: 565*$rem;
            height: 85*$rem;
            line-height:85*$rem;
            background: #f9f9f9;
            border-top-left-radius:50*$rem;
            border-top-right-radius:50*$rem;
            border-bottom-right-radius:50*$rem;
            border-bottom-left-radius:50*$rem;
            .msphoneinputimg{
                float: left;
                margin-left: 35*$rem;
                margin-right: 20*$rem;
                width: 30*$rem;
                height: 85*$rem;
                line-height:85*$rem;
                img{
                    vertical-align: middle;
                    width:30*$rem;
                }
            }
            input{
                float: left;
                width: 400*$rem;
                height: 85*$rem;
                line-height:85*$rem;
                font-size: 26*$rem;
                background: #f9f9f9;
                color:#b2b2b2;
            }
            input::-webkit-input-placeholder{
                text-align: left;
                color: #b2b2b2;
                font-size: 26*$rem;
                color:rgb(148,148,148);
            }
        }
        .mspasswordinput{ //密码
            margin:0 auto;
            width: 565*$rem;
            height: 85*$rem;
            line-height:85*$rem;
            background: #f9f9f9;
            border-top-left-radius:50*$rem;
            border-top-right-radius:50*$rem;
            border-bottom-right-radius:50*$rem;
            border-bottom-left-radius:50*$rem;
            .mspasswordinputimg{
                float: left;
                margin-left: 35*$rem;
                margin-right: 20*$rem;
                width: 30*$rem;
                height: 85*$rem;
                line-height:85*$rem;
                img{
                    vertical-align: middle;
                    width:30*$rem;
                }
            }
            input{
                float: left;
                width: 250*$rem;
                height: 85*$rem;
                line-height:85*$rem;
                font-size: 26*$rem;
                background: #f9f9f9;
                color:#b2b2b2;
            }
            input::-webkit-input-placeholder{
                text-align: left;
                color: #b2b2b2;
                font-size: 26*$rem;
                color:rgb(148,148,148);
            }
            .password-button{
                margin-top:30*$rem;
                float:right;
                padding-left:15*$rem;
                margin-right:35*$rem;
                width: 150*$rem;
                height:27*$rem;
                line-height:27*$rem;
                border-left:1px solid #fb4d3e;
                font-size:25*$rem;
                color:#fb4d3e;
                text-align:center;
                overflow:hidden;
            }
        }
        .msimgcode{//图片验证码
            margin:0 auto;
            margin-top:40*$rem;
            width: 565*$rem;
            height: 85*$rem;
            line-height:85*$rem;
            background: #f9f9f9;
            border-top-left-radius:50*$rem;
            border-top-right-radius:50*$rem;
            border-bottom-right-radius:50*$rem;
            border-bottom-left-radius:50*$rem;
            .msimgcodeimg{
                float: left;
                margin-left: 35*$rem;
                margin-right: 20*$rem;
                width: 30*$rem;
                height: 85*$rem;
                line-height:85*$rem;
                img{
                    vertical-align: middle;
                    width:30*$rem;
                }
            }
            .msimgcode-input{
                float: left;
                width: 250*$rem;
                height: 85*$rem;
                line-height:85*$rem;
                font-size: 26*$rem;
                background: #f9f9f9;
                color:#b2b2b2;
                .msimgcode-input::-webkit-input-placeholder{
                    text-align: left;
                    color: #b2b2b2;
                    font-size: 26*$rem;
                    color:rgb(148,148,148);
                }
            }
            .msimgcode-code{
                margin-top:30*$rem;
                float:right;
                padding-left:15*$rem;
                margin-right:35*$rem;
                width: 1*$rem;
                height:25*$rem;
                line-height:25*$rem;
                border-left:1px solid #fb4d3e;
                font-size:25*$rem;
                color:#fb4d3e;
                text-align:center;
                overflow:hidden;
            }
            .imgcode{
                width:150*$rem;
                margin-right:35*$rem;
                float:right;
                span{
                    margin-top:30*$rem;
                    margin-right:15*$rem;
                    float:left;
                    width: 2.1*$rem;
                    height:27*$rem;
                    line-height:25*$rem;
                    border-left:2.1*$rem  solid #fb4d3e;
                }
                img{
                    margin-top:20*$rem;
                    float:right;
                    display:block;
                    width: 120*$rem;
                    height:50*$rem;
                }
            }
        }
        .msloginbutton{ //login
            margin: 0 auto;
            margin-top:50*$rem;
            width: 565*$rem;
            height:80*$rem;
            background:#fb4d3e;
            line-height:80*$rem;
            color:#fff;
            text-align:center;
            font-size:30*$rem;
            border-top-left-radius:50*$rem;
            border-top-right-radius:50*$rem;
            border-bottom-right-radius:50*$rem;
            border-bottom-left-radius:50*$rem;
        }
        .mscopy{ //注册协议
            margin: 0 auto;
            width: 565*$rem;
            height: auto;
            margin-top:24*$rem;
            text-align: center;
            overflow: hidden;
            .mscopy-left{
                color: #666;
                font-size: 22*$rem;
            }
            .mscopy-right{
                color: #e24637;
                font-size: 22*$rem;
            }
        }
    }
</style>
