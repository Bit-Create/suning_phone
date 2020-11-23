
export function selectUserCat() {
  let cat = {
    img: '../assets/Login.jpg', //图片
    price: 4999, //价格
    title: '华为/HUAWEI 畅享20 Pro 5G 8GB+128GB 深海蓝 超清全视屏 超广角AI三摄 移动联通电信5G全面屏全网通手机', //标题
    model: '60倍变焦',  //型号
    count: 4, //数量
  }
  let data = []
  for (let i = 0; i < 3; i++ ) {
    data.push(cat)
  }
  return data
}
