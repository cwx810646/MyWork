<template>
  <div class="home"> 
      <Header />
  </div>
</template>

<script>
import Interface from "@/commonJs/http/interface.js";
import Header from './components/header.vue';

export default {
  name: "home",
  components: {Header},
  data(){
    return {
      data: "",
    };
  },
  created(){
    let _this = this;
    Interface.helloApi.hello().then(responce=>{
      let result = responce.data;
      if(result.code === 200){
        _this.data = result.data;
      }
    })
  }
};
</script>
