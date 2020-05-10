<template>
  <!-- <button @click="back">aaaaa</button> -->
  <el-main class="mainbox">
    <div style="height:70px">
      {{name}}
    </div>
    <el-carousel :autoplay="false" change="changeTittle" indicator-position="none"  type="card" height="420px" class="skin-list">
      <el-carousel-item   v-for="(item,v) in items" :key="v" >
        <el-image
        :style="`height:420px;width:280px;margin-bottom: 10px;`"
      :src="item.src"
      fit="cover"
      ></el-image>
      </el-carousel-item>
    </el-carousel>
  </el-main>
</template>
<script>
export default {
  name: "details",
  data() {
    return {
      items: [],
      name:""
    };
  },
  created: function() {
    console.log(this.$route.params);
    this.items = this.$route.params.data.skins;
  },
  methods: {
    back: function() {
      this.$router.push(`/`);
    },
    changeTittle(e){
      this.name = items[e].skin_name
    }
  }
};
</script>


<style>
.mainbox {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top:0 ;
  /* align-items: center; */
  background: url("https://patchwiki.biligame.com/images/blhx/8/86/s0z03t84jssbjwrrx0wh15anxm8s8wf.jpg")
    center center no-repeat;
}

</style>