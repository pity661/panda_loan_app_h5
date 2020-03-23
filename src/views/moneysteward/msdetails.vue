<template>
	<div class="scroll-wrapper">
       <div class="appback" @click="$router.go(-1)">
           <img src="~@/assets/iframaBack.png">
       </div>
        <iframe ref="iframe" :src="htmlUrl" width="100%" height="100%">
        </iframe>
	</div>
</template>


<script>
export default {
    data() {
        return {
            htmlUrl:'',
            showAlert: false, //显示提示组件
            alertText: null, //提示的内容
            tabs: ["对我感兴趣", "看过我"], //tab数据
            num:0, 		//tab选种值
            showBack:true,
            nameText:'123',
            backone:true,
            title:''
        };
    },
    methods: {
        getUrl(){
            this.htmlUrl = this.$route.query.url
        },
        goback(){
            console.log('2')
            window.history.go(-1)
        }
    },
    mounted(){
        this.getUrl()
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

    $rem:1rem/40; //rem配置  
    .appback{
        position:fixed;
        width:auto;
        height:auto;
        z-index: 99;
        text-align: center;
        overflow: hidden;
        img{
            margin-top: 90*$rem;
            margin-left: 90*$rem;
            width:80*$rem;
            height:80*$rem;
        }
    }
    .scroll-wrapper {
        position: fixed;
        right: 0;
        bottom: 0;
        left: 0;
        top: 0;
        -webkit-overflow-scrolling: touch;
        overflow-y: scroll;
    }

    .header{  //顶部header
        position: fixed;
        top: 0;
        z-index: 20;
        width: 100%;
        background: #fff;
        height:auto;
        border-bottom: 1*$rem  solid #ececef;
        overflow: hidden;
    }

    .scroll-wrapper iframe {
        height: 100%;
        width: 100%;
        border: none;
    }
</style>