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

    <main class="main container">
      <div class="main__details col-12 col-sm-3 col-md-3 col-lg-3 col-xl-3">
        <details class="details">
          <summary class="details__summary">Category</summary>
          <div class="details__items">
            <a class="details__a" href="#">Accessories</a>
            <a class="details__a" href="#">Bags</a>
            <a class="details__a" href="#">Denim</a>
            <a class="details__a" href="#">Hoodies & Sweatshirts</a>
            <a class="details__a" href="#">Jackets & Coats</a>
            <a class="details__a" href="#">Pants</a>
            <a class="details__a" href="#">Polos</a>
            <a class="details__a" href="#">Shirts</a>
            <a class="details__a" href="#">Shoes</a>
            <a class="details__a" href="#">Shorts</a>
            <a class="details__a" href="#">Sweaters & Knits</a>
            <a class="details__a" href="#">T-Shirts</a>
            <a class="details__a" href="#">Tanks</a>
          </div>
        </details>
        <details class="details">
          <summary class="details__summary">BRAND</summary>
        </details>
        <details class="details">
          <summary class="details__summary">DESIGNER</summary>
        </details>
      </div>
      <div class="main__right col-12 col-sm-9 col-md-9 col-lg-9 col-xl-9">
        <div class="sorting">
          <div class="tranding">
            <h2 class="sorting__h">Trending now</h2>
            <div class="tranding__list">
              <a class="tranding__point" href="#">Bohemian</a>
              <a class="tranding__point tranding__point_spacial" href="#"
                >Floral</a
              >
              <a class="tranding__point" href="#">Lace</a>
              <a class="tranding__point" href="#">Floral</a>
              <a class="tranding__point tranding__point_spacial" href="#"
                >Lace</a
              >
              <a class="tranding__point" href="#">Bohemian</a>
            </div>
          </div>
          <div class="size">
            <h2 class="sorting__h">Size</h2>
            <div class="size__box">
              <label class="size__input"><input type="checkbox" /> XXS</label>
              <label class="size__input"><input type="checkbox" /> XS</label>
              <label class="size__input"><input type="checkbox" /> S</label>
              <label class="size__input"><input type="checkbox" /> M</label>
              <label class="size__input"><input type="checkbox" /> L</label>
              <label class="size__input"><input type="checkbox" /> XL</label>
              <label class="size__input"><input type="checkbox" /> XXL</label>
            </div>
          </div>
          <form class="form__range" action="#" method="post">
            <h2 class="sorting__h">Price</h2>
            <label for="range"></label>
            <input
              class="form__range_input"
              name="range"
              id="range"
              type="range"
              value="30"
              step="0.1"
            />
            <div class="price">
              <p class="price__sort">52$</p>
              <p class="price__sort">400$</p>
            </div>
          </form>
        </div>
        <div class="selection">
          <div class="sort">
            <div class="sortby">Sort By</div>
            <select class="sort__select" name="Name" id="">
              <option value="name">Name</option>
              <option value="class">Class</option>
            </select>
          </div>
          <div class="sort sort_right">
            <div class="sortby">Show</div>
            <select class="sort__select" name="09" id="">
              <option value="name">09</option>
              <option value="class">08</option>
            </select>
          </div>
        </div>

        <catalog @add="addItem" />

        <div class="moreinfo col-12">
          <div class="moreinfo__pagin">
            <a class="moreinfo__a" href="#"
              ><i class="fas fa-angle-left"></i
            ></a>
            <a class="moreinfo__a" href="#">1</a>
            <a class="moreinfo__a" href="#">2</a>
            <a class="moreinfo__a" href="#">3</a>
            <a class="moreinfo__a" href="#">4</a>
            <a class="moreinfo__a" href="#">5</a>
            <a class="moreinfo__a" href="#">6 <span>.....</span> 20</a>
            <a class="moreinfo__a" href="#"
              ><i class="fas fa-angle-right"></i
            ></a>
          </div>
          <button class="moreinfo__button">View All</button>
        </div>
      </div>
    </main>
  </div>
</template>
<script>
import catalog from "../components/catalogProd.vue";

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
