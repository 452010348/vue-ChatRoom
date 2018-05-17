<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  ul.tab {
    display: flex;
    width: 100%;
    height: 100%;
    border: 1px solid #777;
  }

  ul.tab>li {
    flex: 1;
    transition: 0.3s;
    border-radius: 2px;
    display: -webkit-box;
    -webkit-box-align: center;
    -webkit-box-pack: center;
    position: relative;
  }

  ul.tab>li:not(:first-child):after {
    content: '';
    border: 0.5px solid #777;
    height: 50%;
    width: 0px;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  }

  ul.tab>li.on .el-tag {
    border-color: rgba(230, 162, 60, .2);
    background-color: rgba(230, 162, 60, .2);
    color: #ccc;
  }
</style>

<template>
  <ul class="tab">
    <li v-for="item,i in tabUserList" :key="i" :class="item.isActive" @click="tabClick(i)">
      <el-tag>{{item.title}}({{item.quantity}})</el-tag>
    </li>
  </ul>
</template>

<script>
  export default {
    data() {
      return {
        tabUserList: [
          { isActive: { on: false }, title: "会员列表", quantity: 0 },
          { isActive: { on: false }, title: "管理员列表", quantity: 0 },
        ]
      };
    },
    // 已被初始化
    mounted() {
      this.$nextTick(function () {
        this.tabClick(0);
      });
    },
    // 组件传参
    props: [],
    // 方法
    methods: {
      tabClick(i) {
        for (var j = 0; j < this.tabUserList.length; j++) {
          this.tabUserList[j].isActive.on = false;
        }
        this.tabUserList[i].isActive.on = true;
        this.$store.commit('userTab', Number(i));
        console.log('会员列表切换', i);
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