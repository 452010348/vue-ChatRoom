<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  /*  header,footer{background-color: yellow;min-height:80px;} */

  .flex-main{display:flex;flex-direction:column;height:100%;}
  .flex-cont{display:flex;height:100%;overflow: hidden;margin-top:5px;}


.UserSmallFeature{
  margin:6px;
  display: -webkit-flex;
}
.UserSmallFeature > li{margin:0 5px;border-radius:2px;background: #909399;line-height: 30px;color:#fff;cursor: pointer;
  transition: 0.3s;
}
.UserSmallFeature > li:hover{background:#f56c6c;}
.UserSmallFeature > li.on{background:#e6a23c;}
.UserSmallFeature > li span{width:100px;height:30px;;display: inline-block;text-align:center;font-size:16px;}
  
ul.UserSmallFeature-box{color:#fff;width: 100%;height:100%;}
ul.UserSmallFeature-box > li{width: 100%;height:100%;display: none;}
ul.UserSmallFeature-box > li.on{display: block;}
.hide{display: none;}
</style>
<template>

  <div class="flex-main">

    <header>
      <div style="overflow-y: auto;">
        <ul class="UserSmallFeature">
          <li :class="(i==index?'on':'')" v-for="item,i in 6" @click="handleClick(i);">
            <!-- <router-link :to="{path:'/a', query: {name: 2}}"> -->
            <span>幸运房间{{i}}</span>
            <!-- </router-link> -->
          </li>
        </ul>
      </div>
    </header>

    <div class="flex-cont">
      <ul class="UserSmallFeature-box">
        <li v-for="itemn,i in 4" :class="(i==index?'on':'')">{{i}}  {{author}}</li>
      </ul>
    </div>
     
  </div>
</template>

<script>

  import {mapState} from 'vuex'

  export default {
    data() {
      return {
        index:0,//默认的选中
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
      handleClick(i) {
        console.log(this.$el.className, i);
        this.index = i;
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
    computed: mapState({
      // 箭头函数可使代码更简练
      author: (state) => {
        console.log(this);
        return state.author + "你好吗"
      }
    })
  }
</script>