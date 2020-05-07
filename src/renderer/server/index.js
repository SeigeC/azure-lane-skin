import fs from 'fs'
import https from 'https'

const url = 'https://wiki.biligame.com/blhx/'
/**
 * 通过船名获取Html页面
 * @param {string} name
 */
export function getHtmlPage (name) {
  return new Promise((resolve) => {
    https.get(url + encodeURI(name), (res) => {
      let str = ''
      res.on('data', chunk => {
        str += chunk.toString()
      })
      res.on('end', () => {
        fs.writeFile(`${__static}/skin/aa.html`, str, () => {
          resolve(str)
        })
      })
    })
  })
}

/**
 *
 * @param {string} str
 */
export function getImgSrc (str) {
  let obj = {}
  const list = str.match(/<img alt=".*(换装[1-9]?|立绘|誓约|改造)\.jpg".* \/>/g)
  list.forEach(data => {
    console.log()
    const name = data.match(/".*(换装[1-9]?|立绘|誓约|改造)/ig).toString().slice(1)
    const src = data.match(/src=".*\.jpg/ig).toString().slice(5)
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
  return arr.map(data => skin(data))
}
/**
 *
 * @param {string} str
 * @param {string} shipName
 */
function skin (data) {
  let res = {
    name: data.slice(0, data.indexOf(']')),
    use: '',
    skin: {}
  }
  let arr = data.slice(data.indexOf(']') + 3).split('\n')

  arr.splice(arr.indexOf('') - 1)
  arr.forEach(data => {
    let name = data.slice(1).trim()
    const start = name.indexOf('/')
    if (start !== -1) {
      name = name.slice(start + 1)
    }
    res.skin[name] = {
      isUsed: data[0] === '+',
      src: `${__static}/imgs/${res.name}_${name.slice(0, name.indexOf(':'))}.jpg`
    }
    if (res.skin[name].isUsed === true) res.use = res.skin[name].src
  })
  if (res.use === '') res.use = `${__static}/imgs/${res.name}_${res.name}立绘.jpg`
  return res
}
/**
 *
 * @param {string} file
 */
export function getAllShip (file = 'skin.ini') {
  let str = getFile(file)
  return getData(str)
}

/**
 *
 * @param {string} src
 * @returns {Promise<boolean>}
 */
export function haveImg (src) {
  return new Promise(resolve => {
    fs.access(src, (err) => {
      if (err) resolve(false)
      resolve(true)
    })
  })
}
/**
 *
 * @param {{
    name: string;
    use: string;
    skin: {};
}} shipObj
 */
export async function saveImg ({name, skin}) {
  let str = await getHtmlPage(name)
  let skinList = await getImgSrc(str)
  console.log(skinList, skin)
  Object.keys(skin).forEach(async (val, key) => {
    const len = val.length - 1
    let skinName = ''
    // console.log(val, len, val.length, val[len])
    if (val[len] === '8') {
      skinName = '誓约'
    } else if (val[len] === '9') {
      skinName = '改造'
    } else {
      skinName = getname(key, name)
    }
    // console.log(val, name)
    const url = find(skinList, skinName)
    await getImgAndSave(url, skin[val].src)
  })
  await getImgAndSave(find(skinList, '立绘'), `${__static}/imgs/${name}_${name}立绘.jpg`)
}
function getname (key, name) {
  if (key === 0) {
    return '换装'
  }
  if (name !== '山城' || key <= 3) {
    return `换装${key + 1}`
  }
  if (key > 3) {
    return `换装${key + 2}`
  }
//   console.log(key, name)
}
function find (skinList, name) {
  for (const key in skinList) {
    // console.log(key, name, key.indexOf(name) !== -1)
    if (key.indexOf(name) !== -1) {
    //   console.log(key, name)
      return skinList[key]
    }
  }
}

export function getImgAndSave (url, path) {
  return new Promise(resolve => {
    https.get(url, res => {
      let imgData
      res.setEncoding('binary')
      res.on('data', function (chunk) {
        imgData += chunk
      })
      //   console.log(path, url)

      res.on('end', function () {
        fs.writeFile(path, imgData, 'binary', function (err) {
          if (err) {
            console.log('down fail', path)
          } else {
            resolve()
          }
        })
      })
    })
  })
}

export async function test () {
  getAllShip().forEach(async val => {
    for (const src in val.skin) {
      let ok = await haveImg(val.skin[src].src)
      if (ok === false) {
        console.log(src, val.skin[src])
        await saveImg(val)
      }
    }
    console.log('完成')
  })
  //   console.log(getImgSrc(getFile('aa.html')))
//   console.log(getAllShip())
}