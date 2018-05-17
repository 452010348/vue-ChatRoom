<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /*垂直居中*/
.css-ChuiZhiJuZhong{display:-webkit-box;-webkit-box-align:center;height:100%;}
  /*水平垂直居中*/
.css-ShuiPingChuiZhiJuZhong{display:-webkit-box;-webkit-box-align:center;-webkit-box-pack:center;}


.user-list{flex-direction: column;display: -webkit-flex;width:100%;overflow-y: auto;}
.user-list > li{
  min-height: 50px;
  display: -webkit-box;
  border-bottom:1px solid rgba(94, 94, 94,0.2);
  padding:0 10px;
}
.user-list:first-child{
  border-top:1px solid rgba(94, 94, 94,0.2);
}
.user-list > li:hover{
  background: rgba(255,255,255,0.1);
}

.user-list-left > img{
  width:36px;height:36;border-radius: 100%;
}
.user-list-center{-webkit-box-flex: 1;
  margin:6px 5px;background: rgba(94, 94, 94,0.2);border-radius: 3px;color:#fff;
}
.user-list-right{min-width:30px;}
.user-list-right > img{width:29px;height:29;}
</style>

<template>
  <div class="user-list">
    <ul class="user-list" v-show="$store.state.userTab==0?true:false">
      <li v-for="item,i in 50" :key="i" @click.stop="tabClick($event,i,'会员')" @contextmenu.prevent="tabMenuClick($event,i,'会员')">
        <div class="user-list-left css-ShuiPingChuiZhiJuZhong"><img src="//q.qlogo.cn/qqapp/101235792/83D87F7D77CCAD385A27601FC58A6EDB/100"></div>
        <div class="user-list-center">
            {{i}}
        </div>
        <div class="user-list-right css-ShuiPingChuiZhiJuZhong"><img :src="MaJia[0].levelImg"></div>
      </li>
    </ul>
    <ul class="user-list" v-show="$store.state.userTab==1?true:false">
      <li v-for="item,i in 10" :key="i" @click.stop="tabClick($event,i,'管理员')" @contextmenu.prevent="tabMenuClick($event,i,'管理员')">
        <div class="user-list-left css-ShuiPingChuiZhiJuZhong">
          <img src="//q.qlogo.cn/qqapp/101235792/83D87F7D77CCAD385A27601FC58A6EDB/100">
        </div>
        <div class="user-list-center">
            {{i}}
        </div>
        <div class="user-list-right css-ShuiPingChuiZhiJuZhong">
          <img :src="MaJia[0].levelImg">
        </div>
      </li>
    </ul>
  </div>

</template>

<script>
  export default {
    data() {
      return {
        MaJia:[
          { level:"a-1",title:"管理员",levelImg:'static/images/MaJia/a-1.png'},
        ]
      };
    },
    // 已被初始化
    mounted() {
      this.$nextTick(function () {});
    },
    // 组件传参
    props: [],
    // 方法
    methods: {
      tabClick(e,i,a){
        console.log('左键单击：',e,i,a);
      },
      tabMenuClick(e,i,a){
        console.log('右键单击：',e,i, a);
      },
    },
    // 组册组件模块
    components: {},
    // 过滤方法
    filters: {},
    // 监听 内部调用
    watch: {},
  }
</script>