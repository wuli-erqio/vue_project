<template>
  <div class='container'>
    <div class="herder">
      <div class="title">XXXX经营分析</div>
      <div class="time"></div>
    </div>
    <el-row class="row1" :gutter="20">
      <el-col :span="6">
        <div class="chart column1">
          <div>出口成交额<span>(万元)</span></div>
          <div>$526,442</div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="chart column1">
          <div>合同生效金额<span>(万元)</span></div>
          <div>$241,794</div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="chart column1">
          <div>实际出口金额<span>(万元)</span></div>
          <div>$434,341</div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="chart column1">
          <div>出口收汇金额<span>(万元)</span></div>
          <div>$345,327</div>
        </div>
      </el-col>
    </el-row>
    <el-row class="row2" :gutter="20">
      <el-col :span="7">
        <div class="column1">
          <div class="title">集团营收结构业务分布</div>
          <table class="table">
            <thead>
              <tr>
                <th>类别</th>
                <th>进度</th>
                <th>占比</th>
                <th>同比</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>投资银行</td>
                <td><el-progress :percentage="23" :show-text="false"></el-progress></td>
                <td>23%</td>
                <td><i class="el-icon-caret-top"></i>上升</td>
              </tr>
              <tr>
                <td>机构客户服务</td>
                <td><el-progress :percentage="37" :show-text="false"></el-progress></td>
                <td>37%</td>
                <td><i class="el-icon-caret-top"></i>上升</td>
              </tr>
              <tr>
                <td>投资借贷</td>
                <td><el-progress :percentage="21" :show-text="false"></el-progress></td>
                <td>21%</td>
                <td><i class="el-icon-caret-bottom"></i>下降</td>
              </tr>
              <tr>
                <td>投资管理</td>
                <td><el-progress :percentage="19" :show-text="false"></el-progress></td>
                <td>19%</td>
                <td><i class="el-icon-caret-top"></i>上升</td>
              </tr>
              <tr>
                <td>其他</td>
                <td><el-progress :percentage="1" :show-text="false"></el-progress></td>
                <td>1%</td>
                <td><i class="el-icon-caret-bottom"></i>下降</td>
              </tr>
            </tbody>
          </table>
        </div>
      </el-col>
      <el-col :span="17">
        <div class="column2">
          <ul>
            <li>地区1部</li>
            <li>地区2部</li>
            <li>地区3部</li>
            <li>地区4部</li>
            <li>地区5部</li>
            <li>地区6部</li>
          </ul>
          <div class="chart1" ref="line2"></div>
          <div class="table">
            <div class="title">集团营收结构业务分布</div>
            <table>
              <thead>
                <tr>
                  <th>类别</th>
                  <th>进度</th>
                  <th>占比</th>
                  <th>同比</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>投资银行</td>
                  <td><el-progress :percentage="23" :show-text="false"></el-progress></td>
                  <td>23%</td>
                  <td><i class="el-icon-caret-top"></i>上升</td>
                </tr>
                <tr>
                  <td>机构客户服务</td>
                  <td><el-progress :percentage="37" :show-text="false"></el-progress></td>
                  <td>37%</td>
                  <td><i class="el-icon-caret-top"></i>上升</td>
                </tr>
                <tr>
                  <td>投资借贷</td>
                  <td><el-progress :percentage="21" :show-text="false"></el-progress></td>
                  <td>21%</td>
                  <td><i class="el-icon-caret-bottom"></i>下降</td>
                </tr>
                <tr>
                  <td>投资管理</td>
                  <td><el-progress :percentage="19" :show-text="false"></el-progress></td>
                  <td>19%</td>
                  <td><i class="el-icon-caret-top"></i>上升</td>
                </tr>
                <tr>
                  <td>其他</td>
                  <td><el-progress :percentage="1" :show-text="false"></el-progress></td>
                  <td>1%</td>
                  <td><i class="el-icon-caret-bottom"></i>下降</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row class="row3" :gutter="20">
      <el-col :span="12">
        <div class="column1">
          <div class="title">采购部业务进展</div>
          <div class="chart" ref="line1"></div>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="chart column1 ">
          <div class="title">XXX部门重点项目</div>
          <table class="table">
            <thead>
              <tr>
                <th>编号</th>
                <th>项目名称</th>
                <th>负责人</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>XXXX外资金融机构</td>
                <td>李晓明</td>
              </tr>
              <tr>
                <td>2</td>
                <td>XXXX外资金融机构</td>
                <td>王小虎</td>
              </tr>
              <tr>
                <td>3</td>
                <td>XXXX外资金融机构</td>
                <td>楚留香</td>
              </tr>
              <tr>
                <td>4</td>
                <td>XXXX外资金融机构</td>
                <td>南枯月离</td>
              </tr>
              <tr>
                <td>5</td>
                <td>XXXX外资金融机构</td>
                <td>小红</td>
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
    return {}
  },
  computed: {},
  watch: {},
  methods: {
    getLine1 () {
      const myChart = this.$echarts.init(this.$refs.line1)
      const option = {
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎'],
          left: 'auto',
          textStyle: {
            color: '#2E8CD4'
          }
        },
        grid: {
          left: '0%',
          right: '5%',
          bottom: '0%',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
          axisLabel: {
            color: '#2E8CD4'
          }
        },
        yAxis: {
          type: 'value',
          show: false
        },
        series: [
          {
            name: '邮件营销',
            type: 'line',
            data: [120, 132, 101, 134, 90, 230, 210, 120, 432, 101, 33, 90],
            smooth: true,
            showSymbol: false
          },
          {
            name: '联盟广告',
            type: 'line',
            data: [220, 182, 191, 234, 290, 330, 310, 120, 132, 101, 64, 90],
            smooth: true,
            showSymbol: false
          },
          {
            name: '视频广告',
            type: 'line',
            data: [150, 232, 201, 154, 190, 330, 410, 120, 132, 23, 134, 49],
            smooth: true,
            showSymbol: false
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
    getLine2 () {
      const myChart = this.$echarts.init(this.$refs.line2)
      const option = {
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎'],
          top: 'auto',
          textStyle: {
            color: '#2E8CD4'
          }
        },
        grid: {
          left: '0%',
          right: '5%',
          bottom: '0%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
            axisLabel: {
              color: '#2E8CD4'
            }
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
            name: '联盟广告',
            type: 'line',
            areaStyle: {},
            data: [220, 182, 191, 1200, 290, 330, 310],
            smooth: true,
            showSymbol: false,
            color: '#0945F3'
          },
          {
            name: '视频广告',
            type: 'line',
            areaStyle: {},
            data: [150, 232, 456, 154, 1100, 330, 209],
            smooth: true,
            showSymbol: false,
            color: '#1F73E3'
          },
          {
            name: '直接访问',
            type: 'line',
            areaStyle: {},
            data: [320, 332, 999, 334, 290, 330, 987],
            smooth: true,
            showSymbol: false,
            color: '#2D24B3'
          },
          {
            name: '搜索引擎',
            type: 'line',
            areaStyle: {},
            data: [820, 342, 901, 934, 1290, 378, 678],
            smooth: true,
            showSymbol: false,
            color: '#4123C3'
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
    this.getLine1()
    this.getLine2()
  }
}
</script>
<style lang='less' scoped>
.container {
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #060E4C;
  padding: 0 10px;
  box-sizing: border-box;
  color: #fff;
  .herder {
    height: 60px;
    display: flex;
    font-size: 24px;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #1F2D6E;
  }
  .row1 {
    margin: 20px;
    flex: 1;
    .el-col {
      height: 100%;
      .column1 {
        height: 100%;
        border-top: 1px solid #2a3680;
        background: #0a155e;
        padding: 20px;
        >div:nth-child(1) {
          font-size: 16px;
          span {
            font-size: 12px;
            margin-left: 7px;
          }
        }
        >div:nth-child(2) {
          margin-top: 10px;
          color: #4CA9EC;
          font-size: 24px;
        }
      }
    }
  }
  .row2 {
    margin-bottom: 20px;
    flex: 4;
    .el-col {
      height: 100%;
      .column1 {
        height: 100%;
        padding: 20px;
        border-top: 1px solid #2a3680;
        background: #0a155e;
        .title {
          letter-spacing: 2px;
          margin-bottom: 20px;
        }
        .table {
          width: 100%;
          border-spacing: 0px;
          color: #4CA9EC;
          th {
            width: 25%;
            line-height: 35px;
            background-color: #1a1c91;
          }
          td {
            line-height: 35px;
            text-align: center;
            font-size: 14px;
            .el-icon-caret-bottom {
              color: red;
            }
            .el-icon-caret-top {
              color: green
            }
          }
        }
      }
    }
    .column2 {
      height: 100%;
      padding: 20px;
      border-top: 1px solid #2a3680;
      background: #0a155e;
      display: flex;
      ul {
        flex: 1;
        list-style: none;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
      }
      .chart1 {
        flex: 9
      }
      .table {
        flex: 4;
        color: #4CA9EC;
        .title {
          color: #fff;
          letter-spacing: 2px;
          margin-bottom: 20px;
        }
        table {
          border-spacing: 0px;
          th {
            width: 30%;
            line-height: 35px;
            background-color: #1a1c91;
          }
          th:nth-child(4),
          th:nth-child(3),
          th:nth-child(2) {
            width: 20%;
          }
          td {
            line-height: 35px;
            text-align: center;
            font-size: 14px;
            .el-icon-caret-bottom {
              color: red;
            }
            .el-icon-caret-top {
              color: green
            }
          }
        }
      }
    }
  }
  .row3 {
    flex: 4;
    .el-col {
      height: 100%;
      padding-bottom: 20px;
      .column1 {
        height: 100%;
        padding: 20px;
        border-top: 1px solid #2a3680;
        background: #0a155e;
        .title {
          margin-bottom: 10px;
        }
        .table {
          width: 100%;
          border-spacing: 0px;
          color: #4CA9EC;
          th {
            width: 20%;
            text-align: left;
            padding-left: 10px;
            line-height: 35px;
            background-color: #1a1c91;
          }
          th:nth-child(2) {
            width: 40%;
          }
          td {
            line-height: 35px;
            padding-left: 10px;
            font-size: 14px;
          }
        }
      }
    }
  }
}
</style>
