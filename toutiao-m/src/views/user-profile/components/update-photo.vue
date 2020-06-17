<!--  -->
<template>
  <img class="img" :src="img"/>
</template>

<script>
export default {
  name: 'UpdatePhoto',
  components: {},
  props: {
    img: {
      type: [String, Object],
      required: true
    }
  },
  data () {
    return {}
  },
  computed: {},
  watch: {},
  methods: {},
  created () {}
}
</script>
<style lang='less' scoped>
.img {
  max-width: 100%;
}
</style>
