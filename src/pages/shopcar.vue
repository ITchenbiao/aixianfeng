<template>
	<div class="shopcar">
		<div class="marketheader">
			<div class="shopHeader">
				<div class="shoptitleName">购物车</div>
			</div>	
		</div>
		<div class="shopmain"  v-show="display">
			<div class="empty-notice">
				<div class="notice-icon">
					
				</div><br>
				亲，购物车空空的耶~<br><br>
				 <router-link to="/home"><span class="theme-spline">去逛逛</span></router-link>
			</div>
		</div>
		<div class="fullcontentshow" v-show="displays">
		
			<div class="userdetail">
				<div class="usercontentperson">
					<table border="0" cellpadding="0" cellspacing="0" >
						<tr>
							<th class="people">收<span class="ui-hidden">a</span>货<span class="ui-hidden">a</span>人</th>
							<td class="information">陈&nbsp;先生</td>
							<td rowspan="3" class="
							personalModify">修改<img src="../imgs/getMore.png">
							</td>
						</tr>
						<tr>
							<th class="people">电<span class="ui-hidden">中中</span>话</th>
							<td class="information">18222633290</td>
						</tr>
						<tr>
							<th class="getPaddress">收货地址</th>
							<td class="information">北京上地四街信息路中兴智能交通股份有限公司</td>
						</tr>
					</table>
				</div>
			</div>
			<div class="quickShop">
				<div class="group-name">
					闪送超市<span>凑单专区</span>
				</div>
				<p class="infor">￥0起送，22:00前满￥30免运费，22:00后满￥69免运费</p>
				<div class="getProtime">
					<p class="group-receive">收货时间&nbsp;&nbsp; <span class="group-receive-ext">&nbsp;可预定</span>
					<span class="theme-redfont">一小时送达</span>
					</p>
				</div>
				<div class="sometimelive">
					<p>收货备注</p>
					<div class="specialsay">
						<input type="text" name="" placeholder="可输入100字以内特殊要求内容" id="specialinput">
					</div>
				</div>
				<div class="productsList">
					<table border="0" cellpadding="0" cellspacing="0">
						<tr v-for="item,i in data">

							<td class="productsList_1"><i class="checkedshop"></i></td>
							<td class="productsList_1">
							<img :src="item.img">	

							</td>
							<td class="goutp-detail"> 
								<div class="group-item-name">{{item.long_name}}</div>
								<div class="group-item-price" width="50px">￥{{item.price}}
								</div>
								<div class="addOrlessen">
									<p class="lessenoneinner" @click='reduceAction(i)'></p>
									<p class="currentnum">{{ item.num }}</p>
									<p class="addoneinner" @click='addAction(i)'></p>
								</div>
							</td>
						</tr>
					</table>
				</div>
				<div class="groupfooter">
					<div class="group-btn">
					选好了
					</div>
					<span class="selectAll-true"><i class="checked"></i>全选</span>共：
					<span class="theme-redfont">￥{{ allPrice }}</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">
import DB from '../common/DataHelper'

	export default {
		data () {
			return {
				products:[],
				display:  sessionStorage.cartData === '[]',
				displays: sessionStorage.cartData !== '[]',
				data: DB.getData(), // 从缓存中获取数据
			}
		},
		watch : {

		},
		computed: {
	        allPrice() { // 计算总价格
		            var all = 0;
		            for (let good of this.data) { // 遍历所有商品的单价
		                all += (good.num * good.price);
		            }
		                // console.log(good.num)
		            return all.toFixed(2);
		    }
    	},
		methods : {
			addAction(index) {
				// 获取当前数据
	            var item = this.data[index];

	            item.num++;
	            DB.saveData(item);
			},

			reduceAction(index) {
            	// 获取当前数据
	            var item = this.data[index];

	            item.num--;
	            DB.saveData(item);

	            if (item.num == 0) {
	                this.data = DB.getData();
	                // 通知App.vue修改值
	                CommonVM.$emit('changeBadegValue');
	            }
        	}
		},
		mounted () {
             
		},
		updated () {
			this.display = (sessionStorage.cartData === '[]');
			this.displays = (sessionStorage.cartData !== '[]');
		}
	}
</script>

<style type="text/css">

.marketheader{
	z-index: 2;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
}
.shopHeader{
	height: 1.449275rem;
	width: 100%;
	background: #f9fafd;
	border-bottom: 0.024155rem solid #e0e0e0;
}
.shoptitleName{
	line-height: 1.44rem;
	height: 1.449275rem;
	width: 6.25rem;
	text-align: center;
	margin: 0 auto;
	font-size: 0.434783rem;
	font-weight: bold;
}

.shopmain{
	/*display: none;*/
	height: 8.526087rem;
	width: 100%;
	margin-top: 1.449275rem;
}
.empty-notice{
	padding-top: 2rem;
	height: 6.963768rem;
	width: 10.0rem;
	text-align: center;
	color: #999999;
}
.notice-icon{
	margin:0 auto;
	height:2.5rem;
	width: 2.5rem;
	background: url(../imgs/empty_addrlist.png) no-repeat;
	background-size: 2.5rem 2.5rem;
}
.theme-spline{
	border: 0.024155rem solid #999999;
	border-radius: 0.120773rem;
	padding: 0.193237rem 0.966184rem;
}

.fullcontentshow{
	/*display: none;*/
}
.userdetail{
	height: 3.019324rem;
	width:100%;
	margin-top: 1.449275rem;
	background-color: #fff;

}
.usercontentperson{
	height: 100%;
	width:10.0rem;
	background: url(../imgs/line.png) repeat-x top,url(../imgs/line.png) repeat-x bottom;
	background-size: 1.690821rem 0.120773rem;
	font-size: 0.434783rem;
}
.ui-hidden{
	visibility: hidden;
}
.people{
	height: 0.869565rem;
	width: 2.78rem;
	font-weight: normal;
}
.information{
	width: 5.5rem;
}
.getPaddress{
	height: 1.304348rem;
	padding-top: 0.193237rem;
	font-weight: normal;
	vertical-align: top;
}
.personalModify{
	position: relative;
	width: 1.5rem;
}
.personalModify img{
	height: 0.3rem;
	width:0.6rem;
	position: absolute;
	left: 70%;
	top: 45%;
}

.quickShop{
	width: 100%;
	margin-top: 0.338164rem;
	margin-bottom: 1.449275rem;
	background-color: #fff;
}
.group-name{
	height:1.038647rem;
	line-height: 0.93744rem;
	width: 9rem;
	margin-left: 0.410628rem;
	color: #999999;
}
.group-name span{
	height: 0.798309rem;
	line-height: 0.798309rem;
	margin-top: 0.120773rem;
	color: #ff3800;
	border:0.024155rem solid #ff3800;
	padding: 0 0.31401rem;
	border-radius: 50rem;
	float: right;
}
.group-name:before{
	content: '';
    display: inline-block;
    background: #ffd600;
    width: 0.120773rem;
    height: 0.37rem;
    border-radius: 0.1rem;
    margin-right: .1rem;
}
.infor{
	height: 0.603865rem;
	line-height: 0.603865rem;
	width: 10.0rem;
	padding-left: 0.410628rem;
	font-size: 0.338164rem;
	color: #999999;
	border-bottom:0.024155rem solid #e0e0e0;
}

.getProtime{
	height:1.642512rem;
	width: 10.0rem;
	border-bottom:0.024155rem solid #e0e0e0;
}
.group-receive{
	height:1.642512rem; 
	line-height: 1.642512rem;
	padding-left: 0.410628rem;
}
.group-receive-ext{
	float: right;
	padding-right: 0.724638rem;
	background: url(../imgs/getMore.png) no-repeat right center;
	background-size: 30% 20%;
}
.theme-redfont{
	color: #ff3800;
}
.sometimelive{
	height:1.642512rem;
	line-height:1.642512rem; 
	width: 10.0rem;
	padding-left: 0.410628rem;
	border-bottom:0.024155rem solid #e0e0e0;
}
.sometimelive p{
	float: left;
}
.specialsay{
	float: left;
	width:6.861111rem;
	height: 1.048068rem;
	border: 0.024155rem solid #e0e0e0;
	border-radius: 0.241546rem;
	margin:0.3rem 0 0 0.41rem;
	position: relative;
}
#specialinput{
	position: absolute;
	right: 0;
	top: 12px;
	width: 6.5rem;
	font-size: 0.386473rem;
	border: none;
	color: #999999;
}

.productsList{
	border-bottom:0.024155rem solid #e0e0e0;
}
.productsList table{
	height: 2.463768rem; 
	width: 10.0rem;
}
.productsList_1{
	width: 1.545894rem;
	position: relative;
}
.productsList_1 img{
	height: 1.545894rem;
	width: 1.545894rem;
}
.checkedshop{
	height: 0.555556rem;
	width: 0.555556rem;
	background: url(../imgs/checked.png) no-repeat ;
	background-size: 0.555556rem;
	position: absolute;
	left: 25%;
	top: 30%;
}
.goutp-detail{	
	position: relative;
}
.group-item-name{
	height: 1.231884rem;
	line-height: 1.231884rem;
	margin-left: 0.483092rem; 
	width: 6rem;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}
.group-item-price{
	height: 1.231884rem;
	line-height: 1.231884rem;
	margin-left: 0.483092rem;
}
.addOrlessen{
	width: 2.463768rem;
	position: absolute;
	right: 0.362319rem;
	top: 1.231884rem;
}
.lessenoneinner{
	float: left;
	width: 0.869565rem;
	height: 0.869565rem;
	border:0.024155rem solid #e0e0e0;
	border-radius: 50%;
	background:#f00 url(../imgs/add.png) no-repeat 2%;
	background-size: 1.73913rem 0.869565rem;
}
.currentnum{
	float: left;
	width: 0.724638rem;
	height:  0.869565rem;
	line-height:0.869565rem; 
	text-align: center;
}
.addoneinner{
	float: right;
	width: 0.869565rem;
	height: 0.869565rem;
	border:0.024155rem solid #e0e0e0;
	border-radius: 50%;
	background:#f00 url(../imgs/add.png) no-repeat 96%;
	background-size: 1.73913rem 0.869565rem;

}

.groupfooter{
	height:1.642512rem;
	line-height:1.642512rem; 
	width: 10.0rem; 
	padding-left: 0.410628rem;
}
.selectAll-true{
	display: inline-block;
	width: 1.763285rem;
	text-align: right;
	position: relative;
	margin-right: 0.724638rem;
}
.checked{
	display: block;
	height: 0.555556rem;
	width: 0.555556rem;
	background: url(../imgs/checked.png) no-repeat ;
	background-size: 0.555556rem;
	position: absolute;
	left: 0;
	top: 30%;
}
.group-btn{
	float: right;
	width: 3.140097rem;
	text-align: center;
	background: #ffd600;
}

</style>