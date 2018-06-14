<template>
  <div>
    <product-center-new></product-center-new>
    <introduction></introduction>
    <strength></strength>
    <xinwen></xinwen>
    <!--<liuyan></liuyan>-->
  </div>
</template>

<script>
import ProductCenterNew from '@/components/homes/product_center_new'
import Introduction from '@/components/homes/introduction'
import Strength from '@/components/homes/strength'
import Xinwen from '@/components/homes/xinwen'
import Liuyan from '@/components/homes/liuyan'

export default {
  name: 'Home',
  data () {
    return {
      msg: 'Welcome to Home'
    }
  },
  components: {
    'product-center-new': ProductCenterNew,
    'introduction': Introduction,
    'strength': Strength,
    'xinwen': Xinwen,
    'liuyan': Liuyan
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
