<template>
  <div>
    <el-container>
      <el-header>Header</el-header>
      <el-main>
        <div >
          <el-row :gutter="20" >
            <el-col :span="2" v-for="item in images" :key="item">
              <div>
                <!-- <span class="imagetitle">{{image}}</span> -->
                <el-avatar shape="square" :size="100" :src="url" alt="images"></el-avatar>
              </div>
            </el-col>
          </el-row>
        </div>
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>
<script>
import { getAllShip } from "../server/index";
export default {
  data() {
    return {
      // datas: 'aaa',
      images: ["aa", "b", "c"],

      // fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
      url:["https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",'https://patchwiki.biligame.com/images/blhx/thumb/3/39/8hbczmc6k4f4gu9kcjr02gq6i6wlj7j.jpg/85px-%E9%9B%B7%E5%A4%B4%E5%83%8F.jpg']
        
    };
  },
  methods:{

  },
  created: () => {
    console.log(getAllShip());
  }
};
</script>

<style >
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}
.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

</style>