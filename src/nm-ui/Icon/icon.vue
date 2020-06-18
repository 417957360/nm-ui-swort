<template>
  <i class="material-icons" style="-moz-user-select: none;">home</i>
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
