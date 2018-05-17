<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

<template>
  <!-- <el-dialog title="登入" :visible.sync="$store.state.loginIsShow" width="340px"> -->
  <el-dialog :title="$store.state.dialog.title" :visible.sync="$store.state.dialog.isShow" :width="$store.state.dialog.width">
    <login v-show="$store.state.dialog.title=='登入'?true:false"></login>
    <reg v-show="$store.state.dialog.title=='注册'?true:false"></reg>
    <div slot="footer" class="dialog-footer">
      <el-button @click="regClick($store.state.dialog.text)">{{$store.state.dialog.text}}</el-button>
    </div>
  </el-dialog>
</template>

<script>


  import login from './login.vue'
  import reg from './reg.vue'
  export default {
    data() {
      return {};
    },
    // 已被初始化
    mounted() {
      this.$nextTick(function () {});
    },
    // 组件传参
    props: [],
    // 方法
    methods: {
      regClick(e){
        console.log(e);
        if(e=='登入'){
          this.$store.commit('dialog', {
           isShow: true,
           title: '登入',
           text: '注册',
           width: '340px'
         });
        }else{
           this.$store.commit('dialog', {
            isShow: true,
            title: '注册',
            text: '登入',
            width: '440px'
          });
        }
      },
    },
    // 组册组件模块
    components: {
      login,
      reg
    },
    // 过滤方法
    filters: {},
    // 监听 内部调用
    watch: {},

  }
</script>