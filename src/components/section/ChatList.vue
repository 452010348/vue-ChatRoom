<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


.layim-chat-text{
    position: relative;
    line-height: 22px;
    padding: 8px 15px;
    background-color: #e2e2e2;
    border-radius: 3px;
    color: #333;
    word-break: break-all;
    max-width: 462px\9;
    display: inline-block;
    vertical-align: top;
    font-size: 14px;
}

.layim-chat-text:after {
    content: '';
    position: absolute;
    left: -10px;
    top: 13px;
    width: 0;
    height: 0;
    border-style: solid dashed dashed;
    border-color: #e2e2e2 transparent transparent;
    overflow: hidden;
    border-width: 10px;
}


.layim-chat-1 .layim-chat-text {
    margin-left: 0;
    text-align: left;
    background-color: #5FB878;
    color: #fff;
}
.layim-chat-1 .layim-chat-text:after {
    left: auto;
    right: -10px;
    border-top-color: #5FB878;
}

.layim-chat-view{padding:0 6px;width: 100%;height:100%;}
.layim-chat-view > li{width: 100%;display: -webkit-box;/* border:1px solid red; */ } 
.layim-chat-view > li:not(:first-child){margin-top:10px;}
.layim-chat-view time{margin:10px;}
.layim-r-box{-webkit-box-flex: 1;padding:0 10px;}
.layim-r-box > p {line-height: 30px;font-size:14px;color:#ccc;}
.layim-chat-Head{width: 40px;height:40px;border-radius: 100%;border:none;}

.layim-chat-0 .layim-r-box > p {text-align: left;}
.layim-chat-1 .layim-r-box > p {text-align: right;}

.chat-content{position: relative;display: -webkit-flex;}
/*靠左边*/
.layim-chat-0 .chat-content{justify-content: flex-start;}
/*靠右边边*/
.layim-chat-1 .chat-content{justify-content: flex-end;}

/*聊天内容配色*/
.layim-chat-0.color-0 .layim-chat-text{background-color: #d86565;color:#fff;}
.layim-chat-0.color-0 .layim-chat-text:after{border-top-color: #d86565;}
.layim-chat-1.color-0 .layim-chat-text{background-color: #d86565;color:#fff;}
.layim-chat-1.color-0 .layim-chat-text:after{border-top-color: #d86565;}

.layim-chat-0.color-1 .layim-chat-text{background-color: #5FB878;olor:#fff;}
.layim-chat-0.color-1 .layim-chat-text:after{border-top-color: #5FB878;}
.layim-chat-1.color-1 .layim-chat-text{background-color: #5FB878;olor:#fff;}
.layim-chat-1.color-1 .layim-chat-text:after{border-top-color: #5FB878;}

.layim-chat-0.color-2 .layim-chat-text{background-color: #AB47BC;color:#fff;}
.layim-chat-0.color-2 .layim-chat-text:after{border-top-color: #AB47BC;}
.layim-chat-1.color-2 .layim-chat-text{background-color: #AB47BC;color:#fff;}
.layim-chat-1.color-2 .layim-chat-text:after{border-top-color: #AB47BC;}

.layim-chat-0.color-3 .layim-chat-text{background-color: #375cb3;color:#fff;}
.layim-chat-0.color-3 .layim-chat-text:after{border-top-color: #375cb3;}
.layim-chat-1.color-3 .layim-chat-text{background-color: #375cb3;color:#fff;}
.layim-chat-1.color-3 .layim-chat-text:after{border-top-color: #375cb3;}

.layim-chat-0.color-4 .layim-chat-text{background-color: #5d5858;color:#fff;}
.layim-chat-0.color-4 .layim-chat-text:after{border-top-color: #5d5858;}
.layim-chat-1.color-4 .layim-chat-text{background-color: #5d5858;color:#fff;}
.layim-chat-1.color-4 .layim-chat-text:after{border-top-color: #5d5858;}
</style>

<template>
  <ul class="layim-chat-view">

    <template v-for="item in 20">

      <li class="layim-chat-0 color-3">
        <div class="layim-l-box">
          <img class="layim-chat-Head" src="//q.qlogo.cn/qqapp/101235792/83D87F7D77CCAD385A27601FC58A6EDB/100">
        </div>
        <div class="layim-r-box">
          <p><span class="chat-name">帅哥</span><time>2018-05-10 09:15:17</time></p> 
          <div class="chat-content">
            <div class="layim-chat-text">今天是星期几？</div>
          </div>
        </div>
      </li>

      <li class="layim-chat-1">
        <div class="layim-r-box">
          <p>
            <time>2018-05-10 09:15:17</time>
            <span class="chat-name">美女</span>
          </p>
          <div class="chat-content">
              <div class="layim-chat-text">今天是星期二</div>
          </div>
        </div>
        <div class="layim-l-box">
          <img class="layim-chat-Head" src="//tva4.sinaimg.cn/crop.0.1.1125.1125.180/475bb144jw8f9nwebnuhkj20v90vbwh9.jpg">
        </div>
      </li>

    </template>

  </ul>
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