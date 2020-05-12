<template>
  <!-- , v-for="photo in photos" :key="photo.id" -->
  <div class="card-list">
    <ship-card
      v-for="(item, v) in items"
      :name="item.name"
      :num="2"
      :key="v"
      :item="getUsuData(item)"
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
      items: getShipsData()
    }
  },

  methods: {
    goto: function (name) {
      this.$router.push({
        name: 'skin',
        params: { data: getShipData(this.items, name), name: name }
      })
    },
    getUsuData: function (item) {
      const data = this.$store.state.Ships.ships
      if (data[item.name] === undefined) {
        this.$store.dispatch('changeShip', {
          name: item.name,
          skin: item.skins[0]
        })
        return item.skins[0]
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
