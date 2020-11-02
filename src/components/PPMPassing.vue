<template>
  <div class="wrapper">
    <div class="nav">
      <h4 title="量产车型零件PPM推移">量产车型零件PPM推移</h4>
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
    <div  class="contentback">
          <div class="ppmpassing chartbox"></div>
    </div>
  </div>
</template>

<script>

// const legendIcon = 'image://' + import('@/assets/images/Snipaste_2020-09-29_17-51-16.png')
// const symbol1 = 'image://' + import('@/assets/images/Snipaste_2020-09-29_17-43-05.png')

export default {
  name: 'PPMPassing',
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
      const icon = 'image://' + require('../assets/images/Snipaste_2020-09-29_17-51-16.png')
      const symbol = 'image://' + require('../assets/images/Snipaste_2020-09-29_17-43-05.png')
      this.myChart = this.$echarts.init(document.querySelector('.ppmpassing'))
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
            icon,
            name: '年款目标值',
            textStyle: {
              color: 'white',
              fontSize: 12
            }
          },
          {
            icon: '',
            name: '年款索赔率',
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
              '2019 09',
              '10',
              '11',
              '12',
              '2020 01',
              '02',
              '03',
              '04',
              '05',
              '06',
              '07',
              '08'
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
            splitNumber: 3,
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
            name: '年款目标值',
            type: 'pictorialBar',
            barWidth: 10,
            symbol,
            data: [0.06, 0.05, 0.04, 0.03, 0.028, 0.034, 0.035, 0.045, 0.04, 0.02, 0.024, 0.02],
            itemStyle: {
              color: '#245562'
            }
          },
          {
            name: '年款索赔率',
            type: 'pictorialBar',
            barWidth: 10,
            symbol: 'rect',
            data: [0.05, 0.045, 0.034, 0.028, 0.02, 0.03, 0.029, 0.04, 0.034, 0.013, 0.002, 0.017],
            itemStyle: {
              color: '#245562'
            },
            barGap: '10%'
          }
        ]
      }

      this.myChart.setOption(option)
    }
  }
}
</script>

<style lang="less" scoped>
.contentback{
    .chartbox{
      background-color: #13212e;
    }
  }
</style>
