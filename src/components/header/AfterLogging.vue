<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  /*垂直居中*/
.css-ChuiZhiJuZhong{display:-webkit-box;-webkit-box-align:center;height:100%;}
  /*水平垂直居中*/
.css-ShuiPingChuiZhiJuZhong{display:-webkit-box;-webkit-box-align:center;-webkit-box-pack:center;}


.login-box{display:inline-flex;}

.HeadPortrait{
    border-radius: 100%;width: 45px;height:45px;border:none;
}
</style>
<template>
    <div class="css-ChuiZhiJuZhong">
        <div class="login-box">
            <div class="css-ShuiPingChuiZhiJuZhong">
                <img class="HeadPortrait" :src="HeadPortrait" alt="">
            </div>
            <div style="margin-left:10px;"></div>
            <div class="css-ShuiPingChuiZhiJuZhong">
                <el-dropdown split-button type="primary" size="medium" @click="handleClick" @command="handleCommand">
                    admin
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item divided disabled>积分：{{JiFen}}</el-dropdown-item>
                        <el-dropdown-item disabled>余额：{{YuE}}</el-dropdown-item>
                        <el-dropdown-item divided style="text-align: center;" command="个人中心">个人中心</el-dropdown-item>
                        <el-dropdown-item style="text-align: center;" command="后台管理">后台管理</el-dropdown-item>
                        <el-dropdown-item style="text-align: center;" command="换肤">提现</el-dropdown-item>
                        <el-dropdown-item style="text-align: center;" command="退出">退出</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                //默认头像
                HeadPortrait:'static/images/HeadPortrait.jpg',
                //积分
                JiFen:9999,
                //余额
                YuE:9999,
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
            handleClick(){
                this.$message('点击admin');
            },
            handleCommand(command) {
                this.$message( command);
                console.log( command);
                switch (command) {
                    case "个人中心":
                        
                        break;
                    case "后台管理":
                        
                        break;
                    case "换肤":
                        
                        break;
                    case "退出":
                        
                        break;
                
                    default:
                        break;
                }
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