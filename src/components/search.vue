<template>
  <div class="background">
    <div class="content">
      <div class="white_bg">
        <div class="big_rect">
          <div class="big-num"><span>10</span></div>
          <div style="left: 85px; top: 26px; position: absolute; z-index: 500; width: 150px; height: 23px;">
            <span style="font-size: 16px; color: rgb(255, 255, 255);">优质合金材料提供商</span>
          </div>
          <div style="left: 85px; top: 49px; position: absolute; z-index: 121; width: 145px; height: 21px;">
            <span style="font-size: 14px; color: rgb(255, 255, 255);">年合金铸造研发经验</span>
          </div>
          <div class="horizon-line"></div>
          <div style="left: 50px; top: 123px; position: absolute; z-index: 105; width: 88px; height: 20px;">
            <span style="font-size: 14px; color: rgb(255, 255, 255);">销售热线</span><br>
          </div>
          <div style="left: 27px; top: 147px; position: absolute; z-index: 104; width: 168px; height: 32px;">
            <span style="font-size: 22px; color: rgb(255, 255, 255);">400-XXX-XXXX</span>
          </div>
          <div style="position: absolute;left: 26px;top:123px;">
            <img src="@/assets/img/tel_w2gv.png" style="width: 20px;height: 20px;">
          </div>
        </div>
      </div>
      <div class="blue_rect"></div>
      <div class="white_rect"></div>
      <div style="left: 277px; top: 16px; position: absolute; z-index: 503; width: 20px; height: 20px;">
        <img style="width: 20px; height: 20px;" src="@/assets/img/search.png">
      </div>
      <div style="left: 309px; top: 16px; position: absolute; z-index: 129; width: 533px; height: 21px;">
        <span style="font-size: 14px; color: rgb(255, 255, 255);">推荐关键字：合金， 机床， 添加剂， 咨询服务， XXXX</span>
      </div>
      <div style="left: 863px; top: 15.5px; position: absolute; z-index: 127; width: 320px; height: 31px;">
        <div class="searchbox" style="width: 320px;">
          <div class="ninputs">
            <input type="text" class="searchbox_txt" name="keywords" value="请输入关键字"
                   style="width: 253px;height: 28px;" autocomplete="off" role="textbox" aria-autocomplete="list" aria-haspopup="true">
            <input type="hidden" name="searchcontent" value="product">
          </div>
          <div class="sright">
            <div class="searchbox_btn" id="searchbox_btn" style="height: 28px;">&nbsp;</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Search',
  data () {
    return {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .background {
    width: 100%;
    height: 60px;
    position: relative;
    background-color: rgb(19, 158, 186);
  }

  div.content {
    width: 1200px;
    height: 60px;
    margin: auto;
    position: relative;
  }

  div.white_bg {
    width: 260px;
    height: 60px;
    position: absolute;
    background: rgb(241, 241, 241);
  }

  div.big_rect {
    left: 5px;
    top: -141px;
    position: absolute;
    z-index: 119;
    width: 250px;
    height: 200px;
    background: rgb(39, 174, 201);
  }

  div.blue_rect {
    width: 15px;
    height: 15px;
    background: rgb(39, 174, 201);
    position: absolute;
    left: 255px;
    top: -156px;
  }

  div.white_rect {
    width: 15px;
    height: 15px;
    background: rgb(241, 241, 241);
    position: absolute;
    left: 240px;
    top: -141px;
    z-index: 1000;
  }

  div.big-num {
    left: 19px;
    top: 9px;
    position: absolute;
    z-index: 120;
    width: 61px;
    height: 70px;
  }

  div.big-num span {
    font-size: 53px;
    color: rgb(255, 255, 255);
  }

  div.horizon-line {
    left: 23px;
    top: 95px;
    position: absolute;
    z-index: 501;
    width: 205px;
    border-top: 1px solid #ffffff;
    height: 0;
  }

  div.searchbox_btn {
    background-image: url('~@/assets/img/bg0.jpg');
    float: left;
    width: 50px;
    height: 28px;
    line-height: 28px;
    cursor: pointer;
    text-align: center;
  }

  .searchbox_txt {
    width: 253px;
    background-color: white;
    float: left;
    font-size: 12px;
    font-family: SimSun;
    color: #666;
    font-weight: normal;
    line-height: 26px;
    height: 26px;
    vertical-align: middle;
    border: #D3D3D3 1px solid;
    padding-left: 5px;
    padding-right: 5px;
    -webkit-appearance: none;
    -webkit-border-radius: 0;
    display: block;
  }

</style>
