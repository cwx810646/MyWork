<template>
    <div class="app-page login">
        <div class="login-body">
            <div class="login-main">
                <div class="login-title app-title app-title-middle">用户登录</div> 
                <el-form
                    ref="loginForm"
                    :model="loginForm" 
                >
                    <el-form-item>
                        <el-input
                        ref="account"
                        class="app-input-big"
                        v-model="loginForm.account"
                        placeholder="请输入用户名"
                        />
                    </el-form-item>
                    <el-form-item>
                        <el-input 
                        class="app-input-big"
                        type="password"
                        v-model="loginForm.password"
                        placeholder="请输入密码"
                        />
                    </el-form-item> 
                </el-form> 
                <div>
                    <el-checkbox v-model="checked1" label="记住密码" size="large"></el-checkbox>
                    <div class="operate-btns">
                        <span class="app-btn app-cp" @click="toRegisty">去注册</span>
                        <span class="app-btn app-btn-login app-cp">登录</span>
                    </div> 
                </div> 
            </div>
        </div> 
        <Copyright />
    </div>
</template>
<script>
import Copyright from './components/copyright.vue';

export default {
    components:{Copyright},
    data(){
        return {
            loginForm: {},
            loginFormRules: [

            ]
        }
    },
    methods:{
        toRegisty(){
            this.$router.push('/registry');
        }
    },
    mounted(){
        this.$refs.account.focus();
    }   
}
</script>
<style lang="less" scoped> 
.login{ 
    .login-body{
        height: calc(100% - 80px);
        display: flex;
        align-items: center;
        justify-content: center;
        .login-main{
            border: solid 1px;
            width: 40%;
            height: 350px;
            border-radius: 20px;
            text-align: center;
            padding: 30px;
            border: solid 1px #ccc;
            box-shadow: 20px 20px 20px #ccc;
            .login-title{
                margin-bottom: 20px;
                margin-top: 10px;
            }
            div:last-child{
                display: flex;
                align-items: center;
                justify-content: space-between;
                .operate-btns span{margin-left: 10px;}
            }
        }
    } 
}
</style>