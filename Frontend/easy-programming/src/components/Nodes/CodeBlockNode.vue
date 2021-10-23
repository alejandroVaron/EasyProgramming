<template>
  <div class="card-devices" >
     <div class="header">
        <h3> Bloque de código </h3>
        <label df-id></label>
     </div>
    <div class="body" >
      <span>
        <textarea class="textAreaBlock" placeholder="Añade código" df-valueblock></textarea>
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
  margin-top: 1vh;
  margin-bottom: 3vh;
}
#value{
  width: 95%;
}
.textAreaBlock{
    height: 7vh;
    width: 97%;
}

</style>