<template>
  <div id="mySidenav" class="sidenav">
    <router-link to="" id="login" type="button" @click="showLogin = true">Login</router-link>

    <div id="id01" class="modal" v-if="showLogin">
      <span @click="showLogin = false" class="close" title="Close Modal">X</span>
      <form class="modal-content">
        <div class="container">
          <h1>Login</h1>
          <hr>
          <label for="email"><b>Email</b></label>
          <input type="text" class="info" id="loginEmailAddress" placeholder="Enter Email"
            name="email" @change="onChangeAttribute('eMail', $event)" required>
          
          <label for="psw"><b>Password</b></label>
          <input type="password" class="info" id="loginPassword"
            placeholder="Enter Password" name="psw" @change="onChangeAttribute('password', $event)" required>

          <div class="clearfix">
            <button type="button" @click="showLogin = false" class="cancelbtn">Cancel</button>
            <button type="submit" id="loginbtn" @click="onSignIn($event)" class="loginbtn">Login</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>


<script>

import axios from 'axios'
export default {
  name: 'UserLogin',
  components: {},
  data() {
    return {
      user: {},
      showLogin: false
    }
  },

  methods: {
    onSignIn(event) {
      event.preventDefault()
      try {
        axios.get(`http://localhost:5000/login/${JSON.stringify(this.user)}`).then((res) => {
          if (res?.data?.status === 200) {
            this.showLogin = false
            localStorage.setItem('logIn', 'true')
            alert("Succes")
          }
          else {
            alert(res.data.response)
          }
        })
      } catch (err) {
        console.log('Error ' + err.message)
      }
    },
    onChangeAttribute(attributeName, event) {
      if (attributeName === 'eMail') {
        this.user.eMail = event.target.value
      } else {
        this.user.password = event.target.value
      }
    }
  }
}
</script>

<style scoped>
#login {
  top: 300px;
  background-color: rgb(225, 182, 216);
}

#id01 {
  display: block !important;
}

input[type=text],
input[type=password] {
  width: 100%;
  padding: 15px 10px 15px 10px;
  margin: 5px 0 22px 0;
  display: inline-block;
  border: none;
  background: rgb(251, 243, 243);
}

input[type=text]:focus,
input[type=password]:focus {
  background-color: rgb(251, 243, 243);
  outline: none;
}

.cancelbtn {
  padding: 14px 20px;
  background-image: -webkit-linear-gradient(#fffafa, #e9c3c3);
}

.cancelbtn,
.loginbtn {
  background-image: -webkit-linear-gradient(#fffafa, #e9c3c3);
  font-size: 11px;
  font-weight: 400;
  line-height: 2em;
  letter-spacing: .2em;
  text-transform: uppercase;
  float: left;
  width: 50%;
}

.container {
  padding: 16px;
}
.container h1{
  text-align: center;
}
.modal {
  display: none;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(5px);
}

.modal-content {
  background-color: #fefefe;
  padding: 20px;
  margin: 15% auto 15% auto;
  border: 1px solid #888;
  width: 80%;
}

hr {
  border: 1px solid #f1f1f1;
  margin-bottom: 25px;
}

.close {
  position: absolute;
  right: 35px;
  top: 15px;
  font-size: 40px;
  font-weight: bold;
  color: #f1f1f1;
}

.close:hover,
.close:focus {
  color: #f44336;
  cursor: pointer;
}

.clearfix::after {
  content: "";
  clear: both;
  display: table;
}

@media screen and (max-width: 300px) {

  .cancelbtn,
  .loginbtn {
    width: 100%;
  }
}
</style>