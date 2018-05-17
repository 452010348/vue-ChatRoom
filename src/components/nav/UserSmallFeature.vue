<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /*垂直居中*/
.css-ChuiZhiJuZhong{display:-webkit-box;-webkit-box-align:center;height:100%;}
  /*水平垂直居中*/
.css-ShuiPingChuiZhiJuZhong{display:-webkit-box;-webkit-box-align:center;-webkit-box-pack:center;}

.UserSmallFeature{
  height:100%;
  display: -webkit-flex;
}
.UserSmallFeature > li{margin:0 5px;}
.UserSmallFeature > li img{display: block;width:30px;height:30px;border:1px solid rgb(253, 167, 157);}
</style>

<template>
  <ul class="UserSmallFeature">
    <li class="css-ShuiPingChuiZhiJuZhong" v-for="item in 6" href="javscript:;" title="提示"><img src="" alt="" srcset=""></li>
  </ul>
</template>

<script>


  export default {
    data() {
      return {

      };
    },
    // 已被初始化
    mounted() {
      this.$nextTick(function () {

      });
    },
    // 组件传参
    props: [],
    // 方法
    methods: {

    },
    // 组册组件模块
    components: {
    },
    // 过滤方法
    filters: {

    },
    // 监听 内部调用
    watch: {

    },
  }
</script>