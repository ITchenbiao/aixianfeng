<template>
  <div id="app">
      <router-view ></router-view>
      <div class="footer">
          <ul>
            <li >
              <router-link to="/home">
                <i class="firstPage footerCommon" ></i>首页
              </router-link>
            </li>
            <li >
              <router-link to="/quick">
               <i class="quickSend footerCommon"  ></i>闪送超市
              </router-link>
            </li>
            <li >
              <router-link to="/shopcar" >
                <i class="dingdan footerCommon"  ></i>
                <span class="shopnum " v-show="cartCount">{{cartCount}} </span>购物车
              </router-link>
            </li>
            <li >
              <router-link to="/myself">
                <i class="personalinf footerCommon" ></i>我的
              </router-link></li>
          </ul>
      </div>
      <div class="boot_gps">
          <div class="boot_logo">
          </div>
          <div class="boot_positon">
          定位中..
          </div>
      </div>  
  </div>
</template>

<script>

// 引入jquery
import jquery from '../static/js/jquery-1.8.1.js'
import DB from './common/DataHelper'

export default {
    name: 'app',
    data () {
      return {
        show: true,
        cartCount: 0,
        currentnum: true,

      }
    },
    created() {
        // 将外部的this赋值给that 在里面的实例里可以用
        var that = this;

        // 注册事件，被调用时，修改badeg的值
        CommonVM.$on('changeBadegValue', function () {
            var a = DB.getData();
            console.log(a);
            var s = 0;
            for (let i=0;i<a.length; i++){
              s += a[i].num;
            }
            console.log(s)
            that.cartCount = s;
        });
    },
    components: {

    },
    methods : {
      current() {
         return  this.currentIndex = true;
      }
    },
    mounted() {
      //手机定位页面
      setTimeout(function Position(){
        $(".boot_gps").hide();
      },2000);

      //切换页脚背景图
      $(".firstPage").addClass('changebg');
      $(".footer li").on("click",function(){
        $(".footer li").find("i").removeClass('changebg');
      	$(this).find("i").addClass('changebg');
      })

      //HTML5 Geolocation（地理定位）用于定位用户的位置。对于拥有 GPS 的设备更加精确。
      //使用前注意检查是否支持
      if (navigator.geolocation){ 
        //使用navigator的geolocation属性获取位置相关信息  getCurrentPosition获取当前坐标 latitude  十进制数的纬度 longitude 十进制数的经度
            navigator.geolocation.getCurrentPosition(function(positionData){
              document.write("定位中。。。");
              document.write(positionData);
            }); 
      }else{ 
          console.log("该浏览器不支持获取地理位置。"); 
      } 
    },
    updated () {
      switch(window.location.hash){
        case '#/home' :
          [this.isture1,this.isture12] = [false,true];
        break;
         case '#/quick' :
            // [this.isActive1] = [true];
        break;
        default:
        break;
      }
    }
}
</script>

<style>

/*-----底部菜单*/
.footer{
  z-index: 2;
  height: 1.570048rem;
  width: 100%;
  background-color: rgba(246,246,246,.95);
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  color: #777777;
}
.footer li{
  float: left;
  height: 1.570048rem;
  width:25%;
  text-align: center;
  position: relative;

}
.footer li a{
  color: #777777;

}
.footerCommon{
  display: block;
  height:0.603865rem;
  width: 0.603865rem; 
  margin: 0.217391rem auto;
  background-size: 0.603865rem 0.603865rem;
  background-repeat: no-repeat;
}

.firstPage{
  background-image: url(./imgs/bottom11.png) ;
}
.quickSend{
  background-image: url(./imgs/bottom2.png) ;
}
.dingdan{
  background-image: url(./imgs/bottom3.png) ;
}
.personalinf{
  background-image: url(./imgs/bottom4.png) ;
}

.footer li:nth-of-type(1) .changebg{
  background-image: url(./imgs/bottom1.png);
}
.footer li:nth-of-type(2) .changebg{
  background-image: url(./imgs/bottom21.png);
}
.footer li:nth-of-type(3) .changebg{
  background-image: url(./imgs/bottom31.png);
}
.footer li:nth-of-type(4) .changebg{
  background-image: url(./imgs/bottom41.png);
}
.shopnum{
  /*display: none;*/
  height:0.57971rem;
  line-height: 0.57971rem;
  width: 0.57971rem;
  border-radius: 50%;
  background: #ff4400;
  position: absolute;
  right: 0.362319rem;
  top: 0.2rem;
  color: #fff;
}
/*---首页定位中*/
.boot_gps{
  /*display: none;*/
  position: fixed;
  top: 0;
  z-index: 999;
  width: 100%;
  height: 17.777778rem;
  background: #ffd82b;
}
.boot_logo{
  height: 7.439614rem;
  width: 100%;
  background: url(./imgs/boot_logo.png) no-repeat 50% 100%;
  background-size: 6.038647rem 3.091787rem;
}
.boot_positon{
  height: 1.932367rem;
  text-align: center;
  line-height: 3.3rem;
  background: url(./imgs/boot_gps.png) no-repeat 50% 40%;
  background-size: 0.966184rem 0.966184rem;
}
</style>