<template>
  <div :class="style" @mousedown="down" @mouseup="click" @mouseleave="out">
    <div class="nm-button"></div>
  </div>
</template>
<script>
import themeColor from '../theme/index'
export default {
  data () {
    return {
      style: 'nm-button-hover'
    }
  },
  methods: {
    down () {
      this.style = 'nm-button-active'
    },
    click (sortObj) {
      this.$emit('click', sortObj)
      this.style = ''
    },
    out () { 
      this.style = ''
    }
  }
}
</script>
