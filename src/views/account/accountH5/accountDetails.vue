<template>
	<div id="app">
        <div class="accountdetailimg">
            <img src="~@/assets/detilbanner1.png" alt="" v-if="this.id==1">
            <img src="~@/assets/detilbanner2.png" alt="" v-else>
        </div>
        <div class="accountdetailtxt" v-if="this.id==1">
            <div class="introduce">
                本人在校大学生一枚，经济学方向专业是会计，可能我的专业让我对记账这件事不那么抵触，我也真正坚持了一年多之久，我属于那种真正的“无产”阶级，通过记账我发现自己合理约束自己的消费行为完全可以让自己过上不苟且的生活，甚至找到属于自己的幸福感。
            </div>
            <div class="paragraph" v-for="(item,index) in detilsTxtone" :key="index">
                <div class="paragraphtitle">
                    <span></span>
                    {{item.title}}
                </div>
                <div class="paragraphconter" v-html="item.conter">
                   
                </div>
            </div>
        </div>
        <div class="accountdetailtxt" v-else>
           <div class="introduce">
               正所谓花钱如流水，流着流着就停水了……这一年里，想不想换一种方式，不再浑浑噩噩地过这种「不知道钱从哪里来，又到哪里去」的生活？
               <br>
               本文就是带你入门开始养成记账的习惯。一次性解决你的疑问：为什么记？怎么记？。
            </div>
            <div class="paragraph" v-for="(item,index) in detilsTxttwo" :key="index">
                <div class="paragraphtitle">
                    <span></span>
                    {{item.title}}
                </div>
                <div class="paragraphconter" v-html="item.conter">
                   
                </div>
            </div>
        </div>
	</div>
</template>
<script>
export default {
  name:'accountDetails',
  data() {
    return {
        id:'',
        detilsTxtone:[
            {
                title:'1.	记账的目的、作用',
                conter:'关于记账，你们可能都不陌生，但是却很少有人能够做到真正的记好个人账，我在16年底17年初尝试记账，经过2017这一年的学习，深刻认识到记账对于个人来说是有显而易见的影响的。首先来说一下为什么记账？不论现在作为学生的我还是自己以后进入工作岗位，记账首先是对自己资产和负债的一个量化，对于一辈子都要陪伴我们的金钱，我们必须要对其有一个全面的了解。其次，记账能够更好地为我们的生活服务，通关它可以为我们将来的各项事务做一个合理的规划，不至于将来钱没了却不知道自己的钱去向何处了。最后我想说，记账也可能帮我们省钱，这建立在你为自己做出了符合自己实际情况的预算的前提下，预算做的好，自己的消费行为在自己不经意间就会变得不那么随意，当你等到年末面对报表作总结的时候，你自己也会很有成就感，就是这样。'
            },
            {
                title:'2.	如何记账',
                conter:'<span style="color:#333;">记账是建立记账系统之上的，记账系统有四大部分，这四大部分分别是输入、处理、输出及预算。</span><br><span style="color:#e1433b;">输入#</span>是指列出自己所有的的资产和负债账户，了解自己现在的净资产状况，当你全部把自己的账户全部建立完成后，你已经对自己的资产有了一个全面的了解，将来地所有的消费行为全部建立在你自己通过输入建立的账户上面。<br><span style="color:#e1433b;">处理#</span>是指对你的消费行为进行记录的一个过程，它是记账的核心，处理也不是发生一笔就随便记录一下，它要根据自身的情况为自己做出符合自己的消费分类也就是不同的消费类别，这样做的目的是为以后输出一个准确的报表做准备。另外支出、收入、转账这三个记账app必须具有的功能必须学会巧妙合理运用，收入支出好理解，转账这个功能可以用在很多场景下，比如分期还款时、报销时等等。<br><span style="color:#e1433b;">输出#</span>也就是指输出报表了，我们通过记账就是为了了解的自己消费行为，报表的输出能够为我们一定时间的消费状况做一个很好的评估，指引我们合理改善自己的消费情况。<br><span style="color:#e1433b;">预算#</span>这个看似可有可无的东西其实并不应该被我们所忽略，为自己的消费类别做出一个具体合理准确地预算实则是记账这件事本身最重要的意义吧。另外预算做的好真的可以帮助我们节省开支，可以想象一下，通过预算节省下的开支换来自己预购清单中的一项物品是多么惬意的事情啊！<br>当这些都做好之后，重要的还是学会坚持记账，这样才能保证记账的准确性和完整性，记账要想做的比较准确是有很多技巧的，这篇总结性文章不可能一一道尽。'
            },
            {
                title:'3.	记账是怎么让我提升幸福感的？',
                conter:'年末对2017年的账单回顾就像又走了一遍2017的全部，看到自己消费支出的某一笔，会回想起当时发生的具体情况和自己当时的感受，比如根据餐饮分类中的某次聚餐可以回想起多年老友聚在一起时的场面，友谊再次升温；娱乐分类中的某场电影又是带给自己心灵怎样的震撼……<br>同时，在保证自己生活质量不下降的情况下为自己做好预算，在一开始的预算超支到后来的预算剩余，然后预算剩余到足以换来自己想要的数码产品或者其它物品时，我可以毫不犹豫的下单购买，而不用像之前一样犹豫不决，想想这就是多么有成就感的一件事。<br>其实，记账不仅仅是量化自我的一种工具，当你真正爱上记账的话它也会给我们带来幸福感的，如同回忆一般。'
            },
        ],
        detilsTxttwo:[
            {
                title:'1.	为什么记账是一个好习惯？',
                conter:'<p>首先要明确一点，记账不会让你变得更加壕，更不可能让你变得一夜暴富。事实上，如果你的目标是赚更多钱，对于大多数人来说，记账、理财、投资都不会解决你的问题（因为基数太小了啊泪），还是想着好好提升自己的能力更实在。</p><p>那为什么要记账呢？如果你现在经常在冲动消费后懊悔，在月末每次都是月光族，甚至对着信用卡账单上的数字感到难以置信，那么记账会帮你解决这些困境。虽然不会让你变成壕，但是记账的确可以让你变得更加理性、自知和有规划。</p><p>短期来看这些似乎不是什么大事情，然而，这些习惯和性格的养成其实大有裨益，通过记账你可以充分了解自己的财务支出情况，通过现金流的角度来重新审视自己的生活，久而久之，你不仅会变得更加自律，最重要的是，你会明白什么钱该花，该怎么花，花了之后对自己有什么意义。</p>'
            },
            {
                title:'2.	论记账的三个境界',
                conter:'<span style="color:#e1433b;">第一层境：钱都去哪了#</span><br>每次拿到信用卡账单时，你是不是反复盯着一个数字好久，却怎么也想不起来自己怎么会有过这么一笔开销了？或者有时候，明明感觉没怎么花钱，早上出门时钱包还是鼓的，晚上回家怎么就没剩多少了？这是记账最基本的境界，通过记录下每一笔开销，你可以清楚地掌握自己的钱到底都去哪了。<br><span style="color:#e1433b;">第二层境：我在过什么样的生活？#</span><br>单单记录流水，只是记账的入门水平。把这些数据加以利用、汇总和分析，才能进入到第二层境界，那就是通过自己的财务收支情况，透视自己的生活情况。很简单的道理，大家都知道恩格尔系数，你只要每个月看看自己在食物上的支出占了总开销的多少，就清楚自己是一个「发达国家」还是「发展中国家」了。清楚自己在哪里是一个人自知的关键，只有在明确自己当前定位的基础上，你才有可能做出正确的调整和改变。<br><span style="color:#e1433b;">第三层境：我想过什么样的生活？#</span><br>第三层境和第二层境只有一字之差，却是记账的终极境界：你想过一个什么样的生活，是可以通过配置自己的资产开销比例来实现的。说得通俗一些，记账的最后，你不仅仅是记录，而且更需要规划，而规划则是通过预算来实现的。<br>和公司企业一样，每年都会有不同的年度规划和项目预算，你也需要为自己制定这些：今年在能力提升方面打算支出多少？今年出去旅游散心打算支出多少？通过制定一个先决的预算，你开始真正掌控自己的生活，做到财务自由。「财务自由」这个概念本身对于不同人来说没有一个统一的分水岭，它不仅仅是说金额上的充足，更关键的是你的钱是否能支撑起实现你的目标和计划。'
            }
        ]
    };
  },
  methods: {

  },
  mounted(){

  },
  created(){
    this.id = this.$route.query.id;
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss" scoped>

$rem:1rem/40; //rem配置   


.accountdetailimg{
    width: 100%;
    height: 315*$rem;
    overflow: hidden;
    img{
        width: 100%;
        height: 100%;
    }
}

.accountdetailtxt{
    padding: 20*$rem 40*$rem 100*$rem 40*$rem;
    width: 100%;
    height: auto;
    overflow: hidden;

    .introduce{
        width: 100%;
        height: auto;
        color: #333;
        font-size: 24*$rem;
        line-height: 40*$rem;
        overflow: hidden;

    }

    .paragraph{
        width: 100%;
        height: auto;
        overflow: hidden;
    }

    .paragraphtitle{
        margin: 35*$rem 0*$rem 30*$rem 0*$rem;
        width: 100%;
        height: 35*$rem;
        line-height: 35*$rem;
        font-size: 34*$rem;
        font-style: bold;
        overflow: hidden;
        span{
            float: left;
            margin-right: 25*$rem;
            width: 10*$rem;
            height: 35*$rem;
            background: #f7d118;
        }
    }

    .paragraphconter{
        width: 100%;
        height: auto;
        line-height: 40*$rem;
        font-size: 24*$rem;
        color: #666;
        overflow: hidden;
        text-align: left;
    }


}

</style>