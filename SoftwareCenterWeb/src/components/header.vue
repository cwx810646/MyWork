<template>
    <div class="header">
        <div class="app-info cp">
            <img src="/logon.png" />
            <span class="title-middle">我的工作室</span>
        </div>
        <div class="cp">首页</div>
    </div>
</template>
<script>
export default {
    data() {
        return {};
    },
    methods: {},
};
</script>
<style lang="less" scoped>
.header {
    height: 50px;
    line-height: 50px;
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