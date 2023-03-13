<template>
    <div class="home">
        <Header />
        <div class="page-body">
            <ul class="group">
                <li class="item"></li>
            </ul>
        </div>
    </div>
</template>
<script>
import Header from "@/components/header.vue";

export default {
    name: "home",
    components: { Header },
    data() {
        return {
            apps: [
                {
                    name: "myBook",
                    title: "我的图书馆",
                    img: "",
                    url: "",
                },
            ],
        };
    },
    methods: {},
    created() {},
};
</script>
<style lang="less" scoped>
.group {
    display: flex;
    flex-wrap: wrap;
    .item {
        width: 200px;
        height: 200px;
        border: solid 1px #eee;
        .cp();
        background-image: url("~@/assets/img/book.png");
        border-radius: 4px;
    }
}
</style>
