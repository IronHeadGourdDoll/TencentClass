<template>
<div>
    <home-header></home-header>
    <home-swiper :list='swiperList'></home-swiper>
    <!-- <home-app :list="labList"></home-app> -->
    <!-- <home-app :list="labList"></home-app> -->
    <home-demo></home-demo>
    <home-recommend :list="recommendList"></home-recommend>
</div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
// import HomeApp from './components/App'
import HomeRecommend from './components/Recommend'
import HomeDemo from './components/Demo'
import axios from 'axios'
export default{
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeRecommend,
    HomeDemo
  },
  data: function () {
    return {
      swiperList: [],
      lyTabList: [],
      recommendList: []
    }
  },
  methods: {
    getHomeInfo: function () {
      axios.get('/api/index.json').then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc: function (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.swiperList = data.swiperList
        this.lyTabList = data.lyTabList
        this.recommendList = data.recommendList
      }
      console.log(res)
    }
  },
  mounted: function () {
    this.getHomeInfo()
  }
}
</script>

<style>

</style>
