<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    /*水平垂直居中*/
.css-ShuiPingChuiZhiJuZhong{display:-webkit-box;-webkit-box-align:center;-webkit-box-pack:center;}
  header{min-height:20px;color:#fff;margin-bottom:25px;}
  .flex-main{display:flex;flex-direction:column;height:100%;}
  .flex-cont{display:flex;height:100%;color:#fff;/* border-top:1px solid #777; */}
  footer{overflow-x: auto;background:rgba(0,0,0,0.5);height:65px;border-top:1px solid #777;}
  .user-tab{height:50px;padding:5px; }
  .user-search{height:36px;padding:5px;padding-top:0px;}
</style>
<template>
    <div class="flex-main">
      <header>
        <div class="css-ShuiPingChuiZhiJuZhong user-tab"><UserTab></UserTab></div>
        <div class="css-ShuiPingChuiZhiJuZhong user-search"><UserSearch></UserSearch></div>
      </header>
      <div class="flex-cont">
        <UserList></UserList>
      </div>
      <!-- <footer><UserSmallFeature></UserSmallFeature></footer> -->
    </div>
</template>
<script>
  import UserSearch from './UserSearch.vue'
  import UserTab from './UserTab.vue'
  import UserList from './UserList.vue'
  import UserSmallFeature from './UserSmallFeature.vue'
  export default {
    data() {
      return {
      };
    },
    // 已被初始化
    mounted() {
      this.$nextTick(function () { });
    },
    // 组件传参
    props: [],
    // 方法
    methods: {},
    // 组册组件模块
    components: {
      UserSearch,
      UserTab,
      UserList,
      UserSmallFeature
    },
    // 过滤方法
    filters: { },
    // 监听 内部调用
    watch: {},
  }
</script>