<template>
  <div class="wrapper">
    <div class="nav">
      <h4 title="各领域问题统计">各领域问题统计</h4>
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
    <div class="problemstatis chartbox"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProblemStatis',
  data () {
    return {
      myChart: null,
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
      this.myChart = this.$echarts.init(
        document.querySelector('.problemstatis')
      )
      const option = {
        // title: {
        //   text: '基础雷达图'
        // },
        tooltip: {},
        // legend: {
        //   data: ['预算分配（Allocated Budget）', '实际开销（Actual Spending）']
        // },
        radar: {
          shape: 'polygon',
          center: ['50%', '50%'],
          radius: '90%',
          name: {
            textStyle: {
              color: '#5e6870'
              //   backgroundColor: '#999',
              //   borderRadius: 3,
              //   padding: [3, 5]
            }
          },
          //   axisLabel: {
          //     show: true,
          //     align: 'center'
          //   },
          indicator: [
            {
              name: '饰件',
              max: 6500,
              axisLabel: {
                show: true,
                fontSize: 12,
                color: '#838D9E',
                showMaxLabel: true, // 显示最大值，即外圈不显示数字30
                showMinLabel: true, // 显示最小数字，即中心点显示0
                formatter: function (value) {
                  const max = 6500
                  const text = (value / max) * 100 + '%'
                  return text
                }
              }
            },
            { name: '焊装工艺', max: 25000 },
            { name: '冲压工艺', max: 25000 },
            { name: '总装工艺', max: 52000 },
            { name: '总装科', max: 38000 },
            { name: '车身工程', max: 30000 },
            { name: '智能联网', max: 16000 }
          ],
          splitArea: {
            show: true,
            areaStyle: {
              color: ['rgba(129, 137, 144,1)', 'rgba(129, 137, 144,0.8)', 'rgba(129, 137, 144,0.6)', 'rgba(129, 137, 144,0.4)', 'rgba(129, 137, 144,0.2)'] // 图表背景的颜色
            }
          }
        },
        series: [
          {
            name: '预算 vs 开销（Budget vs spending）',
            type: 'radar',
            // areaStyle: {normal: {}},
            data: [
              {
                value: [4300, 25000, 19000, 50000, 35000, 28000, 10000],
                name: '11111',
                symbol: 'circle',
                itemStyle: {
                  color: '#e3993c'
                }
              },
              {
                value: [5000, 25000, 21000, 42000, 31000, 28000, 14000],
                name: '2222',
                symbol: 'circle',
                itemStyle: {
                  color: '#50a897'
                }
              }
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
