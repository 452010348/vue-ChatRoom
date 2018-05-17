<style media="screen">
  html,
  body {
    width: 100%;color:#fff;
    height: 100%;overflow: hidden;
  }

  header{min-height:20px;}
  .flex-main{display:flex;flex-direction:column;height:100%;}
  .flex-cont{display:flex;height:100%;}
  .flex-parent{display:-webkit-box;width:100%;height:100%;}
  .flex-parent-nav{min-width:20px;height:100%;}
  .flex-parent-main{-webkit-box-flex:1;height:100%;}
  

  

  #header-box{
    height:80px;    
    background-color:#393D49;
    border-bottom: 5px solid #fb5f5f;box-shadow: 1px 2px 2px rgba(0,0,0,0.20);
  }
  #Nav-box{background:rgba(0,0,0,0.7);width: 250px;}
  #router-view-right{width: 450px;background: rgba(0,0,0,0.5);}

  #mask-box{position: absolute;left: 0;right: 0;top: 0;bottom: 0;z-index: 9999999;background: rgba(0,0,0,0.5)}




</style>

<template>

    <!-- <div class="flex-main" :style="[skin]"> -->
    <div class="flex-main" :style="[$store.state.skin]">
      <header id="header-box">
        <oheader :screenWidth="screenWidth>=1150?true:false"></oheader>
      </header>
      <div class="flex-cont">
        <div class="flex-parent">
          <div class="flex-parent-nav" id="Nav-box" v-show="screenWidth>=1150?true:false">
            <onav></onav>
          </div>
          <div class="flex-parent-main flex-parent">
              <div class="flex-parent-main" style="padding:0 4px;">
                <osection></osection>
              </div>
              <div class="flex-parent-nav" id="router-view-right">
                <oaside></oaside>
              </div>
          </div>
        </div>
      </div>

      <odialog></odialog>
      <skin></skin>
      
  </div>

</template>


<script>
/*核心依赖*/
  import Vue from 'vue'

  /* 引入ElementUI组件 http://element.eleme.io/#/zh-CN/component/quickstart */
  import ElementUI from 'element-ui';
  import 'element-ui/lib/theme-chalk/index.css';
  Vue.use(ElementUI);


  /* 引入阿里 font http://www.iconfont.cn/manage/index?manage_type=myprojects&projectId=662017 */
  import '@/common/fonts/font-ali/iconfont.css'

  /*引入css*/
  import '@/common/css/reset.css'
  import '@/common/css/style.css'

  /*公共模板*/
  import oheader from '@/components/header/header.vue'
  import oaside from '@/components/aside/aside.vue'
  import onav from '@/components/nav/nav.vue'
  import osection from '@/components/section/section.vue'

  import odialog from '@/components/dialog/dialog.vue'
  import skin from '@/components/dialog/skin.vue'



  // 在单独构建的版本中辅助函数为 Vuex.mapState
  import { mapState } from 'vuex'

  // 设置默认打开的页面
  export default {
    //数据部分
    data() {
      return {
        //监听浏览器宽度-显示隐藏导航
        screenWidth: document.body.clientWidth,
        //换肤
        centerDialogVisible: false,
        // //默认皮肤
        // skin: { 
        //     backgroundImage: `url(static/images/skin/b3.jpg)`,
        // },
        //登入弹窗
        loginIsShow:true,
      }
    },
    //组册组件模块
    components: {
      oheader,
      oaside,
      onav,
      osection,
      odialog,
      skin
    },
    // 组件传参
    props: [],
    //方法
    methods: {
      //监听浏览器宽度-显示隐藏导航
      winResize(e) {
         window.onresize = () => {
             this.screenWidth = document.body.clientWidth;
         }
      },
    },
    //路由 模块
    // router: router,
    //已被初始化
    mounted() {
      this.$nextTick(function () {
        this.winResize();
        // console.log(this);
        // console.groupEnd('mounted 挂载结束状态===============》');
        // console.group('mounted 挂载结束状态===============》');
        // console.log("%c%s", "color:green", "el     : " + this.$el); //已被初始化
        // console.log("%c%s", "color:green", "data   : " + this.$data); //已被初始化
        // console.log("%c%s", "color:green", "message: " + this.message); //已被初始化
      });
    },
    //过滤方法
    filters: {},
    //监听 内部调用
    watch: {},
    computed: mapState({
      // 箭头函数可使代码更简练
      // author: (state) => {
      //   console.log(this);
      //   return state.author + "你好吗"
      // }
    })
  }
</script>

