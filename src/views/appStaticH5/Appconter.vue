<template>
    <div id="app">
        <div class="profile-head" ref="profilehead">
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
        <!-- 单个表格 -->
        <div class="profile-table">
            <div class="profile-tab"  @click="goHelp">
                <div class="profile-icon">
                    <img :src="icon1" alt="">
                </div>
                <div class="profileicon-text">
                    帮助中心
                </div>
                <div class="profileicon-right">
                    <img src="~@/assets/localtions.png" alt="">
                </div>
            </div>
        </div>
        <!-- 多个表格 -->
        <div class="profile-tables">
            <div class="profile-tabs"  @click="goSetting">
                <div class="profile-icons">
                    <img :src="icon2" alt="">
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
                    <img :src="icon3" alt="">
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
import resources from "../../resources";
import qs from 'qs'
export default {
    data() {
        return {
            phone:'',
            name:'',
            versionCode:'',
            isCertified:'',
            packageName:this.$route.query.packageName,
            icon1:'',
            icon2:'',
            icon3:'',
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
        getPackagename(){ //获取参数
            if(this.packageName==undefined){
                this.packageName = localStorage.getItem('packageName')
            }
            let url = resources.jsonParameter();
            let params = { 
                'packageName': this.packageName,
            };
            this.$ajax.post(url,qs.stringify(params)).then( res => {
                var jsonParameter = JSON.parse(res.data.jsonParameter); //由JSON字符串转换为JSON对象
                this.$refs.profilehead.style.background = '#'+jsonParameter.color
                this.icon1 = jsonParameter.icon1
                this.icon2 = jsonParameter.icon2
                this.icon3 = jsonParameter.icon3
              
            })
            localStorage.setItem("packageName",this.packageName)
        }, 
        getMycenterdata(){ //获取客户端传参
            var getPhone = this.$route.query.phone  
            var phone = getPhone.substr(0,3)+"****"+getPhone.substr(7);  
            this.phone =  phone //手机号码
            if(this.$route.query.name==undefined){
                this.name=''
            }else{
                var getName = this.$route.query.name
                var substrName = getName.substr(getName.length-1,1)
                var name = "***"+substrName;  
                this.name = name //名称
            }
            this.versionCode = this.$route.query.versionCode //版本号
            this.isCertified = this.$route.query.isCertified //认证状态
        },
        goSetting(){
            window.location.href = "https://static.pinganzhiyuan.com/panda_loan_app_web/setting"
        },
        goHelp(){
            window.location.href = "https://static.pinganzhiyuan.com/panda_loan_app_web/appaccounthelpcenter"
        },
        goabouts(){
            window.location.href = "https://static.pinganzhiyuan.com/panda_loan_app_web/appaccountabouts"
        }
    },
  created(){
    this.getMycenterdata()
    this.getPackagename()
  }
}
</script>

<style lang="scss" scoped>
$rem:1rem/40; //rem配置   
#app{
    background: #f5f5f5;
}
// 个人信息
.profile-head{
    padding-bottom: 50*$rem;
    width: 100%;
    height:auto;
    overflow: hidden;
    .profile-title{
        width: 100%;
        height: 88*$rem;
        line-height: 88*$rem;
        text-align: center;
        font-size: 30*$rem;
        color:#fff;
    }
    .profile-img{
        margin: 15*$rem 0rem 18*$rem 0rem;
        text-align: center;
        img{
            width: 140*$rem;
        }
    }
    .profile-phone{
        text-align: center;
        font-size: 32*$rem;
        color:#fff;
        overflow: hidden;
    }
    .profile-name{
        display: inline-block;
        margin-top: 15*$rem;
        padding: 5*$rem 0;
        width: 100%;
        height:auto;
        text-align: center;
        overflow: hidden;
        .profile_namedata{
            display: inline-block;
            width:auto;
            height: 32*$rem;
            line-height: 32*$rem;
            font-size: 32*$rem;
            color:#fff;
        }
        .isCertifiedstyle{
            position: relative;
            top:-4*$rem;
            display: inline-block;
            margin-left:10*$rem;
            width:auto;
            padding: 5*$rem;
            border: 2.1*$rem solid #fff;
            border-radius:0.2rem; 
            font-size: 18*$rem;
            color:#fff;
        }
    }
}
// 表格
.profile-table{
    margin-top: 15*$rem;
    width: 100%;
    height: auto;
    background: #fff;
    overflow: hidden;
    .profile-tab{
        padding: 0 25*$rem;
        width: 100%;
        height: 105*$rem;
        background: #fff;
    }
    .profile-icon{
        float: left;
        width: 40*$rem;
        height: 105*$rem;
        line-height: 105*$rem;
        img{
            width: 100%;
            vertical-align: middle;
        }
    }
    .profileicon-text{
        margin-left: 20*$rem;
        float: left;
        width: 520*$rem;
        height: 105*$rem;
        line-height: 105*$rem;
        font-size: 28*$rem;
        color:#696969;
    }
    .profileicon-right{
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

// 设置、关于我们表格
.profile-tables{
    margin-top: 15*$rem;
    width: 100%;
    height: auto;
    background: #fff;
    overflow: hidden;
    .profile-tabs{
        padding-left:25*$rem;
        width: 100%;
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
        width: 665*$rem;
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