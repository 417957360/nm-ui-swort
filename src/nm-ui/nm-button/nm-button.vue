<template>
  <div class="nm_button" @click="click"></div>
</template>
<script>
export default {
  methods: {
    click (sortObj) {
      this.$emit('click', sortObj)
    }
  }
}
</script>
<style scoped>
.nm_button {
  height:50px;
  width:50px;
  border-radius: 50%;
  background: linear-gradient(145deg, #f6ffff, #cfd6e2);
  box-shadow:  5px 5px 10px #a8aeb7, 
              -5px -5px 10px #ffffff;
}
.nm_button:active {
  height:50px;
  width:50px;
  border-radius: 50%;
  background: linear-gradient(145deg, #cfd6e2, #f6ffff);
  box-shadow:  5px 5px 10px #a8aeb7, 
              -5px -5px 10px #ffffff;
}
</style>
