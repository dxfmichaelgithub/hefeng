<template>
    <div class="background">
      <div style="left: 524px; top: 47px; position: absolute; z-index: 132; width: 150px; height: 39px;">
        <div class="wp-title_content"
             style="overflow-wrap: break-word; padding: 0px; border-color: transparent; border-width: 0px; height: 39px; width: 150px; display: block;">
          <div align="center"><span style="font-size: 26px;">产品中心</span></div>
        </div>
      </div>
      <div  style="left: 300px; top: 64px; position: absolute; z-index: 130; width: 600px; height: 31px;">
        <div class="wp-line_content"
             style="padding: 0px; border-color: transparent; border-width: 0px; overflow: hidden; width: 600px; height: 31px; border-style: solid;">
          <div class="wpline-wrapper horizontal-solid"></div>
        </div>
      </div>
      <div style="left: 500px; top: 65px; position: absolute; z-index: 131; width: 200px; height: 30px;">
        <div class="wp-box_content drop_box"
             style="overflow-wrap: break-word; padding: 0px; border-color: transparent rgb(204, 204, 204); border-width: 0px 1px; height: 30px; background-color: rgb(255, 255, 255); width: 198px; border-style: solid;">

        </div>
      </div>
      <div style="left: 524px; top: 83px; position: absolute; z-index: 133; width: 150px; height: 21px;">
        <div class="wp-title_content"
             style="overflow-wrap: break-word; padding: 0px; border-color: transparent; border-width: 0px; height: 21px; width: 150px; display: block;">
          <div align="center"><span style="color: rgb(102, 102, 102);">products</span></div>
        </div>
      </div>
      <div style="left: 0px; top: 110px; position: absolute; width: 1200px; height: 600px;">
        <img src="@/assets/img/home_product_list.png" style="width: 1200px;height: 600px">
      </div>
    </div>
</template>

<script>
export default {
  name: 'ProductCenter'
}
</script>

<style scoped>
  .background {
    width: 1200px;
    height: 720px;
    margin: auto;
    position: relative;
  }

  .horizontal-solid {
    border: none;
    border-top: 1px solid #cccccc;
    height: 0;
  }

  .wpline-wrapper {
    margin: 15px 0;
    width: 100%;
    overflow: hidden;
  }

  .wp-title_content {
    font-size: 12px;
    /*line-height: 140%;*/
    overflow: hidden;
  }

</style>
