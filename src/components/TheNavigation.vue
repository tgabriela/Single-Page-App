<template>
  <div id=header>
    <div for-mobile>
      <span id=title>{{ title }}</span>
    </div>
    <div for-desktop id=logo>
      <span id=logo_label_A>{{ logo_A }}</span><br>
      <span id=logo_label_B>{{ logo_B }}</span>
    </div>
    <div menu id="menu">
      <router-link to="/">Home</router-link>
      <router-link to="/about" v-if="isLoggedIn">About</router-link>
      <router-link to="/menu" v-if="isLoggedIn">Menu</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navigation',
  data () {
      return {
        title: 'Sweet Corner',
        logo_A: 'Sweet',
        logo_B: 'Corner',
        isLoggedIn: localStorage.getItem('logIn'),
        isSignedIn: localStorage.getItem('signIn'),
      }
  }
}
</script>

<style scoped>

/*mobile*/
#title {
  display: none;
}
#header {
  height: 100px;
  background: rgba(0, 0, 0, 0.8);
}
#logo {
  overflow: hidden;
  display: block;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 50px;
  cursor: pointer;
  float: left;
}
#logo_label_A {
  font-family: "Brush Script MT", cursive;
  letter-spacing: normal;
  font-size: 45px;
  font-weight: 400;
  color: white;
  line-height: 55px;
  display: inline-block;
}
#logo_label_B {
  font-family: "Brush Script MT", cursive;
  letter-spacing: normal;
  font-size: 45px;
  font-weight: 400;
  color: white;
  line-height: 15px;
  display: inline-block;
  padding-left: 30px;
}
#menu {
  margin-top: 30px;
  margin-left: 160px;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.0);
  display: block;
  float: left;
}

#menu>a {
  float: left;
  display: block;
  color: white;
  padding: 10px 8px;
  font-size: 16px;
}
#menu>a:hover {
  background-color: #555;
  color: white;
  border-radius: 4px;
}

@media screen and (max-width: 900px) {
  #header {
    height: unset;
    background: rgba(0, 0, 0, 0.8);
  }

  #logo {
    display: none;
  }

  #menu {
    margin-top: 0px;
    margin-right: 0px;
    margin-left: 0px;
    padding-left: 15px;
    padding-right: 15px;
    overflow: hidden;
    display: block;
    float: unset;
  }

  #menu>a {
    color: #fff;
  }
}
</style>