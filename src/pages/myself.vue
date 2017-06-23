<template>
	<div class="myself">
		<div class="myselfHeader">
			<div class="user_info">
				<div class="user">
					<p class="phoneNum">15199996666</p>
					<p class="user-level">注册会员</p>
				</div>
			</div>	
			<div class="goodFavorite">
				<ul>
					<li class="productFavorite"><span>商品收藏</span></li>
					<div class="split"></div>
					<li class="storeFavorite"><span>店铺收藏</span></li>
				</ul>
			</div>
		</div>	
		<div class="mine_content">
			<div class="mine_c_titleline">
				<div class="mine_c_title">
					我的订单
					<span>查看全部订单</span>
				</div>
			</div>
			<div class="mine_c_content">
				<ul>
					<li class="paymoney">待付款</li>
					<li class="getproduct">待收货</li>
					<li class="forsay">待评价</li>
					<li class="salseafter">退款/售后</li>
				</ul>
			</div>
		</div>
		<div class="block">
			<ul>
				<!-- <li class="scoreshop" @click="clickShow"><router-link to="/myself/scoreshop">积分商城</router-link></li> -->
				<li class="scoreshop" ><router-link to="/scoreshop">积分商城</router-link></li>
				<li class="moneyless">优惠券</li>
				<li class="getAddress">收货地址</li>
				<li class="reback">客服反馈</li>
				<li class="aboutus">关于我们</li>
			</ul>
		</div>
		<div class="lognout">
			退出当前账号
		</div>

		<!-- <router-view></router-view>	 -->
	</div>
</template>
<script type="text/javascript">
import scoreshop from "../components/scoreshop"
	
	export default {

		data () {
			return {
				
			}
		},
		components: {
        	scoreshop
    	},  
    	methods:{
    		
    	}
	}
</script>
<style type="text/css">
	
.myselfHeader{
	height: 4.227053rem;
	width: 100%;
	background: #ffd600;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
}
.user_info{
	height:3.125121rem;
	background: url(../imgs/userphoto.png) no-repeat 0.483092rem 0.676329rem;
	background-size: 1.811594rem 1.811594rem;
}
.user_info:after{
    content: '';
    width: 0.338164rem;
    height:0.59372rem;
    position: absolute;
    top: 1.280193rem;
    right: 0.603865rem;
    background:url(../imgs/right.png) no-repeat;
    background-size:0.338164rem 0.59372rem;	
}
.user{
	height: 1.73913rem;
	width:7.18744rem;
	float: right;
	margin: 0.724638rem 0 0 0;
}
.user p{
	height: 0.869565rem;
	line-height: 0.869565rem;
	font-weight: bold;
}
.phoneNum{
	font-size:0.483092rem;
	color: #fff; 
}
.user-level{
	font-size:0.289855rem;
	color:#e64f1a;
	padding-left: 0.9rem;
	background: url(../imgs/user-level.png) no-repeat ;
	background-size: 2.584541rem 0.869565rem;
}

.goodFavorite{
	position: relative;
}
.goodFavorite li{
	float: left;
	width: 5.0rem;
	height: 1.111111rem;
	line-height: 1.111111rem;
	background-color: rgba(0,0,0,0.05);
	background-size: 0.603865rem 0.603865rem;
}
.goodFavorite li span{
	display: inline-block;
	height: 0.603865rem;
	line-height: 0.603865rem;
	width:2.43744rem;
	margin-left: 2.294686rem;
	color: #fff;
}
.productFavorite{
	background: url(../imgs/1.png) no-repeat 1.328502rem center;
}
.storeFavorite{
	background: url(../imgs/2.png) no-repeat 1.328502rem center;
}
.split{
    width: 1px;
    height: 0.676329rem;
    background: #fff;
    position: absolute;
    top: 0.217391rem;
    left: 5.0rem;
}

.mine_content{
	margin-top: 4.565217rem;
	background:#fff;
}
.mine_c_titleline{
	width: 10.0rem;
	border-bottom: 0.024155rem solid #e0e0e0;
	background: url(../imgs/getMore.png) no-repeat right center;
	background-size: 0.603865rem 0.31401rem;
}
.mine_c_title{
	width: 8.695652rem;
	height:1.449275rem;
	line-height: 1.449275rem;
	margin: 0 auto;
}
.mine_c_title span{
	font-size: 0.434783rem;
	color: #999999;
	float: right;
}
.mine_c_content li{
	display: inline-block;
	height: 2.222222rem;
	width: 24%;
	text-align: center;
	line-height: 3.5rem;
	background-size: 0.555556rem 0.555556rem;
}
.paymoney{
	background: url(../imgs/paymoney.png) no-repeat 50% 45%;
}
.getproduct{
	background: url(../imgs/getproduct.png) no-repeat 50% 45%;
}
.forsay{
	background: url(../imgs/forsay.png) no-repeat 50% 45%;
}
.salseafter{
	background: url(../imgs/salseafter.png) no-repeat 50% 45%;
}

.block{
	margin-top: 0.31401rem;
	background: #fff;
}
.block ul{
	font-size: 0;
}
.block ul li{
	font-size: 0.386473rem;
	display: inline-block;
	height: 3.091787rem;
	width: 25%;
	border-bottom: 0.024155rem solid #e0e0e0;
	text-align: center;
	line-height: 4.5rem;
	background-size: 0.869565rem 0.724638rem;
}
.block ul li:last-child{
	border: none;
}
.scoreshop{
	background: url(../imgs/scoreshop.png) no-repeat 50% 45%;
}
.moneyless{
	background: url(../imgs/moneyless.png) no-repeat 50% 45%;
}
.getAddress{
	background: url(../imgs/getAddress.png) no-repeat 50% 45%;
}
.reback{
	background: url(../imgs/reback.png) no-repeat 50% 45%;
}
.aboutus{
	background: url(../imgs/aboutus.png) no-repeat 50% 45%;
}
.lognout{
	height:1.40628rem; 
	width:100%;
	line-height:1.40628rem;
	text-align: center;
	background: #fff;
	margin: 0.917874rem 0 0 0;
	margin-bottom:1.763285rem;
}
</style>