import {request} from "./request"
export function getCategory() {
  return request({
    url: "category"
  })
}


// export function getCategoryGoods() {
//   return request({
//     url: "subcategory",
//     params: {
//       maitKey: 3627
//     }
//   })
// }

export function getCategoryGoods(type, page) {
  return request({
    url: "home/data",
    params: {
      type,
      page
    }
  })
}
