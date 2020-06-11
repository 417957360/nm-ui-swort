<template>
  <div id="app">
    <nm-button @click="clickTest()"></nm-button>
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
