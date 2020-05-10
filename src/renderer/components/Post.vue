<template>
  <div class="post">
     <el-container>
  <el-main>
    <h2>投稿</h2>

    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="标题">
        <el-input v-model="form.title"></el-input>
      </el-form-item>

      <el-form-item label="描述">
        <el-input type="textarea" v-model="form.info"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
      </el-form-item>
    </el-form>
       </el-main>
</el-container>
  </div>
</template>
<script>
export default {
  name: "Post",
  data() {
    return {
      form: {
        title: "",
        info: ""
      }
    };
  },
  methods: {
   
  },
  components:{}
};
</script>