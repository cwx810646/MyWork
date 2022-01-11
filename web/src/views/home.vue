<template>
  <div class="home">
    {{data}}
  </div>
</template>

<script>
import Interface from "@/commonJs/http/interface.js";

export default {
  name: "home",
  components: {},
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
