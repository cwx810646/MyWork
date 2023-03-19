import { createApp } from "vue";
import App from "./App.vue";
import ElementPlus from 'element-plus';
import * as icons from '@element-plus/icons-vue'
import 'element-plus/dist/index.css';
import inteface from './http/inteface';
import constant from './assets/scripts/constant';
import message from '@/assets/scripts/message';
import functions from './assets/scripts/functions';
import store from "./store";
import router from "./router"; 
import './assets/style/common.less';

const app = createApp(App);
app.config.globalProperties.$api = inteface;
app.config.globalProperties.$constant = constant;
app.config.globalProperties.$msg = message;
app.config.globalProperties.$functions = functions;

app.use(App);
app.use(ElementPlus, {
    locale: "zhCn"
});
Object.keys(icons).forEach(key => {
    app.component(key, icons[key]);
});
app.use(store);
app.use(router);
app.use(store);
app.mount("#app");
