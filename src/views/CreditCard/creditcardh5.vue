<template>
	<div class="creditcard">
        <iframe v-show="false" :src="cardiframeUri"></iframe>
        <!-- 1 -->
        <div class="cardproduct" @click="guangda()">
            <!-- 名字 -->
            <div class="cardproductname">
                <div class="cardnameone" >光大银行信用卡</div>
                <div class="cardnum">已有10000+申请</div>
            </div>
            <!-- 内容 -->
            <div class="cardconter">
                <div class="cardimg">
                    <img src="~@/assets/guangda2040.png" alt="">
                    <!-- <img src="~@/assets/guangda2040.png" alt=""> -->
                </div>
                <div class="cardtxt">
                    <div class="cardtext">
                        终身免年费
                    </div>
                     <div class="cardtext">
                        1元机场停车
                    </div>
                     <div class="cardtext">
                        100万出行意外险
                    </div>
                     <div class="cardtext">
                       境外消费返现8%
                    </div>
                </div>
            </div>
        </div>
        <!-- 2 -->
        <div class="cardproduct" @click="jiaotong()">
            <!-- 名字 -->
            <div class="cardproductname">
                <div class="cardnametwo" >交通银行信用卡</div>
                <div class="cardnum">已有10000+申请</div>
            </div>
            <!-- 内容 -->
            <div class="cardconter">
                <div class="cardimg">
                    <img src="~@/assets/jiaotongcard2040.png" alt="">
                    <!-- <img src="~@/assets/guangda2040.png" alt=""> -->
                </div>
                <div class="cardtxt">
                    <div class="cardtext">
                        大专以上即可申请
                    </div>
                     <div class="cardtext">
                        有稳定工作即可申请
                    </div>
                     <div class="cardtext">
                       环球卡有效期内免年费
                    </div>
                     <div class="cardtext">
                        境外消费免1.5%转换费
                    </div>
                </div>
            </div>
        </div>
        <!-- 3 -->
        <div class="cardproduct" @click="pufa()">
            <!-- 名字 -->
            <div class="cardproductname">
                <div class="cardnamethree" >浦发银行信用卡</div>
                <div class="cardnum">已有10000+申请</div>
            </div>
            <!-- 内容 -->
            <div class="cardconter">
                <div class="cardimg">
                    <img src="~@/assets/pufacard2040.png" alt="">
                    <!-- <img src="~@/assets/guangda2040.png" alt=""> -->
                </div>
                <div class="cardtxt">
                    <div class="cardtext">
                        大专以上即可申请
                    </div>
                     <div class="cardtext">
                        五星级酒店住3付2
                    </div>
                     <div class="cardtext">
                        天天5折享美食
                    </div>
                     <div class="cardtext">
                        消费送红包4888元
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
        cardiframeUri:'', //记录日志隐藏ifrom
        guangdaurl:'https://api.pinganzhiyuan.com/panda_loan/record?pid=285&redirect=https%3a%2f%2fxyk.cebbank.com%2fcebmms%2fapply%2fps%2fcard-list.htm%3fpro_code%3dFHTG237746SA0082HZCM', //广大
        pufaurl:'https://api.pinganzhiyuan.com/panda_loan/record?pid=287&redirect=https%3a%2f%2fecentre.spdbccc.com.cn%2fcreditcard%2findexActivity.htm%3fdata%3dP754372%26itemcode%3d2017000056',    //浦发
        jiaotongurl:'https://api.pinganzhiyuan.com/panda_loan/record?pid=286&redirect=https%3a%2f%2fcreditcardapp.bankcomm.com%2fapplynew%2ffront%2fapply%2fnew%2fidentity.html%3ftrackCode%3dA0330094377951%26channelCode%3d', //交通
    };
  },
  methods: {
    //广大
    guangda(){
        this.cardiframeUri = this.guangdaurl;
        let url = this.guangdaurl;
        var str = "redirect=";
        var stringUrl = url.split(str)[1];
        window.location.href = decodeURIComponent(stringUrl);
    },
     //交通
    jiaotong(){
        this.cardiframeUri = this.jiaotongurl;
        let url = this.jiaotongurl;
        var str = "redirect=";
        var stringUrl = url.split(str)[1];
        window.location.href = decodeURIComponent(stringUrl);
    },
     //浦发
    pufa(){
        this.cardiframeUri = this.pufaurl;
        let url = this.pufaurl;
        var str = "redirect=";
        var stringUrl = url.split(str)[1];
        window.location.href = decodeURIComponent(stringUrl);
    }
  }
};
</script>

<style lang="scss" scoped>

$rem:1rem/40; 
.creditcard{
    width: 100%;
    height: auto;
    padding: 35*$rem 25*$rem;
    background: #e4e4e4;
    overflow: hidden;
}
// 产品列表样式
.cardproduct{
    margin-top: 30*$rem;
    width: 100%;
    height: 350*$rem;
    border-radius:20px; 
    background: #fff;
    box-shadow: 0px 7px 10px #ccc;;
    // background:url('~@/assets/cardbackground2041.png')  no-repeat;
    // background-size:100% 100%;
    overflow: hidden;
    // 名字
    .cardproductname{
        width: 100%;
        height: 70*$rem;
        .cardname{
            float: left;
            padding-left: 40*$rem;
            width: 67%;
            height: 70*$rem;
            line-height: 70*$rem;
            font-size: 28*$rem;
            color: #fff;
            text-align: left;
            background: #fc5151;
        }
        .cardnameone{
            float: left;
            padding-left: 40*$rem;
            width: 67%;
            height: 70*$rem;
            line-height: 70*$rem;
            font-size: 28*$rem;
            color: #fff;
            text-align: left;
            background: #fc5151;
        }
        .cardnametwo{
            float: left;
            padding-left: 40*$rem;
            width: 67%;
            height: 70*$rem;
            line-height: 70*$rem;
            font-size: 28*$rem;
            color: #fff;
            text-align: left;
            background: #5191fc;
            
        }
        .cardnamethree{
            float: left;
            padding-left: 40*$rem;
            width: 67%;
            height: 70*$rem;
            line-height: 70*$rem;
            font-size: 28*$rem;
            color: #fff;
            text-align: left;
            background: #36312e;
        }
        .cardnum{
            float: left;
            width: 33%;
            height: 70*$rem;
            line-height: 70*$rem;
            font-size: 23*$rem;
            color: #000;
            text-align: center;
            background: #ffc62b;
        }
    }
    .cardconter{
        padding: 40*$rem;
        width: 100%;
        height: 280*$rem;
        .cardimg{
            float: left;
            width: 320*$rem;
            height: 200*$rem;
            border-radius:10px; 
            img{
                width: 100%;
            }
        }
        .cardtxt{
            float: left;
            margin-left: 50*$rem;
            width: 250*$rem;
            height: 200*$rem;
            text-align: center;
        }
        .cardtext{
            width: auto;
            height: auto;
            font-size: 24*$rem;
            line-height: 45*$rem;
            color:#000;
            border: 1px solid #ccc;
            border-width: 0px 0px 6px;
            white-space:normal;
            text-overflow: ellipsis;
            -moz-border-image: url("~@/assets/cardborderimg.png") 7 7 16 7;
            -webkit-border-image: url("~@/assets/cardborderimg.png") 7 7 16 7; 
            -o-border-image: url("~@/assets/cardborderimg.png") 7 7 16 7;
            border-image: url("~@/assets/cardborderimg.png") 7 7 16 7;
            overflow: hidden;
        }
    }
}
</style>









