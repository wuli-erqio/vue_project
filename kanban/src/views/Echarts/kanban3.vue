<!--  -->
<template>
  <div class='container'>
    <div class="header"></div>
    <div class="main">
      <div class="column">
        <div class="data1">
          <div><i class="el-icon-s-operation"></i>坐席接入情况</div>
          <div>今日<span>1350</span>昨日<span>1351</span></div>
          <div>本月<span>1352</span>上月<span>1353</span></div>
        </div>
        <div class="data2">
          <div class="table">
            <div><i class="el-icon-s-operation"></i>本月渠道工单数</div>
            <ul class="ul1">
              <li>渠道</li>
              <li>工单数</li>
              <li>同比</li>
            </ul>
            <table class="ul2">
              <tr v-for="(item, index) in table1" :key="index">
                <td>{{item.qd}}</td>
                <td>{{item.gd}}</td>
                <td>{{item.tb}}</td>
              </tr>
            </table>
          </div>
          <div class="chart" ref="pie1">
          </div>
        </div>
      </div>
      <div class="column">
        <div class="data3">
          <div><span>1354</span>周一</div>
          <div><span>1357</span>周二</div>
          <div><span>1356</span>周三</div>
          <div><span>1357</span>周四</div>
          <div><span>1358</span>周五</div>
        </div>
        <div class="bar1">
          <div><i class="el-icon-s-operation"></i>本月渠道工单数</div>
          <div class="chart" ref="bar1"></div>
          <div class="border-bottom"></div>
        </div>
        <div class="bar-box">
          <div class="bar2">
            <div><i class="el-icon-s-operation"></i>承办单位统计</div>
            <div class="chart" ref="bar2"></div>
          </div>
          <div class="bar3">
            <div><i class="el-icon-s-operation"></i>话务情况统计</div>
            <div class="chart" ref="bar3"></div>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="pie2">
          <div><i class="el-icon-s-operation"></i>今日诉求类型</div>
          <div class="chart" ref="pie2"></div>
        </div>
        <div class="line1">
          <div><i class="el-icon-s-operation"></i>渠道工单趋势统计</div>
          <div class="chart" ref="line1"></div>
        </div>
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
      table1: [
        { qd: '人民网', gd: '1000', tb: '0.105' },
        { qd: '微信', gd: '1500', tb: '0.005' },
        { qd: '邮件', gd: '500', tb: '0.13' },
        { qd: '市长信箱', gd: '500', tb: '0.1' },
        { qd: '网络', gd: '85', tb: '0.09' }
      ],
      index: 0
    }
  },
  computed: {},
  watch: {},
  methods: {
    getPie1 () {
      const myChart = this.$echarts.init(this.$refs.pie1)
      const option = {
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
          bottom: 0,
          left: 'center',
          icon: 'circle',
          textStyle: {
            color: '#fff'
          },
          data: ['人民网', '微信', '邮件', '市长信箱', '网络']
        },
        series: [
          {
            type: 'pie',
            radius: '50%',
            center: ['50%', '40%'],
            selectedMode: 'single',
            data: [
              {
                value: 0.28,
                name: '人民网',
                label: {},
                itemStyle: {
                  color: '#167EE4'
                }
              },
              {
                value: 0.42,
                name: '微信',
                itemStyle: {
                  color: '#2AA858'
                }
              },
              {
                value: 0.14,
                name: '邮件',
                itemStyle: {
                  color: '#12A8B0'
                }
              },
              {
                value: 0.14,
                name: '市长信箱',
                itemStyle: {
                  color: '#D7B11C'
                }
              },
              {
                value: 0.09,
                name: '网络',
                itemStyle: {
                  color: '#F04864'
                }
              }
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      }

      // 绘制图表
      myChart.setOption(option)
      // 让图表跟随屏幕自适应
      window.addEventListener('resize', function () {
        myChart.resize()
      })
    },
    getBar1 () {
      const myChart = this.$echarts.init(this.$refs.bar1)
      const option = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        grid: {
          left: '2%',
          right: '1%',
          bottom: '3%',
          top: '3%',
          containLabel: true
        },
        xAxis: [{
          type: 'category',
          data: ['一区',
            '二区',
            '三区',
            '四区',
            '五区',
            '六区',
            '七区'
          ],
          axisLine: {
            show: true,
            lineStyle: {
              color: '#063374',
              width: 1,
              type: 'solid'
            }
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            show: true,
            textStyle: {
              color: '#00c7ff'
            }
          }
        }],
        yAxis: [{
          type: 'value',
          axisLabel: {
            formatter: '{value} %'
          },
          axisTick: {
            show: false
          },
          axisLine: {
            show: false,
            lineStyle: {
              color: '#00c7ff',
              width: 1,
              type: 'solid'
            }
          },
          splitLine: {
            lineStyle: {
              color: '#063374'
            }
          }
        }],
        series: [{
          name: '人民网',
          type: 'bar',
          data: [20, 50, 80, 58, 83, 68, 57, 80, 42, 66],
          barWidth: 7, // 柱子宽度
          barGap: 1, // 柱子之间间距
          itemStyle: {
            normal: {
              color: '#1689F4',
              opacity: 1
            }
          }
        }, {
          name: '微信',
          type: 'bar',
          data: [50, 70, 60, 61, 75, 87, 60, 62, 86, 46],
          barWidth: 7,
          barGap: 1,
          itemStyle: {
            normal: {
              color: '#29AA5A',
              opacity: 1
            }
          }
        }, {
          name: '邮件',
          type: 'bar',
          data: [70, 48, 73, 68, 53, 47, 50, 72, 96, 86],
          barWidth: 7,
          barGap: 1,
          itemStyle: {
            normal: {
              color: '#E1BB1B',
              opacity: 1
            }
          }
        }, {
          name: '市长信箱',
          type: 'bar',
          data: [50, 70, 60, 61, 75, 87, 60, 62, 86, 46],
          barWidth: 7,
          barGap: 1,
          itemStyle: {
            normal: {
              color: '#7A40D5',
              opacity: 1
            }
          }
        }, {
          name: '网络',
          type: 'bar',
          data: [50, 70, 60, 61, 75, 87, 60, 62, 86, 46],
          barWidth: 7,
          barGap: 1,
          itemStyle: {
            normal: {
              color: '#11B2B7',
              opacity: 1
            }
          }
        }]
      }

      // 绘制图表
      myChart.setOption(option)
      // 让图表跟随屏幕自适应
      window.addEventListener('resize', function () {
        myChart.resize()
      })
    },
    getBar2 () {
      const myChart = this.$echarts.init(this.$refs.bar2)
      const option = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        grid: {
          left: 100,
          top: '10px'
        },
        xAxis: {
          type: 'value',

          splitLine: {
            show: false
          },
          axisLabel: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          }

        },
        yAxis: {
          type: 'category',
          inverse: true,
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisPointer: {
            label: {
              show: true,
              margin: 30
            }
          },
          data: ['消费者维权', '劳动保障', '公安户政', '国土城管', '综合服务', '消费安全', '畜牧林业', '司法检查'],
          axisLabel: {
            margin: 80,
            fontSize: 12,
            align: 'left',
            color: '#fff',
            rich: {
              a1: {
                color: '#fff',
                backgroundColor: '#1890FF',
                width: 30,
                height: 30,
                align: 'center',
                borderRadius: 2
              },
              a2: {
                color: '#fff',
                backgroundColor: '#1890FF',
                width: 30,
                height: 30,
                align: 'center',
                borderRadius: 2
              },
              a3: {
                color: '#fff',
                backgroundColor: '#1890FF',
                width: 30,
                height: 30,
                align: 'center',
                borderRadius: 2
              },
              b: {
                color: '#fff',
                backgroundColor: '#1890FF',
                width: 30,
                height: 30,
                align: 'center',
                borderRadius: 2
              }
            }
          }
        },
        series: [{
          z: 2,
          name: 'value',
          type: 'bar',
          barWidth: 10,
          data: [3.66, 2.86, 1.82, 1.8, 1.53, 1.47, 1.3, 1.25, 1.1, 1.02, 1].map((item, i) => {
            return {
              value: item
            }
          }),
          label: {
            show: false
          },
          itemStyle: {
            normal: {
              color: '#1890FF',
              opacity: 0.8
            }
          }
        }]
      }
      // 绘制图表
      myChart.setOption(option)
      // 让图表跟随屏幕自适应
      window.addEventListener('resize', function () {
        myChart.resize()
      })
    },
    getBar3 () {
      const myChart = this.$echarts.init(this.$refs.bar3)
      const option = {
        grid: {
          left: 0,
          top: '10px',
          bottom: '20%'
        },
        xAxis: {
          type: 'category',
          axisLabel: {
            color: '#fff'
          },
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          },
          data: ['呼入话务量', '呼出话务量', '呼入接通两']
        },
        yAxis: {
          type: 'value',
          splitLine: {
            show: false // 不显示网格线
          }
        },
        series: [{
          data: [120, 200, 150, 80, 70, 110, 130],
          type: 'bar',
          barWidth: 30,
          itemStyle: {
            normal: {
              color: '#1890FF',
              opacity: 0.8
            }
          }
        }]
      }
      // 绘制图表
      myChart.setOption(option)
      // 让图表跟随屏幕自适应
      window.addEventListener('resize', function () {
        myChart.resize()
      })
    },
    getPie2 () {
      const myChart = this.$echarts.init(this.$refs.pie2)
      const option = {
        animation: true,
        title: {
          legend: {
            width: '70%',
            top: 'center',
            textStyle: {
              color: '#fff',
              fontSize: 16
            },
            icon: 'circle',
            right: '0',
            bottom: '0',
            padding: [30, 60],
            itemGap: 40,
            data: ['举报', '投诉', '建议', '咨询']
          },
          subtextStyle: {
            color: '#fff',
            fontSize: 12,
            fontWeight: 'normal',
            align: 'center'
          }
        },
        series: [{
          type: 'pie',
          center: ['50%', '50%'],
          radius: ['35%', '47%'],
          color: ['#FEE449', '#00FFFF', '#00FFA8', '#9F17FF', '#FFE400', '#F76F01', '#01A4F7', '#FE2C8A'],
          startAngle: 135,
          labelLine: {
            normal: {
              length: 25
            }
          },
          label: {
            normal: {
              formatter: '{b|{b}}\n{hr|}\n{per|{d}%} ',
              backgroundColor: 'rgba(255, 147, 38, 0)',
              borderColor: 'transparent',
              borderRadius: 4,
              rich: {
                a: {
                  color: '#999',
                  lineHeight: 22,
                  align: 'center'
                },
                hr: {
                  borderColor: '#aaa',
                  width: '80%',
                  borderWidth: 1,
                  height: 0
                },
                b: {
                  color: '#b3e5ff',
                  fontSize: 12,
                  lineHeight: 20
                },
                c: {
                  fontSize: 12,
                  color: '#eee'
                },
                per: {
                  color: '#FDF44E',
                  fontSize: 12,
                  padding: [3, 0],
                  borderRadius: 2
                }
              },
              textStyle: {
                color: '#fff',
                fontSize: 16
              }
            }
          },
          emphasis: {
            label: {
              show: true,
              formatter: '{b|{b}}\n{hr|}\n{per|{d}%}  ',
              backgroundColor: 'rgba(255, 147, 38, 0)',
              borderColor: 'transparent',
              borderRadius: 4,
              rich: {
                a: {
                  color: '#999',
                  lineHeight: 22,
                  align: 'center'
                },
                hr: {
                  borderColor: '#aaa',
                  width: '90%',
                  borderWidth: 1,
                  height: 0
                },
                b: {
                  color: '#fff',
                  fontSize: 12,
                  lineHeight: 22
                },
                c: {
                  fontSize: 12,
                  color: '#eee'
                },
                per: {
                  color: '#FDF44E',
                  fontSize: 14,
                  padding: [5, 6],
                  borderRadius: 2
                }
              }
            }
          },
          data: [{
            name: '举报',
            value: 0.1
          }, {
            name: '投诉',
            value: 0.12
          }, {
            name: '建议',
            value: 0.13
          }, {
            name: '咨询',
            value: 0.63
          }]
        }, {
          type: 'pie',
          center: ['50%', '50%'],
          radius: ['30%', '29%'],
          label: {
            show: false
          }
        }]
      }
      // 绘制图表
      myChart.setOption(option)
      // 让图表跟随屏幕自适应
      window.addEventListener('resize', function () {
        myChart.resize()
      })
    },
    getLine1 () {
      const myChart = this.$echarts.init(this.$refs.line1)
      const option = {
        color: ['#167BE1', '#30C35B', '#FFED0B', '#26377A', '#9549F4', '#14D2CD'],
        legend: {
          orient: 'horizontal',
          bottom: '0',
          padding: [10, 20],
          itemGap: 30,
          textStyle: {
            color: '#fff'
          },
          data: ['短信', '网络', '座机', '电话', '邮箱', '微信']
        },
        tooltip: {
          show: true
        },
        grid: {
          left: '2%',
          right: '3%',
          top: '2%',
          bottom: '20%',
          containLabel: true
        },
        xAxis: {
          axisTick: { show: false },
          axisLabel: {
            textStyle: { color: '#fff', fontSize: 12 }
          },
          axisLine: {
            lineStyle: { color: '#707070' }
          },
          data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
        },
        yAxis: {
          name: '',
          nameTextStyle: {
            color: '#707070',
            fontSize: 12
          },
          axisLabel: {
            textStyle: {
              color: '#fff',
              fontSize: 12
            },
            showMaxLabel: false
          },
          axisLine: {
            symbol: ['none', 'arrow'],
            symbolOffset: [0, 4],
            lineStyle: { color: '#707070' }
          },
          splitLine: { show: false },
          boundaryGap: [0, 0.1]
        },
        series: [
          {
            name: '微信',
            type: 'line',
            symbolSize: 5,
            symbol: 'circle',
            data: [70, 81, 70, 65, 70, 64, 70, 80, 90, 65, 59, 73]
          },
          {
            name: '邮箱',
            type: 'line',
            symbolSize: 5,
            symbol: 'circle',
            data: [60, 65, 58, 57, 69, 55, 53, 65, 64, 63, 62, 61]
          },
          {
            name: '电话',
            type: 'line',
            symbolSize: 5,
            symbol: 'circle',
            data: [52, 43, 57, 39, 50, 47, 49, 50, 48, 49, 47, 54]
          },
          {
            name: '座机',
            type: 'line',
            symbolSize: 5,
            symbol: 'circle',
            data: [40, 41, 42, 35, 37, 38, 39, 40, 44, 45, 40, 38]
          },
          {
            name: '网络',
            type: 'line',
            symbolSize: 5,
            symbol: 'circle',
            data: [28, 23, 33, 39, 30, 35, 33, 32, 35, 36, 34, 32]
          },
          {
            name: '短信',
            type: 'line',
            symbolSize: 5,
            symbol: 'circle',
            data: [20, 28, 22, 23, 24, 24, 26, 23, 18, 20, 17, 16]
          }
        ]
      }

      // 绘制图表
      myChart.setOption(option)
      // 让图表跟随屏幕自适应
      window.addEventListener('resize', function () {
        myChart.resize()
      })
    }
  },
  created () {},
  mounted () {
    this.getPie1()
    this.getBar1()
    this.getBar2()
    this.getBar3()
    this.getPie2()
    this.getLine1()
  }
}
</script>
<style lang='less' scoped>
.container {
  height: 100%;
  background-image: url(../../assets/img/bg1.png);
  background-size: cover;
  display: flex;
  padding-bottom: 20px;
  flex-direction: column;
  .header {
    margin-bottom: 80px;
  }
  .main {
    padding: 10px;
    flex: 1;
    display: flex;
    .column:nth-child(1) {
      flex: 2;
      display: flex;
      flex-direction: column;
      .data1 {
        border: 1px solid #073C6D;
        border-radius: 4px;
        padding: 10px;
        color: #fff;
        i {
          color: #073C6D;
          margin: 0 6px 10px 0;
        }
        div:nth-child(2),
        div:nth-child(3) {
          text-align: center;
          span {
            display: inline-block;
            margin: 10px 35px;
            color: #3586FF;
          }
        }
        div:nth-child(2) {
          span:nth-child(1) {
            color: #FFE300;
          }
          span:nth-child(2) {
            color: #02EA82;
          }
        }
      }
      .data2 {
        flex: 1;
        border: 1px solid #073C6D;
        border-radius: 4px;
        padding: 10px 0;
        color: #fff;
        margin-top: 10px;
        display: flex;
        flex-direction: column;
        i {
          color: #073C6D;
          margin: 0 6px 10px 10px;
        }
        .ul1 {
          display: flex;
          justify-content: space-evenly;
          color: #7AA7FF;
          border-bottom: 1px solid #073C6D;
        }
        .ul2 {
          width: 100%;
          line-height: 40px;
          text-align: center;
          tr td:nth-child(1) {
            width: 36%;
          }
          tr td:nth-child(2) {
            width: 25%;
          }
        }
        .table {
          border-bottom: 1px solid #073C6D;
        }
        .chart {
          height: 100%;
        }
      }
    }
    .column:nth-child(2) {
      flex: 4;
      display: flex;
      flex-direction: column;
      margin: 0 10px;
      .data3 {
        height: 70px;
        border: 1px solid #6E89A4;
        color: #fff;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        font-size: 14px;
        div {
          display: flex;
          flex-direction: column;
          align-items: center;
          span {
            font-size: 16px;
            margin-bottom: 5px;
          }
        }
        div:nth-child(1) span {
          color: #DD494D;
        }
        div:nth-child(2) span {
          color: #F6934E;
        }
        div:nth-child(3) span {
          color: #E5CD07;
        }
        div:nth-child(4) span {
          color: #03C678;
        }
        div:nth-child(5) span {
          color: #2F76F5;
        }
      }
      .bar1 {
        flex: 3;
        position: relative;
        background-color: #00265f;
        margin: 10px 0;
        padding: 10px 0;
        color: #fff;
        font-size: 14px;
        display: flex;
        flex-direction: column;
        i {
          color: #073C6D;
          margin: 0 6px 10px 10px;
        }
      }
      .bar1::after {
        display: block;
        position: absolute;
        content: '';
        width: 10px;
        height: 10px;
        top: 0;
        left: 0;
        border-top: 3px solid #02CED8;
        border-left: 3px solid #02CED8;
      }
      .bar1::before {
        content: "";
        display: block;
        position: absolute;
        width: 10px;
        height: 10px;
        border-top: 2px solid #24e0fc;
        border-right: 2px solid #24e0fc;
        top: 0;
        right: 0;
        z-index: 1;
      }
      .border-bottom {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
      }
      .border-bottom::after {
        content: "";
        display: block;
        position: absolute;
        width: 10px;
        height: 10px;
        border-bottom: 2px solid #24e0fc;
        border-left: 2px solid #24e0fc;
        bottom: 0;
        left: 0;
      }
      .border-bottom::before {
        content: "";
        display: block;
        position: absolute;
        width: 10px;
        height: 10px;
        border-bottom: 2px solid #24e0fc;
        border-right: 2px solid #24e0fc;
        bottom: 0;
        right: 0;
      }
      .bar-box {
        flex: 2;
        display: flex;
        color: #fff;
        .bar2 {
          flex: 1;
          border: 1px solid #03588A;
          display: flex;
          flex-direction: column;
          i {
            color: #073C6D;
            margin: 10px 6px 10px 10px;
          }
        }
        .bar3 {
          flex: 1;
          border: 1px solid #03588A;
          margin-left: 10px;
          display: flex;
          flex-direction: column;
          i {
            color: #073C6D;
            margin: 10px 6px 10px 10px;
          }
        }
      }
    }
    .column:nth-child(3) {
      flex: 2;
      color: #fff;
      display: flex;
      flex-direction: column;
      .pie2 {
        flex: 1;
        border: 1px solid #03588A;
        display: flex;
        flex-direction: column;
        margin-bottom: 10px;
        i {
          color: #073C6D;
          margin: 10px 6px 10px 10px;
        }
      }
      .line1 {
        flex: 1;
        border: 1px solid #03588A;
        display: flex;
        flex-direction: column;
        i {
          color: #073C6D;
          margin: 10px 6px 10px 10px;
        }
      }
    }
  }
}
</style>
