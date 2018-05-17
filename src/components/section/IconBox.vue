<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /*垂直居中*/
  .css-ChuiZhiJuZhong{display:-webkit-box;-webkit-box-align:center;height:100%;}
  /*水平垂直居中*/
  .css-ShuiPingChuiZhiJuZhong{display:-webkit-box;-webkit-box-align:center;-webkit-box-pack:center;}

.overXauto-box{padding:6px;padding-bottom:0px;display: -webkit-box;}
.el-button.el-button.is-circle{padding:6px;font-size:16px;}

.el-button{position: relative;}
.el-tooltip{position: absolute;left:-5px;top:0;right:0;bottom:0;width: 100%;background:transparent;border:none; }
</style>

<template>
  <div class="overXauto-box">
      <el-tag closable type="success" @close="handleClose()" >对：<span style="color:#e6a23c;">{{who}}</span>&nbsp;说</el-tag>
      
      <el-button size="mini" icon="iconfont icon-biaoqing" circle>
        <el-tooltip effect="dark"  content="表情" placement="top">
          <el-button></el-button>
        </el-tooltip>
      </el-button>
      <el-button type="primary" icon="iconfont icon-tupian" circle>
        <el-tooltip effect="dark"  content="插入图片" placement="top">
          <el-button></el-button>
        </el-tooltip>
      </el-button>
      <el-button size="mini" type="success" icon="iconfont icon-biaoqing" circle>
        <el-tooltip effect="dark"  content="表情" placement="top">
          <el-button></el-button>
        </el-tooltip>
      </el-button>
      <el-button size="mini" type="info" icon="iconfont icon-moshumagic15" circle>
        <el-tooltip effect="dark"  content="点赞一个" placement="top">
          <el-button></el-button>
        </el-tooltip>
      </el-button>
      <el-button size="mini" type="danger" icon="iconfont icon-hongbao" circle>
        <el-tooltip effect="dark"  content="发红包" placement="top">
          <el-button></el-button>
        </el-tooltip>
      </el-button>
      <el-button size="mini" type="warning" icon="iconfont icon-qiandao" circle>
        <el-tooltip effect="dark"  content="签到" placement="top">
          <el-button></el-button>
        </el-tooltip>
      </el-button>
      <el-button size="mini" type="danger" icon="iconfont icon-danmu" circle>
        <el-tooltip effect="dark"  content="发弹幕" placement="top">
          <el-button></el-button>
        </el-tooltip>
      </el-button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        who:'大家'
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
      handleClose(){
        this.who = "大家";
      }
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