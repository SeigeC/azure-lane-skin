<template>
  <div>
    <div>
      <el-menu class="el-menu-demo"
               mode="horizontal">
        <el-menu-item index="/">首页</el-menu-item>
        <el-menu-item index="/post">上传</el-menu-item>
        <el-menu-item index="/about">消息中心</el-menu-item>
        <el-menu-item index="/details">详情</el-menu-item>
      </el-menu>
    </div>

    <div>
      <el-col :span="4">
        <el-menu default-active="2"
                 class="el-menu-vertical-demo">
          <!-- <el-input v-model="input" placeholder="请输入内容"></el-input>
          <el-button icon="el-icon-search" circle></el-button> -->

          <el-menu-item index="/">
            <span slot="title">首页</span>
          </el-menu-item>
          <el-menu-item index="/post">
            <span slot="title">上传</span>
          </el-menu-item>
          <el-menu-item index="/about">
            <span slot="title">消息中心</span>
          </el-menu-item>
          <el-menu-item index="/details">
            <span slot="title">详情</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      input: ''
    }
  }
}
</script>
<style>
.el-menu-demo {
  display: flex;
  justify-content: flex-end;
}
</style>
