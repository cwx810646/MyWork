<template>
  <div class="home">
    <Header />
    <div class="app-page-body">
      <div
        class="app-cp app-item-wrapper"
        v-for="(item, index) in appList"
        :key="index"
      >
        <div
          class="app"
          :style="{ backgroundImage: 'url(' + item.imageUrl + ')' }"
        >
          <div class="app-title app-title-middle">{{ item.name }}</div>
          <div class="app-body"> 
            {{ item.description }}
          </div> 
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./components/header.vue";

export default {
  name: "home",
  components: { Header },
  data() {
    return {
      appList: [],
    };
  },
  methods: {},
  created() {
    for (let i = 9; i < 10; i++) {
      this.appList.push({
        id: 1,
        name: "客服中心",
        description: "一款可以提供软件客服服务的平台",
        imageUrl: "/images/demo.jpg",
        createUser: {
          account: "chenjie",
        },
      });
    }
  },
};
</script>
<style lang="less" scoped>
@import "../styles/variables.less";
.app-page-body {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .app-item-wrapper {
    width: 20%;
    height: 300px;
    padding: 5px;
    .app {
      height: 100%;
      width: 100%; 
      border-radius: 4px;
      background-size: 100% 100%;
      background-repeat: no-repeat;
      background-size: center;
      border: solid 1px @border-color;
      .app-title{
        text-align: center;
        height: 240px;
        line-height: 250px;
      }
      .app-body {
        height: 50px;
        margin: 0 15px;
      }
    }
  }
}
</style>
