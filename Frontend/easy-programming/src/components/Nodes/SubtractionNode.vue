<template>
  <div class="card-devices" >
     <div class="header">
        <h3> Resta </h3>
        <input id="inputId" disabled df-id/>
     </div>
     <div id="informationDivInput1">
       Número
     </div>
     <div id="informationDivInput2">
       Número
     </div>
    <div class="body" >
      <span>
        <input type="text" id="value"  disabled df-value>
      </span>
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
  margin-bottom: 1.5vh;
  height: 4vh;
  display: flex;
}
#value{
  width: 95%;
}
#informationDivInput1{
width: 1vh;
margin-top: -0.5vh;
margin-bottom: 1vh;
}
#informationDivInput2{
width: 1vh;
margin-bottom: 3.5vh;
}
#inputId{
  width: 7vh;
  height: 2vh;
  margin-left: 4vh;
  margin-top: 1.7vh;
}

</style>