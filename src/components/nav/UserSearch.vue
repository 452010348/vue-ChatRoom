<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /*垂直居中*/
.css-ChuiZhiJuZhong{display:-webkit-box;-webkit-box-align:center;height:100%;}
/*水平垂直居中*/
.css-ShuiPingChuiZhiJuZhong{display:-webkit-box;-webkit-box-align:center;-webkit-box-pack:center;}

.search-box {
    height:100%;width: 100%;
    display: -webkit-box;
}
.input-box {
    height:100%;
    border: 1px solid #777;
    border-right: none;
    -webkit-box-flex: 1;
}
.ico-2 {
    border: 1px solid #777;;
    height:100%;
    width: 40px;
    
}


.input-box input{
  display: block;width: 100%;height:100%;background: transparent;color:#ccc;padding:0 5px;color:14px;
}

</style>

<template>
  <div class="search-box">
    <div class="input-box css-ChuiZhiJuZhong" contenteditable="true">
      <input type="search" name="" id="">
    </div>
    <div class="ico-2 css-ShuiPingChuiZhiJuZhong"><i class="el-icon-search"></i></div>
  </div>
</template>

<script>


  export default {
    data() {
      return {
        input21:''
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