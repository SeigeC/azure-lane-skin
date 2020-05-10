<template>
  <div id="app">
    <div class="system-button">
      <el-button type="danger"
                 size="mini"
                 circle />
      <el-button type="warning"
                 size="mini"
                 circle />
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  components: {
    // NavBar
  }
}
</script>

<style>
html body {
  margin: 0;
  padding: 0;
}
.system-button {
  position: fixed;
  height: 22px;
  width: 35px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 1px;
  top: 0;
  z-index: 99;
}
.system-button button {
  padding: 6px !important;
  margin: -3px 0 0 0 !important;
}
</style>
