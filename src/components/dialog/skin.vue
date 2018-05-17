<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .shade {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 99999999;
    background: rgba(0, 0, 0, 0.5);
    display: -webkit-box;
  }
  .skin-box ul{margin-top:10px;}
  .skin-box {
    width: 450px;height: 100%;
    background: #393D49;
    border-right: 1px solid #cc9292e3;
    height: 100%;
    overflow-y: auto;
    padding:0 10px;
  }

  .skin-box ul li {
    height: 240px;
    margin-bottom: 10px;
    border-radius: 5px;
    border: 1px solid #cc9292e3;
    transition: 0.3s;
    overflow: hidden;
  }

  .skin-box ul li:hover {
    box-shadow: 0 0 15px rgba(255, 255, 255, 1), inset 0 0 15px rgba(0, 255, 255, 1);
  }

  .skin-box ul li img {
    width: 100%;
    height: 100%;
  }
</style>
<template>
  <div class="shade" v-show="$store.state.skinIsClose">
    <div class="skin-box">
      <ul>
        <li v-for="item,i in skin" @click="skincClick(i)">
          <img :src="item.src">
        </li>
      </ul>
    </div>
    <div style="-webkit-box-flex: 1;height: 100%;" @click="closeClick"></div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        skin: [
          { src: "static/images/skin/b1.jpg" },
          { src: "static/images/skin/b2.jpg" },
          { src: "static/images/skin/b3.jpg" },
          { src: "static/images/skin/b4.jpg" },
          { src: "static/images/skin/b5.jpg" },
        ]
      };
    },
    // 已被初始化
    mounted() {
      this.$nextTick(function () {

        //随机皮肤或者缓存皮肤
        var i = Math.random() * this.skin.length << 0;
        this.skincClick(i);
      });
    },
    // 组件传参
    props: [],
    // 方法
    methods: {
      skincClick(i) {
        console.log('换肤：', this.skin[i].src);
        this.$store.commit('skin', this.skin[i].src);
      },
      closeClick() {
        console.log('关闭');
        this.$store.commit('skinIsClose', false);
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