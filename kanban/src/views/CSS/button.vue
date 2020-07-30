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
        <div class="col">
          <div>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            流光倒影
          </div>
        </div>
        <div class="col">
          <div class="btn" @click="btnClick" ref="btns">泛起涟漪</div>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <button class="firefly">
            <p>萤火虫动态按钮</p>
            <div class="lightning">
              <ul ref="lghs">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
          </button>
        </div>
        <div class="col">
          <button @click="toggleRow2Col2" :class="{'active': isActive, 'login': isLogin}" ref="active">
            <p>LOGIN</p>
            <ul :class="{'show': isShow}">
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </button>
        </div>
        <div class="col">
          <button><span>delete</span><span>X</span></button>
        </div>
        <div class="col">
          <button>抖动</button>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <ul>
            <li class="prev"><span></span></li>
            <li class="next"><span></span></li>
          </ul>
        </div>
        <div class="col">
          <button>上滑 <span></span></button>
        </div>
        <div class="col">
          <button>缩放按钮</button>
        </div>
        <div class="col">
          <button>阴影外扩</button>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <button>阴影外扩</button>
        </div>
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
    return {
      timer: null,
      isLogin: true,
      isActive: false,
      isShow: false
    }
  },
  computed: {},
  methods: {
    btnClick () {
      const btn = this.$refs.btns
      var that = this
      btn.addEventListener('click', function (e) {
        that.clearSpan()
        const x = e.clientX - e.target.offsetLeft
        const y = e.clientY - e.target.offsetTop

        const ripples = document.createElement('span')
        ripples.style.left = x + 'px'
        ripples.style.top = y + 'px'
        this.appendChild(ripples)

        this.timer = setTimeout(() => {
          ripples.remove()
        }, 1000)
      }, false)
    },
    clearSpan () {
      clearTimeout(this.timer)
    },
    firefly () {
      var lghs = this.$refs.lghs.children
      for (const k in lghs) {
        lghs[k].style.left = this.randomNum(-20, 90) + '%'
        lghs[k].style.bottom = this.randomNum(-30, 30) + '%'
        lghs[k].style.animationDuration = this.randomNum(1, 6) + 's'
      }
    },
    randomNum (max, min) {
      var num = Math.floor(Math.random() * (max - min + 1) + min)
      return num
    },
    toggleRow2Col2 () {
      this.isActive = !this.isActive
      this.isShow = !this.isShow
    }
  },
  created () {},
  mounted () {
    this.firefly()
    this.toggleRow2Col2()
  }
}
</script>
<style lang='less'>
button {
  outline: none;
  border: none;
}
@font-face {
  font-family: 'firefly';
  src: url('../../assets/font/悠哉字体.ttf');
}
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
      background: linear-gradient(left, #353b48, #1C1F50 ,#353b48);
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
          height: 55px;
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
          animation: sun 7s linear infinite;
        }
        @keyframes sun {
          100% {
            background-position: -400% 0;
          }
        }
      }
      .col:nth-child(3) {
        div {
          position: relative;
          padding: 25px 30px;
          color: #03a9f4;
          font-size: 24px;
          text-decoration: none;
          transition: .5s;
          overflow: hidden;
          letter-spacing: 4px;
          -webkit-box-reflect: below 1px linear-gradient(transparent, #0005);
          filter: hue-rotate(290deg);
        }
        div:hover {
          background: #03e9f4;
          color: #050801;
          box-shadow: 0 0 5px #03e9f4,
                      0 0 25px #03e9f4,
                      0 0 50px #03e9f4,
                      0 0 200px #03e9f4;
        }
        span {
            position: absolute;
            display: block;
          }
          span:nth-child(1) {
            top: 0;
            left: 0;
            width: 100%;
            height: 2px;
            background:linear-gradient(90deg, transparent,#03e9f4);
            animation: animation1 1s linear infinite;
          }
          @keyframes animation1 {
            0% {
              left:  -100%;
            }
            50%,100% {
              left: 100%;
            }
          }
          span:nth-child(2) {
            top: -100%;
            right: 0;
            width: 2px;
            height: 100%;
            background: linear-gradient(180deg, transparent,#03e9f4);
            animation: animation2 1s linear infinite;
            animation-delay: 0.25s;
          }
          @keyframes animation2 {
            0% {
              top:  -100%;
            }
            50%,100% {
              top: 100%;
            }
          }
          span:nth-child(3) {
            bottom: 0;
            right: -100%;
            width: 100%;
            height: 2px;
            background: linear-gradient(270deg, transparent,#03e9f4);
            animation: animation3 1s linear infinite;
            animation-delay: 0.5s;
          }
          @keyframes animation3 {
            0% {
              right:  -100%;
            }
            50%,100% {
              right: 100%;
            }
          }
          span:nth-child(4) {
            bottom: -100%;
            left: 0;
            width: 2px;
            height: 100%;
            background: linear-gradient(360deg, transparent,#03e9f4);
            animation: animation4 1s linear infinite;
            animation-delay: 0.75s;
          }
          @keyframes animation4 {
            0% {
              bottom:  -100%;
            }
            50%,100% {
              bottom: 100%;
            }
          }
      }
      .col:nth-child(4) {
        .btn {
          position: relative;
          width: 200px;
          height: 60px;
          border-radius: 30px;
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          font-size: 18px;
          background: linear-gradient(90deg,#6c5ce7, #e84393);
          overflow: hidden;
          cursor: pointer;
          span {
            display: block;
            position: absolute;
            background: rgba(255, 255, 255, .5);
            transform: translate(-50%, -50%);
            pointer-events: none;
            border-radius: 50%;
            opacity: .5;
            animation: animate 1s linear;
            z-index: 100;
          }
          @keyframes animate {
            0% {
              width: 0;
              height: 0;
              opacity: .5;
            }
            100% {
              width: 500px;
              height: 500px;
              opacity: 0;
            }
          }
        }
      }
    }
    .row:nth-child(2) {
      margin: 20px 0;
      .col:nth-child(1) {
        .firefly {
          width: 200px;
          height: 50px;
          position: relative;
          background: linear-gradient(to right, #6EB46E 10%, #55B455);
          border-radius: 40px;
          opacity: .88;
          cursor: pointer;
          transition: 1s;
          overflow: hidden;
          p {
            font-size: 22px;
            color: #F5DDBF;
            font-family: firefly;
            opacity: .88;
          }
          .lightning {
            width: 95%;
            height: 80%;
            position: absolute;
            top: 50%;
            right: 50%;
            transform: translate(50%, -50%);
            border-radius: 40px;
            transition: .8s;
            ul {
              opacity: 0;
              transition: .8s;
              li {
                width: 5px;
                height: 5px;
                background-color: #91FA91;
                position: absolute;
                bottom: 10%;
                border-radius: 50%;
                opacity: .6;
                animation: fireflymove infinite linear;
              }
            }
          }
        }
        .firefly:hover {
          box-shadow: 0 0 10px #B4FFB4;
          .lightning {
            box-shadow: 0 0 4px #B4FFB4 inset;
            ul {
              opacity: .8;
            }
          }
        }
        @keyframes fireflymove {
          100% {
            bottom: 100%
          }
        }
      }
      .col:nth-child(2) {
        .login {
          position: relative;
          border: none;
          outline: none;
          width: 200px;
          height: 60px;
          background-color: #000;
          color: #fff;
          font-size: 24px;
          font-weight: bold;
          transition: .5s;
          .show {
            display: flex;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            li {
              width: 4px;
              height: 4px;
              margin: 0 4px;
              border-radius: 50%;
              background: #fff;
            }
            li:nth-child(1) {
              animation: jump1 .75s linear infinite;
            }
            @keyframes jump1 {
              0% {
                transform: translateY(-50%);
              }
              50% {
                transform: translateY(10%);
              }
              100% {
                transform: translateY(-50%);
              }
            }
            li:nth-child(2) {
              animation: jump2 .75s linear infinite;
              animation-delay: .25s;
            }
            @keyframes jump2 {
              0% {
                transform: translateY(-50%);
              }
              50% {
                transform: translateY(10%);
              }
              100% {
                transform: translateY(-50%);
              }
            }
            li:nth-child(3) {
              animation: jump3 .75s linear infinite;
              animation-delay: .5s;
            }
            @keyframes jump3 {
              0% {
                transform: translateY(-50%);
              }
              50% {
                transform: translateY(10%);
              }
              100% {
                transform: translateY(-50%);
              }
            }
          }
        }
        .active {
          width: 60px;
          border-radius: 50%;
          color: transparent;
        }
      }
      .col:nth-child(3) {
        button {
          overflow: hidden;
          position: relative;
          width: 200px;
          height: 60px;
          color: #fff;
          font-size: 24px;
          background: #b10707;
          display: flex;
          align-items: center;
          justify-content: center;
          span:nth-child(1) {
            margin-right: 40px;
          }
          span:nth-child(2) {
            position: absolute;
            right: 0;
            top: 25%;
            width: 60px;
            height: 60px;
            display: inline-block;
            cursor: pointer;
            animation: 1s;
            &:hover {
              animation: swiper1 1s linear forwards;
              background: #b10707;
            }
          }
          span:nth-child(2)::after {
            content: "";
            width: 2px;
            height: 50px;
            position: absolute;
            top: -10px;
            left: 5px;
            background:linear-gradient(45deg, #b10707,#fff, #b10707);
          }
          @keyframes swiper1 {
            100% {
              width: 105%;
            }
          }
        }
      }
      .col:nth-child(4) {
        button {
          width: 200px;
          height: 50px;
          border: 3px solid #3498db;
          background: none;
          color: #fff;
          font-size: 20px;
          border-radius: 10px;
          &:hover {
            animation: row2col4 1s linear infinite;
          }
        }
        @keyframes row2col4 {
          0% {
            transform: scale(1.1)
          }
          25% {
            transform: scale(1.1) rotate(5deg)
          }
          50% {
            transform: scale(1.1) rotate(0deg)
          }
          75% {
            transform: scale(1.1) rotate(-5deg)
          }
          50% {
            transform: scale(1.1) rotate(0deg)
          }
        }
      }
    }
    .row:nth-child(3) {
      .col:nth-child(1) {
        ul {
          position: relative;
          display: flex;
          li {
            width: 80px;
            height: 80px;
            background-color: #000;
            margin: 0 10px;
            border-radius: 50%;
            cursor: pointer;
            transition: .5s;
            span {
              position: absolute;
              top: 50%;
              width: 20px;
              height: 20px;
              border: 4px solid #fff;
              transition: .5s;
            }
          }
          .next span {
            right: 20%;
            transform: translateY(-50%) rotate(-45deg);
            border-left: none;
            border-top: none;
            &::before{
              content: '';
              position: absolute;
              width: 38px;
              height: 4px;
              background: #fff;
              transform-origin: right;
              transform: rotate(45deg) translate(-4px, 25px) scaleX(0);
              transition: .5s;
            }
          }
          .next:hover span {
            right: 16%;
            &::before {
              transform: rotate(45deg) translate(-4px, 25px) scaleX(1);
            }
          }
          .prev span {
            left: 20%;
            transform: translateY(-50%) rotate(-45deg);
            border-right: none;
            border-bottom: none;
            &::before{
              content: '';
              position: absolute;
              width: 38px;
              height: 4px;
              background: #fff;
              transform-origin: left;
              transform: rotate(45deg) translate(-2px, -1px) scaleX(0);
              transition: .5s;
            }
          }
          .prev:hover span {
            left: 16%;
            &::before {
              transform: rotate(45deg) translate(-2px, -1px) scaleX(1);
            }
          }
          li:hover {
            background-color: #0070ff;
          }
        }
      }
      .col:nth-child(2) {
        button {
          position: relative;
          width: 200px;
          height: 55px;
          background: #03a9f4;
          border: 3px solid #03a9f4;
          color: #fff;
          font-size: 20px;
          font-weight: bold;
          cursor: pointer;
        }
        button:hover {
          color: transparent;
          background: inherit;
          transition: .8s;
        }
        button:hover span{
          position: absolute;
          background: rgba(2, 166, 242, .3);
          bottom: 0;
          left: 0;
          width: 100%;
          animation: swiperUp .5s forwards;
        }
        button:hover span::after {
          position: absolute;
          top: 50%;
          transform: translateY(-50%) rotate(45deg);
          content: "";
          width: 10px;
          height: 10px;
          border-top: 3px solid #03a9f4;
          border-right: 3px solid #03a9f4;
        }
        @keyframes swiperUp {
          0% {
            height: 0px;
          }
          100% {
            height: 100%;
          }
        }
      }
      .col:nth-child(3) {
        button {
          width: 200px;
          height: 55px;
          background-color: rgba(0, 209, 178, 1);
          border: 3px solid #00D1B2;
          color: #fff;
          font-size: 18px;
          font-weight: bold;
          border-radius: 10px;
          transition: .5s;
        }
        button:hover {
          background-color: rgba(0, 209, 178, .3);
          transition: .5s;
          animation: scale .5s ease forwards;
        }
        @keyframes scale {
          0% {
            transform: scale(.8, 1.1);
          }
          25% {
            transform: scale(1, 1);
          }
          75% {
            transform: scale(.9, 1);
          }
          100% {
            transform: scale(1, 1)
          }
        }
      }
      .col:nth-child(4) {
        button {
          position: relative;
          width: 200px;
          height: 55px;
          background-color: rgba(0, 209, 178, 1);
          border: 3px solid #00D1B2;
          color: #fff;
          font-size: 18px;
          font-weight: bold;
          transition: .5s;
          border-radius: 10px;
        }
        button:hover {
          background-color: rgba(0, 209, 178, .3);
          transition: .5s;
            &::before {
              content: "";
              position: absolute;
              top: -3px;
              left: -3px;
              width: 220px;
              border-radius: 10px;
              height: 74px;
              background: rgba(0, 209, 178, .8);
              animation: identifier 1s forwards;
          }
          @keyframes identifier {
            0% {
              width: 200px;
              height: 55px;
            }
            100% {
              width: 224px;
              height: 80px;
              top: -15px;
              left: -15px;
              opacity: 0;
            }
          }
        }
      }
    }
    .row:nth-child(4) {
      .col:nth-child(1) {
        button {
          position: relative;
          width: 200px;
          height: 55px;
          background-color: rgba(0, 209, 178, 1);
          color: #fff;
          font-size: 18px;
          font-weight: bold;
          transition: .5s;
          border-radius: 10px;
        }
          button:hover {
          background-color: rgba(0, 209, 178, 0);
          transition: .5s;
            &:before {
              content: "";
              position: absolute;
              top: 0px;
              left: 0px;
              width: 200px;
              border-radius: 10px;
              height: 55px;
              background: rgba(0, 209, 178, 0.5);
              animation: identifier 0.4s forwards;
          }
          &::after {
              content: "";
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              width: 150px;
              border-radius: 10px;
              height: 30px;
              border: 3px solid #00d1b2;
              animation: identifier1 .5s forwards;
          }
          @keyframes identifier {
            100% {
              width: 220px;
              height: 75px;
              top: -10px;
              left: -10px;
              opacity: 0;
            }
          }
          @keyframes identifier1 {
            100% {
              width: 200px;
              height: 55px;
            }
          }
        }
      }
    }
  }
}
</style>
