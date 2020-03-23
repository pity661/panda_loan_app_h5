<template>
	<div id="app">
        <!-- 产品列表外层 -->
        <div class="findproduct" @click="goDetailsone()">
            <div class="fpbanner">
                <img :src="banner1" alt="">
            </div>
            <div class="fpfooter">
                <b>我是如何学会记账并提升幸福感的？</b>
            </div>
        </div>
        <div class="findproduct" @click="goDetailstwo()">
            <div class="fpbanner">
                <img :src="banner2" alt="">
            </div>
            <div class="fpfooter">
                <b>关于记账的三种境界</b>
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
        banner1:"",
        banner2:"",
        packageName:this.$route.query.packageName,
    };
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
            console.log(res)
            var jsonParameter = JSON.parse(res.data.jsonParameter); //由JSON字符串转换为JSON对象
            console.log(jsonParameter.banner2)
            this.banner1 = jsonParameter.banner1
            this.banner2 = jsonParameter.banner2
        })
        localStorage.setItem("packageName",this.packageName)
    }, 
    goDetailsone(){ //跳转详情
        window.location.href="https://static.pinganzhiyuan.com/panda_loan_app_web/appaccountdetails?id=" +1
        // this.$router.push({path:'/appaccountdetails?id=' + 1})
    },
    goDetailstwo(){
        window.location.href="https://static.pinganzhiyuan.com/panda_loan_app_web/appaccountdetails?id=" +2
        // this.$router.push({path:'/appaccountdetails?id=' + 2})
    }
  },
  created(){
    this.getPackagename()
  }
}
</script>

<style lang="scss" scoped>
$rem:1rem/40; //rem配置   
#app{
    background: #f5f5f5;
}

// 产品列表展示
.findproduct{
    padding: 25*$rem 25*$rem 0*$rem 25*$rem;
    width: 100%;
    height: auto;
    background: #fff;
    overflow: hidden;

    .fptitle{
        width: 100%;
        height: 75*$rem;
        line-height: 75*$rem;
        font-size:28*$rem;
        color: #000;
    }

    .fpbanner{
        margin: 0 auto;
        width: 700*$rem;
        height: 315*$rem;
        overflow: hidden;
        img{
            width: 100%;
            height: 100%;
            border-radius: 10*$rem;
        }
    }

    .fpfooter{
        text-align: left;
        width: 100%;
        height: 110*$rem;
        line-height: 110*$rem;
        font-size:32*$rem;
        color: #000;
    }
    
}
.findproduct:last-child{
    margin-top: 25*$rem;
}

</style>