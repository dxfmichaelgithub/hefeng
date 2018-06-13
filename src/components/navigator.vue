<template>
  <div class="backgound">
    <div class="center">
      <div class="logoo">
        <img src="@/assets/img/logo1.png"/>
        <div id="title"><span>合峰合金铸造</span></div>
      </div>
      <div class="navi">
        <ul class="navigator">
          <li>
            <router-link to="/"><span>首页</span></router-link>
          </li>
          <li>
            <router-link to="/about"><span>关于我们</span></router-link>
          </li>
          <li>
            <router-link to="/products"><span>产品中心</span></router-link>
          </li>
          <li>
            <router-link to="/sales"><span>销售网络</span></router-link>
          </li>
          <li>
            <router-link to="/community"><span>生活社区</span></router-link>
          </li>
          <li>
            <router-link to="/contact"><span>联系我们</span></router-link>
          </li>
          <li>
            <a href="http://39.105.126.9:8080/#/login"><span>内部办公</span></a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navigator',
  data () {
    return {
      msg: 'Welcome to About'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  img {
    width: 47px;
    height: 47px;
    position: absolute;
    top: 1px;
  }

  #title {
    height: 50px;
    width: 250px;
    position: absolute;
    left: 55px;
  }

  #title span {
    font-size: 36px;
    color: rgb(102, 102, 102);
  }

  div.logoo {
    position: absolute;
    width: 300px;
    height: 50px;
    top: 10px;
  }

  .backgound {
    height: 70px;
    width: 100%;
    background-image: url('~@/assets/img/nav-bg.jpg');
  }

  .center {
    height: 70px;
    width: 1200px;
    margin: auto;
    left: 0;
    right: 0;
    position: relative;
  }

  .navi {
    left: 320px;
    position: absolute;
    z-index: 108;
    width: 880px;
    height: 70px;
    background-color: #139eba;
  }

  .navigator {
    list-style: none;
    padding-right: 0px;
    padding-left: 0px;
    height: 70px;
  }

  .navigator li {
    float: left;
    text-align: center;
    width: 14.286%;
    height: 70px;
    line-height: 70px;
  }

  a, a span {
    text-decoration: none;
    color: white;
    height: 70px;
    display: block;
  }

  .router-link-exact-active, a:hover {
    background-color: #27aec9;
  }

  a:focus {
    text-decoration: none;
  }

</style>
