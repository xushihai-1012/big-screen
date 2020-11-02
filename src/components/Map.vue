<template>
  <div class="wrapper">
    <h1>广汽质量综合管理大屏</h1>
    <div class="nav">
      <div class="chose">
        <h6>主因件名称</h6>
        <Select v-model="model1" clearable placeholder="">
          <Option v-for="item in cityList1" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>
      </div>
      <div class="chose">
        <h6>索赔件名称</h6>
        <Select v-model="model2" clearable placeholder="">
          <Option v-for="item in cityList2" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>
      </div>
      <div class="chose">
        <h6>经销商名称</h6>
        <Select v-model="model3" clearable placeholder="">
          <Option v-for="item in cityList3" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>
      </div>
      <div class="chose">
        <h6>作成时间</h6>
        <DatePicker
          type="date"
          confirm
          plit-panels
          placeholder=""
          placement="bottom-end"
        ></DatePicker>
      </div>
    </div>
    <div class="contentback">
    <div class="map mapchartbox"></div>
    </div>
  </div>
</template>

<script>
import 'echarts/map/js/china'
export default {
  name: 'Map',
  data () {
    return {
      mychart: null,
      cityList1: [],
      cityList2: [],
      cityList3: [],
      model1: '',
      model2: '',
      model3: ''
    }
  },
  created () {},
  mounted () {
    this.getChart()
    if (this.myChart) {
      this.myChart.resize()
    }
  },
  methods: {
    getChart () {
      this.mychart = this.$echarts.init(document.querySelector('.map'))

      const geoCoordMap = {
        台湾: [121.5135, 25.0308],
        黑龙江: [127.9688, 45.368],
        内蒙古: [110.3467, 41.4899],
        吉林: [125.8154, 44.2584],
        北京: [116.4551, 40.2539],
        辽宁: [123.1238, 42.1216],
        河北: [114.4995, 38.1006],
        天津: [117.4219, 39.4189],
        山西: [112.3352, 37.9413],
        陕西: [109.1162, 34.2004],
        甘肃: [103.5901, 36.3043],
        宁夏: [106.3586, 38.1775],
        青海: [101.4038, 36.8207],
        新疆: [87.9236, 43.5883],
        西藏: [91.11, 29.97],
        四川: [103.9526, 30.7617],
        重庆: [108.384366, 30.439702],
        山东: [117.1582, 36.8701],
        河南: [113.4668, 34.6234],
        江苏: [118.8062, 31.9208],
        安徽: [117.29, 32.0581],
        湖北: [114.3896, 30.6628],
        浙江: [119.5313, 29.8773],
        福建: [119.4543, 25.9222],
        江西: [116.0046, 28.6633],
        湖南: [113.0823, 28.2568],
        贵州: [106.6992, 26.7682],
        云南: [102.9199, 25.4663],
        广东: [113.12244, 23.009505],
        广西: [108.479, 23.1152],
        海南: [110.3893, 19.8516],
        上海: [121.4648, 31.2891]
      }
      const data = [
        // {
        //   name: '北京',
        //   seller: '',
        //   value: 199
        // },
        // {
        //   name: '天津',
        //   seller: '',
        //   value: 42
        // },
        {
          name: '河北',
          seller: 'C经销商',
          value: 102
        },
        // {
        //   name: '山西',
        //   value: 81
        // },
        // {
        //   name: '内蒙古',
        //   value: 47
        // },
        // {
        //   name: '辽宁',
        //   value: 67
        // },
        // {
        //   name: '吉林',
        //   value: 82
        // },
        // {
        //   name: '黑龙江',
        //   value: 123
        // },
        // {
        //   name: '上海',
        //   seller: 'A经销商',
        //   value: 24
        // },
        // {
        //   name: '江苏',
        //   value: 92
        // },
        // {
        //   name: '浙江',
        //   value: 114
        // },
        // {
        //   name: '安徽',
        //   value: 109
        // },
        // {
        //   name: '福建',
        //   value: 116
        // },
        // {
        //   name: '江西',
        //   value: 91
        // },
        // {
        //   name: '山东',
        //   value: 119
        // },
        // {
        //   name: '河南',
        //   value: 137
        // },
        // {
        //   name: '湖北',
        //   value: 116
        // },
        // {
        //   name: '湖南',
        //   value: 114
        // },
        // {
        //   name: '重庆',
        //   value: 91
        // },
        // {
        //   name: '四川',
        //   value: 125
        // },
        {
          name: '贵州',
          seller: 'A经销商',
          value: 62
        },
        // {
        //   name: '云南',
        //   value: 83
        // },
        // {
        //   name: '西藏',
        //   value: 9
        // },
        // {
        //   name: '陕西',
        //   value: 80
        // },
        // {
        //   name: '甘肃',
        //   value: 56
        // },
        // {
        //   name: '青海',
        //   value: 10
        // },
        // {
        //   name: '宁夏',
        //   value: 18
        // },
        // {
        //   name: '新疆',
        //   value: 180
        // },
        {
          name: '广东',
          seller: 'B经销商',
          value: 123
        }
        // {
        //   name: '广西',
        //   value: 59
        // },
        // {
        //   name: '海南',
        //   value: 14
        // }
      ]

      var convertData = function (data) {
        var res = []
        for (var i = 0; i < data.length; i++) {
          var geoCoord = geoCoordMap[data[i].name]
          if (geoCoord) {
            res.push({
              name: data[i].name,
              seller: data[i].seller || '',
              value: geoCoord.concat(data[i].value)
            })
          }
        }
        // console.log(res)
        return res
      }

      const option = {
        backgroundColor: '#081523',
        legend: {
          show: false
        },
        tooltip: {
          show: true
        },
        geo: {
          map: 'china',
          aspectScale: 0.75,
          // top: '10%',
          // bottom: '10%',
          // left: '0%',
          // right: '0%',
          // show: true,
          // roam: true,
          label: {
            emphasis: {
              show: false
            }
          },
          itemStyle: {
            normal: {
              borderColor: 'rgba(147, 235, 248, 0)',
              borderWidth: 0.5,
              opacity: 1
            },
            emphasis: {
              show: false,
              areaColor: '#69c5d8'
            }
          },
          z: 1
        },

        series: [
          {
            name: '',
            type: 'scatter',
            coordinateSystem: 'geo',
            symbol:
              'path://M832 1024H192a192 192 0 0 1-192-192V192a192 192 0 0 1 192-192h640a192 192 0 0 1 192 192v640a192 192 0 0 1-192 192zM192 128a64 64 0 0 0-64 64v640a64 64 0 0 0 64 64h640a64 64 0 0 0 64-64V192a64 64 0 0 0-64-64z',
            // symbol: 'pin',
            symbolKeepAspect: true,
            symbolSize: [50, 50],
            symbolOffset: ['0', '-50%'],
            tooltip: {
              show: true,
              formatter: (params) => {
                let str = ''
                str = params.data.name + '：' + params.data.value[2]
                return str
              }
            },
            label: {
              normal: {
                position: 'top',
                distance: 0,
                show: true,
                textStyle: {
                  color: '#fff',
                  fontSize: 9
                },
                formatter (value) {
                  // console.log(value)
                  return value.data.value[2]
                }
              }
            },
            itemStyle: {
              normal: {
                color: '#D8BC37' // 标志颜色
              }
            },
            data: convertData(data),
            showEffectOn: 'render',
            rippleEffect: {
              brushType: 'stroke'
            },
            hoverAnimation: true,
            zlevel: 1
          },
          {
            name: '',
            type: 'scatter',
            coordinateSystem: 'geo',
            data: convertData(data),
            zlevel: 3,
            // symbolSize: ,
            tooltip: {
              show: false
            },
            label: {
              normal: {
                formatter: (params) => {
                  return params.data.seller
                },
                position: 'bottom',
                // distance: 100,
                show: true
              },
              emphasis: {
                show: true
              }
            },
            itemStyle: {
              normal: {
                color: '#fff'
              }
            }
          },
          {
            type: 'map',
            map: 'china',
            // top: '10%',
            // bottom: '10%',
            // right: '0%',
            // left: '0%',
            aspectScale: 0.75,
            roam: false,
            tooltip: {
              show: true,
              formatter: (params) => {
                // console.log(params)
                try {
                  let str = ''
                  str = params.data.name + '：' + params.data.value[2]
                  return str
                } catch (err) {
                  console.log('该地区暂无数据')
                }
              }
            },
            label: {
              // show: true,
              // color: '#fff',
              emphasis: {
                show: true,
                color: '#fff'
              }
            },
            itemStyle: {
              normal: {
                borderColor: '#2cb3dd',
                borderWidth: 0.8,
                areaColor: 'rgb(32, 62, 75)'
                // areaColor: {
                //   type: 'linear-gradient',
                //   x: 1000,
                //   y: 600,
                //   x2: 1000,
                //   y2: 0,
                //   colorStops: [
                //     {
                //       offset: 0,
                //       color: '#274d68' // 0% 处的颜色
                //     },
                //     {
                //       offset: 1,
                //       color: '#09132c' // 50% 处的颜色
                //     }
                //   ],
                //   global: true // 缺省为 false
                // }
              },
              emphasis: {
                show: false,
                areaColor: '#274d62'
              }
            },
            zlevel: 1,
            data: convertData(data)
          }
        ]
      }

      this.mychart.setOption(option)
    }
  }
}
</script>

<style lang="less" scoped>
.wrapper {
  h1 {
    color: #fff;
    text-align: center;
  }
  .nav {
    padding: 0;
    margin: 0;
    margin-top: 0.3125rem;
    .chose {
      h6 {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
  .mapchartbox {
    width: 100%;
    height: 6.7rem;
  }
}
</style>
