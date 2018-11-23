<template>
<div class="header">
    <router-link to="/Class">
      <div class="header_left">
        <div class="iconfont"><img src="../../../assets/img/timg.jpeg"></div>
      </div>
    </router-link>

    <div class="header_input">
      <span class="iconfont">&#xe632;</span>
      微信小游戏
    </div>

</div>
</template>

<script>
export default{
  name: 'HomeHeader'
}
</script>

<style scoped>
  .header{
    line-height: .86rem;
    display: flex;
    background-color: #ffffff;
    color: #fff;
  }
  .header_left{width: .64rem;float: left;}
  .header_input{
    flex: 1;
    padding-left: .2rem;
    background: #ccc;
    border-radius: .1rem;
    height: .64rem;
    line-height: .64rem;
    margin-top: .12rem;
    margin-left: .2rem;
    margin-right: .2rem;
    color: #fff;
    text-align: center;
  }
 .header_left img{
   width: .58rem;
   margin-left: 0.5em;
 }
</style>
