
export function selectPhonePage() {
  let phone = {
    img: '../assets/Login.jpg',
    price: 4999,
    title: '华为/HUAWEI 畅享20 Pro 5G 8GB+128GB 深海蓝 超清全视屏 超广角AI三摄 移动联通电信5G全面屏全网通手机',
    describe: '60倍变焦',
    count: 405,
    storeName: '苏宁自营'
  }
  let row  = []
  let data = []
  for (let i = 0; i < 5; i++ ) {
    row.push(phone)
  }
  data.push(row)
  data.push(row)
  return data
}
