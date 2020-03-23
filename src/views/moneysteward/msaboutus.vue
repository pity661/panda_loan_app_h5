<template>
	<div id="app">
        <!-- 返回按钮 -->
        <div class="appback" @click="$router.go(-1)">
            <img src="~@/assets/iframaBack.png">
        </div>
        <div class="companyDiv">
            <div class="companyCount">
                <div class="companyLogo"> <!--logo文字-->
                    <img src="~@/assets/qjjguanjialogo.jpg" alt="">
                    <div class="companyName">
                        <!-- <p>123</p> -->
                    </div>
                       
                </div>
                <div class="companyIntroduction"> <!--公司介绍-->
                    <p></p> <br/>
                </div>
            </div>
            <div class="companyFoot"> <!--底部-->
                <div class="companyaddress"> <!--公司版权-->
                    <p>{{name}}</p>
                    <span>v1.0.2</span>
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
        packageName:this.$route.query.packageName,
        name:'钱金金管家',
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
            // console.log(res.data.jsonParameter)
            var jsonParameter = JSON.parse(res.data.jsonParameter); //由JSON字符串转换为JSON对象
            this.name = jsonParameter.name
            this.logo = jsonParameter.logo
            this.slogan = jsonParameter.slogan
        })
        localStorage.setItem("packageName",this.packageName)
    }, 
  },
  mounted(){
    // this.getPackagename()
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss" scoped>


$rem:1rem/40; //rem配置   
    #app{
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

.companyFoot{
    padding: 1rem 0;
}

.companyDiv{
    width: 100%;
    height: auto;
}

.companyCount{
    width: 100%;
    overflow: hidden;
}

.companyLogo{
    margin-top: 150*$rem;
    width: 100%;
    height: auto;
    overflow: hidden;
    text-align: center;
}

.companyLogo img{
    width: 160*$rem;
    
}

.companyName{
    width: 100%;
    height: auto;
    line-height: 70*$rem;
    font-size: 26*$rem;
    color:#333;
    text-align: center;
    font-family:微软雅黑,Arial, Helvetica, sans-serif;
    overflow: hidden;
    p{
        margin-top: 30*$rem;
        color:#000 !important;
        font-size: 34*$rem !important;
        text-align: center;
    }
}

.companyLogo p{
    font-size: 24*$rem;
    color:#666;
}

.companyIntroduction{ 
    margin-top: 450*$rem;
    padding:0 33*$rem;
    width:100%;
    height: auto;
    overflow: hidden;
    font-size: 28*$rem;
    line-height: 45*$rem;
    color:#333;
    text-align: center;
    p{
        font-size: 40*$rem;
    }
}

.companyaddress{
    width:100%;
    height: auto;
    line-height: 45*$rem;
    text-align: center;
    overflow: hidden;
    p{
        font-size: 32*$rem;
    }
    span{
        color:#999;
        font-size: 30*$rem;
    }
}
</style>