<template>
  <div class="background">
    <div class="img" @mouseover="clear" @mouseout="run">
      <transition name="slide-trans">
        <img v-if="isShow" :src="slides[nowIndex].src">
      </transition>
      <transition name="slide-trans-old">
        <img v-if="!isShow" :src="slides[nowIndex].src">
      </transition>
    </div>
    <div class="bar" ref="bar" :style="{ 'margin-left': center}">
      <div v-for="(item, index) in slides" :key="index" class="btnn"
           :class="{ 'btn-active': index === nowIndex? true: false }" @click="goto(index)" ></div>
    </div>
  </div>
</template>

<script>
import banner1 from '@/assets/img/banner-1.jpg'
import banner2 from '@/assets/img/banner-2.jpg'
export default {
  name: 'Banner',
  data () {
    return {
      nowIndex: 1,
      center: '',
      invId: 0,
      interval: 5000,
      isShow: true,
      slides: [
        {
          src: banner1
        },
        {
          src: banner2
        }
      ]
    }
  },
  computed: {
    prevIndex () {
      if (this.nowIndex === 0) {
        return this.slides.length - 1
      } else {
        return this.nowIndex - 1
      }
    },
    nextIndex () {
      if (this.nowIndex === this.slides.length - 1) {
        return 0
      } else {
        return this.nowIndex + 1
      }
    }
  },
  methods: {
    goto (index) {
      if (this.nowIndex === index) {
        return
      }
      this.isShow = false
      setTimeout(() => {
        this.isShow = true
        this.nowIndex = index
      }, 10)
    },
    run () {
      this.invId = setInterval(() => {
        this.goto(this.nextIndex)
      }, this.interval)
    },
    clear () {
      clearInterval(this.invId)
    }
  },
  mounted () {
    this.center = -this.$refs.bar.offsetWidth / 2 + 'px'
    this.run()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.background {
  width: 100%;
  height: 500px;
  position: relative;
}

img {
  position: absolute;
  height: 500px;
}

div.bar {
  position: absolute;
  height: auto;
  overflow: hidden;
  width: auto;
  top: 458px;
  left: 50%;
}

div.img {
  position: absolute;
  height: 500px;
  width:100%;
  overflow:hidden;
}

div.btnn {
  width: 12px;
  height: 12px;
  border-radius: 6px;
  background-color: #cccccc;
  float: left;
  cursor: pointer;
  text-align: center;
  position: relative;
  margin-left: 12px;
}

div.btn-active {
  background-color: #1c8195;
}

.slide-trans-old-leave-active, .slide-trans-enter-active {
  transition: all .5s;
}

.slide-trans-enter {
  transform: translateX(1900px);
}

.slide-trans-old-leave-to {
  transform: translateX(-1900px);
}
</style>
