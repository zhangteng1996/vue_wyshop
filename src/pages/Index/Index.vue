<template>
    <div>
       <!--首页头部-->
      <header id="header-wrap">
        <div class="header">
          <h1 id="logo"></h1>
          <div class="topSearchIpt">
            <i class="icon-search"></i>
            <span class="placeholder">搜索商品，共19000件商品</span>
          </div>
          <div class="loginBtn">登录</div>
        </div>
        <div class="header-nav-wrap">
          <!--滚动导航-->
          <div class="header-nav-some-wrap">
            <div class="header-nav-some">
              <a href="javascript:;" class="active">
                <span>推荐</span>
              </a>
              <a href="javascript:;">
                <span>居家</span>
              </a>
              <a href="javascript:;">
                <span>鞋包配饰</span>
              </a>
              <a href="javascript:;">
                <span>服装</span>
              </a>
              <a href="javascript:;">
                <span>电器</span>
              </a>
              <div class="toggle-nav">
                <div class="icon"></div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div class="content">
        <!--轮播图-->
        <div class="swiper-container" >
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <img
                src="https://yanxuan.nosdn.127.net/bec4a597a9aed55605eeb7c0c7710f9b.jpg?imageView&quality=75&thumbnail=750x0"
                alt="">
            </div>
            <div class="swiper-slide">
              <img
                src="https://yanxuan.nosdn.127.net/981c28d7f7276a2c84bf8c7790a9b559.jpg?imageView&quality=75&thumbnail=750x0"
                alt="">
            </div>
            <div class="swiper-slide">
              <img
                src="https://yanxuan.nosdn.127.net/feadfbdcc0e2dea285d92c6740d46c66.jpg?imageView&quality=75&thumbnail=750x0"
                alt="">
            </div>
            <div class="swiper-slide">
              <img
                src="https://yanxuan.nosdn.127.net/791dda3ae432212164b1668b25fbd11c.jpg?imageView&quality=75&thumbnail=750x0"
                alt="">
            </div>
            <div class="swiper-slide">
              <img
                src="https://yanxuan.nosdn.127.net/5afff79cb85dfcd465e6da0d8404ddae.jpg?imageView&quality=75&thumbnail=750x0"
                alt="">
            </div>
            <div class="swiper-slide">
              <img
                src="https://yanxuan.nosdn.127.net/72d052bfced137a39f0680174f2a709f.jpg?imageView&quality=75&thumbnail=750x0"
                alt="">
            </div>
            <div class="swiper-slide">
              <img
                src="https://yanxuan.nosdn.127.net/4d078ea6e81cbf0fd128ef1b255bd6e2.jpg?imageView&quality=75&thumbnail=750x0"
                alt="">
            </div>
            <div class="swiper-slide">
              <img
                src="https://yanxuan.nosdn.127.net/defcddd6a2241b217da7c957da755981.jpg?imageView&quality=75&thumbnail=750x0"
                alt="">
            </div>
          </div>
          <div class="swiper-pagination"></div>
        </div>
        <div class="slogon">
          <div class="slogon-all slogon-left">
            <i></i>
            <span>网易自营品牌</span>
          </div>
          <div class="slogon-all slogon-center">
            <i></i>
            <span>30天无忧退货</span>
          </div>
          <div class="slogon-all slogon-right">
            <i></i>
            <span>48小时快速退款</span>
          </div>
        </div>
        <!--商品导航-->
        <ul class="shopNav" >
          <li>
            <img src="../../../static/images/63682bd2df06963251b2715e20f98a75.png" alt="">
            <span>居家</span>
          </li>
          <li>
            <img src="../../../static/images/63682bd2df06963251b2715e20f98a75.png" alt="">
            <span>居家</span>
          </li>
          <li>
            <img src="../../../static/images/63682bd2df06963251b2715e20f98a75.png" alt="">
            <span>居家</span>
          </li>
          <li>
            <img src="../../../static/images/63682bd2df06963251b2715e20f98a75.png" alt="">
            <span>居家</span>
          </li>
          <li>
            <img src="../../../static/images/63682bd2df06963251b2715e20f98a75.png" alt="">
            <span>居家</span>
          </li>
          <li>
            <img src="../../../static/images/63682bd2df06963251b2715e20f98a75.png" alt="">
            <span>居家</span>
          </li>
          <li>
            <img src="../../../static/images/63682bd2df06963251b2715e20f98a75.png" alt="">
            <span>居家</span>
          </li>
          <li>
            <img src="../../../static/images/63682bd2df06963251b2715e20f98a75.png" alt="">
            <span>居家</span>
          </li>
          <li>
            <img src="../../../static/images/63682bd2df06963251b2715e20f98a75.png" alt="">
            <span>居家</span>
          </li>
          <li>
            <img src="../../../static/images/63682bd2df06963251b2715e20f98a75.png" alt="">
            <span>居家</span>
          </li>
        </ul>
        <!--boss推荐-->
        <div class="bossRecommen">
          <img src="https://yanxuan.nosdn.127.net/df012027a9bd3c0b0e5779c11b814180.png" alt="">
        </div>
      </div>
    </div>
</template>

<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'


    export default {
      components: {

      },
      data () {
        return {
          // 是否显示全部导航
          isShowAllCate: false,
        }
      },
      mounted(){
        new Swiper ('.swiper-container', {
          loop: true,
          // 如果需要分页器
          pagination: {
            el: '.swiper-pagination',
          },
          autoplay: true,
          delay: 2000
        })
      },
    }

</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  #header-wrap
    width: 100%
    background: #fff
    position fixed
    left 0
    top 0
    z-index 200
    //头部
    .header
      display flex
      padding: .21333rem .4rem
      align-items center
      #logo
        width: 1.84rem
        height: .53333rem
        background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-11d65342f9.png)
        display inline-block
        margin-right .2667rem
        background-size cover
        background-position center
        background-repeat no-repeat
      .topSearchIpt
        width: 60%
        justify-content: center
        height: .74667rem
        font-size: .37333rem
        background-color: #ededed
        border-radius: .10667rem
        text-align center
        display flex
        align-items: center
        flex-grow: 1
        .icon-search
          display inline-block
          vertical-align middle
          background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-2fb94833aa.png)
          background-size 100% 100%
          background-repeat no-repeat
          width .37333rem
          height .37333rem
          margin-right .13333rem
        .placeholder
          color #666
          font-size .37333rem
     .loginBtn
       width .98667rem
       height .53333rem
       line-height .53333rem
       text-align center
       color #b4282d
       border 1px solid #b4282d
       border-radius .10667rem
       margin-left .21333rem
       font-size .32rem
      //头部导航
    .header-nav-wrap
      display: flex /*设为伸缩容器*/
      width: 100%
      height: 0.8rem
      line-height 0.8rem
    // 头部滚动导航

    .header-nav-some-wrap
      flex 5
      display flex
      overflow hidden

      .header-nav-some
        white-space: nowrap
        display: flex
        height: 100%

        a
          flex: 1 0 auto
          margin-left: .15635rem
          padding: 0 .21333rem
          text-align: center
          color #333
          font-size: .37333rem
          &.active
            color: #b4282d
            border-bottom()
        .toggle-nav
          flex 1
          text-align center
          width 1.33333rem
          height 100%
          padding-left 0.6999rem

         .icon
          margin-bottom 0.15rem
          display inline-block
          background-image url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/arrow-down-3-a6045aadfd.png)
          background-repeat no-repeat
          background-size 100% 100%
          width .4rem
          height .4rem

  //内容区
    .content
      position: relative
      left 0
      top 2rem
      padding-bottom 1.30667rem
      // 去除横向滚动条
      overflow-x hidden
      .slogon
        display flex
        width 100%
        padding .21333rem 0
        .slogon-all
          flex 1
          color #b4282d
          font-size .32rem
          text-align center
          i
           vertical-align middle
           display inline-block
           background-image url(http://yanxuan.nosdn.127.net/cae45612b8aae577d8bd73338e2fc02c.png)
           background-repeat no-repeat
           background-size 100% 100%
           width .42667rem
           height .42667rem
  .shopNav
   width 100%
   height: 5.22667rem;
   clearFix()

   li
    width: 1.46667rem
    height: 2.08rem
    float: left
    margin: .13333rem .26667rem 0
    display flex
    flex-direction column

    img
      width: 1.46667rem
      height: 1.46667rem

    span
      text-align center
      color: #333333
      margin-top: .13333rem
      font-size: .32rem
      line-height: .48rem
      white-space: nowrap
  .bossRecommen
    width 100%
    background-color: #FFFFFF;
    height: 2.13333rem;

    img
      width: 100%
      height: 100%




</style>
