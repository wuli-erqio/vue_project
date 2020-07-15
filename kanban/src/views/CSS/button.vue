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
        <div class="col">
          <span>流光按钮</span>
        </div>
        <div class="col"></div>
        <div class="col"></div>
      </div>
      <div class="row">
        <div class="col"></div>
        <div class="col"></div>
        <div class="col"></div>
        <div class="col"></div>
      </div>
      <div class="row">
        <div class="col"></div>
        <div class="col"></div>
        <div class="col"></div>
        <div class="col"></div>
      </div>
      <div class="row">
        <div class="col"></div>
        <div class="col"></div>
        <div class="col"></div>
        <div class="col"></div>
      </div>
      <div class="row">
        <div class="col"></div>
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
    .col {
      flex: 3;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .row {
      flex: 1;
      display: flex;
    }
    .row:nth-child(1) {
      .col:nth-child(1) {
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
      .col:nth-child(2) {
        span {
          position: relative;
          display: inline-block;
          font-style: 24px;
          background: linear-gradient(90deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4);
          background-size: 400%;
          width:200px;
          height: 55px;
          color: #fff;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 30px;
          cursor: pointer;
          z-index: 1;
        }
        span::before {
          content: "";
          position: absolute;
          top: -5px;
          right: -5px;
          left: -5px;
          bottom: -5px;
          background: linear-gradient(90deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4);
          background-size: 400%;
          border-radius: 30px;
          filter: blur(10px);
          z-index: -1;
        }
        span:hover,
        span:hover::before {
          animation: sun 6s infinite;
        }
        @keyframes sun {
          100% {
            background-position: -400% 0;
          }
        }
      }
    }
    .row:nth-child(2) {
      margin: 20px 0;
    }
  }
}
</style>
