<template>
  <div class="login-wrapper">
    <div class="header-wrapper">
      <div class="header">
        <div class="header-left">
          <div class="goHome" @click="$router.replace('/')">
            <i class="iconfont icon-shouye"></i>
          </div>
        </div>

        <div class="logo"></div>
        <div class="header-right">
          <div class="goCart" @click="$router.replace('/cart')">
            <i class="iconfont icon-gouwuche"></i>
          </div>
          <div class="goSearch" @click="$router.replace('/search')">
            <i class="iconfont icon-sousuo"></i>
          </div>
        </div>
      </div>
    </div>
    <div class="content-wrapper" v-if="$route.path === '/login'">
      <div class="content-logo">
        <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
      </div>
      <div class="login-phone" @click="$router.replace('/login/phone')">
        <i class="iconfont icon-shouji"></i>
        <span>手机号码登录</span>
      </div>
      <div class="login-email">
        <i class="iconfont icon-youxiang"></i>
        <span>邮箱帐号登录</span>
      </div>
      <div class="register-phone">手机号快捷注册></div>
      <div class="login-other">
        <div class="wchat">
          <i class="iconfont icon-weixin"></i>
          <span>微信</span>
        </div>
        <div class="qq">
          <i class="iconfont icon-qq"></i>
          <span>QQ</span>
        </div>
        <div class="weibo">
          <i class="iconfont icon-weibo"></i>
          <span>微博</span>
        </div>
      </div>
    </div>
    <div class="content-wrapper" style="background-color: white">
      <RouterView/>
    </div>
  </div>
</template>

<script>
    export default {

    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
.login-wrapper
  position fixed
  top 88px
  bottom 0
  width 100%
  background-color #f2f5f4
  .header-wrapper
   bottom-border-1px(#d9d9d9)
   position fixed
   left 0
   top 0
   z-index 200
   width 100%
   height 88px
   background-color #fafafa
   .header
    width 100%
    position fixed !important
    height 82.5px
    left 0
    top 0
    z-index 100
    background-color #fafafa
    -webkit-box-sizing border-box
    margin auto
    overflow hidden
    padding 0.1rem 0.4rem 0 0.4rem
    text-align center
    .header-left
      float left
      height 1rem
      line-height 1rem
      padding-left 0.02rem
      .goHome
        float: left;
        .iconfont
          display: block;
          font-size .68rem
    .logo
      width: 2.29333rem;
      height: .72rem;
      margin-left .8rem
      background-position: 0 -1.70667rem;
      display: inline-block;
      background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-s9f33319f5a-164b37c9ce.png);
      background-repeat: no-repeat;
      background-size: 2.29333rem 5.6rem;
    .header-right
      float: right
      height: 1rem
      line-height 1rem
      padding-right .02rem
      .goCart
        float right

        .iconfont
          display block
          font-size .6rem

      .goSearch
        float: right
        margin-right .5rem

        .iconfont
          display block
          font-size .6rem
  .content-wrapper
    height 100%
    text-align center
    .content-logo
      padding-top 2.13333rem
      padding-bottom 2.13333rem
      text-align center
      img
        width 3.57333rem
        height 1.2rem
    .login-phone
      width 90%
      display inline-block
      margin .42667rem 0
      height 1.25333rem
      line-height 1.25333rem
      text-align center
      font-size .37333rem
      color #fff
      border 1px solid #b4282d
      background-color #b4282d
      border-radius 4px
      .iconfont
        font-size .4rem
    .login-email
      width 90%
      display inline-block
      margin-bottom .4rem
      height 1.25333rem
      line-height 1.25333rem
      text-align center
      font-size .37333rem
      color #b4282d
      border: 1px solid #b4282d;
      border-radius: 4px
      .iconfont
        font-size .4rem
    .register-phone
      color: #333;
      font-size: .37333rem;
      text-align: center;
    .login-other
      margin-top 5rem
      font-size: .4rem;
      line-height: .53333rem;
      height: .53333rem;
      color: #7F7F7F;
      margin-left: .06667rem;
      display flex
      justify-content center
      .iconfont
        font-size: .48rem;
      .wchat
        width 2.33333rem
        border-right 2px solid
      .qq
        width 2.33333rem
        border-right 2px solid
      .weibo
        width 2.33333rem





</style>
