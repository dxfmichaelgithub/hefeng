<template>
  <div class="container" key="small">
    <div style="overflow-wrap: break-word; padding: 0px; border-color: transparent transparent rgb(217, 217, 217);
  border-width: 0px 0px 1px; height: 39px; background-color: transparent; width: 1200px;
  border-style: solid solid dashed;">
      <div style="left: 13px; top: 6px; position: absolute; z-index: width: 874px; height: 18px;">
  <span class="breadcrumbtext" gzdata="gzorder">
    <router-link to="/"
                 style="line-height:100%;line-height:100%;line-height: 100%;color: rgb(102, 102, 102);">首页</router-link>
  </span>
        <span style="line-height:100%; margin-left:5px;margin-right:5px;color:rgb(204, 204, 204);font-size:12px;"
              class="breadcrumbfuhao">＞</span>
        <span class="breadcrumbtext">
    <router-link :to="to"
                 style="line-height:100%;line-height:100%;line-height: 100%;color: rgb(102, 102, 102);">{{title}}</router-link>
  </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SmallNavi',
  data () {
    return {
      to: ''
    }
  },
  props: [
    'title'
  ],
  mounted () {
    this.to = this.$route.path
  }
}
</script>

<style scoped>
  .container {
    height: 40px;
    width: 1200px;
    margin: auto;
  }

  a {
    text-decoration: none;
  }

</style>
