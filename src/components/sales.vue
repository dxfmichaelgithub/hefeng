<template>
  <div class="background">
    <small-navi title="销售网络"></small-navi>
    <img src="@/assets/img/sales-1.png" key="2" >
  </div>
</template>

<script>
import SmallNavi from '@/components/small_navi'
export default {
  name: 'Sales',
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
    height: 430px;
    position: relative;
  }

  img {
    width: 100%;
    height: 380px;
  }
</style>
