import {getUseData, writeFile} from '../../server/index'
const state = {
  ships: getUseData()
}

const mutations = {
  ADD (state, ship) {
    state.ships[ship.name] = ship.skin
  }
}

const actions = {
  changeShip ({ commit }, ship) {
    // do something async
    commit('ADD', ship)
  },
  saveShip () {
    // do something async
    writeFile(JSON.stringify(state.ships))
  },
  saveFile ({ commit }, path) {
    let str = ''
    for (const key in state.ships) {
      const {skin_name: skinName, id} = state.ships[key]
      str += `+${skinName}:${id}\n`
    }
    writeFile(str, path)
  }
}

export default {
  state,
  mutations,
  actions
}
