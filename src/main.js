// 入口文件
import Vue from 'vue'
import App from './App.vue'

// 导入MUI的样式
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

// 按需导入Mint-UI的组件
import { Header } from 'mint-ui';
Vue.component(Header.name, Header);

var vm = new Vue({
    el:"#app",
    render:c => c(App),
})