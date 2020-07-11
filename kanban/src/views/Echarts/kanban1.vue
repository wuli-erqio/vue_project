<!--  -->
<template>
  <div class="container">
    <el-row :gutter="20">
      <el-col :span="12" class="row-l">
        <div shadow="always" class="row-l-t">
          <div><img src="../../assets/img/1.jpg" alt="" /></div>
          <div><img src="../../assets/img/2.jpg" alt="" /></div>
          <div><img src="../../assets/img/3.jpg" alt="" /></div>
          <div><img src="../../assets/img/4.jpg" alt="" /></div>
          <div><img src="../../assets/img/5.jpg" alt="" /></div>
          <div><img src="../../assets/img/7.jpg" alt="" /></div>
        </div>
        <div shadow="always" class="row-l-b">
          <div class="chart" ref="chart1"></div>
        </div>
      </el-col>
      <el-col :span="12" class="row-r">
        <div shadow="always" class="row-r-t">
          <div class="chart" ref="pie1"></div>
        </div>
        <div shadow="always" class="row-r-c">
          <div class="chart" ref="Line1"></div>
          <div class="text-box">
            <div>一次烧组烧制</div>
            <div>二次烧组烧制</div>
            <div>烘膜</div>
            <div>浇注</div>
            <div>成品检验</div>
          </div>
        </div>
        <div shadow="always" class="row-r-b">
          <table border>
            <thead>
              <tr>
                <th>工序\时间</th>
                <th>8:00</th>
                <th>9:00</th>
                <th>10:00</th>
                <th>11:00</th>
                <th>12:00</th>
                <th>13:00</th>
                <th>14:00</th>
                <th>15:00</th>
                <th>16:00</th>
                <th>17:00</th>
                <th>其他</th>
                <th>合计</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>二次组烧制</td>
                <td>8</td>
                <td>13</td>
                <td>14</td>
                <td>13</td>
                <td>5</td>
                <td>15</td>
                <td>10</td>
                <td>10</td>
                <td>8</td>
                <td>9</td>
                <td>0</td>
                <td>103</td>
              </tr>
              <tr>
                <td>一次组烧制</td>
                <td>9</td>
                <td>15</td>
                <td>20</td>
                <td>18</td>
                <td>12</td>
                <td>13</td>
                <td>15</td>
                <td>10</td>
                <td>18</td>
                <td>17</td>
                <td>20</td>
                <td>169</td>
              </tr>
              <tr>
                <td>烘膜</td>
                <td>10</td>
                <td>10</td>
                <td>10</td>
                <td>10</td>
                <td>3</td>
                <td>10</td>
                <td>10</td>
                <td>10</td>
                <td>10</td>
                <td>10</td>
                <td>0</td>
                <td>93</td>
              </tr>
              <tr>
                <td>浇注</td>
                <td>5</td>
                <td>10</td>
                <td>10</td>
                <td>10</td>
                <td>3</td>
                <td>10</td>
                <td>10</td>
                <td>5</td>
                <td>10</td>
                <td>15</td>
                <td>0</td>
                <td>73</td>
              </tr>
              <tr>
                <td>成品检验</td>
                <td>12</td>
                <td>10</td>
                <td>5</td>
                <td>7</td>
                <td>3</td>
                <td>10</td>
                <td>9</td>
                <td>5</td>
                <td>10</td>
                <td>16</td>
                <td>0</td>
                <td>87</td>
              </tr>
            </tbody>
          </table>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  props: {},
  data () {
    return {
      color1: ['#4B6BCC', '#8E2EE9', '#46AFE3', '#C56269', '#02A185']
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {
    this.getBar1()
    this.getPie1()
    this.getLine1()
  },
  methods: {
    getBar1 () {
      const myChart = this.$echarts.init(this.$refs.chart1)
      // 绘制图表
      myChart.setOption({
        tooltip: {
          trigger: 'axis'
        },
        grid: {
          top: '0',
          left: '10px',
          bottom: '0',
          right: '20px',
          containLabel: true
        },
        xAxis: {
          name: '',
          axisTick: false,
          splitLine: {
            show: false
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: '#4D83E9'
            }
          }
        },
        yAxis: {
          type: 'category',
          axisTick: false,
          axisLabel: {
            show: false
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: '#4D83E9'
            }
          }
        },
        series: [
          {
            type: 'bar',
            barMaxWidth: '45%',
            label: {
              show: true,
              position: 'right',
              color: '#ccc'
            },
            data: [
              { name: '', value: 30 },
              { name: '', value: 75 },
              { name: '', value: 50 },
              { name: '', value: 70 },
              { name: '', value: 80 }
            ],
            itemStyle: {
              color: params => {
                // return this.color1[params.dataIndex]
                return new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: this.color1[params.dataIndex]
                  },
                  {
                    offset: 1,
                    color: '#fff'
                  }
                ])
              }
            }
          }
        ]
      })
      // 让图表跟随屏幕自适应
      window.addEventListener('resize', function () {
        myChart.resize()
      })
    },
    getPie1 () {
      const myChart = this.$echarts.init(this.$refs.pie1)
      var placeHolderStyle = {
        normal: {
          label: {
            show: false
          },
          labelLine: {
            show: false
          },
          color: 'rgba(0,0,0,0)',
          borderWidth: 0
        },
        emphasis: {
          color: 'rgba(0,0,0,0)',
          borderWidth: 0
        }
      }
      var dataStyle = {
        normal: {
          formatter: '{c}%',
          position: 'center',
          show: true,
          textStyle: {
            fontSize: '26',
            fontWeight: 'normal',
            color: '#fff'
          },
          tooltip: {
            textStylr: {
              lineHeight: 100
            }
          }
        }
      }

      const option = {
        title: [
          {
            text: '一次烧组烧制',
            left: '9%',
            top: '70%',
            textAlign: 'center',
            textStyle: {
              fontWeight: 'normal',
              fontSize: '20',
              color: '#fff',
              textAlign: 'center'
            }
          },
          {
            text: '二次烧组烧制',
            left: '29%',
            top: '70%',
            textAlign: 'center',
            textStyle: {
              color: '#fff',
              fontWeight: 'normal',
              fontSize: '20',
              textAlign: 'center'
            }
          },
          {
            text: '烘膜',
            left: '49%',
            top: '70%',
            textAlign: 'center',
            textStyle: {
              color: '#fff',
              fontWeight: 'normal',
              fontSize: '20',
              textAlign: 'center'
            }
          },
          {
            text: '浇注',
            left: '69%',
            top: '70%',
            textAlign: 'center',
            textStyle: {
              color: '#fff',
              fontWeight: 'normal',
              fontSize: '20',
              textAlign: 'center'
            }
          },
          {
            text: '成品检验',
            left: '89%',
            top: '70%',
            textAlign: 'center',
            textStyle: {
              color: '#fff',
              fontWeight: 'normal',
              fontSize: '20',
              textAlign: 'center'
            }
          }
        ],

        // 第一个图表
        series: [
          {
            type: 'pie',
            hoverAnimation: false, // 鼠标经过的特效
            radius: ['35%', '45%'],
            center: ['10%', '50%'],
            startAngle: 225,
            labelLine: {
              normal: {
                show: false
              }
            },
            label: {
              normal: {
                position: 'center'
              }
            },
            data: [
              {
                value: 100,
                itemStyle: {
                  normal: {
                    color: '#E1E8EE',
                    borderWidth: 3
                  }
                }
              },
              {
                value: 35,
                itemStyle: placeHolderStyle
              }
            ]
          },
          // 上层环形配置
          {
            type: 'pie',
            hoverAnimation: false, // 鼠标经过的特效
            radius: ['35%', '45%'],
            center: ['10%', '50%'],
            startAngle: 225,
            labelLine: {
              normal: {
                show: false
              }
            },
            label: {
              normal: {
                position: 'center'
              }
            },
            data: [
              {
                value: 80,
                itemStyle: {
                  normal: {
                    color: '#01AD87'
                  }
                },
                label: dataStyle
              },
              {
                value: 35,
                itemStyle: placeHolderStyle
              }
            ]
          },

          // 第二个图表
          {
            type: 'pie',
            hoverAnimation: false,
            radius: ['35%', '45%'],
            center: ['30%', '50%'],
            startAngle: 225,
            labelLine: {
              normal: {
                show: false
              }
            },
            label: {
              normal: {
                position: 'center'
              }
            },
            data: [
              {
                value: 100,
                itemStyle: {
                  normal: {
                    color: '#E1E8EE'
                  }
                }
              },
              {
                value: 35,
                itemStyle: placeHolderStyle
              }
            ]
          },

          // 上层环形配置
          {
            type: 'pie',
            hoverAnimation: false,
            radius: ['35%', '45%'],
            center: ['30%', '50%'],
            startAngle: 225,
            labelLine: {
              normal: {
                show: false
              }
            },
            label: {
              normal: {
                position: 'center'
              }
            },
            data: [
              {
                value: 70,
                itemStyle: {
                  normal: {
                    color: '#E5A3A3'
                  }
                },
                label: dataStyle
              },
              {
                value: 55,
                itemStyle: placeHolderStyle
              }
            ]
          },
          // 第三个图表
          {
            type: 'pie',
            hoverAnimation: false,
            radius: ['35%', '45%'],
            center: ['50%', '50%'],
            startAngle: 225,
            labelLine: {
              normal: {
                show: false
              }
            },
            label: {
              normal: {
                position: 'center'
              }
            },
            data: [
              {
                value: 100,
                itemStyle: {
                  normal: {
                    color: '#E1E8EE'
                  }
                }
              },
              {
                value: 35,
                itemStyle: placeHolderStyle
              }
            ]
          },

          // 上层环形配置
          {
            type: 'pie',
            hoverAnimation: false,
            radius: ['35%', '45%'],
            center: ['50%', '50%'],
            startAngle: 225,
            labelLine: {
              normal: {
                show: false
              }
            },
            label: {
              normal: {
                position: 'center'
              }
            },
            data: [
              {
                value: 50,
                itemStyle: {
                  normal: {
                    color: '#46B8EC'
                  }
                },
                label: dataStyle
              },
              {
                value: 55,
                itemStyle: placeHolderStyle
              }
            ]
          },
          // 第四个图表
          {
            type: 'pie',
            hoverAnimation: false,
            radius: ['35%', '45%'],
            center: ['70%', '50%'],
            startAngle: 225,
            labelLine: {
              normal: {
                show: false
              }
            },
            label: {
              normal: {
                position: 'center'
              }
            },
            data: [
              {
                value: 100,
                itemStyle: {
                  normal: {
                    color: '#E1E8EE'
                  }
                }
              },
              {
                value: 35,
                itemStyle: placeHolderStyle
              }
            ]
          },

          // 上层环形配置
          {
            type: 'pie',
            hoverAnimation: false,
            radius: ['35%', '45%'],
            center: ['70%', '50%'],
            startAngle: 225,
            labelLine: {
              normal: {
                show: false
              }
            },
            label: {
              normal: {
                position: 'center'
              }
            },
            data: [
              {
                value: 75,
                itemStyle: {
                  normal: {
                    color: '#7B2ED7'
                  }
                },
                label: dataStyle
              },
              {
                value: 55,
                itemStyle: placeHolderStyle
              }
            ]
          },
          // 第五个图表
          {
            type: 'pie',
            hoverAnimation: false,
            radius: ['35%', '45%'],
            center: ['90%', '50%'],
            startAngle: 225,
            labelLine: {
              normal: {
                show: false
              }
            },
            label: {
              normal: {
                position: 'center'
              }
            },
            data: [
              {
                value: 100,
                itemStyle: {
                  normal: {
                    color: '#E1E8EE'
                  }
                }
              },
              {
                value: 35,
                itemStyle: placeHolderStyle
              }
            ]
          },

          // 上层环形配置
          {
            type: 'pie',
            hoverAnimation: false,
            radius: ['35%', '45%'],
            center: ['90%', '50%'],
            startAngle: 225,
            labelLine: {
              normal: {
                show: false
              }
            },
            label: {
              normal: {
                position: 'center'
              }
            },
            data: [
              {
                value: 50,
                itemStyle: {
                  normal: {
                    color: '#5E7AE0'
                  }
                },
                label: dataStyle
              },
              {
                value: 55,
                itemStyle: placeHolderStyle
              }
            ]
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
    getLine1 () {
      const myChart = this.$echarts.init(this.$refs.Line1)
      const option = {
        grid: {
          left: '-5%',
          right: '20%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            show: false,
            boundaryGap: false,
            data: ['一次烧组烧制', '二次烧组烧制', '烘膜', '浇注', '成品检验']
          }
        ],
        yAxis: [
          {
            type: 'value',
            show: false
          }
        ],
        series: [
          {
            name: '直接访问',
            type: 'line',
            symbol: 'none',
            lineStyle: {
              width: 0
            },
            areaStyle: {
              normal: {
                color: new this.$echarts.graphic.LinearGradient(
                  0,
                  0,
                  1,
                  0,
                  [
                    {
                      offset: 0,
                      color: 'rgba(99,174,248, .8)' // 渐变色的起始颜色
                    },
                    {
                      offset: 0.8,
                      color: 'rgba(163,125,249, .8)' // 渐变线的结束颜色
                    }
                  ],
                  false
                )
              }
            },
            smooth: true,
            data: [320, 700, 900, 370, 999],
            label: false
          },
          {
            name: '搜索引擎',
            type: 'line',
            label: false,
            smooth: true,
            symbol: 'none',
            lineStyle: {
              width: 0
            },
            areaStyle: {
              normal: {
                color: new this.$echarts.graphic.LinearGradient(
                  0,
                  0,
                  1,
                  0,
                  [
                    {
                      offset: 0,
                      color: '#61ADF8' // 渐变色的起始颜色
                    },
                    {
                      offset: 0.8,
                      color: 'rgba(163,125,249, .8)' // 渐变线的结束颜色
                    }
                  ],
                  false
                )
              }
            },
            data: [820, 1200, 700, 700, 600]
          }
        ]
      }
      myChart.setOption(option)
      // 让图表跟随屏幕自适应
      window.addEventListener('resize', function () {
        myChart.resize()
      })
    }
  }
}
</script>
<style lang="less" scoped>
.container {
  color: #fff;
  background-color: #233e70;
  height: 100%;
  padding: 20px;
  .row-l {
    display: flex;
    flex-direction: column;
    .row-l-t {
      flex: 7;
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      box-sizing: border-box;
      background-color: #042963;
      box-shadow: 1px 1px 15px #042963;
      transform-style: preserve-3d;
      div {
        height: 100px;
        width: 13%;
        transition: 1s;
        cursor: pointer;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
    .row-l-t:hover div {
      filter: blur(15px);
      transform: scale(.6);
    }
    .row-l-t:hover div:hover {
      filter: none;
      transform: scale(1.3);
    }
  }
  .row-l-b {
    flex: 3;
    margin-top: 20px;
    padding: 20px;
    box-sizing: border-box;
    background-color: #042963;
    box-shadow: 1px 1px 15px #042963;
  }
}
.row-r {
  display: flex;
  flex-direction: column;
  .row-r-t {
    flex: 3;
    background-color: #042963;
    box-shadow: 1px 1px 15px #042963;
  }
  .row-r-c {
    position: relative;
    flex: 3;
    margin-top: 20px;
    background-color: #042963;
    box-shadow: 1px 1px 15px #042963;
    .text-box {
      position: absolute;
      top: 50%;
      right: 28px;
      transform: translateY(-50%);
      & div {
        margin: 10px 0;
      }
    }
  }
  .row-r-b {
    flex: 3;
    margin-top: 20px;
    background-color: #042963;
    box-shadow: 1px 1px 15px #042963;
    padding: 10px 5px;
    table {
      height: 100%;
      width: 100%;
      position: relative;
      border-spacing: 1px;
      border-collapse: collapse;
      border-color: rgba(206, 223, 250, 0.3);
      tr {
        text-align: center;
        th {
          line-height: 40px;
        }
      }
    }
  }
}
.el-row {
  height: 100%;
  .row-l {
    height: 100%;
  }
  .row-r {
    height: 100%;
  }
}
</style>
