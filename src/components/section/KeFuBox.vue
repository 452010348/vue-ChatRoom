<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .overXauto-box{padding:5px;}
  .overXauto-box > ul{display: -webkit-flex;}
  .overXauto-box > ul > li{margin:0 5px;}
  .overXauto-box > ul > li > *{
    width:90px;
    height:22px;line-height: 22px;
    color: #fb5f5f;
    transition: .3s;
    border-radius: 2px;
    border: 1px solid #fb5f5f;
    font-size: 12px;
    display: -webkit-box;
  }
  .overXauto-box > ul > li > * i{
    background: #fb5f5f;
    color: #FFF;
    width: 100%;
    line-height: inherit;
    text-align: center;
    font-size: 13px;
  }
.TheZoom {animation: TheZoom 0.7s infinite;}
.TheZoom-l{width: 25px;height:100%;background: #fb5f5f;text-align: center;}
.TheZoom-r{height:100%;-webkit-box-flex: 1;text-align: center;background: #FFF;transition: .3s;}
.overXauto-box > ul > li:hover .TheZoom-r{background: #fb5f5f;color:#fff}
@keyframes TheZoom{
  0%,
  100%{-webkit-transform:scale(1);-moz-transform:scale(1);-ms-transform:scale(1);-o-transform:scale(1);transform:scale(1)}
  50%{-webkit-transform:scale(.95);-moz-transform:scale(.95);-ms-transform:scale(.95);-o-transform:scale(.95);transform:scale(.95)}
}
</style>
<template>
  <div class="overXauto-box">
    <ul>
      <li v-for="item,i in 13">
        <a class="TheZoom" target="_blank" title="红包专员" href="">
          <div class="TheZoom-l "><i class="iconfont icon-qq1"></i></div>
          <div class="TheZoom-r css-ShuiPingChuiZhiJuZhong">红包专员</div>
        </a>
      </li>
    </ul>
  </div>
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