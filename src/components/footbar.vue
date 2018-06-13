<template>
  <div class="backgound">
    <div class="center">
      <div style="left: 18px; top: 62px; position: absolute; z-index: 101; width: 68px; height: 68px;">
        <img src="@/assets/img/logo2.png"
             style="width: 68px; height: auto; display: inline;">
      </div>
      <div style="left: 105px; top: 73px; position: absolute; z-index: 102; width: 150px; height: 45px;">
        <span style="font-size: 32px; color: rgb(217, 217, 217);">合峰合金</span>
      </div>
      <div class="title" style="left: 466px; top: 25px; position: absolute; z-index: 103; width: 487px; height: 100px;">
        <span>联系我们</span>
      </div>
      <div style="left: 430px; top: 60px; position: absolute; z-index: 103; width: 487px; height: 100px;">
        <p class="address"><span style="color: rgb(204, 204, 204); line-height: 160%; font-size: 12px;">电话：XXXX-XXXXXXXX</span></p>
        <p class="address"><span style="color: rgb(204, 204, 204); line-height: 160%; font-size: 12px;">传真：XXXX-XXXXXXXX</span></p>
        <p class="address"><span style="color: rgb(204, 204, 204); line-height: 160%; font-size: 12px;">邮箱：XXXX@XXXX.XXX</span></p>
        <p class="address"><span style="color: rgb(204, 204, 204); line-height: 160%; font-size: 12px;">地址：XXX省XXX市XXX区XXX路XXX号</span></p>
        <p class="address"><span style="color: rgb(204, 204, 204); line-height: 160%; font-size: 12px;">版权所有 合峰合金有限公司&nbsp; XICP备XXXXXXXX号<br></span></p>
      </div>
      <div class="title" style="left: 866px; top: 25px; position: absolute; z-index: 103; width: 487px; height: 100px;">
        <span>关注我们</span>
      </div>
      <div style="left: 840px; top: 60px; position: absolute; z-index: 104; width: 97px; height: 97px;">
        <img src="@/assets/img/qr.png" style="width: 97px;">
      </div>
      <div style="left: 950px; top: 86px; position: absolute; z-index: 106; width: 88px; height: 40px;" mid="" deg="0">
        <div class="wp-title_content"
             style="overflow-wrap: break-word; padding: 0px; border-color: transparent; border-width: 0px; height: 40px; width: 88px; display: block; border-style: solid;">
          <p><span style="line-height: 160%;color: rgb(217, 217, 217);">扫一扫</span></p>
          <p><span style="line-height: 160%;color: rgb(217, 217, 217);">关注官方微信</span><br></p></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footbar',
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
    left: 0;
    right: 0;
    width: 1200px;
    height: 187px;
  }

  .backgound {
    height: 220px;
    width: 100%;
    background-color: rgb(51, 51, 51);
  }

  p span {
    font-size: 12px;
  }

  .title span {
    color: white;
  }

  p.address {
    margin: 0 0 0px !important;
  }
</style>
