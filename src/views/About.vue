<template>
    <!-- <div ></div> -->
    <div class="about__container" style="padding-top: 70px;">
      <div class="about__row">
        <div class="about-column-66">
          <h1 class="text_font"><b>{{first_title}}</b></h1>
          <p>{{first_description}}</p>
        </div>
        <div class="about-column-33">
          <img id="about_img" src="https://i.pinimg.com/564x/be/f9/18/bef918a4cb3425888ff3886366070e80.jpg" width="400" height="501">
        </div>
      </div>
    </div>

    <div class="about__container" style="background-color: #F2f1f1;">
      <div class="about__row">
        <div class="about-column-33">
          <img id="about_img" src="https://i.pinimg.com/564x/fb/d1/76/fbd176d6469b8b62e8c4363d8f862e41.jpg" width="400" height="501">
        </div>
        <div class="about-column-66">
          <h1 class="text_font"><b>{{second_title}}</b></h1>
          <p>{{second_description}}</p>
        </div>
      </div>
    </div>

    <div class="about__container">
      <div class="about__row">
        <div class="about-column-66">
          <h1 class="text_font"><b>{{third_title}}</b></h1>
          <p>{{third_description}}</p>
        </div>
        <div class="about-column-33">
          <img id="about_img" src="https://i.pinimg.com/564x/e3/40/53/e340531282548617eaf04686b1bc6559.jpg" width="400" height="501">
        </div>
      </div>
    </div>
</template>     
    
<script>
export default {
  name: 'Home',
  data() {
    return {
      first_title: 'Mission',
      first_description: "In everything we do, we put quality and freshness first, with our team built to steal a smile from you with every product you choose. Since the beginning, we have assumed the mission of making you happier, more cheerful, more alive. We aim to contribute to every moment of your life, whether it's breakfast, dieting, birthday anniversary or long-awaited wedding. We serve over 15,000 customers daily, each with their own wants, expectations and needs. The smiles of teenagers to whom we can give their morning sandwich or the smiles of young ladies to whom we design the most extravagant wedding cakes are equally flattering to us. We are in a continuous ascent, concerned with understanding, anticipating and responding to changes in the lives of customers, through constant evolution and innovation.",
      second_title: 'The experience',
      second_description: "The 'Sweet Corner' company has been operating since 1993, without interruption until now. In 2008, we opened a new factory in Paris, with an investment of approximately 17 million euros. You can find us in our locations on 11 Boulevard Montmartre, 75002 Paris, France or on 27 Rue des Rosiers, 75002 Paris, France. We also plan to expand throughout France, starting with a local business and then take the taste of our little corner of heaven to Europe as well.",
      third_title:'Our history',
      third_description: "Over the years, we have built a status as a representative player in the field of confectionery, pastry, semi-prepared and frozen products. 23 years ago when we started, the team consisted of 10 people, and today we have a large team that represents us in Bucharest, Ploiești and Pitești. Being always very close to our customers and trying to satisfy all their requirements, we considered the customer's request a primary landmark and followed the company's development strategy by carrying out a large investment in a modern production unit, a unit executed according to all the rigors imposed by the legislation in force, by European rules, an integrated food quality and safety management system being implemented.",
    }
  },
}
</script>

<style scoped>
* {
  box-sizing:border-box;
}
.about__container {
  background-color: #efdadaa0;
  padding: 64px;
}
.about__row:after {
  content: "";
  display: table;
  clear: both
}
.about__row {
  display: flex;
  align-items: center;
}
.about-column-66 {
  float: left;
  width: 66.66666%;
  padding: 20px;
}
.about-column-66 p {
  margin: 30px;
  font-size: 20px;
  text-align: center;
}
.about-column-33 {
  float: left;
  width: 33.33333%;
  padding: 20px;
}
.text_font {
  font-size: 45px;
  margin: 30px;
}
#about_img {
  display: block;
  height: auto;
  max-width: 100%;
}
@media screen and (max-width: 1000px) {
  .about-column-66,
  .about-column-33 {
    width: 100%;
    text-align: center;
    margin: auto;
  }
  #about_img {
    margin: auto;
  }
}
@media screen and (max-width: 800px) {
.about__row {
  flex-direction: column;
}
}

</style>



