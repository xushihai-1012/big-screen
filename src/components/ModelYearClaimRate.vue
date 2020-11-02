<template>
  <div class="wrapper">
    <div class="nav">
      <h4 title="年款索赔率">年款索赔率</h4>
      <div class="pick">
        <Select v-model="model" clearable placeholder="">
          <Option
            v-for="item in cityList"
            :value="item.value"
            :key="item.value"
            >{{ item.label }}</Option
          >
        </Select>
        <DatePicker
          type="daterange"
          confirm
          plit-panels
          placeholder=""
          placement="bottom-end"
        ></DatePicker>
      </div>
    </div>
    <div class="contentback">
      <div class="modelYearClaimRate chartbox"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ModelYearClaimRate',
  data () {
    return {
      mychart: null,
      model: '',
      cityList: [
        {
          value: '全部车型',
          label: '全部车型'
        }
      ]
    }
  },
  created () {},
  methods: {
    getEchart () {
      this.myChart = this.$echarts.init(
        document.querySelector('.modelYearClaimRate')
      )
      const option = {
        // title: {
        //   text: '年款索赔率',
        //   textStyle: {
        //     fontWeight: 'normal', // 主标题文字字体的粗细。
        //     fontSize: 14
        //   }
        // },
        tooltip: {
          trigger: 'axis'
        },
        color: ['#418b80', '#ef9f39'],
        legend: {
          data: [
            {
              //   icon: '',
              name: '年款目标值_总和',
              textStyle: {
                color: 'green',
                fontSize: 12
              }
            },
            {
              //   icon: '',
              name: '年款索赔率_总和',
              textStyle: {
                color: 'orange',
                fontSize: 12
              }
            }
          ],
          itemGap: 10, // 图例每项之间的间隔
          itemWidth: 10,
          itemHeight: 10,
          icon: 'roundRect' // 图例的图标
        },
        grid: {
          left: '1%',
          right: '1%',
          top: '15%',
          bottom: '1%',
          containLabel: true // 包含刻度文字在内
        },
        // toolbox: {
        //   feature: {
        //     saveAsImage: {}
        //   }
        // },
        xAxis: {
          type: 'category',
          boundaryGap: true, // 设置轴线留白
          data: ['1', '2', '3', '4', '5', '6', '7'],
          axisTick: {
            // 刻度线设置
            show: false
          },
          axisLabel: {
            // 刻度标签设置
            color: '#c5c7ca',
            margin: 15
          },
          axisLine: {
            // 轴线设置
            show: false
          },
          splitLine: {
            // 分割线设置
            show: false,
            lineStyle: {
              type: 'dashed',
              color: 'gray'
            }
          }
        },
        yAxis: {
          type: 'value',
          //   boundaryGap: false, // 设置轴线留白
          splitNumber: 3, // 分割线显示数量
          axisLine: {
            // 轴线设置
            show: false
          },
          axisTick: {
            // 刻度线设置
            show: false
          },
          axisLabel: {
            // 刻度标签设置
            color: '#c5c7ca',
            margin: 15
          },
          splitLine: {
            // 坐标轴分隔线的显示间隔
            interval: '1',
            // 分割线设置
            lineStyle: {
              type: 'dashed',
              color: 'gray'
            }
          }
        },
        series: [
          {
            name: '年款目标值_总和',
            symbol: 'none', // 标记的图形
            type: 'line', // 图标类型
            data: [0.02, 0.03, 0.028, 0.038, 0.02, 0.01, 0.048],
            smooth: true // 设置折线表现形式
          },
          {
            name: '年款索赔率_总和',
            type: 'line',
            symbol: 'none',
            data: [0.03, 0.04, 0.05, 0.055, 0.028, 0.038, 0.03],
            smooth: true // 设置折线表现形式
          }
        ]
      }

      this.myChart.setOption(option)
    }
  },
  mounted () {
    this.getEchart()
    window.addEventListener('resize', () => {
      if (this.myChart) {
        this.myChart.resize()
      }
    })
  }
}
</script>

<style lang='less' scoped>
  .contentback{
    .chartbox{
      background-color: #13212e;
    }
  }
</style>
