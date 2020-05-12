const doc = document
let cache = {}

export default {
  // 保存滚动条位置
  save (path) {
    if (document.querySelector('#main')) {
      cache[path] = document.querySelector('#main').scrollTop
    }
  },
  // 重置滚动条位置
  get () {
    const path = this.$route.path
    this.$nextTick(function () {
      if (document.querySelector('#main')) {
        document.querySelector('#main').scrollTop = cache[path]
      }
    })
  },
  // 设置滚动条到顶部
  goTop () {
    this.$nextTick(function () {
      doc.documentElement.scrollTop = doc.body.scrollTop = 0
    })
  }
}
