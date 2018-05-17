<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .layout-head-box{display: -webkit-box;height:100%;color: #ffffff;}
  .layout-logo{width: 250px;height:100%;/* background: #df9b9b; */}
  .layout-right-content-box, .layout-contet-view{-webkit-box-flex: 1;display: -webkit-box;height:100%;}
  .layout-contet-view{overflow-x: auto;}
  .layout-user-info-box{padding:0 10px;height:100%;/* background: blueviolet; */}
  /*垂直居中*/
  .css-ChuiZhiJuZhong{display:-webkit-box;-webkit-box-align:center;height:100%;}
  /*水平垂直居中*/
  .css-ShuiPingChuiZhiJuZhong{display:-webkit-box;-webkit-box-align:center;-webkit-box-pack:center;}

  .inline-flex{display: inline-flex;}

.avatar {
    color: #A9B7B7;
    font-size: 14px;
    display: inline-block;
    vertical-align: middle;
}
.avatar cite, .avatar i {
    margin-left: 10px;
}
</style>
<template>
  <div class="layout-head-box">
    <div class="layout-logo css-ShuiPingChuiZhiJuZhong" v-show="screenWidth">
      <img :src="logo" alt="">
    </div>

    <div class="layout-right-content-box">
      <div class="layout-contet-view css-ChuiZhiJuZhong">
        <Nav></Nav>
      </div>

      <div class="layout-user-info-box inline-flex">
        <div class="css-ChuiZhiJuZhong">
          <el-button type="danger" size="small" style="padding-left:10px;padding-right:10px;margin:0 10px;" @click="skinClick()">
            <i class="el-icon-news el-icon--left"></i>换肤</el-button>
        </div>
        <LoginBefore></LoginBefore>
        <AfterLogging></AfterLogging>
      </div>
    </div>
  </div>
</template>

<script>
  import Nav from './Nav.vue'
  import LoginBefore from './LoginBefore.vue'
  import AfterLogging from './AfterLogging.vue'

  export default {
    data() {
      return {
        logo:'static/images/logo.png'
      };
    },
    // 已被初始化
    mounted() {
      this.$nextTick(function () {

      });
    },
    // 组件传参
    props: ['screenWidth'],
    // 方法
    methods: {
     skinClick(){
       this.$store.commit('skinIsClose', true);
     }
    },
    // 组册组件模块
    components: {
      Nav,
      LoginBefore,
      AfterLogging
    },
    // 过滤方法
    filters: {

    },
    // 监听 内部调用
    watch: {

    },
  }
</script>