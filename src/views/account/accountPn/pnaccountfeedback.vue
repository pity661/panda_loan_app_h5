<template>
	<div id="app">
        <!-- 反馈信息 -->
        <div class="feedbackdata">
            <textarea type="text" placeholder="我们将尽快处理您的反馈意见，客服MM会在24小时内与您联系，感谢支持！" maxlength="100" @input="descInput" v-model="desc"></textarea>
            <span>还可输入{{remnant}}字</span>
        </div>
        <!-- 邮箱 -->
        <div class="emailtoast">
            <h1>您的邮箱或者微信号：</h1>
            <input type="text" placeholder="请输入您的邮箱或者微信号，以便我们给您回复" v-model="emaildata">
        </div>
        <!-- 提交按钮 -->
        <div class="submitButton" @click="submit">
            提交
        </div>
	</div>
</template>

<script>
import { Toast } from 'mint-ui';
export default {

  data() {
    return {
        remnant: '100',
        desc:'',
        emaildata:''
    };
  },
  methods: {
    descInput(){ //剩余字数
        var txtVal = this.desc.length;
        this.remnant = 100 - txtVal;
    },
    submit(){ //提交
        if(this.desc==''){
            Toast('请输入您的反馈意见');
        }else if(this.emaildata==''){
            Toast('请输入您的联系方式');
        }else{
            Toast('您的意见已经提交，请耐心等待~');
            this.desc='',
            this.emaildata=''
        }
    },
  },
  mounted(){

  }
}
</script>

<style lang="scss" scoped>
    $rem:1rem/40; //rem配置
    #app{
        background: #f5f5f5;
        padding: 25*$rem 30*$rem;
    }
    .feedbackdata{ //反馈信息内容
        position: relative;
        width:100%;
        height: 365*$rem;
        background: #fff;
        border-radius:10*$rem; 
        overflow: hidden;
        textarea{
            padding: 30*$rem 25*$rem;
            width: 100%;
            height:100%;
            line-height:45*$rem;
            font-size: 28*$rem;
        }
        span{
            position: absolute;
            bottom: 30*$rem;
            right: 25*$rem;
            color: #000;
            font-size: 28*$rem;
        }
    }
    .emailtoast{ //邮箱提示文字和输入内容部分
        margin-top: 50*$rem;
        width:100%;
        height: auto;
        overflow: hidden;
        h1{
            font-size: 28*$rem;
        }
        input{ 
            padding-left:25*$rem;
            margin-top: 15*$rem;
            width:100%;
            height: 85*$rem;
            background: #fff;
            border-radius:10*$rem;
            font-size:24*$rem;
        }
    }
    .submitButton{  // 提交样式
        margin: 0 auto;
        margin-top: 95*$rem;
        width:700*$rem;
        height: 90*$rem;
        line-height: 90*$rem;
        color: #fff;
        background: #ff8600 ;
        font-size: 32*$rem;
        text-align: center;
        border-radius:10*$rem;
    }
</style>