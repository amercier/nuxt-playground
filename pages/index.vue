<template>
  <h1 class="grey">Hello {{ name }}!</h1>
</template>

<script>
export default {
  data () {
    return { name: 'world' }
  }
}
</script>

<style>
.grey {
  color: #333;
}
</style>
