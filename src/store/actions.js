export default {
  //cuntext相当于store
  addCart(context,payload) {
    return new Promise((resolve, reject) =>
      {
        let oldProduct = null
        for(let item of context.state.cartList){
          if(item.iid === payload.iid){
            oldProduct = item
          }
        }
        if (oldProduct) {
          context.commit('increase_counter',oldProduct)
          resolve('当前商品数量+1')
        } else {
          payload.count = 1
          payload.show = true
          context.commit('add_counter',payload)
          resolve('已添加到购物车')
        }
    });
  }
}
