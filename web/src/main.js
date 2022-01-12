import { createApp } from "vue";
import App from "./App.vue";
import './styles/element/index.scss'
import ElementPlus from 'element-plus';
import * as icons from '@element-plus/icons-vue'
import 'element-plus/dist/index.css';
import "./styles/common.less"; 
import store from "./store"; 
import router from "./router"; 

const app = createApp(App);
app.use(App);
app.use(ElementPlus, {
    locale: "zhCn"
});
console.log(Object.keys(icons)); 
Object.keys(icons).forEach(key=>{
    app.component(key, icons[key]); 
}); 
app.use(store);
app.use(router);
app.use(store);
app.mount("#app");
