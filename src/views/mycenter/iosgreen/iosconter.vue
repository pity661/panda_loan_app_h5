<template>
    <div id="app">
        <!-- <h1>手机号：{{phone}}</h1>
        <h1>名字：{{name}}</h1>
        <h1>版本{{versionCode}}</h1>
        <h1>认证状态：{{isCertified}}</h1> -->
        <!-- 信息 -->
        <div class="background"></div>
        <div class="profile-head">
            <div class="profile-img">
                <img src="~@/assets/profileimg.png" alt="">
            </div>
            <div class="profile-phone">{{phone}}</div>
            <div class="profile-name">
                <div class="profile_namedata">{{name}}</div>
                <div class="isCertifiedstyle">
                      {{isCertified|capitalize}}
                </div>
            </div>
        </div>
        <!-- 多个表格 -->
        <div class="profile-tables">
            <div class="profile-tabs" @click="goHelp">
                <div class="profile-icons">
                    <img src="~@/assets/ioshelp.png" alt="">
                </div>
                <div class="profile-tabmenu">
                    <div class="profileicon-texs">
                        帮助中心
                    </div>
                    <div class="profileicons-right">
                        <img src="~@/assets/localtions.png" alt="">
                    </div>
                </div>
            </div>
            <div class="profile-tabs"  @click="goSetting">
                <div class="profile-icons">
                    <img src="~@/assets/iosgreensetting.png" alt="">
                </div>
                <div class="profile-tabmenu">
                    <div class="profileicon-texs">
                        设置
                    </div>
                    <div class="profileicons-right">
                        <img src="~@/assets/localtions.png" alt="">
                    </div>
                </div>
            </div>
            <div class="profile-tabs"  @click="goabouts" >
                <div class="profile-icons">
                    <img src="~@/assets/iosgreenabouts.png" alt="">
                </div>
                <div class="profile-tabmenu" style="border:none;">
                    <div class="profileicon-texs">
                        关于我们
                    </div>
                    <div class="profileicons-right">
                        <img src="~@/assets/localtions.png" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            phone:'',
            name:'',
            versionCode:'',
            isCertified:'',
        };
    },
    filters:{
        capitalize(value){
            if(value==1){
                return '已认证'
            }else{
                return '未认证'
            }
        }
    },
    methods: {
        getMycenterdata(){ //获取客户端传参
            var getPhone = this.$route.query.phone  
            var phone = getPhone.substr(0,3)+"****"+getPhone.substr(7);  
            this.phone =  phone //手机号码
            var getName = this.$route.query.name
            var substrName = getName.substr(getName.length-1,1)
            var name = "***"+substrName;  
            this.name = name //名称
            this.versionCode = this.$route.query.versionCode //版本号
            this.isCertified = this.$route.query.isCertified //认证状态
        }, 
        goSetting(){
            window.location.href = "http://www.pinganzhiyuan.com/panda_loan_app_web/setting"
        },
        goHelp(){
            window.location.href = "http://www.pinganzhiyuan.com/panda_loan_app_web/ioshelpcenter"
        },
        goabouts(){
            window.location.href = "http://www.pinganzhiyuan.com/panda_loan_app_web/iosabouts"
        }
    },
  mounted(){
    this.getMycenterdata()
  }
}
</script>

<style lang="scss" scoped>
$rem:1rem/40; //rem配置   
#app{
    background: #f5f5f5;
}
.background{
    position: relative;
    width: 100%;
    height: 260*$rem;
    background: #28a364;
}
// 个人信息
.profile-head{
    position: absolute;
    top: 50*$rem;
    left: 25*$rem;
    margin: 0 auto;
    padding: 25*$rem 0rem;
    width:700*$rem;
    height:auto;
    background:#fff;
    border-radius:10*$rem; 
    overflow: hidden;
    .profile-title{
        width: 100%;
        height: 88*$rem;
        line-height: 88*$rem;
        text-align: center;
        font-size: 30*$rem;
        color:#000;
    }
    .profile-img{
        margin: 0*$rem 0rem 20*$rem 0rem;
        text-align: center;
        img{
            width: 115*$rem;
        }
    }
    .profile-phone{
        text-align: center;
        font-size: 24*$rem;
        color:#000;
        overflow: hidden;
    }
    .profile-name{
        display: inline-block;
        margin-top: 15*$rem;
        width: 100%;
        height:auto;
        text-align: center;
        overflow: hidden;
        .profile_namedata{
            display: inline-block;
            width:auto;
            height:auto;
            font-size: 30*$rem;
            color:#000;
        }
        .isCertifiedstyle{
            position: relative;
            top:-4*$rem;
            display: inline-block;
            margin-left:10*$rem;
            width:auto;
            padding: 5*$rem;
            border: 2.1*$rem solid #f48a00;
            border-radius:0.2rem; 
            font-size: 18*$rem;
            color:#f48a00;
        }
    }
}


// 设置、关于我们表格
.profile-tables{
    margin: 0 auto;
    margin-top: 110*$rem;
    width: 700*$rem;
    height: auto;
    background: #fff;
    border-radius:10*$rem; 
    overflow: hidden;
    .profile-tabs{
        padding-left:25*$rem;
        width: 700*$rem;
        height: 105*$rem;
        background: #fff;
    }
    .profile-icons{
        float: left;
        width: 40*$rem;
        height: 105*$rem;
        line-height: 105*$rem;
        img{
            width: 100%;
            vertical-align: middle;
        }
    }
    .profile-tabmenu{ //菜单下载
        float: right;
        padding-right: 25*$rem;
        width: 610*$rem;
        height: 105*$rem;
        border-bottom: 2.1*$rem solid #d6d7dc;
        overflow: hidden;
        .profileicon-texs{
            float: left;
            width: 520*$rem;
            height: 105*$rem;
            line-height: 105*$rem;
            font-size: 28*$rem;
            color:#696969;
        }
        .profileicons-right{
            float: right;
            width: 20*$rem;
            height: 105*$rem;
            line-height: 105*$rem;
            img{
                width: 100%;
                vertical-align: middle;
            }
        }
    }
}
</style>