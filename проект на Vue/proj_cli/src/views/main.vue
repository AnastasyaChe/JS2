<template>
  <div>
    <div class="blackman">
      <div class="slide center">
        <div class="slide__text">
          <h1 class="slide__h1">THE BRAND</h1>
          <h2 class="slide__h2">
            OF LUXERIOUS
            <span class="slide__span">FASHION</span>
          </h2>
        </div>
      </div>
    </div>
    <div class="offers center">
      <div class="offers__left">
        <div class="offers__item">
          <img
            class="offers__photos"
            src="https://raw.githubusercontent.com/AnastasyaChe/static/master/offer1.jpg"
            alt="photo"
          />
          <div class="offers__lable">
            <div class="lable__top">Hot deal</div>
            <div class="lable__down">For men</div>
          </div>
        </div>
        <div class="offers__item">
          <img
            class="offers__photos"
            src="https://raw.githubusercontent.com/AnastasyaChe/static/master/offer2.jpg"
            alt="photo"
          />
          <div class="offers__lable">
            <div class="lable__top">LUXIROUS & trendy</div>
            <div class="lable__down">ACCESORIES</div>
          </div>
        </div>
      </div>
      <div class="offers__right">
        <div class="offers__item">
          <img
            class="offers__photos"
            src="https://raw.githubusercontent.com/AnastasyaChe/static/master/offer3.jpg"
            alt="photo"
          />
          <div class="offers__lable">
            <div class="lable__top">30% offer</div>
            <div class="lable__down">women</div>
          </div>
        </div>

        <div class="offers__item">
          <img
            class="offers__photos"
            src="https://raw.githubusercontent.com/AnastasyaChe/static/master/offer4.jpg"
            alt="photo"
          />
          <div class="offers__lable">
            <div class="lable__top">new arrivals</div>
            <div class="lable__down">FOR kids</div>
          </div>
        </div>
      </div>
    </div>
    <section>
      <div class="fetured center">
        <h2 class="fetured__items">Fetured Items</h2>
        <p class="fetured__text">Shop for items based on what we featured in this week</p>
      </div>
      <catalog @add="addItem" />
    </section>
    <div class="allBrowse">
      <button class="button allBrowse__button" onclick="document.location='product.html'">
        Browse All Product
        <i class="fas fa-arrow-right"></i>
      </button>
    </div>
    <div class="women center">
      <div class="women__left">
        <div class="women__banner">
          <h2 class="banner__offer">
            30%
            <span class="banner__span">OFFER</span>
          </h2>
          <h2 class="banner__for">FOR WOMEN</h2>
        </div>
      </div>
      <div class="women__right">
        <div class="freeDelivery">
          <h2 class="freeD">Free Delivery</h2>
          <p class="worldWide">
            Worldwide delivery on all. Authorit tively morph next-generation innov tion
            with
            extensive models.
          </p>
        </div>

        <div class="freeDelivery">
          <h2 class="freeD">Free Delivery</h2>
          <p class="worldWide">
            Worldwide delivery on all. Authorit tively morph next-generation innov tion
            with
            extensive models.
          </p>
        </div>
        <div class="freeDelivery">
          <h2 class="freeD">Free Delivery</h2>
          <p class="worldWide">
            Worldwide delivery on all. Authorit tively morph next-generation innov tion
            with
            extensive models.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import catalog from "../components/catalog.vue";

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