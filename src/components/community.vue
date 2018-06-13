<template>
  <div class="background">
    <small-navi title="生活社区"></small-navi>
    <div class="container">
      <div class="heading text-center">
        <!-- Heading -->
        <h2>我们的服务</h2>
        <p>合峰将为您提供一切所需服务，将以优质的服务，为您提供贴心的照顾</p>
      </div>
      <div class="row">
        <!-- item -->
        <div class="col-md-3 text-center c1"> <i class="fa fa-plane fa-2x circle"></i>
          <h3><span class="id-color">国际会议</span></h3>
          <p>Nullam ac rhoncus sapien, non gravida purus. Alinon elit imperdiet congue. Integer elit imperdiet congue.</p>
        </div>
        <!-- end: -->

        <!-- item -->
        <div class="col-md-3 text-center c2"> <i class="fa fa-diamond fa-2x circle"></i>
          <h3><span class="id-color">购买珠宝</span></h3>
          <p>Nullam ac rhoncus sapien, non gravida purus. Alinon elit imperdiet congue. Integer elit imperdiet congue.</p>
        </div>
        <!-- end: -->

        <!-- item -->
        <div class="col-md-3 text-center c1"> <i class="fa fa-female fa-2x circle"></i>
          <h3><span class="id-color">女士专区</span></h3>
          <p>Nullam ac rhoncus sapien, non gravida purus. Alinon elit imperdiet congue. Integer ultricies sed elit impe.</p>
        </div>
        <!-- end: -->

        <!-- item -->
        <div class="col-md-3 text-center c2"> <i class="fa fa-child fa-2x circle"></i>
          <h3><span class="id-color">儿童专区</span></h3>
          <p>Nullam ac rhoncus sapien, non gravida purus. Alinon elit imperdiet congue. Integer elit imperdiet conempus.</p>
        </div>
        <!-- end:-->

        <!-- item -->
        <div class="col-md-3 text-center c2"> <i class="fa fa-ship fa-2x circle"></i>
          <h3><span class="id-color">海上旅行</span></h3>
          <p>Nullam ac rhoncus sapien, non gravida purus. Alinon elit imperdiet congue. Integer ultricies sed elit impe.</p>
        </div>
        <!-- end: -->

        <!-- item -->
        <div class="col-md-3 text-center c1"> <i class="fa fa-shopping-bag fa-2x circle"></i>
          <h3><span class="id-color">购物服务</span></h3>
          <p>Nullam ac rhoncus sapien, non gravida purus. Alinon elit imperdiet congue. Integer ultricies sed elit impe.</p>
        </div>
        <!-- end: -->

        <!-- item -->
        <div class="col-md-3 text-center c2"> <i class="fa fa-users fa-2x circle"></i>
          <h3><span class="id-color">行业培训</span></h3>
          <p>Nullam ac rhoncus sapien, non gravida purus. Alinon elit imperdiet congue. Integer ultricies sed elit impe.</p>
        </div>
        <!-- end: -->

        <!-- item -->
        <div class="col-md-3 text-center c1"> <i class="fa fa-globe fa-2x circle"></i>
          <h3><span class="id-color">国际贸易</span></h3>
          <p>Nullam ac rhoncus sapien, non gravida purus. Alinon elit imperdiet congue. Integer ultricies sed elit impe.</p>
        </div>
        <!-- end: -->
      </div>
    </div>
  </div>
</template>

<script>
import SmallNavi from '@/components/small_navi'
export default {
  name: 'Community',
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
    height: 880px;
    position: relative;
  }

  img {
    width: 100%;
    height: 380px;
  }
</style>
