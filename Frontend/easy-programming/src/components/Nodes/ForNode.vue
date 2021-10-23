<template>
  <div class="card-devices" >
     <div class="header">
        <h3> For </h3>
     </div>
        <div id="content">
            <div>
                <div id="informationDivInput1">
                    <div id="codeBlockDiv">
                        Bloque de código
                    </div>
                </div>
            </div>
        </div>
         <div id="iDiv">
             <div id="textIDiv">Let i =</div>
            <input type="text" id="iInput"  df-valuei>
         </div>
         <div id="toDiv">
             <div id="toTextDiv">hasta </div>
            <input type="text" id="iInput" df-valueof>
         </div>
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
#codeBlockDiv{
    width: 15vh;
   margin-left: 3vh;
   margin-top: 0.5vh;
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
#toDiv{
    display: flex;
    height: 1vh;
    margin-bottom: 0.5vh;
}
#iInput{
    height: 1.8vh;
    width: 100%;
}
#textIDiv{
    margin-top: 0.4vh;
    width: 10vh;
    margin-right: 1vh;
}
#toTextDiv{
    margin-right: 2.5vh;
    width: 6vh;
}
#iDiv{
    display: flex;
    margin-bottom: 1vh;
}
</style>