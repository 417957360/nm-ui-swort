<template>
  <div id="app">
    <nm-button @click="clickTest()"></nm-button>
    <nm-icon size="36" value="home"></nm-icon>
  </div>
</template>
<script>
export default {
  methods: {
    clickTest () {
      console.log('111')
    }
  }
}
</script>
