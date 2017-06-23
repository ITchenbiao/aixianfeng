<template>
  	<div class="searchPage">
        <div class="searchTitle">
          <img src="../imgs/serachback.png" id="reback">
          <div class="searchName">
            <input type="text" name="" placeholder="请输入商品名称">
          </div>
          <span>搜索</span>
        </div>
        <div class="hotSearch">
          <p>热门搜索</p>
          <ul>
            <li>大闸蟹</li>
            <li>水</li>
            <li>中秋月饼</li>
            <li>酸奶</li>
            <li>啤酒</li>
            <li>西瓜</li>
            <li>大荔冬枣</li>
            <li>贝尔蛋糕</li>
            <li>月盛斋</li>
          </ul>
        </div>
    </div>		
</template>

<script type="text/javascript">
	export default {
		data () {
			return{
				search : []
			}
		},
		methods: {

		},
		mounted() {

		},
		updated() {

		}
	}
</script>

<style type="text/css">
/*搜索页面*/
.searchPage{
  z-index: 5;
  height: 17.777778rem;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: #efefef;
  display: none;
}
.searchTitle{
  height: 1.449275rem;
  width: 10.0rem;
  background: #fff;
}
.searchTitle img{
  height: 0.724638rem;
  width: 0.724638rem;
  margin: 0.289855rem 0 0 0.241546rem;
  float: left;
}
.searchName{
  float: left;
  height: 0.845411rem;
  line-height: 0.845411rem;
  width: 6.183575rem;
  border: 0.024155rem solid #e0e0e0;
  border-radius: 0.120773rem;
  margin:0.289855rem 0 0 0.966184rem;
  background: url(../imgs/searchlittle.png) no-repeat 0.120773rem center;
  background-size: 0.483092rem 0.483092rem;
}
.searchTitle input{
  font-size: 18px;
  color: #e0e0e0;
  margin-left: 0.724638rem;
  margin-top:.2rem;
  border: none;
}
.searchTitle span{
  float: right;
  margin: 0.434783rem 0.724638rem 0 0 ;
}
.hotSearch{
  height: 7.771256rem;
  width: 10.0rem;
}
.hotSearch p{
  height: 0.603865rem;
  line-height: 0.603865rem;
  margin: 0.845411rem 0 0 0.483092rem;
}
.hotSearch ul{
  margin-left: 0.483092rem;
}
.hotSearch li{
  display: inline-block;
  padding: 0.289855rem 0.434783rem;
  background: #fff;
  border-radius: 50rem;
  margin:0 0.362319rem 0.362319rem 0;
}	
</style>