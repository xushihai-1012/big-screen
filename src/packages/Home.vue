<template>
  <div class="container">
    <div class="column">
      <div class="panel">
          <MakeRight></MakeRight>
      </div>
      <div class="panel">
        <ProgressOfProblems></ProgressOfProblems>
      </div>
      <div class="panel">
        <ProblemStatis></ProblemStatis>
      </div>
    </div>
    <div class="column">
      <div class="panel">
        <Map></Map>
      </div>
      <!-- <div class="panel"></div> -->
      <div class="panel">
        <div class="panelchild">
          <SingleClaimRatio></SingleClaimRatio>
        </div>
        <div class="panelchild">
          <PassRate></PassRate>
        </div>
      </div>
    </div>
    <div class="column">
      <div class="panel">
        <ModelYearClaimRate></ModelYearClaimRate>
      </div>
      <div class="panel">
        <PPMPassing></PPMPassing>
      </div>
      <div class="panel">
        <BadPassing></BadPassing>
      </div>
    </div>
  </div>
</template>
<script>

import '../assets/styles/index.less'

export default {}
</script>

<style lang="less" scoped>
.container {
  display: flex;
  padding: 0.1875rem 0.1875rem 0.125rem;
  .column {
    flex: 3;
    &:nth-child(2) {
      flex: 5;
      .panel:nth-child(2) {
        display: flex;
        .panelchild{
          flex: 1;
          // padding: 0 0.1875rem 0
        }
      }
    }
    &:nth-child(2n-1){
      .panel{
        &:nth-child(n+1):nth-child(n+2){
          position: relative;
          &::after{
            content: '';
            display: block;
            height: 1px;
            width: 100%;
            position: absolute;
            top: 0;
            left: 0;
            background-color: #445260;
          }
        }
      }
    }
    .panel {
      margin-bottom: 0.25rem;
      // padding: 0.375rem 0.1875rem;
      // margin: 0.1875rem 0;
    }
  }
}
</style>
