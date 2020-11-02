<template>
  <div class="wrapper">
    <div class="nav">
      <h4 title="合格率">合格率</h4>
      <div class="pick">
        <Select v-model="model" clearable placeholder="">
          <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
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
    <div class="passrate chartbox"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PassRate',
  data () {
    return {
      mychart: null,
      model: '',
      cityList: [
        {
          value: 'New York',
          label: 'New York'
        },
        {
          value: 'London',
          label: 'London'
        },
        {
          value: 'Sydney',
          label: 'Sydney'
        },
        {
          value: 'Ottawa',
          label: 'Ottawa'
        },
        {
          value: 'Paris',
          label: 'Paris'
        },
        {
          value: 'Canberra',
          label: 'Canberra'
        }
      ]
    }
  },
  created () {},
  mounted () {
    this.getEchart()
    window.addEventListener('resize', () => {
      if (this.myChart) {
        this.myChart.resize()
      }
    })
  },
  methods: {
    getEchart () {
      this.myChart = this.$echarts.init(document.querySelector('.passrate'))
      const option = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          left: '1%',
          right: '1%',
          top: '15%',
          bottom: '1%',
          containLabel: true // 包含刻度文字在内
        },
        legend: {
          data: [{
            icon: '',
            name: '目标',
            textStyle: {
              color: 'white',
              fontSize: 12
            }
          },
          {
            icon: '',
            name: '实绩',
            textStyle: {
              color: 'white',
              fontSize: 12
            }
          }],
          itemGap: 10, // 图例每项之间的间隔
          itemWidth: 10,
          itemHeight: 10,
          icon: 'roundRect' // 图例的图标
        },
        xAxis: [
          {
            type: 'category',
            data: [
              '1月',
              '2月',
              '3月',
              '4月',
              '5月',
              '6月',
              '7月',
              '8月',
              '9月'
            ],
            axisTick: {
              alignWithLabel: true,
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
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            axisTick: {
              show: false
            },
            axisLine: {
              // 轴线设置
              show: false
            },
            axisLabel: {
              // 刻度标签设置
              color: '#c5c7ca',
              margin: 15
            },
            splitLine: {
              // 分割线设置
              show: true,
              lineStyle: {
                type: 'dashed',
                color: 'gray'
              }
            }
          }
        ],
        series: [
          {
            name: '目标',
            type: 'pictorialBar',
            data: [0.2, 0.15, 0.14, 0.13, 0.128, 0.134, 0.135, 0.145, 0.14],
            symbolRepeat: 'fixed',
            symbolClip: true,
            symbolMargin: 2,
            symbol: 'rect',
            symbolSize: [10, 5],
            itemStyle: {
              color: '#90896a'
            }
          },
          {
            name: '实绩',
            type: 'pictorialBar',
            data: [0.15, 0.145, 0.134, 0.128, 0.12, 0.13, 0.129, 0.14, 0.134],
            symbolRepeat: 'false',
            symbolClip: true,
            symbolMargin: 0,
            symbol: 'rect',
            symbolSize: [10, 5],
            itemStyle: {
              color: '#d5943f',
              opacity: 0.7
            }
          }
        ]
      }

      this.myChart.setOption(option)
    }
  }
}
</script>

<style lang="less" scoped>
</style>
