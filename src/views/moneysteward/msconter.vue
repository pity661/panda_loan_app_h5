<template>
    <div id="app">
    <div class="profile-head">
        <div class="profile-backimg"> 
            <div class="profile-img">
                <img src="~@/assets/profileimg.png" alt="">
            </div>
            <!-- 个人信息 -->
            <div class="prifile-text">
                <div class="profile-phone">{{phone}}</div>
                <div class="profile-name">
                    <div class="profile_namedata">{{name}}</div>
                    <div class="isCertifiedstyle">
                            {{isCertified}}
                    </div>
                </div>
            </div>
        </div>
    </div>
       <!-- 多个表格 -->
    <div class="profile-tables">
        <div class="profile-tabs" @click="goSetting">
            <div class="profile-icons">
                <img src="~@/assets/mssetting.png" alt="">
            </div>
            <div class="profile-tabmenu" >
                <div class="profileicon-texs">
                    设置
                </div>
                <div class="profileicons-right">
                    <img src="~@/assets/localtions.png" alt="">
                </div>
            </div>
        </div>
        <div class="profile-tabs"  @click="goabouts">
            <div class="profile-icons">
                <img src="~@/assets/msabout.png" alt="">
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
const clientQuery = `
        query( 
            $userId: Long
        ){
            client(
                userId:$userId
            ){
                id,
                userId,
                name
            }
    }`;
export default {
    name:'msconter',
    data() {
        return {
            phone:'',
            name:'',
            versionCode:'',
            isCertified:'',
        };
    },
    methods: {
        getclient() { //获取认证状态
            let params = {
                userId:localStorage.getItem('userId')
            };
            this.$ajax.post(`${resources.graphQlApi}`, {
                query: `${clientQuery}`,
                variables: params,
            }).then(res => {
                // console.log(res)
                if(res.data.data.client==null){
                    this.isCertified='未认证'
                    return;
                }else{
                    this.isCertified='已认证'
                }
                var phone = localStorage.getItem('phone')
                this.phone = phone.substr(0,3)+"****"+phone.substr(7);  
                this.name = res.data.data.client.name
            });
        },
        goSetting(){
            this.$router.push({ path: '/mssetting'})
        },
        goabouts(){
            this.$router.push({ path: '/msaboutus'})
        }

    },
  mounted(){
    this.getclient()
  }
}
</script>

<style lang="scss" scoped>
$rem:1rem/40; //rem配置   
#app{
    background: #f5f5f5;
    // margin-top: 150*$rem;
}
// 个人信息
.profile-head{
    width: 100%;
    height:auto;
    overflow: hidden;
    .profile-title{
        width: 100%;
        height: 88*$rem;
        line-height: 88*$rem;
        text-align: center;
        font-size: 30*$rem;
        color:#000;
        background: #fff;
    }
    .profile-backimg{
        padding: 70*$rem 50*$rem;
        width: 100%;
        height: auto;
        overflow: hidden;
        background:url('~@/assets/msprofilebackground.png');
            .profile-img{
                float: left;
                width: auto;
                height: 120*$rem;
                line-height: 120*$rem;
                margin-right: 22*$rem;
                img{
                    vertical-align: middle;
                    width: 120*$rem;
                }
            }
            .prifile-text{
                margin-top: 15*$rem;
                .profile-phone{
                    width: auto;
                    font-size: 32*$rem;
                    color:#fff;
                    overflow: hidden;
                }
                .profile-name{
                    margin-top: 15*$rem;
                    width: auto;
                    height:auto;
                    line-height: 40*$rem;
                    text-align: center;
                    .profile_namedata{
                        float: left;
                        text-align: right;
                        width:auto;
                        padding: 5*$rem 0 ;
                        font-size: 32*$rem;
                        color:#fff;
                    }
                    .isCertifiedstyle{
                        margin-left:10*$rem;
                        float: left;
                        text-align: left;
                        width:auto;
                        padding: 0 5*$rem;
                        border: 2.1*$rem solid #fff;
                        border-radius:0.2rem; 
                        font-size: 18*$rem;
                        color:#fff;
                    }
                }
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