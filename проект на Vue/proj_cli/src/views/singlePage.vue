<template>
  <div>
    <div class="backArrivals">
      <div
        class="newArrivals container flex-column flex-sm-row flex-md-row flex-lg-row flex-xl-row"
      >
        <h1 class="newArrivals__h1">New Arrivals</h1>
        <div class="rightBread">
          <a href="#">Home</a>
          <span>/</span>
          <a href="#">Men</a>
          <span>/</span>
          <a href="#">New Arrivals</a>
        </div>
      </div>
    </div>

    <div class="mainBlock">
      <img
        src="https://raw.githubusercontent.com/AnastasyaChe/static/master/Layer_42.jpg"
        alt="mainPhoto"
      />
    </div>

    <section class="womenCollection container">
      <h3 class="womColl">WOMEN COLLECTION</h3>
      <div class="lineWomColl"></div>
      <h2 class="moschino">Moschino Cheap And Chic</h2>
      <p class="moschinoText">
        Compellingly actualize fully researched processes before proactive outsourcing.
        Progressively syndicate collaborative architectures before cutting-edge services. Completely visualize
        parallel core competencies rather than exceptional portals.
      </p>

      <div class="twoHs">
        <h3 class="matDisBlock materialBlock">
          MATERIAL:
          <span class="caracter">COTTON</span>
        </h3>
        <h3 class="matDisBlock">
          DESIGNER:
          <span class="caracter">BINBURHAN</span>
        </h3>
      </div>
      <div class="priceBlock">$561</div>
      <div class="lineUnderPrice"></div>
      <div class="choose">
        <div class="chooseSth">
          <h2 class="chooseThing">CHOOSE COLOR</h2>
          <select class="firstSelect" required size="1">
            <option value="Красный">Red</option>
            <option value="Розовый">Pink</option>
          </select>
        </div>
        <div class="chooseSth">
          <h2 class="chooseThing">CHOOSE SIZE</h2>
          <select required size="1">
            <option value="Маленький">XXL</option>
            <option value="Большой">XXXL</option>
          </select>
        </div>
        <div class="chooseSth">
          <h2 class="chooseThing">QUANTITY</h2>
          <select required size="1">
            <option value="Два">2</option>
            <option value="Три">3</option>
          </select>
        </div>
      </div>
      <button class="addToCart" onclick="document.location='ShoppingCart.html'">
        <i class="fas fa-shopping-cart"></i>
        <span class="text_to_cart">Add to Cart</span>
      </button>
    </section>
    <div class="youMay container">
      <h2>you may like also</h2>
    </div>
    <div class="youMayGalary container">
      <catalog @add="addItem" />
    </div>
  </div>
</template>
<script>
import catalog from "../components/catalogSingle.vue";

export default {
  components: {
    catalog,
  },
  methods: {
    addItem(item) {
      this.$parent.$refs.hd.$refs.bask.add(item);
    },
  },
};
</script>
