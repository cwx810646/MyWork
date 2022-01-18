<template>
  <div class="home"> 
      <Header />
      <ul class="app-page-body"> 
        <li class="app-cp" v-for="(item, index) in appList" :key="index">
          <ul class="app">
            <li class="app-title">{{item.name}}</li>
            <li class="app-author">{{item.createUser.name}}</li>
            <li class="app-desc">{{item.description}}</li> 
          </ul>
        </li>
      </ul>
  </div>
</template>

<script> 
import Header from './components/header.vue';

export default {
  name: "home",
  components: {Header},
  data(){
    return { 
      appList: [] 
    };
  },
  methods: {
    
  },
  created(){
    for(let i =0; i<10; i++){
      this.appList.push(        {
          id: 1,
          name: '客服中心',
          description: '一款可以提供软件客服服务的平台',
          createUser: {
            account: 'chenjie'
          }
        })
    }
  }
};
</script>
<style lang="less" scoped>
@import "../styles/variables.less";
.app-page-body{
  display: flex;
  flex-wrap: wrap; 
  justify-content: space-between;
  li{
    width: 20%;
    height: 300px;
    padding: 5px;
    .app{
      height: 100%;
      width: 100%;
      border:  solid 1px @border-color;
      li{
         text-align: center;
         width: 100%;
         height: 32px;
         line-height: 32px;
      }
      .app
      .app-desc{
        height: 50px;
      }
    } 
  }
}
</style>
