<template>
    <div class="header">
        <div class="app-info cp" @click="handleAppClick">
            <img src="/logon.png" />
            <span class="title-middle">我的工作室</span>
        </div> 
    </div>
</template>
<script>
export default {
    data() {
        return {};
    },
    methods: {
        handleAppClick(){
            this.$router.push("/");
        }
    },
};
</script>
<style lang="less" scoped>
.header {
    height: @header-height;
    line-height: @header-height;
    background-color: @header-bg-color;
    color: #fff;
    display: flex;
    align-items: center;
    padding: 0 15px;
    .app-info {
        display: flex;
        align-items: center;
        margin-right: 30px;
        img {
            height: 32px;
            width: 32px;
            margin-right: 5px;
        }
    }
}
</style>