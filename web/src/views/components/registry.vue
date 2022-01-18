<template>
    <div class="registry">
        <el-form
            ref="registryForm"
            :model="registryForm" 
            :rules="registryFormRules"
        >
            <el-form-item prop="account">
                <el-input
                ref="account"
                class="app-input-big"
                type="text"
                :minlength="6"
                :maxlength="26"
                :show-word-limit="true"
                v-model.trim="registryForm.account"
                placeholder="请输入用户名"
                />
            </el-form-item>
            <el-form-item prop="password">
                <el-input 
                class="app-input-big"
                type="password"
                :minlength="6"
                :maxlength="26"
                :show-word-limit="true"
                v-model.trim="registryForm.password"
                placeholder="请输入密码"
                />
            </el-form-item> 
        </el-form> 
        <div class="registry-footer">    
            <span class="app-btn app-btn-login app-cp" @click="submitRegistryForm">注册</span> 
        </div> 
    </div> 
</template>

<script>
import Interface from '@/commonJs/http/interface.js';
import Constant from '@/commonJs/constant.js'; 

export default {
    data(){
        let _this = this;
        return {
            Constant,
            registryForm: {},
            registryFormRules: {
               account: [
                    { validator: accountCheck, trigger: 'blur'}
               ],
               password: [
                    { required: true,  message: '请输入密码', trigger: 'blur'}
               ]
            }
        }
        function accountCheck(rule, value, callback){
            if(value){
                let param = {account: value}
                Interface.userApi.accountCheck(param).then(response=>{
                    let result = response.data;
                    if(result.code === 200){ 
                        if(!result.data){
                            callback('用户名称已存在, 请重新输入');
                        }else{
                            callback();
                        }
                    }else{ 
                        _this.Constant.notification.error('校验失败：' + result.message);
                    }
                }).catch((response)=>{  
                    _this.Constant.notification.error('校验失败：, 请联系管理员');
                    throw Error(response);
                })
            }else{
                callback('请输入用户名');
            }
        }
    },
    methods: {
        submitRegistryForm(){
            let _this = this;
            _this.$refs.registryForm.validate((valid)=>{
                valid && _this.httpRegistryApi();
            })
        },
        httpRegistryApi(){
            let _this = this;
            let param = this.registryForm;  
            Interface.userApi.registry(param).then(response=>{ 
                let result = response.data;
                if(result.code === 200){
                    _this.Constant.notification.success('注册成功');
                    _this.$emit('over');
                }else{ 
                    _this.Constant.notification.error('注册失败：' + result.message);
                }
            }).catch((response)=>{  
                 _this.Constant.notification.error('注册失败, 请联系管理员');
                throw Error(response);
            })
        }
    }
}
</script>

<style lang="less" scoped>
.registry-footer{
    text-align: right;
    span+span{
        margin-left: 10px;
    }
}
</style>