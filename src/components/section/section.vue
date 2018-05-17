<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    /*水平垂直居中*/
.css-ShuiPingChuiZhiJuZhong{display:-webkit-box;-webkit-box-align:center;-webkit-box-pack:center;}
.section-header{display: flex;color:#fff;margin:0;padding:0;padding-bottom:10px;}
.flex-main{display:flex;flex-direction:column;height:100%;}
.flex-cont{display:flex;height:100%;color:#fff;}

#section-box{background-color: rgba(0,0,0,0.5);height:100%;}
section-footer{background:rgba(70,70,70,0.4);color:#fff;}
</style>
<template>
    <div class="flex-main" id="section-box">
      <div class="section-header">
        <GongGaoBox></GongGaoBox>
      </div>
      <div class="flex-cont" style="overflow-y:auto">
        <ChatList></ChatList>
      </div>
      <div class="section-footer">
        <div style="overflow-x: auto;"><KeFuBox></KeFuBox></div>
        <div style="overflow-x: auto;"><IconBox></IconBox></div>
        <MsgBox></MsgBox>
      </div>

    </div>
</template>

<script>
  import GongGaoBox from './GongGaoBox.vue'
  import KeFuBox from './KeFuBox.vue'
  import IconBox from './IconBox.vue'
  import MsgBox from './MsgBox.vue'
  import ChatList from './ChatList.vue'
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
      GongGaoBox,
      KeFuBox,  
      IconBox,
      MsgBox,
      ChatList
    },
    // 过滤方法
    filters: {

    },
    // 监听 内部调用
    watch: {

    },
  }
</script>