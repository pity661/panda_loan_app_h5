<template>
	<div id="app">
        <div class="companyDiv">
            <div class="companyCount">
                <div class="companyLogo"> <!--logo文字-->
                    <img src="~@/assets/accounticon.png" alt="">
                    <div class="companyName">
                        <p>大道至简 · 助您财富自由</p>
                    </div>
                      
                </div>
                <div class="companyIntroduction"> <!--公司介绍-->
                    <p></p> <br/>
                </div>
            </div>
            <div class="companyFoot"> <!--底部-->
                <div class="companyaddress"> <!--公司版权-->
                    <p>百途账房管家</p>
                    <span>v1.0.0</span>
                </div>
            </div>
        </div> 
	</div>
</template>
<script>
export default {

  data() {
    return {

    };
  },
  methods: {

  },
  mounted(){

  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss" scoped>

$rem:1rem/40; //rem配置   

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