<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  /*垂直居中*/
.css-ChuiZhiJuZhong{display:-webkit-box;-webkit-box-align:center;height:100%;}
  /*水平垂直居中*/
.css-ShuiPingChuiZhiJuZhong{display:-webkit-box;-webkit-box-align:center;-webkit-box-pack:center;}



.reg{background: #FF5423 url(../../common/images/regLogin.png) no-repeat 10px -23px;}
.login{background: #0078ee url(../../common/images/regLogin.png) no-repeat 10px 6px;}

.reg:hover{background-color:#9f9f9f;}
.login:hover{background-color: #f77a22;}

.reg,.login{    
    text-align: center;
    color: #FFF;
    border-radius: 12px;
    font-size: 15px;
    float: left;
    display: block;
    width: 80px;
    text-indent: 1.5em;
    height: 32px;
    line-height: 32px;
    margin:0 5px;
}
</style>

<template>
    <div class="css-ChuiZhiJuZhong">
        <a href="javascript:void(0)" class="reg" @click="regClick()">注册</a>
        <a href="javascript:void(0)" class="login" @click="loginClick()">登录</a>
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
            regClick(){
                console.log("注册");
                // this.$store.commit('changeLoginIsShow', true);
                this.$store.commit('dialog', {
                    isShow: true,
                    title: '注册',
                    text: '登入',
                    width: '440px'
                });
            },
            loginClick(){
                console.log( "登入");
                // this.$store.commit('changeAuthor','修改内容') ;
                // this.$store.commit('changeLoginIsShow',true) ;
                this.$store.commit('dialog', {
                    isShow: true,
                    title: '登入',
                    text: '注册',
                    width: '340px'
                });
            },
        },
        // 组册组件模块
        components: {},
        // 过滤方法
        filters: {},
        // 监听 内部调用
        watch: {}
    }
</script>