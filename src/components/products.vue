<template>
  <div class="background">
    <small-navi title="产品中心"></small-navi>
    <img src="@/assets/img/products-1.png" key="1" >
  </div>
</template>

<script>
import SmallNavi from '@/components/small_navi'
export default {
  name: 'Products',
  data () {
    return {
      msg: ''
    }
  },
  components: {
    'small-navi': SmallNavi
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .background {
    width: 1200px;
    margin: auto;
    height: 720px;
    position: relative;
  }

  .background img {
    width: 100%;
    height: 660px;
  }
</style>
