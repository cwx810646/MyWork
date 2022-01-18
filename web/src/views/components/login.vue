<template>
    <div class="login">
        <el-form
            ref="loginForm"
            :model="loginForm" 
            :rules="loginFormRules"
        >
            <el-form-item prop="account">
                <el-input
                ref="account"
                class="app-input-big"
                v-model.trim="loginForm.account"
                placeholder="请输入用户名"
                />
            </el-form-item>
            <el-form-item prop="password">
                <el-input 
                class="app-input-big"
                type="password"
                v-model.trim="loginForm.password"
                placeholder="请输入密码"
                />
            </el-form-item> 
        </el-form> 
        <div class="login-footer">
            <el-checkbox v-model="checked1" label="记住密码" size="large"></el-checkbox>
            <span class="app-btn app-btn-login app-cp" @click="submitLoginForm">登录</span>
        </div> 
    </div>
</template>

<script>
import Interface from '@/commonJs/http/interface.js';
import Constant from '@/commonJs/constant.js';

export default {
    data(){
        return {
            Constant,
            loginForm: {},
            loginFormRules: {
               account: [
                    { required: true,  message: '请输入密码', trigger: 'blur'}
               ],
               password: [
                    { required: true,  message: '请输入密码', trigger: 'blur'}
               ]                
            }
        }
    },
    methods: {
        submitLoginForm(){
            let _this = this;
            _this.$refs.loginForm.validate(valid=>{
                if(valid){
                    valid && _this.httpLoginApi();
                }
            })
        },
        httpLoginApi(){
            let _this = this;
            let param = _this.loginForm; 
            Interface.userApi.login(param).then(response=>{
                let result = response.data;
                if(result.code === 200){ 
                   if(result.data){  
                        _this.$store.commit('setAccount', _this.loginForm.account);
                        _this.$emit('over');
                   }else{
                       _this.Constant.notification.warning('登录失败');
                   } 
                }else{ 
                    _this.Constant.notification.error('登陆失败' + result.message);
                }
            }).catch((response)=>{  
                 _this.Constant.notification.error('登陆失败, 请联系管理员');
                throw Error(response);
            })
        }
    }
}
</script>

<style lang="less" scoped> 
.login-footer{
    display: flex;
    align-items: center;
    justify-content: space-between; 
} 
</style>