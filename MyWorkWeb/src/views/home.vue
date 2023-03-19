<template>
    <div class="page">
        <Header /> 
        <div class="page-content"><router-view /></div>
    </div>
</template>
<script>
import Header from "@/components/header.vue";

export default { 
    components: { Header },
    data() {
        return {};
    },
    methods: {},
    created() {},
};
</script>
<style lang="less" scoped>
.page-content{
    height: calc(100% - @header-height);
    overflow: auto;

}
</style>
