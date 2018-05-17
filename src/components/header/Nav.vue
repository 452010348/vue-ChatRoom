<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /*垂直居中*/
.css-ChuiZhiJuZhong{display:-webkit-box;-webkit-box-align:center;height:100%;}
  /*水平垂直居中*/
.css-ShuiPingChuiZhiJuZhong{display:-webkit-box;-webkit-box-align:center;-webkit-box-pack:center;}

/*start main nav*/
ul.menu {display:inline-flex; }
ul.menu li { margin-right: 15px; transform: translate3d(0, -200px, 0); transition: 0.6s; }
ul.menu li:nth-child(1) { transition-delay: 0.1s; }
ul.menu li:nth-child(2) { transition-delay: 0.3s; }
ul.menu li:nth-child(3) { transition-delay: 0.5s; }
ul.menu li:nth-child(4) { transition-delay: 0.7s; }
ul.menu li:nth-child(5) { transition-delay: 0.9s; }
ul.menu li:nth-child(6) { transition-delay: 0.11s; }
ul.menu li:nth-child(7) { transition-delay: 0.13s; }
ul.menu li:nth-child(8) { transition-delay: 0.15s; }
ul.menu li:nth-child(9) { transition-delay: 0.17s; }
ul.menu-show li { transform: translate3d(0, 0px, 0); }
ul.menu li a { display: block; height: 37px; color: #fff; font-weight: bold; perspective: 1000px; }
ul.menu li a span{display:block;height:34px;padding:0 1rem;line-height:34px;font-size:14px;text-align:center;position:relative;transform-origin:50% 0 0;transform-style:preserve-3d;transform:rotateX(0deg);transition:0.3s;border:2px solid transparent;}
ul.menu li a span:before{content:attr(data-hover);position:absolute;left:-2px;top:100%;width:100%;height:100%;background:#E44E27;line-height:34px;text-align:center;opacity:0;border:2px solid #E44E27;transform-origin:50% 0 0;transform:rotateX(-90deg);transition:0.3s;}
ul.menu li:hover a span { transform: rotateX(90deg); border-color: #E44E27; }
ul.menu li:hover a span:before { opacity: 1; }
/*end main nav*/


.el-button--danger{
    padding-left:10px;padding-right:10px;
}
.el-button--warning {
    padding-left:12px;padding-right:12px;
/* border-radius:20px; */
}
</style>
<template>
    <div class="css-ChuiZhiJuZhong">

        <div style="margin-left:10px;"></div>
        <div class="css-ChuiZhiJuZhong">
            <el-button type="danger" @click="saveClick"><i class="el-icon-document el-icon--left"></i>保存到桌面</el-button>
        </div>

        <div style="margin-left:10px;"></div>
        <div class="css-ChuiZhiJuZhong">
            <el-button size="medium" @click="collectClick" type="warning" plain round><i class="el-icon-star-off el-icon--left"></i>收藏</el-button>
        </div>

        <div style="margin-left:10px;"></div>
        <div class="css-ChuiZhiJuZhong">
            <el-dropdown @command="handleCommand">
                <el-button size="small" type="primary" style="padding-left:10px;padding-right:10px;">
                    直播间01
                    <i class="el-icon-arrow-down el-icon--right"></i>
                </el-button>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item v-for="item,i in 5" :key="i" :command="`直播房间0${String(i+1)}`">直播间0{{i+1}}</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>

        <div style="margin-left:10px;"></div>
        <div class="css-ChuiZhiJuZhong">
            <ul class="menu menu-show">
                <li v-for="item,i in nav" @click="navClick(i)" :key="i" ><a :href="item.href"><span :data-hover="item.title"><img :src="item.img" alt="">{{item.title}}</span></a></li>
            </ul>
        </div>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                nav:[ 
                    {title:'在线客服',href:"javascript:;"},
                    {title:'斗鱼直播',href:"javascript:;"},
                ]
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
            saveClick(){
                console.log('保存到桌面');
                
            },
            collectClick(){
                console.log('收藏')
            },
            handleCommand(e){
                console.log(e);
            },
            navClick(i){
                console.log(this.nav[i].title);
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