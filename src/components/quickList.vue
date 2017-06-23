<template lang="html">
    <div class="m_c_List">
        <ul class="market-list-ul">
            <li v-for="item, i in items" >
                <div class="product-img">
                    <img :src="item.img" alt="" />
                </div>
                <div class="product-detail">
                    <div class="p_d_name">
                        {{ item.name }}
                    </div>
                    <div class="bestchoice">
                        <p>精选</p>
                        <span class="choiceAddone">{{ item.pm_desc }} </span>
                    </div>
                    <div class="p_style_num">
                        {{item.specifics}}
                    </div>
                    <div class="p_price">
                        <span>￥{{ item.price }}</span>
                        <span class="orginprice">
                        ￥{{item.market_price}}</span>
                    </div>
                    <div class="addOrlessenOne">
                        <p class="lessenoneinnerOne" @click="reduceAction(i)" v-show="item.num"></p>
                        <p class="currentnumOne"  v-show="item.num">{{ item.num }}</p>
                        <p class="addoneinnerOne" @click="addAction(i),keyframe()"></p>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
// 引入数据工具类
import DB from '../common/DataHelper'

export default {
    props: ['shopid'],
    data() {
        return {
            items: []
        }
    },
    watch: { // 监测值的变化，每个变化，都会执行
        shopid(newV, oldV) {
            this.loadData();
            // console.log(this.shopid)
        }
    },
    methods: { 
        addAction(index) {// 点击+号，增加数量，保存数据

            var itemData = this.items[index]
            console.log(itemData)
            // 自增
            itemData.num++;
            console.log(itemData.num)
            // 保存数据
            DB.saveData(itemData);

            // 通知App.vue修改值
            CommonVM.$emit('changeBadegValue');
        },
        reduceAction(index){
            var itemData = this.items[index]
            // console.log(itemData)
            // 自增
            itemData.num--;

            // 保存数据
            DB.saveData(itemData);
            
            if (itemData.num == 0) {

                // this.data = DB.getData();
                // 通知App.vue修改值
                CommonVM.$emit('changeBadegValue');
            }
            
        },
        keyframe() {
            // 添加home购物车事件
            $(".addoneinnerOne").on("click",function(){
                $('.productEffect').remove();
                var x = $(this).offset().left-200;
                var y = $(this).offset().top- $(document).scrollTop()-50;
                var newOne =$(this).parents(".product-detail").prev().children().clone();
                // console.log(x+","+y);
                //追加到它本身下
                var ap=newOne.appendTo($(this).parents(".product-detail").prev());
                ap.addClass('productEffect');
                newOne.css({
                    "left": x,
                    "top": y
                });
            })

        },
        loadData() {
            // this.$http.get('http://www.vrserver.applinzi.com/aixianfeng/apicategory.php?category=' + this.shopid).then(function (res) {
            //     this.items = JSON.parse(res.body).data;
            //     // console.log(this.items)
            // })
            this.$http.get('http://localhost:8080/static/data/getCategoryProducts.json').then(function (res) {
                this.items = res.body.data.products[this.shopid] ;
                // console.log(res.body.data.products[103532])
                var its = res.body.data.products[this.shopid] ;
                    its.forEach(function (v) {
                    // 根据商品名称，从购物车中查询数量
                     v.num = DB.getNumWithName(v.id);

                })
                // this.items = its;
            })
        }
    },
    mounted() { //加载完成
        this.loadData();    
        // console.log(this.shopid);

    },
    updated() {
        this.loadData(); 
            // console.log(currentdata)

    }
}
</script>

<style lang="css">
.m_c_List{
    margin-top: 2.7rem;
    height: 13.5rem;
    background: #fff;
    overflow-y: scroll;
    margin-bottom: 2.7rem;
}
.m_c_List li{
    float: right;
    height: 2.836715rem;
    width: 7.5rem;
    border-bottom: 0.024155rem solid #e0e0e0;
}
.product-img{
    float: left;
    margin:0.120773rem 0 0 0.193237rem;
    width:2.5rem;
    height: 2.5rem;
}
.product-img img{
    width: 2.5rem;
    height: 2.5rem;
}
.product-detail{
    margin-top: 0.241546rem;
    width: 4.68744rem;
    height: 2.415459rem;
    float: right;
    position: relative;
}
.p_d_name{
    height: 0.603865rem;
    line-height: 0.603865rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.bestchoice{
    color: #ff0000;
    height: 0.603865rem;
    font-size:0.289855rem;
    position: relative;
}
.bestchoice p{
    text-align: center;
    width:0.845411rem;
    height: 0.483092rem;
    border:0.024155rem solid #ff0000;
    border-radius: 0.120773rem;
}
.choiceAddone{
    position: absolute;
    left: 1rem;
    top: 0;
    border-radius: 0.120773rem;
    background: red;
    color: #fff;
    text-align: center;
}
.p_style_num{
    height: 0.603865rem;
    line-height: 0.603865rem;
    width: 2.995169rem;
    overflow:hidden;
    text-overflow: ellipsis;
    white-space: nowrap;    
    color: #999999;
}
.p_price{
    height: 0.603865rem;
    line-height: 0.603865rem;
    color: #f00;
}
.orginprice{
    color:#999999;
    text-decoration: line-through;
}
.addOrlessenOne{
    width: 2.463768rem;
    position: absolute;
    right: 0.362319rem;
    top: 1.4rem;
}
.lessenoneinnerOne{
    /*display: none;*/
    float: left;
    width: 0.869565rem;
    height: 0.869565rem;
    border:0.024155rem solid #e0e0e0;
    border-radius: 50%;
    background:#f00 url(../imgs/add.png) no-repeat 2%;
    background-size: 1.73913rem 0.869565rem;
}
.currentnumOne{
    /*display: none;*/
    float: left;
    width: 0.724638rem;
    height:  0.869565rem;
    line-height:0.869565rem; 
    text-align: center;
}
.addoneinnerOne{
    float: right;
    width: 0.869565rem;
    height: 0.869565rem;
    border:0.024155rem solid #e0e0e0;
    border-radius: 50%;
    background:#f00 url(../imgs/add.png) no-repeat 98%;
    background-size: 1.73913rem 0.869565rem;

}
/*购物车事件*/
.productEffect{
    z-index: 1;
    width: 2.5rem;
    height: 2.5rem;
    /*background-color: #666;*/
    background-color: red;
    border-radius: 50%;
    position: fixed;
    animation: firstAnimation;
    /*设置执行动画时间*/
    animation-duration: 0.5s;
    /*animation-iteration-count设置执行动画次数*/
    animation-iteration-count: 1;
    animation-timing-function: ease-in;
    visibility: hidden;
}
/*使用keyframs 定义动画 使用from to 或者百分比 设置动画及过程*/
@keyframes firstAnimation{
    0%{
        transform: translateY(0.0rem);
        visibility: visible;
     }
    20%{
        transform: translateY(-0.724638rem);
        opacity: 0.8;
    }
    100%{ 
        width: 0;
        height: 0;
        transform: translateY(12.077295rem);
        left:6.038647rem;
        bottom:0;
        visibility: hidden;
    }
}

</style>
