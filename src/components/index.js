/*
 * @Author: your name
 * @Date: 2020-09-14 17:55:29
 * @LastEditTime: 2020-10-21 09:49:08
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \quality-reportsd:\workspace\quality-portrait\big-screen\src\components\index.js
 */
import ModelYearClaimRate from './ModelYearClaimRate'
import BadPassing from './BadPassing'
import PPMPassing from './PPMPassing.vue'
import SingleClaimRatio from './SingleClaimRatio.vue'
import PassRate from './PassRate.vue'
import ProblemStatis from './ProblemStatis.vue'
import ProgressOfProblems from './ProgressOfProblems.vue'
import MakeRight from './MakeRight.vue'
import Map from './Map.vue'

// const ModelYearClaimRate = () => import(/* webpackChunkName: "chart" */ './ModelYearClaimRate.vue')

const components = {
  ModelYearClaimRate,
  BadPassing,
  PPMPassing,
  SingleClaimRatio,
  PassRate,
  ProblemStatis,
  ProgressOfProblems,
  MakeRight,
  Map
}

const install = (Vue) => {
  // if (install.installed) return
  Object.keys(components).forEach(component => {
    Vue.component(components[component].name, components[component])
  })
  //   install.installed = true
}
// install.installed = false

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  ...components
}
