import {request} from "@/network/request";

//获取某页数据
export function selectPhonePage(pageNum, pageSize) {
  return request({
    method: 'get',
    url: '/SN/phone',
    params: {
      pageNum: pageNum,   //页码
      size: pageSize  //每页数量
    }
  })
}

//获取该手机详细信息
export function selectPhoneDetailed(id) {
  return request({
    method: 'get',
    url: '/SN/detail',
    params: {
      id: id //手机ID
    }
  })
}
