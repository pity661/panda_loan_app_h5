<template>
    <div id="app">
        <!-- 返回按钮 -->
        <div class="appback" @click="$router.go(-1)">
            <img src="~@/assets/iframaBack.png">
        </div>
        <div class="settingOut" @click="loginOut">
            退出登录
        </div>
    </div>
</template>
<script>
    import { MessageBox } from 'mint-ui';
    export default {
        data() {
            return {

            };
        },
        methods: {
            loginOut(){
                MessageBox.confirm('是否退出登录?').then(action => {
                    this.$router.push({ path: '/mslogin/'+ localStorage.getItem('Uid')})
                    localStorage.clear();
                })
            }
        },
        mounted(){

        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.mint-msgbox-confirm{
    color: #fb4d3e !important;
}
</style>

<style lang="scss" scoped>
$rem:1rem/40; //rem配置  
    #app{
        // margin-top: 150*$rem;
    }
    .appback{
        position:fixed;
        width:150*$rem;
        height:150*$rem;
        z-index: 99;
        text-align: center;
        img{
            margin-top: 35*$rem;
            width:80*$rem;
            height:80*$rem;
        }
    } 
.settingOut{
    margin: 0 auto;
    margin-top: 165*$rem;
    width: 390*$rem;
    height: 75*$rem;
    line-height: 75*$rem;
    color:#fff;
    font-size: 32*$rem;
    text-align: center;
    background: #e5e5e5;
    border-radius: 20*$rem;
}

</style>