<template>
    <div class="page">
        <iframe class="app-wrapper" :src="appInfo.url"/>
    </div>
</template>
<script>
export default {
    data(){
        return {
            appInfo: {}
        }
    },
    created(){
        let route = this.$route; 
        this.queryApps(route.params);
    },
    methods: {
        queryApps(params){
            this.$api.appApi.querySingle(params).then((result) => {
                if(this.$functions.http.ok(result)){ 
                    this.appInfo = result.data;
                }else{
                    this.$msg.error(result.message);
                }
            });
        },
    }
}
</script>
<style lang="less" scoped>
.app-wrapper{
    width: 100%; 
    height: 100%;
    // height: calc(100% - 4px); 
    border: 0;
}
</style>