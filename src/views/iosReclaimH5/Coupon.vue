<template>
    <div class="copon">
        <div class="top">
            <span class="top-text" v-bind:class="{click:unused}" @click="show(0)">未使用</span>
            <span class="top-text" v-bind:class="{click:used}" @click="show(1)">已使用</span>
            <span class="top-text" v-bind:class="{click:expired}" @click="show(2)">已过期</span>
        </div>
        <div class="hint-top" v-if="unused">
            <span class="hint-text">若已领取加价券可在10分钟后查看</span>
        </div>
        <div class="center" v-if="unused">
            
            <img src="~@/assets/nocoupon.png" class="nocoupon">
            <div class="center-text">您没有可使用的加价券</div>
        </div>
        <div class="coupon-top" v-if="used">
            <div class="discount">
                <span>有效期至：2018-4-30</span>
                <br>
                <span>订单满3000元即可使用</span>
            </div>
        </div>
        <div class="hint-top1" v-if="expired">
        </div>
        <div class="center" v-if="expired">
            <img src="~@/assets/nocoupon.png" class="nocoupon">
            <div class="center-text">您没有已过期的加价券</div>
        </div>
    </div>
</template>
<script>
    export default {
		data() {
			return {
                unused: true,
                expired: false,
                used: false
            }
        },
        methods: {
            show(num) {
                if (num === 0) {
                    this.unused = true;
                    this.expired = false;
                    this.used = false;
                } else if (num === 1) {
                    this.expired = false;
                    this.unused = false;
                    this.used = true;
                } else if (num === 2) {
                    this.unused = false;
                    this.expired = true;
                    this.used = false;
                }
            }
        }
    }
</script>
<style lang="scss" scoped>
    $rem:1rem/45;
    .click{
        color: #fa5355;
    }
    .copon{
        height: 100%;
        //width:100%;
        background-color: #f5f5f5;
        .coupon-top{
            margin: 0 auto;
            width: 780*$rem;
            height: 350*$rem;
            background: url(~@/assets/iosredcount.png) no-repeat scroll;
            background-size: 100%;
            margin-top: 0.5rem;
            .discount{
                margin-left:420*$rem;
                padding-top:110*$rem;
                span{
                    color: #fff;
                    font-size: 28*$rem;
                    line-height: 57*$rem;
                }
            }
            .validity{
                margin: 0 auto;
                width: 640*$rem;
                height: auto;
                font-size: 38*$rem;
                margin-top:100*$rem;
                text-align: center;
                color: #fded8e;
                // border-bottom: 3px solid #fff;
                overflow: hidden;
            }
        }
        .center{
            margin-top: 9rem;
            text-align: center;
            .nocoupon{
                width: 6rem;
            }
            .center-text{
                margin-top: 0.5rem;
                font-size: 0.75rem;
                color: rgb(107, 107, 107)
            }
        }
        .top{
            background-color: #ffffff;
            border-top: 1px solid rgb(214, 215, 220);
            border-bottom: 1px solid rgb(214, 215, 220);
            height: 2.5rem;
            width: 100%;
            font-size: 0;
            .top-text{
                line-height: 2.5rem;
                text-align: center;
                vertical-align: middle;
                font-size: 0.75rem;
                display: inline-block;
                height: 100%;
                width: 33.3%;
                border-right: 1px solid rgb(214, 215, 220);
            }
        }
        .hint-top{
            //width: 100%;
            height:1.5rem;
            background-color: #FF6A6A;
            .hint-text{
                display: inline-block;
                line-height: 1.5rem;
                font-size: 0.65rem;
                color: #fff;
                text-align: center;
                width: 100%;
            }
        }
        .hint-top1{
            //width: 100%;
            height:1.5rem;
        }
    }
</style>