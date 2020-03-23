<template>
    <div class="app">
        <iframe v-show="false" :src="iframeUri"></iframe>
        <!-- 产品列表 -->
        <div class="productimg">
            <div class="approductList">
                <div v-for="(product,index) in allProduct" :key="product.id,index" class="product" @click="gotoUrl(index)">
                    <div class="productIcon">
                        <img v-lazy="product.imgUrl" alt="">
                    </div>
                    <div class="productTxt">
                        <div class="title">
                            <span class="title-name">{{product.title}}</span>
                            <span class="firstTages" v-for="(FirstTag,index) in product.firstTagArray" :key="index">{{FirstTag}}</span>
                        </div>
                        <div class="main-mes">
                            <div class="left-block">
                                <span class="left-top">最高{{product.edu}}元</span>
                                <br/>
                                <span class="left-bottom" v-if="product.minTerm == product.maxTerm">期限{{product.maxTerm}}个月</span>
                                <span class="left-bottom" v-else>期限{{product.minTerm}}~{{product.maxTerm}}个月</span>
                            </div>
                        </div>

                    </div>
                    <div class="iconlist">
                        <img src="~@/assets/clickicon.png" class="click-icon">
                    </div>
                    <div class="isNew" v-if="product.isNew">
                        <img src="~@/assets/dmgnewicon.png" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script type="text/babel">
import resources from "../../resources";
export default {
  data() {
    return {
        partner: this.$route.params.partner,
        userId:this.$route.query.userId,
        allProduct: [],
        iframeUri:''
    }
  },
  methods: {
      get360Url(index) {
          let params = new URLSearchParams();
          params.append("userId",this.userId);
          params.append("partnerProductCode","SYS1495007961");
            let url = resources.getProductUrl();
            console.log(url)
          this.$ajax.post(url,params)
            .then(res => {
                console.log(res)
                //window.location.href = res.obj1;
            })
      },

    gotoUrl(index) {   //跳转链接
        if (this.partner = "360loan") {
            this.get360Url(index)
            break;
        }
        this.iframeUri = this.allProduct[index].url;
        let url = this.allProduct[index].url;
        var str = "redirect=";
        var stringUrl = url.split(str)[1];
        window.location.href = decodeURIComponent(stringUrl);
    },

    // 百融获取数据
    getProduct() {  //请求数据
        this.loadingIf = true;
        this.$ajax.post(resources.v2(this.userId,this.partner)).then( res => {
            console.log(res)
            this.loadingIf = false;
            this.loading = "点击加载更多";
            var array = res.data.productList;
            for (var i = 0; i < array.length; i++) {
                array[i].firstTagArray = array[i].firstTags.split("|");
            }
            if (res.data.productList.length < this.pageSize) {
                this.showBottom = false;
                this.nomore = true;
            }
            this.allProduct = this.allProduct.concat(array);
            this.allProduct.forEach(item => {
            if (item.maxAmount > 10000) {
                item.edu = item.maxAmount / 10000 + "万";
            } else {
                item.edu = item.maxAmount;
            }
            if (item.firstTags === "") {
                item.isFirstTags = false;
            } else {
                item.isFirstTags = true;
            }
            });
        })
    },

    get360loanProduct() {  //请求数据
        this.loadingIf = true;
        let params = new URLSearchParams();
        params.append("userId",this.userId);
        params.append("partner",this.partner);
        params.append("pageNumber",1);
        params.append("pageSize",10)
        
        this.$ajax.post(resources.loan360(),params)
        .then( res => {
            console.log(res)
            this.loadingIf = false;
            this.loading = "点击加载更多";
            var array = res.data.productList;
            for (var i = 0; i < array.length; i++) {
                array[i].firstTagArray = array[i].firstTags.split("|");
            }
            if (res.data.productList.length < this.pageSize) {
                this.showBottom = false;
                this.nomore = true;
            }
            this.allProduct = this.allProduct.concat(array);
            this.allProduct.forEach(item => {
            if (item.maxAmount > 10000) {
                item.edu = item.maxAmount / 10000 + "万";
            } else {
                item.edu = item.maxAmount;
            }
            if (item.firstTags === "") {
                item.isFirstTags = false;
            } else {
                item.isFirstTags = true;
            }
            });
        })
    },
    
  },
  created(){ //首次请求
    if (this.partner == "100credit") {
        this.getProduct(); 
    }
    if (this.partner == "360loan") {
        this.get360loanProduct();
    }
  }
};
</script>
<style lang="scss" scoped>
$rem: 1rem/40; //配置rem比例
// 背景样式
.productimg{
    width:100%;
    background: url("~@/assets/dmpbackgroundimg.png")  no-repeat;
    background-size:100%;
    background-color:#010008;
    min-height: 1334*$rem;
    overflow:hidden;
}
// 内容部分样式
.approductList {
    margin: 0 auto;
    margin-top: 455*$rem;
    margin-bottom:120*$rem; 
    width: 690*$rem;
    height: auto;
    overflow: scroll;
    -webkit-overflow-scrolling: touch; //ios加载缓慢
    // 内容样式
    .product {
        position: relative;
        margin-bottom: 12*$rem;
        padding: 38*$rem 25*$rem;
        width: 100%;
        height: auto;
        overflow: hidden;
        background: #ffffff;

        .productIcon{ //icon
            float: left;
            width: 120*$rem;
            height: 120*$rem;
            img{
                width: 100%;
                border-radius: 10*$rem;
                box-shadow:2px 2px 3px #dbdada;
                -webkit-box-shadow: 2px 2px 3px #dbdada;/*（这是专对火狐浏览器的支持而设置的）*/
                -moz-box-shadow: 2px 2px 3px #dbdada; /*（这是对Safari和Chrome浏览器而设置的）*/
            }
        }
        //  文字样式
        .productTxt{
            float: left;
            margin-left: 30*$rem;
            // 标题与标签样式
            .title {
                .title-name {
                    width: 150*$rem;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    display: inline-block;
                    font-size: 32*$rem;
                    color: #000;
                    line-height: 45*$rem;
                    vertical-align: top;
                }
                .firstTages {
                    display: inline-block;
                    margin-left: 20*$rem;
                    padding: 5*$rem 9.4*$rem;
                    text-align: center;
                    width: 90*$rem;
                    height: auto;
                    line-height: 32*$rem;
                    font-size: 18*$rem;
                    background: #ddf9fc;
                    border-radius:10*$rem; 
                    color: #048ce2;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }
            }
            // 底部文字
            .main-mes {
                .left-block {
                    width: 4.5rem;
                    vertical-align: top;
                    display: inline-block;
                    .left-top {
                        margin-top: 15*$rem;
                        display: inline-block;
                        color: rgb(236, 18, 16);
                        font-size:24*$rem;
                    }
                    .left-bottom {
                        padding-top:5*$rem;
                        display: inline-block;
                        color: rgb(102, 102, 102);
                        font-size:24*$rem;
                    }
                }
            }
        }

        // 右箭头样式
        .iconlist{
            position: absolute;
            top:90*$rem;
            right: 25*$rem;
            img{
                width: 15*$rem;
                height: 25*$rem;
            }
        }
        // 新上线样式
        .isNew {
            position: absolute;
            right: 0rem;
            top: 0rem;
            img{
                width: 65*$rem;
            }
        }
    }
}
</style>
