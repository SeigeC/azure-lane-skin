<template>
  <div style="position:relative">
    <el-image :style="`height:${105*num}px;width:${70*num}px;margin-bottom: 10px;`"
              :src="url"
              fit="fill"
              :z-index="zindex"
              lazy></el-image>

    <div class="span-name">{{name}}</div>
  </div>
</template>

<script>
export default {
  props: ['url', 'name', 'num'],
  data() {
    return {
      zindex: -1
    }
  }
}
</script>

<style>
.span-name {
  position: absolute;
  top: 170px;
  width: 100%;
  text-align: center;
  color: white;
  font-size: 28px;
  margin: 0;
}
</style>