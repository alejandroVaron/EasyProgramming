<template>
<div class="divMain">
  <div class="divSubMain">
    <div id="divLoginLabel">
      <h1> Login </h1>
    </div>
    <div id="divEmailUser">
      <h4> Email: </h4>
      <input type="text" id="inputEmail" v-model="email">
    </div>
    <div id="divPasswordUser">
      <h4> Password: </h4>
      <input type="password" id="inputPassword" v-model="password">
    </div>
    <div id="divButtonLogin">
      <router-link :to="'/'+route">
      <button class="button" @click="logIn()">
        Iniciar sesión
      </button>
      </router-link>
    </div>
  </div>
</div>
</template>

<script>
export default{
  data(){
    return{
      email:"",
      password: "",
      route: ""
    }
  },
  methods: {
    logIn(){
      if(this.email=="user"&&this.password=="user"){
        console.log("as"+this.email+" "+this.password);
        this.route = "node"
      }
    }
  }
}
</script>

<style>
.divMain{
    display:flex;
    height:75vh;
    justify-content: center;
  align-items: center;
}
.divSubMain{
    display:table-cell;
    justify-content: center;
  align-items: center;
  vertical-align: middle;
}
#divLoginLabel{
  width: 200px;
  margin-bottom:10vh;
  margin-left: auto;
  margin-right: auto;
}
#divEmailUser{
  display: flex;
  margin-left: auto;
  margin-right: auto;
  align-content: center;
  justify-content: center;
}
#inputEmail{
  height: 4vh;
  margin-left: 7vh;
  margin-right: auto;
  margin-top: 0.9vh;
}
#divPasswordUser{
  display: flex;
  margin-left: auto;
  margin-right: auto;
  align-content: center;
  justify-content: center;
}
#inputPassword{
  height: 4vh;
  margin-left: 3.4vh;
  margin-right: auto;
  margin-top: 0.9vh;
}
#divButtonLogin{
  margin-top: 3vh;
}
#buttonLogin{
  height: 3vh;
}

.button {
  padding: 0.5vh 1vh;
  font-size: 2vh;
  text-align: center;
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