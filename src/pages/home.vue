<template>
	<div class="home">
		<header class="header">
			<headtitle></headtitle>
		</header>
		<!-- banner轮播图 -->
		<div class="banner">
			<lunbo></lunbo>	
		</div>
		<!-- 秒杀 -->
		<div class="hotList">
			<ul class="hot_Top">
				<li v-for="item in miaoshaimgs">
					<div class="quickbuy" >
						<img :src="item.activity.img" >
					</div>
					<p>{{ item.activity.name }}</p>
				</li>
			</ul>
			<ul class="hot_Bottom">
				<li class="h_B_List" v-for="item in hotimgs">
					<img :src= "item.activity.img">
				</li>
			</ul>
		</div>
		<!-- 便利店 -->
		<div class="business">
			<ul>
				<li >
					<div class="business_title" v-for="item in bianlidian">
						<img :src="item.chead_detail.img">
					</div>
				</li>
			</ul>
			<ul class="bangdan">
				<li v-for="item in bangdan">
					<div class="bangdan-img" >
						<img :src="item.cactivity_detail.img">
					</div>
				</li>
			</ul>
			<ul class="formore">
				<li v-for="item in formore">
					<div class="f-list-img">
						<img :src="item.cicons_detail.img">
					</div>
					<p class="fruit_content">{{item.cicons_detail.name}}</p>
				</li>
			</ul>
			<ul>
				<li class="eatList" v-for="item in eatlist">
					<img :src="item.activity.img">
				</li>
			</ul>
		</div>
		<div class="clearfixed"></div>
		<!-- shopList -->
		<div class="productListType">
			<div class="shopList" v-for="item,i in shoplist">
				<div class="shopList_title">
					<span class="colorbar" :style="{backgroundColor : '#'+item.category_detail.category_color} " ></span>
					<span class="s_name" :style="{ color :'#'+item.category_detail.category_color }" > 
					{{item.category_detail.name}}
					</span>
					<span class="moreOne">更多</span>
				</div>
				<div class="shopList_banner">
					<img :src="item.activity.img" >
				</div>
				<div class="food" >
					<ul>
						<li v-for="fitem,j in item.category_detail.goods">
							<div class="picList">
								<img :src="fitem.img" >
							</div>
							<div class="food_content">
								<div class="f_c_name">{{fitem.name}}</div>
								<div class="choice">
									<p>精选</p>
									<span class="choiceAdd">{{fitem.pm_desc}}</span>
								 </div>
								<div class="s_style">
								{{fitem.specifics}}
								</div>
								<div class="s_price">
									<span>￥{{fitem.price}}</span>
									<span class="oldprice">￥{{fitem.market_price}}</span>
								</div>
								<div class="add" @click.stop="productsAction(i,j),keyframe()">
									<span ></span>
								</div>
							</div>
						</li>
					<ul>
				</div>
			</div>
		<div class="search-page">
			<searchpage></searchpage>
		</div>
		<div class="kong"></div>
	</div>
</template>

<script type="text/javascript">
import lunbo from '../components/lunbo'
import searchpage from '../components/search'
import headtitle from '../components/header'
import DB from '../common/DataHelper'


export default {
	props:['data'],
	data() {
		return {
			miaoshaimgs:[],
			hotimgs:[],
			bianlidian:[],
			bangdan:[],
			formore:[],
			eatlist:[],
			shoplist:[],
			getdate:[]
		}
	},
	components: {
        lunbo,
        searchpage,
        headtitle
    },
    methods:{
    	productsAction(index,index2){

            var itemHomeData = this.shoplist[index].category_detail.goods[index2] ;

           	//自增
           	var  a  = DB.getNumWithName(itemHomeData.id) + 1;
           	itemHomeData.num = a ;

            // 保存数据
            DB.saveData(itemHomeData);
            
            // 通知App.vue修改值
            CommonVM.$emit('changeBadegValue');
    	},
    	keyframe() {
    		// 添加home购物车事件
			$(".add").on("click","span",function(){
				$('.productEffect').remove();
				var x = $(this).offset().left-60;
				var y = $(this).offset().top- $(document).scrollTop()-180;
				var newOne =$(this).parents(".food_content").prev().children().clone();
				// console.log(x+","+y);
				//追加到它本身下
				var ap=newOne.appendTo($(this).parents(".food_content").prev());
				ap.addClass('productEffect');
				newOne.css({
					"left": x,
					"top": y
				});
			})

    	},
    	shopelistRequest() {
	    		this.$http.get('http://localhost:8080/static/data/home.json').then(function (res) {
	        	this.miaoshaimgs = res.body.data.act_info[1].act_rows;
	        	this.hotimgs = res.body.data.act_info[3].act_rows;
	        	this.bianlidian = res.body.data.act_info[4].act_rows[0].act_rows;
	        	this.bangdan = res.body.data.act_info[4].act_rows[1].act_rows;
	        	this.formore = res.body.data.act_info[4].act_rows[2].act_rows;
	        	this.eatlist = res.body.data.act_info[4].act_rows[3].act_rows;
	        	this.shoplist = res.body.data.act_info[5].act_rows;
	        })   
    	}
    },
    mounted() {  
    	this.shopelistRequest();
    	
    },
    updata() {
    	this.shopelistRequest();
    }
}

</script>

<style type="text/css">
.header{
	z-index: 2;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
}

/*banner轮播图*/
.banner{
	height: 3.743961rem;
	width: 10.0rem;
	margin: 1.425121rem 0 0.338164rem 0 ;
	position: relative;
}
.banner img{
	height: 3.743961rem;
    width: 10.0rem;
}
.point{
    z-index: 1;
    position: absolute;
    right:0.362319rem;
    bottom: 0.338164rem;
}
.point span{
    margin-right: 0.120773rem;
    background-color: #ffd600;
}
/*---秒杀*/
.hotList{
	width: 100%;
	margin-bottom: 0.338164rem;
}
.hot_Top{
	height: 2.777778rem;
	background: #fff;	
	border-bottom: 0.024155rem solid #e0e0e0;
}
.hot_Top li{
	width:25%;
	text-align: center;
	float: left;
}
.quickbuy{
	height: 1.594203rem;
	width: 2.342995rem;
	margin-top: 0.31401rem;
}
.quickbuy img{
	height: 1.594203rem;
	width:2.342995rem;
}


.hot_Bottom{
	height: 4.347826rem;
	width:10.0rem;
	background: #fff;
	margin-top: 0.338164rem;
	overflow: hidden;
}
.h_B_List{
	height: 4.347826rem;
	width: 33.333%;
	float: left;
	border-right: 0.024155rem solid #e0e0e0;
}
.h_B_List img{
	width: 3.333333rem;
	height: 4.347826rem;
}
/*------便利店*/
.business{
	clear: both;
	background: #fff;
	width: 100%;
}
.business_title img{
	height: 1.497585rem;
	width: 10.0rem;
}
.bangdan{
	height: 2.3rem;
	background: #fff;
}
.bangdan li{
	float: left;
	margin: 0.241546rem 0 0.241546rem  0.289855rem;
}
.bangdan-img img{
	height:1.821498rem;
	width:4.565217rem;
}

.formore li{
	float: left;
	height:2.763768rem;
	width:25%;
	text-align: center;
	background-size: 2.05314rem 1.449275rem;
	background-color: #fff;
}
.f-list-img img{
	width: 2.5rem;
	height: 1.7rem;
}

.eatList{
	height: 2.024155rem;
	width:50%;
	float: left;
	border-right: 1px solid #e0e0e0;
	border-top: 1px solid #e0e0e0;
}
.eatList img{
	width: 5rem;
	height: 2.024155rem;
}

.shopList{
	clear: both;
	height: 9.661836rem;
	width: 100%;
	background: #fff;
	margin-top: 0.338164rem;
}
.shopList_title{
	width: 10.0rem;
	height:1.25rem;
	line-height: 1.4rem;
	margin:0 auto;
	position: relative;
}
.colorbar{
	display:inline-block;
	width: 0.241546rem;
	height: 0.483092rem;
	margin:0 0.193237rem 0 0.289855rem;
	position: absolute;
	left: 0;
	top: 0.410628rem;
	background-color: #f38631;
}

.shopList_title span:nth-of-type(2){
	margin-left: 0.772947rem;
}

.moreOne{
	float: right;
	color: #999999;
	width: 1.570048rem;
	background: url(../imgs/getMore.png) no-repeat right center;
	background-size: 0.483092rem 0.289855rem;
}
.shopList_banner{
	width: 10.0rem;
}
.shopList_banner img{
	width:9.661836rem;
	height: 2.36715rem; 
	margin-left: 0.169082rem;
}

.food li{
	float: left;
	width: 33.333%;
	height: 5.724155rem;
	border-right: 0.024155rem solid #e0e0e0;
	position: relative;
}
.picList{
	height: 2.996377rem;
	width: 2.996377rem;
	margin: 0.35rem 0 0 0.17rem;
}
.picList img{
	width:2.996377rem;
	height: 2.996377rem; 
}
.f_c_name{
	height: 0.603865rem;
	line-height: 0.603865rem;
	margin-left: 0.169082rem;
	width:3rem;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
}
.choice{
	color: #ff0000;
	height: 0.603865rem;
	font-size:0.289855rem;
	margin-left: 0.169082rem;
	position: relative;
}
.choice p{
	width: 0.860628rem;
	height:0.483092rem;
	line-height: 0.483092rem;
	text-align: center;
	border:0.024155rem solid #ff0000;
	border-radius: 0.120773rem;
}
.choiceAdd{
	position: absolute;
	left: 1rem;
	top: 0.05rem;
	border-radius: 0.120773rem;
	background: red;
	color: #fff;
	text-align: center;
}
.s_style{
	height: 0.603865rem;
	line-height: 0.603865rem;
	width: 2.995169rem;
	overflow:hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	margin-left: 0.169082rem;	
	color: #999999;
}
.s_price{
	height: 0.603865rem;
	line-height: 0.603865rem;
	margin-left: 0.169082rem;
	color: #f00;
}
.oldprice{
	color:#999999;
	text-decoration: line-through;
}
.add{
	height:0.860628rem;
	width: 1.73913rem;
	position: absolute;
	right: 0.362319rem;
	bottom: 0.048309rem;
}
.add span{
	float:right;
	height: 0.869565rem;
	width: 0.869565rem;
	border:0.024155rem solid #e0e0e0;
	border-radius: 50%;
	background:red url(../imgs/add.png) no-repeat -0.89rem;
	background-size: 1.73913rem 0.860628rem;
}

.kong{
	height: 1.835749rem;
	width:100%;
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