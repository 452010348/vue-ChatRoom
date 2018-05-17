<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /*垂直居中*/
  .css-ChuiZhiJuZhong{display:-webkit-box;-webkit-box-align:center;height:100%;}
  /*水平垂直居中*/
  .css-ShuiPingChuiZhiJuZhong{display:-webkit-box;-webkit-box-align:center;-webkit-box-pack:center;}

  .MsgBox{display: -webkit-box;height:80px;}
  .input-left{-webkit-box-flex: 1;padding:10px;outline: none;color:#fff;border:1px solid #777;overflow: auto;}
  .submit-right{
    width:150px;border:1px solid #777;margin-left:6px;border-radius:4px;background: #f56c6c;cursor: pointer;
    font-size:30px;position: relative;color: #fff;transition: 0.3s;
  }
 .submit-right:hover{background:#3a8ee6;}
  i.icon-icon-test{font-size:30px;}

  .el-tooltip{position: absolute;left:0;top:0;right:0;bottom:0;width: 100%;background:transparent;border:none; }
</style>

<template>
   <div style="padding:6px;">
    <div class="MsgBox">
      <div class="input-left" contenteditable="true"  placeholder="如遇到任何疑问请及时与~在线客服~联系为您解答，祝您游戏愉快！"></div>
      <div class="submit-right css-ShuiPingChuiZhiJuZhong" @click="SendClick">
          <i class="iconfont icon-icon-test"></i>
          <span>发送</span>
          <el-tooltip class="item" effect="dark"placement="top-start">
            <div slot="content">按 Ctrl+Enter 键发送消息<br/>按 Alt+S 键发送消息</div>
            <el-button></el-button>
          </el-tooltip>
        </div>
    </div>
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
      SendClick(){
        console.log( '发送数据 ');
      }
    },
    // 组册组件模块
    components: {},
    // 过滤方法
    filters: {},
    // 监听 内部调用
    watch: {},
  }
</script>