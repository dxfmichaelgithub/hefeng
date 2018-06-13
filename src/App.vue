<template>
  <div id="app">
    <welcome/>
    <navigator/>
    <banner/>
    <search/>
    <!--<smallnavi/>-->
    <router-view/>
    <footbar/>
  </div>
</template>

<script>

import Welcome from '@/components/welcome'
import Navigator from '@/components/navigator'
import Footbar from '@/components/footbar'
import Banner from '@/components/banner'
import Search from '@/components/search'
import SmallNavi from '@/components/small_navi'

export default {
  name: 'App',
  components: {
    'welcome': Welcome,
    'navigator': Navigator,
    'banner': Banner,
    'search': Search,
    'footbar': Footbar,
    'smallnavi': SmallNavi
  }
}
</script>

<style>
  #app {
    width: 100%;
    height: 100%;
  }

  * {
    margin: 0;
    padding: 0;
    font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
    color: rgb(102, 102, 102);
  }

  A:visited {
    text-decoration: none;
    color: #5a5a5a;
  }
  A:link {
    text-decoration: none;
    color: #5a5a5a;
  }
  a {
    outline: none;
  }
</style>
