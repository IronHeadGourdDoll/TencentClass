<template>
<div class="demo">
  <ly-tab
    v-model="selectedId"
    :items="items"
    :options="options"
    @change="handleChange">
  </ly-tab>

  <!-- 通过指定fixBottom为true实现固定在底部的tab -->
  <ly-tab
    v-model="bottomSelectedId"
    :items="bottomItems"
    :options="bottomOptions"
    >
  </ly-tab>
</div>
</template>

<script>

export default {
  name: 'Demo',
  data () {
    return {
      selectedId: 4,
      bottomSelectedId: 0,
      items: [
        {label: '考研'},
        {label: '移动开发'},
        {label: '编程语言'},
        {label: '软件测试'},
        {label: 'IT认证'},
        {label: '研究生留学'},
        {label: '兴趣生活'},
        {label: '人工智能'},
        {label: 'APP UI设计'}
      ],
      options: {
        activeColor: '#1d98bd'
      },
      bottomItems: [
        {text: '首页', icon: 'ly-icon ly-icon-home'},
        {text: '分类', icon: 'ly-icon ly-icon-icon--'},
        {text: '课程表', icon: 'ly-icon ly-icon-sousuo'},
        {text: '我的', icon: 'ly-icon ly-icon-wode'}
      ],
      bottomOptions: {
        activeColor: '#1d98bd',
        fixBottom: true,
        labelKey: 'text'
      }
    }
  },

  methods: {
    handleChange (item, index) {
      console.log(item, index)
    }
  }
}
</script>

<style scoped>
.course_banner{
  margin-top: .300rem;
  height: .600rem;
}
</style>
