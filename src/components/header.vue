<template>
	<div class="headerContent">
        <div class="address">
            <a href=""><span>北京天安门广场北门</span></a>
        </div>
        <span class="search" @click="search"><i></i>搜&nbsp;索&nbsp;</span>
    </div>  
</template>

<script type="text/javascript">
	export default{
		data(){
			return {
				head : []
			}
		},
		methods: {
			search() {
	    		//搜索页面
				$(".search").click(function() {
					$(".searchPage").show();
				});
				$("#reback").click(function() {
					$(".searchPage").hide();
				});
    		}
		}
		
	}
</script>

<style type="text/css">
.headerContent{
	height: 1.449275rem;
	width: 100%;
	background: #ffd600;
}
.address{
	width:6.25rem;
	line-height: 1.449275rem;
	margin: 0 auto;
	overflow:hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	font-size: 0.434783rem;
	font-weight:700;
	text-align: center;
}
.search{
	display:inline-block;
	float: right;
	position: absolute;
	right: 0;
	top: 0;
	font-size:0.289855rem;
}
.search i{
	display: block;
	height: 0.724638rem;
	width: 0.724638rem;
	background:url(../imgs/search.png) no-repeat;
	background-size: 0.603865rem 0.603865rem;
	margin: 0.193237rem 0 0 0.193237rem;
}	
</style>