<template>
  <div>
    <div>
      <el-menu class="el-menu-demo" mode="horizontal">
        <!-- <el-menu-item index="/about"></el-menu-item>  -->
        <el-menu-item>
          <el-link :underline="false" type="text" @click="Save">保存</el-link>
        </el-menu-item>
        <!-- <el-button type="text">文字按钮</el-button> -->
        <!-- <el-link :underline="false">返回</el-link> -->
        <!-- <li  @click="Save" type="text">返回</li> -->
        <el-menu-item>
          <el-link @click="exportFile" :underline="false" type="text">导出配置文件</el-link>
        </el-menu-item>
      </el-menu>
    </div>

    <div>
      <el-col :span="4">
        <el-menu default-active="2" class="el-menu-vertical-demo">
          <!-- <el-input v-model="input" placeholder="请输入内容"></el-input>
          <el-button icon="el-icon-search" circle></el-button>-->

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
import electron from "electron";
const { dialog } = electron.remote;
export default {
  name: "NavBar",
  data() {
    return {
      input: ""
    };
  },
  methods: {
    Save() {
      this.$store.dispatch("saveShip");
      this.$message({ message: "保存成功", type: "success" });
    },
    exportFile() {
      const filters = [
        {
          name: "skin",
          extensions: ["ini"] // 文件后缀名类型， 如md
        }
      ];
      const filePath = dialog.showSaveDialog({
        filters,
        defaultPath: "Skin",
        title: "导出",
        buttonLabel: "导出"
      });
      if (filePath !== undefined) {
        this.$store.dispatch("saveFile", filePath);
        this.$message({ message: "导出完成", type: "success" });
      }
    }
  }
};
</script>
<style>
.el-menu-demo {
  display: flex;
  justify-content: flex-end;
}
</style>
