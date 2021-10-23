<template>
  <div class="card-devices" >
     <div class="header">
        <h3> If </h3>
     </div>
        <div id="content">
            <div>
                <div id="informationDivInput1">
                <div id="trueDiv">
                    True
                </div>
                </div>
                <div id="informationDivInput2">
                    <div id="elseDiv">
                        Else
                    </div>
                </div>
            </div>
            <div id="conditionDiv">
                Condition
            </div>
        </div>
    <div class="body" >
      <span>
        <input type="text" id="value"  df-value>
      </span>
     </div>
     <span>
         <div id="boolIfDiv">
             <div id="textBoolean">Is:</div>
            <input type="text" id="boolInput" disabled df-boolValue>
         </div>
     </span>
  </div>
</template>

<script>
export default {
  data(){
      return{

      }
  },
  methods: {
      
  },
  mounted(){

  }
}
</script>

<style scoped>
.header{
    margin-top: 1vh;
    margin-bottom: 1.6vh;
}
#value{
    width: 95%;
}
#informationDivInput1{
    width: 1vh;
    margin-top: -1.3vh;
    margin-bottom: 1vh;
}
#trueDiv{
   margin-left: 13vh;
}
#elseDiv{
   margin-left: 13vh;
}
#content{
    display: flex;
}
#conditionDiv{
    margin-top:4vh;
    margin-left: -1vh;
}
#informationDivInput2{
    width: 1vh;
    margin-bottom: 3.3vh;
}
#boolIfDiv{
    display: flex;
    height: 1vh;
}
#boolInput{
    height: 1.8vh;
    width: 100%;
}
#textBoolean{
    margin-top: 0.4vh;
    margin-right: 1.5vh;
}
</style>