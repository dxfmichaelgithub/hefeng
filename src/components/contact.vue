<template>
  <div class="background">
    <small-navi title="联系我们"></small-navi>
    <img src="@/assets/img/contact-1.png">
  </div>
</template>

<script>
import SmallNavi from '@/components/small_navi'
export default {
  name: 'Contact',
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
    height: 450px;
    position: relative;
  }

  img {
    top: 20px;
    width: 100%;
    height: 360px;
    position: relative;
  }
</style>
