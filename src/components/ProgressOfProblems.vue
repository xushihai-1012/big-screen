<template>
  <div class="wrapper">
    <div class="nav">
      <h4 title="问题推进情况">问题推进情况</h4>
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
    <div class="progressofproblems chartbox"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProgressOfProblems',
  data () {
    return {
      mychart: null,
      model: '',
      cityList: [],
      dataList: [
        { name: '问题总数', value: 20 },
        { name: '效果确认', value: 5 },
        { name: '对策检讨', value: 5 },
        { name: '关闭', value: 10 }
      ]
    }
  },
  created () {},
  mounted () {
    this.getChart()
    window.addEventListener('resize', () => {
      if (this.myChart) {
        this.myChart.resize()
      }
    })
  },
  methods: {
    // 字符串截取
    wordLength (value) {
      var ret = ''
      var maxLength = 4
      var valLength = value.length
      var rowN = Math.ceil(valLength / maxLength)
      if (rowN > 1) {
        for (var i = 0; i < rowN; i++) {
          var temp = ''
          var start = i * maxLength
          var end = start + maxLength
          temp = value.substring(start, end) + '\n'
          ret += temp
        }
        return ret
      } else {
        return value
      }
    },

    getChart () {
      this.myChart = this.$echarts.init(
        document.querySelector('.progressofproblems')
      )

      const offsetData = [
        [15, 50],
        [50, 50],
        [80, 70],
        [80, 20]
      ]

      const symbolSzieData = [100, 70, 70, 50]

      const datas = []

      this.dataList.forEach((item, index) => {
        datas.push({
          name: item.value + '个' + '\n' + this.wordLength(item.name),
          value: offsetData[index],
          label: {},
          itemStyle: {
            normal: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: '#70f1e7'
                  },
                  {
                    offset: 1,
                    color: '#459ac2'
                  }
                ],
                global: false
              }
            }
          },
          symbolSize: symbolSzieData[index]
        })
      })

      const option = {
        grid: {
          show: false,
          containLabel: true,
          top: '1%',
          left: '1%',
          right: '1%',
          bottom: '1%'
        },
        xAxis: [
          {
            // gridIndex: 0,
            type: 'value',
            show: false,
            min: 0,
            max: 100,
            // nameLocation: 'middle',
            // nameGap: 5
          }
        ],
        yAxis: [
          {
            // gridIndex: 0,
            min: 0,
            show: false,
            max: 100,
            // nameLocation: 'middle',
            // nameGap: 30
          }
        ],
        series: [
          {
            type: 'scatter',
            symbol: 'circle',
            symbolSize: 120,
            label: {
              normal: {
                show: true,
                formatter: '{b}',
                color: '#fff',
                textStyle: {
                  fontSize: '13'
                }
              }
            },
            itemStyle: {
              normal: {
                opacity: 1
              }
            },
            data: datas
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
