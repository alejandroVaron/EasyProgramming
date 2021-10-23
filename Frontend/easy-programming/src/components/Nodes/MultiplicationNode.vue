<template>
  <div class="card-devices" >
     <div class="header">
       <input id="inputId" disabled df-id/>
        <h3> Multiplicación </h3>
        <div id="informationDivInput1">
          Número
        </div>
        <div id="informationDivInput2">
          Número
        </div>
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
  margin-bottom: 7vh;
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
}
</style>