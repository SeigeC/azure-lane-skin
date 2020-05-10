<template>
  <!-- , v-for="photo in photos" :key="photo.id" -->
  <div class="card-list">
    <ship-card v-for="(item,v) in items"
               :url="item.skins[0].src"
               :name="item.name"
               :num="2"
               :key="v"
               @click.native="goto(item.name)">
      <!-- <img
        src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
        class="image"
      />-->
    </ship-card>
  </div>
</template>
<script>
import ShipCard from './ShipCard'
import { getShipsData, getShipData } from '../server/index'
export default {
  data() {
    return {
      items: []
    }
  },
  created: function () {
    this.items = getShipsData()
  },
  methods: {
    goto: function (e) {
      this.$router.push({ name: 'skin', params: { data: getShipData(this.items, e) } })
    }
  },
  components: {
    ShipCard
    // HelloWorld,
  }
}
</script>
<style>
.card-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>