<template>
  <div class='container'>
    <div class="header">
      按钮
      <div class="line"></div>
    </div>
    <div class="main">
      <div class="row">
        <div class="col">
          <button class="btn">hover me</button>
        </div>
        <div class="col"></div>
        <div class="col"></div>
      </div>
      <div class="row">
        <div class="col"></div>
        <div class="col"></div>
        <div class="col"></div>
      </div>
      <div class="row">
        <div class="col"></div>
        <div class="col"></div>
        <div class="col"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  props: {},
  data () {
    return {}
  },
  computed: {},
  watch: {},
  methods: {},
  created () {},
  mounted () {}
}
</script>
<style lang='less' scoped>
.container {
  height: 100%;
  background-color: #353b48;
  display: flex;
  flex-direction: column;
  .header {
    color: #fff;
    font-size: 24px;
    font-family: 'Arial Narrow', Arial, sans-serif;
    text-align: center;
    padding: 20px 0;
    position: relative;
    .line {
      position: absolute;
      bottom: 0;
      left: 0;
      height: 3px;
      width: 100%;
      background: -webkit-linear-gradient(left, #353b48, #1C1F50 ,#353b48);
    }
  }
  .main {
    height: 100%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    .row {
      flex: 1;
      display: flex;
      .col {
        flex: 3;
        height: 100%;
      }
      .col:nth-child(2) {
        margin: 0 20px;
      }
      .col:nth-child(1) {
        display: flex;
        justify-content: center;
        align-items: center;
        .btn {
          width: 200px;
          height: 40px;
          background: none;
          border: 4px solid;
          color: #3498db;
          font-weight: 700;
          text-transform: uppercase;
          cursor: pointer;
          font-size: 16px;
          position: relative;
        }
        .btn::before, .btn::after {
          content: "";
          position: absolute;
          width: 14px;
          height: 4px;
          background: #353b48;
          transform: skewX(50deg);
          transition: .4s linear;
        }
        .btn::before {
          top: -4px;
          left: 10%;
        }
        .btn:hover::before {
          left: 80%;
        }
        .btn::after {
          bottom: -4px;
          right: 10%;
        }
        .btn:hover::after {
          right: 80%;
        }
      }
    }
    .row:nth-child(2) {
      margin: 20px 0;
    }
  }
}
</style>
