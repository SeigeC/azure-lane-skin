<template>
  <div style="position:relative">
    <el-image
      :style="`height:${105 * num}px;width:${70 * num}px;margin-bottom: 10px;`"
      :src="src"
      fit="fill"
      :z-index="zindex"
      lazy
    >

      <el-image
        :style="
          `height:${105 * num}px;width:${70 * num}px;margin-bottom: 10px;`
        "
        :src="item.src"
        fit="fill"
        slot="error"
        :z-index="zindex"
        lazy
      />
    </el-image>

    <div class="span-name">{{ name }}</div>
  </div>
</template>

<script>
import { getSrc } from '../server/index'
export default {
  props: ['num', 'item', 'name'],
  data () {
    return {
      zindex: -1,
      src: `static/imgs/${this.item.src_name}.jpg`
    }
  },
  created () {
    getSrc(this.item.src_name, this.item.src)
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
