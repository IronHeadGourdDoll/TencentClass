<template>
  <div>
    <div class="title">考研推荐</div>
    <ul>
      <router-link tag="li" class="item" v-for="item of list" :key="item.id" :to="'/detail/'+item.id">
          <img :src="item.imgUrl"  alt="" class="item_img">
          <div class="item_info">
            <p class="item_title">{{item.title}}</p>
            <p class="item_desc">{{item.desc}}</p>
            <p class="item_price">{{item.price}}</p>
          </div>
      </router-link>
    </ul>
    <div class="title">IT互联网推荐</div>
    <ul>
      <router-link tag="li" class="item" v-for="item of list" :key="item.id" :to="'/detail/'+item.id">
          <img :src="item.imgUrl"  alt="" class="item_img">
          <div class="item_info">
            <p class="item_title">{{item.title}}</p>
            <p class="item_desc">{{item.desc}}</p>
            <button class="item_button">查看详情</button>
          </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default{
  name: 'HomeRecommend',
  props: {
    list: Array
  }
}
</script>

<style scoped>
  .title{
    margin-top: .2rem;
    line-height: .8rem;
    background: #eee;
    text-indent: .2rem;
  }
  .item{
    overflow: hidden;
    display: flex;
    height: 1.9rem;
  }
  .item_img{
    width: 2.5rem;
    height: 1.7rem;
    padding: .1rem;
  }
  .item_info{
    flex: 1;
    padding: .1rem;
    min-width: 0;
  }
  .item_title{
    line-height: .54rem;
    font-size: .32rem;
  }
  .item_desc{
    line-height: .4rem;
    color: #ccc;
  }
  .item_button{
    line-height: .44rem;
    margin-top: .16rem;
    background: #ff9300;
    padding: 0 .2rem;
    border-radius: .06rem;
    color: #fff;
  }
  .item_price{
    text-align: right;
    line-height: .20rem;
    margin-right: .150rem;
  }
</style>
