<template>
  <div class="card-devices" >
     <div class="header">
       <input id="inputId" disabled df-id/>
        <h3> Número </h3>
     </div>
    <div class="body" >
      <span>
        <input type="text" id="value" df-value>
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
  }
}
</script>

<style scoped>
.header{
  top: 5vh;
  margin-top: 1vh;
  margin-bottom: 3vh;
}
#value{
  width: 95%;
}
#inputId{
  width: 7vh;
  height: 2vh;
}

</style>