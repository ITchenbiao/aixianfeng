<template>
	<div class="scoreShopinner">
		<div class="scoreShop-title">
			<span class="backMyself" @click="backpage">
				<img src="../imgs/serachback.png">
			</span>
			<div class="scoreShop-title-name">积分商城</div>
		</div>
		<div class="canusescore">
			<div class="canusescore-animation">
				<div class="circleProgress_wrapper">
			        <div class="wrapper right">
			            <div class="circleProgress rightcircle"></div>
			        </div>
			        <div class="wrapper left">
			            <div class="circleProgress leftcircle"></div>
			        </div>
				</div>
				<div class="rolling_words">
		        	可用积分
		        	<p>0</p>
		        </div>
			</div>
			<div class="canusescore-sort">
				<ul>
					<li class="scoredetial">积分明细</li>
					<li class="payrecord">兑换记录</li>
					<li class="scorerule">积分规则</li>
				</ul>
			</div>
		</div>
		<div class="changemoney">
			<ul>
				<li class="changemoney-bg1">
					<p class="changemoney-name">3元积分兑换券</p>
					<p class="changemoney-num">300积分</p>	
				</li>
				<li class="changemoney-bg2">
					<p class="changemoney-name">5元积分兑换券</p>
					<p class="changemoney-num">500积分</p>	
				</li>
				<li class="changemoney-bg3">
					<p class="changemoney-name">8元积分兑换券</p>
					<p class="changemoney-num">800积分</p>	
				</li>
				<li class="changemoney-bg4">
					<p class="changemoney-name">10元积分兑换券</p>
					<p class="changemoney-num">1000积分</p>
				</li>
			</ul>
		</div>
	</div>
</template>

<script type="text/javascript">
	export default {
		data () {
			return {
				scoreshop:[],
				
			}
		},
		computed : {

		},
		methods :{
			backpage (){
				// $(".scoreShopinner").css('visibility', 'hide');
				// this.showScorePage = false;
			}
		}
	}
</script>

<style type="text/css">
.scoreShopinner{
	/*display: none;*/
	z-index: 3;
	width: 10.0rem;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	background:#fff;
}
.scoreShop-title{
	height: 1.449275rem;
	line-height: 1.449275rem;
	width: 10.0rem;
	border-bottom:0.024155rem solid #e0e0e0;
	background: #f9fafd;
	position: fixed;
	top: 0;
	left: 0;

}

.backMyself img{
	height: 0.676329rem;
	width:0.676329rem;
	position: absolute;
	left: 0;
	margin: 0.386473rem 0 0 0.241546rem;
}
.scoreShop-title-name{
	font-size: 0.434783rem;
	font-weight: bold;
	text-align: center;
}
.canusescore{
	width: 10.0rem;
	margin-top: 1.449275rem;

}
.canusescore-animation{
	height: 4.951691rem;
	padding-top: .45rem;

}

.circleProgress_wrapper{
    width: 4.166667rem;
    height: 4.166667rem;
    margin: 0 auto;
    position: relative;
    /*border:1px solid #ddd;*/

}
.wrapper{
    width: 2.083333rem;
    height: 4.166667rem;
    position: absolute;
    top:0;
    overflow: hidden;
}
.right{
    right:0;
}
.left{
    left:0;
}
.circleProgress{
    width: 4.166667rem;
    height: 4.166667rem;
    border:0.694444rem solid #fff;
    border-radius: 50%;
    position: absolute;
    top:0;
    -webkit-transform: rotate(45deg);
}
.leftcircle{
    border-bottom:0.694444rem solid #dddddd;
    border-left:0.694444rem solid #dddddd;
    left:0;
    -webkit-animation: circleProgressLoad_left 1s linear forwards;
}
.rightcircle{
    border-top:0.694444rem solid #dddddd;
    border-right:0.694444rem solid #dddddd;
    right:0;
    -webkit-animation: circleProgressLoad_right 1s linear forwards;
}
@-webkit-keyframes circleProgressLoad_left{
    0%,50%{
        -webkit-transform: rotate(-135deg);
    }
    100%{
        -webkit-transform: rotate(45deg);
    }
}
@-webkit-keyframes circleProgressLoad_right{
    0%{
        -webkit-transform: rotate(-135deg);/*使右边的半圆隐藏*/
    }
    50%,100%{
        -webkit-transform: rotate(45deg);
    }
}
.rolling_words{
	font-size: 0.416667rem;
	position: absolute;
	text-align: center;
	top: 3.472222rem;
	left: 4.166667rem
}

.canusescore-sort{
	height:2.05314rem; 
}
.canusescore-sort li{
	float: left;
	text-align: center;
	height: 2.05314rem;
	line-height: 3.5rem;
	width: 33.33%;
	border-top:0.024155rem solid #e0e0e0;
	border-right:0.024155rem solid #e0e0e0;
	background-size: 0.772947rem;
}
.scoredetial{
	background:url(../imgs/scoredetial.png) no-repeat 50% 40%;
}
.payrecord{
	background:url(../imgs/payrecord.png) no-repeat 50% 40%;
}
.scorerule{
	background:url(../imgs/scorerule.png) no-repeat 50% 40%;
}
.changemoney{
	padding-top: 0.338164rem;
	padding-bottom: 0.338164rem;
	background: #efefef;
	height: 9.969082rem;
	width: 10.0rem;
}
.changemoney ul li{
	float: left;
	width: 50%;
	height: 4.646377rem;
	background-color:#fff;	
	border-right: 0.024155rem solid #e0e0e0;
	border-bottom: 0.024155rem solid #e0e0e0;
}
.changemoney ul li p{
	height: 0.603865rem;
	line-height: 0.603865rem;
	margin-left: 0.3rem;
}
.changemoney-name{
	margin-top: 65%;
}
.changemoney-num{
	color: #e64f1a;
}
.changemoney-bg1{
	background: url(../imgs/3yuan.jpg) no-repeat left 15%;
	background-size: 5.0rem 2.4rem;
}
.changemoney-bg2{
	background: url(../imgs/5yuan.jpg) no-repeat left 15%;
	background-size: 5.0rem 2.4rem;
}
.changemoney-bg3{
	background: url(../imgs/8yuan.jpg) no-repeat left 15%;
	background-size: 5.0rem 2.4rem;
}
.changemoney-bg4{
	background: url(../imgs/10yuan.jpg) no-repeat left 15%;
	background-size: 5.0rem 2.4rem;
}	
</style>