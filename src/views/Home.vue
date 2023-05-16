<template>
    <div class="home">
      <div class="container">  
        <div class="main">
          <h1>{{motto}}</h1>
          <router-link :to="{ name: 'Menu' }" class="btn-main">Our menu</router-link>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="container">
        <div class="col">
          <h2>{{ title1 }}</h2>
          <p>{{ description1 }}</p>
        </div>
        <div class="col">
          <h2>{{ title2 }}</h2>
          <p>{{ description2 }}</p>          
        </div>
        <div class="col">
          <h2>{{ title3 }}</h2>
          <p>{{ description3 }}</p>
        </div>
      </div>
      <div class="clearfix"></div>
    </div>
</template>


<script>
export default {
  name: 'Home',
  data() {
    return {
      motto: 'A sweet treat is waiting for you!',
      title1: 'Design',
      title2: 'Flavours',
      title3: 'Pricing',
      description1: "With an emphasis on sugar flowers, edible embellishments and harmonious colours, we create incredible centrepieces.",
      description2: "All of our delicious cakes are baked to order from quality ingredients and are completely hand made and finished.",
      description3: "All of our cakes are bespoke and made to order to your individual requirements, and as such, we don’t have a generic one-size-fits-all price list."
    }
  }
}
</script>



<style scoped>
.container {
  max-width: 940px;
  margin: 0 auto;
  padding: 0 10px;
}
.home {
  background: url(https://i.pinimg.com/564x/26/6c/2e/266c2eff544a1538c0aab40406ed9c90.jpg);
  background-size:cover;
  background-position:center center;
  background-repeat:no-repeat;
  height: 800px;
}
.main {
  position: relative;
  top: 180px;
  text-align: center;
}

.main h1 {
  color:#ffffff;
  font-family: "Brush Script MT", cursive;
  font-weight: 100;
  font-size: 50px;
  margin: 0px 10px 70px 10px;
  text-transform: none;
}

.btn-main {
  background-color: #c08fb4b2;
  color: #fff;
  font-weight: 600;
  font-size: 18px;
  letter-spacing: 1.3px;
  padding: 16px 40px;
  text-decoration: none;
  text-transform: uppercase;
}

.section {
  padding-top: 80px;
  padding-bottom: 100px;
}

.section .col {
  float: left;
  width: 33%;
  text-align: center;
}
.section h2 {
  font-weight: 600;
  font-size: 23px;
  text-transform: uppercase;
}

.section p {
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  padding: 0 50px;
  margin-bottom: 40px;
}

.clearfix {
  clear: both;
}

@media (max-width: 500px) {
  .main h1 {
    font-size: 50px;
    padding: 0 40px;
  }

  .section .col {
    width: 100%;
  }
}
</style>


