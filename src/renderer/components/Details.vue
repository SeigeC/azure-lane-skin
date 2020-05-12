<template>
  <el-main class="mainbox">
    <div class="skin-tittle">
      <span>
        {{ name }}
        <el-button
          type="warning"
          @click="dialogFormVisible = true"
          icon="el-icon-warning-outline"
          circle
        ></el-button>
      </span>
      <el-button @click="back" type="text">
        <i class="el-icon-back el-icon--right"></i>返回
      </el-button>
    </div>
    <el-carousel
      :autoplay="false"
      @change="changeTittle"
      indicator-position="none"
      type="card"
      height="420px"
      class="skin-list"
    >
      <el-carousel-item v-for="item in items" :key="item.id">
        <CarouselItem :url="item.src" :name="item.src_name" />
      </el-carousel-item>
    </el-carousel>
    <div class="skin-button">
      <el-button
        @click="changeShip"
        :disabled="getButtonName()"
        type="primary"
      >{{ getButtonName() == false ? "应用" : "已应用" }}</el-button>
    </div>
    <el-dialog title="错误修正" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="皮肤名称" :label-width="formLabelWidth">
          <el-input v-model="form.src_name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="皮肤链接" :label-width="formLabelWidth">
          <el-input v-model="form.src" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="changData">确 定</el-button>
      </div>
    </el-dialog>
  </el-main>
</template>
<script>
import CarouselItem from './CarouselItem'
export default {
  name: 'skins',
  data () {
    return {
      items: [],
      name: '',
      dialogFormVisible: false,
      form: {
        src_name: '',
        src: ''
      },
      formLabelWidth: '120px'
      // ButtonType: false
    }
  },
  created: function () {
    if (this.$route.params.data !== undefined) {
      this.items = this.$route.params.data.skins
      this.name = this.items[0].skin_name
    }
  },
  methods: {
    back: function () {
      this.$router.push(`/list`)
    },
    changeTittle: function (e) {
      this.name = this.items[e].skin_name
    },
    getButtonName: function () {
      const skin = this.$store.state.Ships.ships[this.$route.params.name]
      // console.log(skin !== undefined && skin.skin_name === this.name)

      if (skin !== undefined && skin.skin_name === this.name) {
        return true
      }
      if (
        skin === undefined &&
        this.items.length !== 0 &&
        this.name === this.items[0].skin_name
      ) {
        return true
      }
      return false
    },
    changeShip: function () {
      const skin = this.items.filter(item => item.skin_name === this.name)[0]
      this.$store.dispatch('changeShip', {
        name: this.$route.params.name,
        skin: skin
      })
    },
    changData: function () {
      const skin = this.items.filter(item => item.skin_name === this.name)[0]
      // console.log(skin)
      console.log({...skin, ...this.form})
      this.$http
        .post('http://39.105.148.183:3030/api/v1/changeSkin', {
          ...skin,
          ...this.form
        })
        .then(val => {
          this.$message({ message: '更新成功', type: 'success' })
        })
      this.dialogFormVisible = false
    }
  },
  components: {
    CarouselItem
  }
}
</script>

<style>
.mainbox {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 !important;
  /* align-items: center; */
  background: url("https://patchwiki.biligame.com/images/blhx/8/86/s0z03t84jssbjwrrx0wh15anxm8s8wf.jpg")
    center center no-repeat;
}
.skin-tittle {
  height: 70px;
}
.skin-tittle > span {
  line-height: 70px;
  color: aliceblue;
  font-size: 28px;
}
.skin-tittle > span > button {
  padding: 0 !important;
  margin-left: 3px;
}
.skin-tittle > button {
  padding-top: 5px;
  position: fixed;
  right: 3px;
}
.skin-button {
  margin-top: 20px;
}
.skin-button button {
  padding: 12px 50px;
}
</style>
