<template>
  <div class="update__form">
    <form class="container">
      <h1>{{ containerTitle }}</h1>
      <hr>
      <input type="text" :value="product.name" placeholder="Name" @change="onChangeAttribute('name', $event)" required>
      <input type="text" :value="product.price" placeholder="Price" @change="onChangeAttribute('price', $event)" required>
      <input type="number" :value="product.quantity" placeholder="Quantity" @change="onChangeAttribute('quantity', $event)" required>
      <div class="clearfix">
        <button type="button" id="updateProduct" @click="onUpdate($event)" class="updatebtn">Update</button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Product',
  data() {
    return {
      product: {},
      containerTitle: 'Products',
      newProduct: {}
    }
  },

  methods: {
    onUpdate(event) {
      event.preventDefault()
      try {
        axios.post(`http://localhost:5000/updateProduct/${JSON.stringify(this.product)}`).then((res) => {
          if (res.status === 200) {
            alert("Product updated successfully")
          } else {
            console.log(res)
          }
        })
      } catch (err) {
        console.log('Error ' + err.message)
      }
    },

    onChangeAttribute(attributeName, event) {
      if (attributeName === 'name') {
        this.product.name = event.target.value
      }
      if (attributeName === 'price') {
        this.product.price = event.target.value
      }
      if (attributeName === 'quantity') {
        this.product.quantity = event.target.value
      }
    }
  },

  beforeMount() {
    if (this.$route.params.id) {
      let id = this.$route.params.id;
      try {
        axios.get(`http://localhost:5000/update/${id}`).then((res) => {
          this.product = res.data.product
          console.log(res)
        })
      } catch (err) {
        console.log(err.message)
      }
    }

  }
}

</script>

<style scoped>
.update__form {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-size: 20px;
  margin: 72px 50px 50px 72px;
  padding: 2em;
  background-color: rgb(243, 232, 232);
  color: #fff;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
}

.update__form:hover {
  border-color: transparent;
  opacity: 1;
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}

.container {
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 0;
  margin: 15px;
  width: 100%;
}

.container h1 {
  text-align: center;
  color: white;
  font-size: 2em;
  text-shadow: 1px 3px 5px rgba(0, 0, 0, 0.5);
}
hr { margin: 0 0 25px 0 ;}
.clearfix::after {
  content: "";
  clear: both;
  display: table;
}

input[type=text],
input[type=number] {
  width: auto;
  padding: 15px;
  margin: 10px;
  display: block;
  border: none;
  background: rgb(251, 243, 243);
}

input[type=text]:focus,
input[type=number]:focus {
  background-color: rgb(251, 243, 243);
  outline: none;
}

.updatebtn {
  background: -webkit-linear-gradient(#fffafa,rgb(231, 217, 217));  
  border-radius: 30px;
  font-size: 9px;
  font-weight: 400;
  line-height: 1em;
  letter-spacing: .1em;
  text-transform: uppercase;
  float: unset;
  width: 20%;
  margin: 10px 5 10 10;
}

@media screen and (max-width: 600px) {
  .updatebtn {
    width: 100%;
  }
}
</style>