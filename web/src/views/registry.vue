<template>
    <div class="app-page registry"> 
        <div class="registry-body">
            <div class="registry-main">
                <el-form
                    ref="registryForm"
                    :model="registryForm" 
                >
                    <el-form-item>
                        <el-input
                        ref="account"
                        class="app-input-big"
                        v-model="registryForm.account"
                        placeholder="请输入账户"
                        />
                    </el-form-item>
                    <el-form-item>
                        <el-input 
                        class="app-input-big"
                        type="password"
                        v-model="registryForm.password"
                        placeholder="请输入密码"
                        />
                    </el-form-item>
                    <el-form-item>
                        <el-input 
                        class="app-input-big"
                        type="password"
                        v-model="registryForm.repeatPassword"
                        placeholder="请再次输入密码"
                        />
                    </el-form-item>  
                </el-form>
                <div>
                    <span class="app-btn app-cp" @click="toLogin">去登录</span>
                    <span class="app-btn app-btn-registry app-cp">注册</span>
                </div>
            </div>
        </div> 
        <Copyright />
    </div>
</template>
<script>
import Copyright from './components/copyright.vue';

export default {
    components: {Copyright},
    data(){
        return {
            registryForm:{}
        } 
    },
    methods: {
        toLogin(){
            this.$router.push('/login');
        }
    },
    mounted(){
        this.$refs.account.focus();
    }  
}
</script>
<style lang="less" scoped>
.registry{
    .registry-body{
        height: calc(100% - 80px); 
        display: flex;
        justify-content: center;
        .registry-main{
            padding: 30px;
            width: 40%;
            height: 100%;
            border-left: solid 1px #ccc;
            border-right: solid 1px #ccc;
            div:last-child{
                text-align: center;
                span+span{
                    margin-left: 10px;
                } 
            }
        }
    } 
}
</style>