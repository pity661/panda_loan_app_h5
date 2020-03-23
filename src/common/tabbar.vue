<template>
  <div class="m-tabbar">
    <slot></slot>
  </div>
</template>
<script>
  import mTabbarItem from './tabbar-item';
  export default {
    // props: ['value'], 咱不知道具体是干什么的
    computed: {
      value() {
        return this.$route.name
      }
    }
  }

</script>
<style lang="scss" scoped="scoped">
  /*导入颜色变量*/
@import '~@/styles/var.scss';
$rem:1rem/40; //rem配置   
  .m-tabbar {
    display: flex;
    flex-direction: row;
    position: fixed;
    z-index: 9;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    overflow: hidden;
    height: 100*$rem;
    background: #fff;
    border-top:2.1*$rem solid #bfbfbf;
    &:before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      height: 1px;
      background: $tabbarBorderColor;
      transform: scaleY(0.5);
    }
  }

</style>
