<template>
  <div class="wrapper">
    <div class="nav">
      <h4 title="体系管理内审问题整改情况">体系管理内审问题整改情况</h4>
      <div class="pick">
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
    <div class="makeright chartbox"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MakeRight',
  data () {
    return {
      mychart: null
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
    getChart () {
      this.myChart = this.$echarts.init(document.querySelector('.makeright'))

      const markLineData = [
        [
          { x: '55%', y: '30%' },
          {
            name: '已关闭',
            x: '95%',
            y: '30%',
            value: 20,
            lineStyle: { color: 'white', type: 'dotted' },
            label: { position: 'insideEndTop', color: '#5ca0cb' }
          }
        ],
        [
          { x: '40%', y: '45%' },
          {
            name: '审核组验证',
            x: '5%',
            y: '45%',
            value: 40,
            lineStyle: { color: 'white', type: 'dotted' },
            label: { position: 'insideEndTop', color: '#eeb259' }
          }
        ],
        [
          { x: '62%', y: '53%' },
          {
            name: '部门整改',
            x: '95%',
            y: '53%',
            value: 60,
            lineStyle: { color: 'white', type: 'dotted' },
            label: { position: 'insideEndTop', color: '#6e1a33' }
          }
        ],
        [
          { x: '35%', y: '65%' },
          {
            name: '汇总',
            x: '5%',
            y: '65%',
            value: 80,
            lineStyle: { color: 'white', type: 'dotted' },
            label: { position: 'insideEndTop', color: '#52b09d' }
          }
        ]
      ]

      const option = {
        radar: {
          name: {
            show: false
          },
          indicator: [
            {
              name: 'A',
              max: 100
            },
            {
              name: 'B',
              max: 100
            },
            {
              name: 'C',
              max: 100
            },
            {
              name: 'D',
              max: 100
            },
            {
              name: 'E',
              max: 100
            },
            {
              name: 'F',
              max: 100
            },
            {
              name: 'G',
              max: 100
            },
            {
              name: 'H',
              max: 100
            },
            {
              name: 'I',
              max: 100
            },
            {
              name: 'J',
              max: 100
            },
            {
              name: 'K',
              max: 100
            },
            {
              name: 'L',
              max: 100
            }
          ],
          center: ['50%', '10%'],
          radius: '160%',
          // radius: ['0%', '100%'],
          axisLine: {
            show: false
          },
          splitLine: {
            show: false
          },
          splitArea: {
            show: false
          }
        },
        series: [
          {
            type: 'radar',
            z: 2,
            areaStyle: {
              opacity: 1,
              shadowBlur: 1,
              shadowColor: 'rgba(0,0,0,.5)'
            },
            emphasis: {
              areaStyle: {
                opacity: 0
              }
            },
            silent: true,
            data: [
              {
                value: [0, 0, 0, 0, 0, 90, 100, 90, 0, 0],
                name: '汇总',
                symbol: 'circle',
                symbolSize: 1,
                itemStyle: {
                  color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 1,
                    y2: 0,
                    colorStops: [
                      {
                        offset: 0,
                        color: '#52b09d' // 0% 处的颜色
                      },
                      {
                        offset: 0.5,
                        color: '#52b09d' // 0% 处的颜色
                      },
                      {
                        offset: 0.5,
                        color: '#245562' // 0% 处的颜色
                      },
                      {
                        offset: 1,
                        color: '#245562' // 100% 处的颜色
                      }
                    ],
                    global: false // 缺省为 false
                  }
                }
              },
              {
                value: [0, 0, 0, 0, 0, 70, 80, 70, 0, 0],
                name: '部门整改',
                symbol: 'circle',
                symbolSize: 1,
                itemStyle: {
                  color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 1,
                    y2: 0,
                    colorStops: [
                      {
                        offset: 0,
                        color: '#de534f' // 0% 处的颜色
                      },
                      {
                        offset: 0.5,
                        color: '#de534f' // 0% 处的颜色
                      },
                      {
                        offset: 0.5,
                        color: '#6e1a33' // 0% 处的颜色
                      },
                      {
                        offset: 1,
                        color: '#6e1a33' // 100% 处的颜色
                      }
                    ],
                    global: false // 缺省为 false
                  }
                }
              },
              {
                value: [0, 0, 0, 0, 0, 55, 65, 55, 0, 0],
                name: '审核组验证',
                symbol: 'circle',
                symbolSize: 1,
                itemStyle: {
                  color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 1,
                    y2: 0,
                    colorStops: [
                      {
                        offset: 0,
                        color: '#eeb259' // 0% 处的颜色
                      },
                      {
                        offset: 0.5,
                        color: '#eeb259' // 0% 处的颜色
                      },
                      {
                        offset: 0.5,
                        color: '#894c19' // 0% 处的颜色
                      },
                      {
                        offset: 1,
                        color: '#894c19' // 100% 处的颜色
                      }
                    ],
                    global: false // 缺省为 false
                  }
                }
              },
              {
                value: [0, 0, 0, 0, 0, 40, 50, 40, 0, 0],
                name: '已关闭',
                symbol: 'circle',
                symbolSize: 1,
                itemStyle: {
                  color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 1,
                    y2: 0,
                    colorStops: [
                      {
                        offset: 0,
                        color: '#9ed6fc' // 0% 处的颜色
                      },
                      {
                        offset: 0.5,
                        color: '#9ed6fc' // 0% 处的颜色
                      },
                      {
                        offset: 0.5,
                        color: '#5ca0cb' // 0% 处的颜色
                      },
                      {
                        offset: 1,
                        color: '#5ca0cb' // 100% 处的颜色
                      }
                    ],
                    global: false // 缺省为 false
                  }
                }
              }
            ]
          },
          {
            name: '漏斗图',
            type: 'funnel',
            left: '0%',
            top: '20%',
            z: 1,
            // x2: 80,
            width: '0%',
            height: '0%',
            sort: 'ascending',
            min: 0,
            max: 100,
            minSize: '0%',
            maxSize: '100%',
            markLine: {
              symbol: 'none',
              silent: true,
              // zlevel: 0,
              label: {
                formatter: '{b} ' + '{c}' + '个'
              },
              data: markLineData
            },
            label: { show: false },
            labelLine: {
              show: false,
              length: 60
            },
            emphasis: {
              label: {
                show: false
              }
            },
            data: [
              { name: '1', value: 1 },
              { name: '2', value: 1 },
              { name: '3', value: 1 },
              { name: '4', value: 1 }
            ]
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
