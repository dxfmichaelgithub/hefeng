<template>
  <div class="backgound">
    <div class="center">
      <div class="welcome">
        <span>欢迎光临合峰合金官方网站</span>
      </div>
      <div class="tel">
        <img src="@/assets/img/tel.png">
        <span>咨询热线：400-XXX-XXXX</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Welcome',
  data () {
    return {
      msg: 'Welcome to About'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.center {
  position: absolute;
  margin: auto;
  left: 0;right:0;
  width: 1200px;
  height: 30px;
}

.backgound {
  height: 30px;
  width: 100%;
  background-color: rgb(249, 249, 249);
}

.welcome {
  position: absolute;
  top:0px;
  left: 0;
}

.tel {
  position: absolute;
  right: 0;
  top: 0px;
}

img {
  width: 20px;
  height: 20px;
  position: relative;
}

span {
  font-size: 12px;
}
</style>
