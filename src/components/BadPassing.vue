<template>
  <div class="wrapper">
    <div class="nav">
      <h4 title="A级不良推移">A级不良推移</h4>
      <div class="pick">
        <Select v-model="model" clearable placeholder="">
          <Option v-for="item in cityList" :value="item.value" :key="item.value" >{{ item.label }}</Option>
        </Select>
        <DatePicker
          type="daterange"
          confirm
          plit-panels
          placeholder="选择日期"
          placement="bottom-end"
        ></DatePicker>
      </div>
    </div>
    <div class="contentback">
    <div class="badpassing chartbox"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BadPassing',
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
  },
  methods: {
    getEchart () {
      // const symbol = 'image://' + require('../assets/images/Snipaste_2020-09-30_09-55-55.png')
      this.myChart = this.$echarts.init(document.querySelector('.badpassing'))
      const option = {
        color: ['#3398DB'],
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
          top: '5%',
          bottom: '1%',
          containLabel: true
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
              '9月',
              '10月',
              '11月',
              '12月'
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
            interval: 25,
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
            name: '省略',
            type: 'pictorialBar',
            symbolRepeat: false,
            symbolClip: true,
            // symbolMargin: 2,
            symbol: 'rect',
            barWidth: 10,
            data: [10, 52, 88, 46, 67, 45, 78, 98, 46, 67, 45, 78],
            itemStyle: {
              color: '#245562'
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
.contentback{
    .chartbox{
      background-color: #13212e;
    }
  }
</style>
