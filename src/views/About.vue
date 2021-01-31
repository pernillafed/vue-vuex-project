<template>
  <div class="about">
    <div class="container">
      <h1>{{ heading }}</h1>
      <div class="text-wrapper">
        <img src="../assets/diving-about.jpg" alt="Divers under water">
        <p v-for="(paragraph, i) in paragraphs" :key="i">{{ paragraph }}</p>
      </div>
    </div>
  </div>
</template>

<script>

export default {

  data() {
    return {
      heading: "About Jellyfish TODO",
      paragraphs: [
        "Biscuit jelly-o liquorice icing marzipan tiramisu ice cream lemon drops oat cake. Toffee tiramisu chocolate cake jelly beans cheesecake toffee. Liquorice cake jujubes lemon drops pastry. Candy canes ice cream pie marshmallow jelly-o tiramisu caramels ice cream gingerbread. Jelly-o cupcake wafer wafer oat cake. Macaroon pastry donut croissant. Gingerbread chupa chups danish chocolate bar.",
        "Ice cream chupa chups powder. Jelly beans sugar plum chocolate muffin macaroon candy. Topping jelly cake bear claw soufflé cake gummies. Pudding cake jelly-o candy canes soufflé halvah chocolate cake pie. Sweet roll chocolate wafer muffin caramels candy. Croissant apple pie jujubes sweet chocolate bar icing cotton candy icing. Apple pie chupa chups marshmallow candy jelly beans.",
        "Sweet roll soufflé apple pie candy canes pudding. Pudding chocolate bar chocolate macaroon. Cookie jelly beans marzipan jelly sweet. Chupa chups cupcake sesame snaps chupa chups soufflé liquorice dessert. Carrot cake oat cake donut chocolate cake icing cookie. Wafer ice cream carrot cake. Apple pie donut pastry gummi bears. Jelly beans wafer tart macaroon danish.",
        "Gingerbread tootsie roll gummies powder pastry macaroon tart lemon drops. Halvah dragée danish carrot cake. Gummies cheesecake sugar plum caramels. Gummi bears tiramisu liquorice dessert candy sugar plum. Sweet roll cookie chocolate cake. Cake croissant tart dragée.",
        "Bonbon sweet cookie tart. Cookie carrot cake bonbon bonbon. Cupcake apple pie ice cream croissant jelly beans. Lemon drops dragée wafer apple pie icing wafer candy canes dessert lemon drops. Bear claw ice cream cheesecake fruitcake cupcake donut bear claw apple pie. Pudding donut lemon drops. Tart cupcake jujubes oat cake. Biscuit soufflé cotton candy dragée sugar plum dragée dessert chocolate soufflé. Jelly beans sesame snaps toffee chupa chups cake gummies jelly biscuit. Danish sugar plum pie caramels brownie carrot cake halvah oat cake."
      ]
    }
  }
  
}

</script>

<style scoped>

  .about {
      display: flex;
      justify-content: center;
  }

  .text-wrapper {
    margin: 20px 30px;
  }

  img {
    width: 100%;
    margin-bottom: 10px;
    border-radius: 30px;
  }

  p {
    padding-bottom: 10px;
  }

</style>