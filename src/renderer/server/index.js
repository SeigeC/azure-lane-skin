import fs from 'fs'
import https from 'https'

const url = 'https://wiki.biligame.com/blhx/'
/**
 * 通过船名获取Html页面
 * @param {string} name
 * @param {Function} next
 * @returns {Promise<string>}
 */
export function getHtmlPage (name, next) {
  https.get(url + encodeURI(name), (res) => {
    let str = ''
    res.on('data', chunk => {
      str += chunk.toString()
    })
    res.on('end', () => {
      next(str)
    })
  })
}
/**
 *
 * @param {string} str
 */
export function getImgSrc (str) {
  let obj = {}
  const list = str.match(/<img .*data-file-height="525" \/>/g)
  list.forEach(data => {
    const name = /(alt="=?)(\S*)(?=\.jpg")/.exec(data)[2]
    const src = (/(src="=?)(\S*)(?=")/.exec(data))[2]
    obj[name] = src
  })
  return obj
}

export function getFile (skin) {
  return fs.readFileSync(`${__static}/skin/${skin}`).toString()
}
/**
 *
 * @param {string} data
 */
export function getData (data) {
  let arr = data.split('[')
  arr.shift()
  return arr.map(data => {
    let res = {}
    res.name = data.slice(0, data.indexOf(']'))
    res.skin = skin(data.slice(data.indexOf(']') + 3), res.name)
    return res
  })
}
/**
 *
 * @param {string} str
 * @param {string} shipName
 */
function skin (str, shipName) {
  let arr = str.split('\n')
  let res = {}
  arr.splice(arr.indexOf('') - 1)
  arr.forEach(data => {
    const name = data.slice(1)
    res[name] = {
      isUsed: data[0] === '+',
      src: `${__static}/imgs/${shipName}_${name.slice(0, name.indexOf(':'))}.jpg`
    }
  })
  return res
}

export function getAllShip (file = 'skin.ini') {
  let str = getFile(file)
  return getData(str)
}
/**
 *
 * @param {string} src
 */

/**
 *
 * @param {string} src
 * @param {Function} next
 * @returns {Promise<boolean>}
 */
export function haveImg (src, next) {
  fs.access(src, (err) => {
    if (err) { return next(false) }
    next(true)
  })
}
