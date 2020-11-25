export default {
  increase_counter(state, oldProduct) {
    oldProduct.count += 1
  },
  add_counter(state, payload) {
    state.cartList.push(payload)
  }
}
