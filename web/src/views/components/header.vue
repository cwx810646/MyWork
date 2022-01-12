<template>
    <div class="header">  
        <div class="header-div--left"></div>
        <div class="header-div--right">
            <Avatar />
            <SwitchButton @click="logout"/>
        </div> 
    </div>    
</template>
<script>
import { ElMessageBox, ElMessage } from 'element-plus'

export default {
    methods: {
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
.header{
    height: 60px;
    line-height: 60px;
    background-color: #333;
    color: #FFF; 
    display: flex;
    justify-content: space-between;
    padding: 0 15px;
    .header-div--right{
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