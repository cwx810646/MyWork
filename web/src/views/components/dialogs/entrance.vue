<template>
    <el-dialog 
    v-model="visible"  
    append-to-body 
    destroy-on-close 
    :close-on-click-modal="false"
    width="35%"
    top="30vh"
    custom-class="app-dialog"
    > 
        <template #title>
            <ul class="entrance-title">
                <li 
                class="app-title-small app-cp"
                :class="activeTab==='login' ? 'active' : ''"   
                @click="activeTab='login'"
                >
                    用户登录
                </li>
                <li 
                class="app-title-small app-cp" 
                :class="activeTab==='registry' ? 'active' : ''"   
                @click="activeTab='registry'"
                >
                    快速注册
                </li>
            </ul>
        </template>
        <div class="entrance-content">
            <Login @over="exit" v-if="activeTab==='login'"/> 
            <Registry @over="changeActiveTab('login')" v-else/>  
        </div>
    </el-dialog>   
</template>
<script>
import Login from '../login'; 
import Registry from '../registry';

export default {
    components: {Login, Registry},
    data(){
        return {
            visible: true,
            activeTab: 'login'
        }
    },
    methods: {
        changeActiveTab(value){
            this.activeTab = value;
        },
        exit(){
            this.$emit('exit');
        }
    }
}
</script>
<style lang="less" scoped>
@import "../../../styles/variables.less"; 
.entrance-title{
    display: flex;  
    li{
        flex-grow: 1;
        line-height: 50px; 
        text-align: center;
        border-bottom: solid 1px @border-color;
        &.active{
            color: #FFF;
            background-color: @primary-color;
        }
        &+li{
            border-left: solid 1px @border-color; 
        }
    }
}
.entrance-content{
    padding: 25px;

}
</style>