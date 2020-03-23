<template>
	<div id="app">
        <h1>  APP包名：{{packageName}}</h1>
        
        <h1 class="maincolor" ref="maincolor">啊啊啊啊啊啊啊啊啊啊啊啊啊</h1>
	</div>
</template>
<script>
import resources from "../../resources";
import qs from 'qs'
export default {
  data() {
    return {
        packageName:'',
        maincolor:'',
    };
  },
  methods: {
    getdata(){
            let url = resources.jsonParameter();
            let params = {
                'packageName': this.packageName,
            };
            this.$ajax.post(url,qs.stringify(params)).then( res => {
                console.log(res.data.jsonParameter)
                var obj = JSON.parse(res.data.jsonParameter); //由JSON字符串转换为JSON对象
                console.log(obj.color)
            })
        }, 
    getDmp(){
            console.log(resources.v2(17266,this.$route.params.partner))
            this.$ajax.post(resources.v2('17266',this.$route.params.partner)).then( res => {
                console.log(res)
            })
    }
  },
  mounted(){
        this.packageName = this.$route.query.packageName;
        // this.getdata()
        this.getDmp()
        this.maincolor = '#'+this.$route.query.maincolor;
        this.$refs.maincolor.style.color = '#'+this.$route.query.maincolor

  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss" scoped>

$rem:1rem/40; //rem配置   

</style>