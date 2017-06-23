<template lang="html">
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for ="img in imgs" >
                <img :src="img.activity.img" @click="show" >
            </div>
        </div> 
        <div class="point">
        </div>   
    </div>
</template>


<script>
import swipers from "../../static/swiper.min.js"

export default {
    data() {
        return {
            imgs:[]
        }
    },
    methods: {
        show() {
            alert('轮播图');
        }
    },
    mounted() { //加载完成之后处理网络请求
      this.$http.get('../../static/data/home.json').then(function (res) {
            // this.items = JSON.parse(res.body).data;
            this.imgs = res.body.data.act_info[0].act_rows
            // console.log(res.body.data.act_info[0].act_rows)
          })
    },
    updated() {
        // Swiper需要在页面完成之后，执行JS代码才具有效果
        var mySwiper = new Swiper ('.swiper-container', {
            autoplay: 3000,//可选选项，自动滑动(时间:毫秒)
            speed:1000,//划动时间默认300
            loop : true,//循环
            paginationType : 'custom',//自定义显示类型
            pagination : '.point',
        });
    }
}
</script>

<style lang="css">
@import  '../../static/swiper.min.css'
/*.swiper-wrapper img{
    height: 3.743961rem;
    width: 10.0rem;
}*/
/*.swiper-slide img{
    height: 3.743961rem;
    width: 10.0rem;
}*/

</style>
