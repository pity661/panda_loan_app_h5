<template>
	<div id="app">
  
	</div>
</template>
<script>
export default {

  data() {
    return {
        data:[]
    };
  },
  methods: {

      demomock(){
          this.$ajax.get('/api/data').then( res=> {
              console.log(res)
          })
      }

  },
  mounted(){
    this.demomock()
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss" scoped>

$rem:1rem/40; //rem配置   

#app{ //页面颜色
 
}

</style>