<template>
	<div class="quickshop">
        <header class="header">
            <headtitle></headtitle>
        </header>
        <div class="main_left">
            <div class="m_c_bar">
                <ul>
                    <li  v-for="item,i in categories"  @click="changeCategory(item.id)"  :class="{thischecked : item.id == selectid }">
                        {{ item.name }}
                    </li>
                </ul>
            </div>
        </div>
        <div class="main_right">
            <div class="m_r_title">
                <ul>
                    <li>全部分类</li>
                    <li class="sort">综合排序</li>
                </ul>
            </div>
            <quicklist :shopid="currentCategory" ></quicklist>
        </div> 
        <div class="search-page">
            <searchpage></searchpage>
        </div>
	</div>
</template>
<script type="text/javascript">
import quicklist from '../components/quickList'
import searchpage from '../components/search'
import headtitle from '../components/header'

export default {
	data() {
        return {
            categories:[],
            currentCategory : 104749,
            selectid : 104749
        }
    },
    components: {
        quicklist,
        searchpage,
        headtitle
    },  
    methods: {
        changeCategory(id) {
            // 获取当前li内容的ID
            this.currentCategory = id;
            // console.log(this.currentCategory)
            // 通过改变 vue里设置的:class="{ active: isActive } 内布尔值来改变样式显示与否
            this.selectid = id;
        }
        
    },
    mounted() {
        this.$http.get('http://localhost:8080/static/data/getCategoryProducts.json').then(function (res) {
            this.categories = res.body.data.categories;
        })
    },
    updated() {

    }

}
</script>
<style type="text/css">

.main_left{
    width: 24%;
    height: 16.3285rem;
    background: #f8f8f8;
    overflow-y: scroll;
    overflow-x: hidden;
    position: fixed;
    left: 0;
    color: #666666;
}
.m_c_bar{
    margin-top: 1.449275rem;
    height: 100%;
}
.m_c_bar li{
    text-align: center;
    position: relative;
    width: 2.36715rem;
    height: 1.256039rem;
    line-height: 1.207729rem;
    border-bottom: 0.024155rem solid #e0e0e0;
}
.m_c_bar li:nth-of-type(2){
    background: url(../imgs/hot.jpg) no-repeat right top;
    background-size: 0.821256rem 0.845411rem;
    
}

.thischecked:before{
    /*display: none;*/
    content: '';
    background-color:#ffd600; 
    position: absolute;
    left: 0;
    top:0.072464rem;
    width: 0.169082rem;
    height: 1.086957rem;
}

.main_right{
    width: 76%;
    height: 100%;
    position: fixed;
    right: 0;
}

.m_r_title{
    z-index: 2;
    height: 1.256039rem;
    line-height: 1.256039rem;
    border-bottom: 0.024155rem solid #e0e0e0;
    width: 7.6rem;
    position: fixed;
    top: 1.449275rem;
    right: 0;
    background-color: rgba(255,255,255,.95);
    color: #666666;
}
.m_r_title li{
    float: left;
    width: 50%; 
    text-align: center;
    background: url(../imgs/sort.png) no-repeat 2.8rem center;
    background-size: 0.289855rem 0.144928rem;
}
.sort:before{
    display: block;
    content: '';
    width: 0.024155rem;
    height: 46%;
    position: absolute;
    background-color: #ddd;
    top: 27%;
}
</style>