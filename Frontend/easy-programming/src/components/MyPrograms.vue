<template>
  <div id="container">
    <div id="divMain">
        <div id="headerDiv">
            <h2>Mis programas</h2>
        </div>
        <div id="programsDiv">

        </div>
        <router-link to="/node">
        <button class="button">Volver al editor</button>
        </router-link>
    </div>
  </div>
</template>
<script>
export default{
    data(){

    },
    methods:{

    },
    mounted(){
        //console.log("holaa")
    },
    created(){
        console.log("holaa")
    }
}
</script>
<style scoped>
#container{
    margin-top: -6vh;
    width: 100%;
    height: 99vh;
}
#divMain{
    height: 90%;
    width: 70%;
    margin-top: 10vh;
    margin-left: 15%;
}
#programsDiv{
    border: 1px solid black;
    height: 90%;
    width: 100%;
}
#headerDiv{
    display: flex;
    width: 100%;
    height: 7vh;
}
h2{
    text-align: start;
}
.button {
    margin-top: 2vh;
    padding: 0.5vh 1vh;
    font-size: 2vh;
    cursor: pointer;
    outline: none;
    color: rgb(0, 0, 0);
    background-color: #ffffff;
    border: none;
    border-radius: 15px;
    box-shadow: 0 4px #999;
}

.button:hover {background-color: #d6d6d6}

.button:active {
    background-color: #9b9999;
    box-shadow: 0 4px #999;
    transform: translateY(3px);
}
</style>
