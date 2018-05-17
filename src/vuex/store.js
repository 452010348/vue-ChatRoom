import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

/**
 * //属性调用
 * $store.state.xxx
 * 方法触发
 * this.$store.commit('dialog', {}||变量);
 */
const store = new Vuex.Store({
    // 定义状态
    state: {
        author: '内容区域',
        //登入注册弹窗显示隐藏
        dialog:{
            isShow:false,
            title:'登入',
            text:'注册',
            width:'340px'
        },
        //默认皮肤
        skin: {
            backgroundImage: `none`,
        },
        //皮肤开关
        skinIsClose:false,
        //用户tab列表切换
        userTab:0
    },
    //绑定事件
    mutations: {
        author(state, a) {
            console.log(a);
            state.author = a;
        },
        dialog(state, a){
            console.log(a);
            state.dialog = a;
        },
        skin(state, a) {
            console.log(a);
            state.skin.backgroundImage = `url(${a})`;
        },
        skinIsClose(state, a = false) {
            console.log(a);
            state.skinIsClose = a;
        },
        userTab(state, a = 0){
            console.log(a);
            state.userTab = a;
        }
    }
})
export default store