<template>
  <div class="home">
    <!-- <el-aside >
     
      </el-aside>-->
    <NavBar></NavBar>
    <el-main id="main">
      <router-view></router-view>
    </el-main>
  </div>
</template>

<script>

import NavBar from './NavBar.vue'
export default {
  name: 'home',
  data () {
    return {
      photos: []
    }
  },

  methods: {

  },
  components: {
    NavBar
  }

}
</script>

<style>
.home {
  height: 100vh;
}
#main {
  padding: 10px 20px;
  overflow: auto;
  height: calc(100% - 61px);

}
.image {
  width: 100%;
}
.button {
  padding: 0;
  float: right;
}
.title {
  margin: 4px 0px 4px 0px;
}
.el-main{
  text-align: center;
}
</style>