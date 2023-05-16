<template>
  <body>
    <TheNavigation />
    <UserLogin />
    <UserRegister />

    <router-view />
    <Footer />
  </body>
</template>

      
<script>
import TheNavigation from './components/TheNavigation.vue';
import UserLogin from './components/UserLogin.vue';
import UserRegister from './components/UserRegister.vue';
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: { TheNavigation, UserLogin, UserRegister, Footer},
}
</script>


<style>
#app {
  font-family: "Garamond", serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

::selection {
  background: #de3131;
  color: #fff;
}

body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background: #F2f1f1;
  height: 100%;
  color: black;
}

#mySidenav a {
  position: fixed;
  left: -100px;
  transition: 0.3s;
  padding: 15px;
  width: 100px;
  text-decoration: none;
  font-size: 20px;
  color: white;
  border-radius: 0 5px 5px 0;
}

#mySidenav a:hover {
  left: 0;
}

button {
  padding: 14px 20px;
  margin: 8px 0px;
  border: none;
  opacity: 0.9;
  text-align: center;
  cursor: pointer;
  border: 1px solid transparent;
  transition: ease-in-out;
}
button:hover {
  opacity: 1;
  color: #de3131;
}
a {
  text-decoration: none;
  text-align: center;
  cursor: pointer;
}
</style> 
