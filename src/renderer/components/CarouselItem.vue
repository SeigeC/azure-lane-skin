<template>
  <el-image
    :style="`height:420px;width:280px;margin-bottom: 10px;`"
    :src="src"
    fit="cover"
  >
    <el-image
      slot="error"
      :style="`height:420px;width:280px;margin-bottom: 10px;`"
      :src="url"
      fit="cover"
    />
  </el-image>
</template>

<script>
import { getSrc } from '../server/index'
export default {
  components: {},
  props: ['url', 'name'],
  data () {
    return {
      src: `static/imgs/${this.name}.jpg`
    }
  },

  // 监听属性 类似于data概念
  computed: {},
  // 监控data中的数据变化
  watch: {},
  // 方法集合
  methods: {},
  // 生命周期 - 创建完成（可以访问当前this实例）
  created () {
    getSrc(this.name, this.url)
  }
}
</script>
<style lang="scss" scoped>
//@import url(); 引入公共css类
</style>
