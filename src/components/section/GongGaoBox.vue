<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    /*垂直居中*/
.css-ChuiZhiJuZhong{display:-webkit-box;-webkit-box-align:center;height:100%;}
  /*水平垂直居中*/
.css-ShuiPingChuiZhiJuZhong{display:-webkit-box;-webkit-box-align:center;-webkit-box-pack:center;}
.GongGao{
  background:rgba(70, 70, 70, 0.3);height:40px;
  display: -webkit-box;
}
.GongGao-ico{border-right:1px solid #404040b3;width: 40px;}
.GongGao-con{
  -webkit-box-flex: 1
}
.el-checkbox{padding:1px 6px;height:auto;margin:0;color:#fff;}
.el-button{padding:4px 6px;margin:0;}

</style>
<template>
  <div class="GongGao">
    <div class="GongGao-ico css-ShuiPingChuiZhiJuZhong"><i class="el-icon-loading"></i></div>
    <div class="GongGao-con css-ChuiZhiJuZhong">
      <marquee scrollamount="5">
        <span style="color:#FF0">尊敬的会员请注意：因近期微信和支付宝风控较为严厉，为了保障广大客户资金安全，网站会不定期更换微信客服账号和支付宝充值卡号，任何充值与服务请以网站最新账号为准，如不按照网站提供卡号充值错误的客户出现任何资金问题，网站概不负责，抱歉给大家带来不便，请谅解！</span>
      </marquee>
    </div>
    <div class="css-ShuiPingChuiZhiJuZhong" style="padding:0 5px;">
        <el-button type="success" icon="el-icon-time" size="mini">记录</el-button>
        <el-button type="warning" icon="el-icon-delete" size="mini">清屏</el-button>
        <el-checkbox v-model="checked" border >滚动</el-checkbox>
    </div>
  </div>
</template>

<script>


  export default {
    data() {
      return {
        checked: true,
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