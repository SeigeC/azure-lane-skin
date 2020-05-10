<template>
  <el-main class="mainbox">
    <div class="skin-tittle"><span>{{name}}</span>
      <el-button @click="back"
                 type="text"><i class="el-icon-upload el-icon--right"></i>返回</el-button>
    </div>
    <el-carousel :autoplay="false"
                 @change="changeTittle"
                 indicator-position="none"
                 type="card"
                 height="420px"
                 class="skin-list">
      <el-carousel-item v-for="item in items"
                        :key="item.id">
        <el-image :style="`height:420px;width:280px;margin-bottom: 10px;`"
                  :src="item.src"
                  fit="cover" />
      </el-carousel-item>
    </el-carousel>
    <div class="skin-button">
      <el-button type="primary">应用</el-button>
    </div>
  </el-main>
</template>
<script>
export default {
  name: 'skins',
  data() {
    return {
      items: [],
      name: ''
    }
  },
  created: function () {
    this.items = this.$route.params.data.skins
    this.name = this.items[0].skin_name
  },
  
  methods: {
    back: function () {
      this.$router.push(`/list`)
    },
    changeTittle: function (e) {
      this.name = this.items[e].skin_name
    }
  }
}
</script>


<style>
.mainbox {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 0;
  /* align-items: center; */
  background: url("https://patchwiki.biligame.com/images/blhx/8/86/s0z03t84jssbjwrrx0wh15anxm8s8wf.jpg")
    center center no-repeat;
}
.skin-tittle {
  height: 70px;
}
.skin-tittle > span {
  color: aliceblue;
  font-size: 28px;
}
.skin-tittle > button {
  position: fixed;
  right: 20px;
}
.skin-button {
  margin-top: 20px;
}
.skin-button button {
  padding: 12px 50px;
}
</style>