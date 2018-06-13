<template>
  <div>
    <product-center></product-center>
    <introduction></introduction>
    <strength></strength>
    <xinwen></xinwen>
    <!--<liuyan></liuyan>-->
  </div>
</template>

<script>
import ProductCenter from '@/components/homes/product_center'
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
    'product-center': ProductCenter,
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
