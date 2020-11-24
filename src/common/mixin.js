import backtop from 'components/content/backTop/BackTop'
export const backTopMixin = {
  data() {
    return{
      backTopisShow: false
    }
  },
  components: {
    backtop
  },
  methods: {
    backClick() {
      this.$refs.scroll.scrollTo(0, 0)
    }
  }
}
