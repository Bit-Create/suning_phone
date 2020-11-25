
export function selectUserCat() {
  let cat = {
    id: 1,
    img: '../assets/Login.jpg', //图片
    price: 4999, //价格
    title: '华为/HUAWEI 畅享20 Pro 5G 8GB+128GB 深海蓝 超清全视屏 超广角AI三摄 移动联通电信5G全面屏全网通手机', //标题
    size: '64GB',
    model: '官方标配',  //型号
    count: 4, //数量
  }
  let cat2 = {
    id: 2,
    img: '../assets/Login.jpg', //图片
    price: 5999, //价格
    title: '华为/HUAWEI 畅享20 Pro 5G 8GB+128GB 深海蓝 超清全视屏 超广角AI三摄 移动联通电信5G全面屏全网通手机', //标题
    size: '128GB',
    model: '官方标配',  //型号
    count: 6, //数量
  }
  let data = []
  data.push(cat)
  data.push(cat2)
  return data
}
