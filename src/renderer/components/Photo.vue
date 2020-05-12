<template>
  <!-- , v-for="photo in photos" :key="photo.id" -->
  <div class="card-list">
    <ship-card
      v-for="(item, v) in items"
      :name="item.name"
      :num="2"
      :key="v"
      :item="getUseData(item)"
      @click.native="goto(item.name)"
    >
    </ship-card>
  </div>
</template>
<script>
import ShipCard from './ShipCard'
import { getShipsData, getShipData } from '../server/index'
import ScrollPosition from '../server/scross'
export default {
  data () {
    return {
      items: []
    }
  },
  created(){
    getShipsData().then(val=>{
      this.items = val
    })
  },
  methods: {
    goto: function (name) {
      this.$router.push({
        name: 'skin',
        params: { data: getShipData(this.items, name), name: name }
      })
    },
    getUseData: function (item) {
      const data = this.$store.state.Ships.ships
      if (data[item.name] === undefined) {
        const skins= item.skins.filter(skin=>{
          console.log(skin)
          const id = skin.id[skin.id.length-1]
          return id!=='8'&&id!=='9'
        })
        this.$store.dispatch('changeShip', {
          name: item.name,
          skin: skins[0]
        })
        return skins[0]
      }
      return data[item.name]
    }
  },
  mounted: ScrollPosition.get,
  components: {
    ShipCard
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
