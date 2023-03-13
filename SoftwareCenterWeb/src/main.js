import { createApp } from "vue";
import App from "./App.vue";
import ElementPlus from 'element-plus';
import * as icons from '@element-plus/icons-vue'
import 'element-plus/dist/index.css';
import store from "./store";
import router from "./router";
import './assets/style/common.less';

const app = createApp(App);
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
