import Vue from 'vue'
import Vuex from 'vuex'
import mutations from "./mutations.js"
import actions from "./actions.js"
import state from "./state.js"

//1安装插件
Vue.use(Vuex)
//2创建对象
const store = new Vuex.Store({
  state,
  //修改state中的状态
  mutations,
  actions
})
//

//3导出对象
export default store
