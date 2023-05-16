<template>
  <div id="mySidenav" class="sidenav">
    <router-link to="" id="register" type="button" @click="showRegister = true">Register</router-link>

    <div id="id02" class="modal" v-if="showRegister">
      <span @click="showRegister = false" class="close" title="Close Modal">X</span>
      <form class="modal-content" action="/login/:user" method="post">
        <div class="container">
          <h1>Sign Up</h1>
          <p>Please fill in this form to create an account.</p>
          <hr>
          <label for="email"><b>Email</b></label>
          <input type="text" v-model="username" @input="validateUsername" id="emailAddress" placeholder="Enter Email" name="email"
            @change="onChangeAttribute('eMail', $event)" required>
            <p v-if="usernameError">{{ usernameError }}</p>
          <label for="psw"><b>Password</b></label>
          <input type="password" id="password" placeholder="Enter Password" name="psw"
            @change="onChangeAttribute('password', $event)" required>

          <label for="psw-repeat"><b>Repeat Password</b></label>
          <input type="password" id="repeatPassword" placeholder="Repeat Password"
            name="psw-repeat" @change="onChangeAttribute('repeatPassword', $event)" required>

          <div class="clearfix">
            <button type="button" @click="showRegister = false" class="cancelbtn">Cancel</button>
            <button type="submit" id="register" :disabled="!isValid" @click="onSignUp($event)" class="signup">Sign Up</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>


<script>
import axios from 'axios'

export default {
  name: 'UserRegister',
  components: {},
  data() {
    return {
      user: {},
      username: "",
      usernameError: "",
      showRegister: false
    }
  },

  computed: {
    isValid() {
      return this.usernameError === "";
    }
  },

  methods: {
    onSignUp(event) {
      event.preventDefault()
      try {
        axios.post(`http://localhost:5000/register/${JSON.stringify(this.user)}`).then((res) => {
          if (res.status === 201) {
            this.showRegister = false
            localStorage.setItem('signIn', 'true')
            alert("Succes")
          }
          else {
            console.log(res)
          }
        }).then(() => this.$router.push('/'))
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
    }, 

    validateUsername() {
      if (!this.username) {
        this.usernameError = "Username is required";
      } else if (this.username.length < 5) {
        this.usernameError = "Username must be at least 5 characters";
      } else {
        this.usernameError = "";
      }
    }
  }
}

</script>


<style scoped>
#register {
  top: 360px;
  background-color: rgb(225, 182, 216);
}

#id02 {
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
  margin: 5% auto 15% auto;
  padding: 20px;
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

.cancelbtn {
  padding: 14px 20px;
  background-image: -webkit-linear-gradient(#fffafa, #e9c3c3);
}

.cancelbtn,.signup {
  background-image: -webkit-linear-gradient(#fffafa, #e9c3c3);
  font-size: 11px;
  font-weight: 400;
  line-height: 2em;
  letter-spacing: .2em;
  text-transform: uppercase;
  float: left;
  width: 50%;
}

@media screen and (max-width: 300px) {

  .cancelbtn,
  .signup {
    width: 100%;
  }
}
</style>
