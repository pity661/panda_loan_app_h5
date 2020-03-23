<template>
  <div id="app">
    <router-view></router-view>
    <m-tabbar v-model="select">
      <m-tabbar-item id='mslist' isRouter>
        <img src="~@/assets/ic_tab_home_norma.png" alt="" slot="icon-normal"> 
        <img src="~@/assets/ic_tab_home_active.png" alt="" slot="icon-active"> 
        首页
      </m-tabbar-item>
       <m-tabbar-item id='msconter' isRouter>
        <img src="~@/assets/ic_tab_profile_normal.png" alt="" slot="icon-normal"> 
        <img src="~@/assets/ic_tab_profile_active.png" alt="" slot="icon-active"> 
        我的
      </m-tabbar-item>
    </m-tabbar>
  
  </div>
</template>

<script>
import mTabbar from 'common/tabbar'
import mTabbarItem from 'common/tabbar-item'
export default {
  components:{
    mTabbar,
    mTabbarItem
  },
  data() {
      return {
        select:"mslist"
      }
    }
}
</script>

<style scoped="scoped">

</style>
