<template>
  <div class="main-wrapper">
    <div class="header">
      <img src="https://sweetjane.qodeinteractive.com/wp-content/uploads/2019/02/h8-img-11.png">
    </div>
  </div>
  <div class="small-container">
    <div class="column-products">
      <div v-for="item in items_details" :key="item.id">
        <h4>{{ item.name }}</h4>
        <p>{{ item.price }}</p>
        <p>Quantity: {{ item.quantity }}</p>
        <div class="column-buttons">
          <button type="button" id="removeProduct" @click="onDelete(item.id, $event)" class="deletebtn">Delete</button>
          <button type="button" id="updateProduct" class="updatebtn">
            <router-link :to="{ name: 'UpdateComponent', params: { id: item.id } }">Update</router-link>
          </button>
        </div>
      </div>
    </div>
  </div>
  <div class="form">
    <form class="container">
      <h1>{{ containerTitle }}</h1>
      <hr>
      <input type="text" :value="product.name" placeholder="Name" @change="onChangeAttribute('name', $event)" required>
      <input type="number" :value="product.price" placeholder="Price" @change="onChangeAttribute('price', $event)"
        required>
      <input type="number" :value="product.quantity" placeholder="Quantity" @change="onChangeAttribute('quantity', $event)" required>
      <div class="clearfix">
        <button type="submit" id="addProduct" @click="onAdd($event)" class="addbtn">Add</button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Menu',
  data() {
    return {
      containerTitle: 'Add a product',
      product: {},
      items_details: []
    }
  },
  methods: {
    onAdd() {
      try {
        axios.post(`http://localhost:5000/newProducts/${JSON.stringify(this.product)}`).then((res) => {
          if (res.status === 201) {
            alert("Product added successfully")
          }
          else {
            console.log(res)
          }
        }).then(() => this.$router.push('/menu'))
      } catch (err) {
        console.log('Error ' + err.message)
      }
    },

    onDelete(id) {
      if(confirm('Are you sure ?'))
      try {
        axios.delete(`http://localhost:5000/deleteProduct/${id}`).then((res) => {
          if (res.status === 200) {
            console.log("Product successfully deleted!")
          } else {
            console.log(res)
          }
        })
      } catch (error) {
        console.log('Error'+ err.message)
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
    axios.get('http://localhost:5000/products').then(res => {
      this.items_details = res.data.products
    })
  }

}

</script>

<style scoped>
.main-wrapper .header {
  position: relative;
  background-image: url("https://sweetjane.qodeinteractive.com/wp-content/uploads/2019/02/port-8-img-10a.jpg");
  background-size: cover;
  height: 37em;
  width: 100%;
}
img {
  position: relative;
  z-index: 5;
  width: 494px;
  height: 349px;
  transform-origin: 50% 50%;
  opacity: 1;
  transform: translate(150px, 60px);
  visibility: visible;
}
.form {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  flex: 0 1 330px;
  font-size: 20px;
  margin: 72px 50px 50px 72px;
  padding: 2em;
  cursor: default;
  background-color:rgb(243, 232, 232);
  color: #fff;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  transition: background-color 0.6s, color 0.3s;
}
.form:hover {
  border-color: transparent;
  opacity: 1;
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
  font-size: 30px;
  text-shadow: 1px 3px 5px rgba(0, 0, 0, 0.5);
}
hr {
  margin: 0 0 25px 0 ;
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

.addbtn {
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

@media screen and (max-width: 480px) {
img {
  max-width: 0px;
  min-height: 0px;
  }
}

.small-container .row {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-around;
}

.small-container {
  max-width: 1080px;
  margin: 100px auto 50px;
  padding-left: 25px;
  padding-right: 25px;
}

.column-products {
  text-align: center;
  display: flex;
  align-items: center;
  align-content: center;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%;
  flex-direction: row;
}

.column-buttons {
  width: 50%;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  align-content: strech;
}
h4 {
  font-size: 20px;
}
.clearfix::after {
  content: "";
  clear: both;
  display: table;
}

.updatebtn,
.deletebtn {
  background: -webkit-linear-gradient(#fffafa,rgb(231, 217, 217));
  border-radius: 30px;
  font-size: 9px;
  font-weight: 400;
  line-height: 1em;
  letter-spacing: .1em;
  text-transform: uppercase;
  float: unset;
  width: 100%;
  margin: 10px;
}

a {color: black;}

@media screen and (max-width: 600px) {
  .addbtn ,
  .updatebtn,
  .deletebtn {
    width: 100%;
  }

  .column-products,
  .column-buttons {
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}

</style>

