import Vue from 'vue'
import Vuex from 'vuex'

//1安装插件
Vue.use(Vuex)
//2创建对象
const store = new Vuex.Store({
  state: {
    cartList: []
  },
  //修改state中的状态
  mutations: {
    addCart(state, payload) {
      let oldProduct = null
      for(let item of state.cartList){
        if(item.iid === payload.iid){
          oldProduct = item
        }
      }
      if (oldProduct) {
        oldProduct.count += 1
      } else {
        payload.count = 1
        payload.show = true
        state.cartList.push(payload)
      }
    }
  }
})
//

//3导出对象
export default store
