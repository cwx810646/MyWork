<template>
    <div v-loading="loading" class="page page-body">
        <ul class="group">
            <li v-for="(item, index) in apps" :key="index" @click="handleAppClick(item)" class="item">{{item.title}}</li> 
        </ul>
    </div>
</template>
<script>
export default {
    data(){
        return{
            loading: true,
            apps: []
        }
    },
    created(){
        this.queryApps();
    },
    methods: {
        queryApps(){
            this.loading = true;
            this.$api.appApi.query({}).then((result) => { 
                if(this.$functions.http.ok(result)){
                    this.apps = result.data;
                }else{
                    this.$msg.error(result.message);
                }
                this.loading = false;
            });
        },
        handleAppClick(item){
            let route  = "appInfo/" + item.id;
            this.$router.push(route);
        }
    }
}
</script>
<style lang="less" scoped>
.group {
    display: flex;
    flex-wrap: wrap;
    .item {
        width: 200px;
        height: 200px;
        line-height: 200px;
        text-align: center;
        border: solid 1px #ccc; 
        border-radius: 4px; 
        .cp();
    }
}
</style>