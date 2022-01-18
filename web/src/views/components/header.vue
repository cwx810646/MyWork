<template>
    <div class="header">  
        <div class="header-div-left app-title-middle">软件商城</div>
        <div class="header-div-right"> 
            <span v-if="account" class="app-cp" @click="logout">{{account}}</span>
            <span v-else class="app-cp" @click="loginIn">登录 / 注册</span>
        </div> 
        <Entrance v-if="entranceVisible" @exit="entranceVisible = false"/>  
    </div>   
</template>
<script>
import { ElMessageBox, ElMessage } from 'element-plus';
import Entrance from './dialogs/entrance';

export default {
    components: {Entrance},
    computed: {
        account(){
            return this.$store.state.account;
        }
    },
    data(){
        return {
            entranceVisible: false
        }
    },
    methods: { 
        loginIn(){
            this.entranceVisible = true;
        },
        logout(){
            ElMessageBox.confirm(
                '您确定要退出吗？',
                'Warning',
                {
                    confirmButtonText: '确认',
                    cancelButtonText: '取消',
                    type: 'warning',
                }
            ).then(() => {
                ElMessage({
                    type: 'success',
                    message: 'Delete completed',
                })
            }).catch(() => {}) 
        }
    }
}
</script>
<style lang="less" scoped>
@import "../../styles/variables.less";
.header{
    height: 60px;
    line-height: 60px;
    background-color: @header-bg-color;
    color: #FFF; 
    display: flex;
    justify-content: space-between;
    padding: 0 15px;
    *{color:  #FFF;} 
    .header-div-right{
        display: flex;
        align-items: center; 
        :deep(.icon){
            height: 24px;
            width: 24px;
            margin-left: 10px;
            cursor: pointer;
            path{ fill: #FFF; }    
        } 
    } 
} 
</style>