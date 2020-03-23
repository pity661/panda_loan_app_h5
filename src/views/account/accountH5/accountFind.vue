<template>
	<div id="app">
        <!-- 产品列表外层 -->
        <div class="findproduct" v-for="(item,index) in findProdutList"  :key="index" @click="goDetails(index)">
            <div class="fpbanner">
                <img :src="item.bannerImg" alt="">
            </div>
            <div class="fpfooter">
                <b>{{item.footer}}</b>
            </div>
        </div>
	</div>
</template>

<script>
export default {

  data() {
    return {
        findProdutList:[
            {
                bannerImg:require('@/assets/Banner12x.png'),
                footer:'我是如何学会记账并提升幸福感的？',
                id:'1'
            },
            {
                title:'123',
                bannerImg:require('@/assets/banner22x.png'),
                footer:'关于记账的三种境界',
                id:'2'
            }
        ]
    };
  },
  methods: {
    goDetails(index){ //跳转详情
        window.location.href="http://www.pinganzhiyuan.com/panda_loan_app_web/accountDetails?id=" +this.findProdutList[index].id
        // this.$router.push({path:'/accountDetails?id=' + this.findProdutList[index].id})
    }
  },
  mounted(){

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