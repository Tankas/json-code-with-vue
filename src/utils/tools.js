export function replaceItem(obj, word) {
  return word.split('[#').map((item) => {
    const replaceArray = item.split('#]')
    if (obj[replaceArray[0]]) {
      replaceArray.splice(0, 1, obj[replaceArray[0]])
    }
    return replaceArray.join('')
  }).reduce((total, value) => {
    total += value
    return total
  })
}

export function random() {
  return Math.random()
    .toString(36)
    .substring(2)
}

export function toDownload(data) {
  const blob = new Blob([data])
  const href = window.URL.createObjectURL(blob)
  return href
}

// 根据路径取数据
export function objectGetByPath(obj = {}, path = '') {
  let val
  try {
    val = path.split('.').reduce((a, b) => a && a[b], obj)
  } catch (error) {
    console.warn('error', error)
  }
  return val
}

export function objectSetByPath(obj = {}, path = '', val) {
  path = path.split('.')
  const key = path.pop()
  let preObj = obj
  try {
    preObj = path.reduce((a, b) => {
      if (!(a && typeof a === 'object')) a = {}
      if (!(a[b] && typeof a[b] === 'object')) a[b] = {}
      return a[b]
    }, obj)
  } catch (e) {
    console.error(e)
  }
  preObj[key] = val
  // set(obj, path, val);
  return obj
}
