<template>
  <div>
    <heading ref="hd">
      <input id="switcher" type="checkbox" />
      <label class="open" for="switcher">
        <i class="fas fa-bars"></i>
      </label>
      <nav class="nav center">
        <ul class="menu">
          <li class="menu__list">
            <router-link class="menu__link" to="/">HOME</router-link>
          </li>
          <li class="menu__list">
            <router-link class="menu__link" to="/single page">SINGLE PAGE</router-link>
          </li>
          <li class="menu__list">
            <router-link class="menu__link" to="/shopping cart">SHOPPING CART</router-link>
          </li>
          <li class="menu__list">
            <router-link class="menu__link" to="/checkout">CHECKOUT</router-link>
          </li>
          <li class="menu__list">
            <router-link class="menu__link" to="/product">PRODUCT</router-link>
          </li>
        </ul>

        <label class="close" for="switcher">
          <i class="far fa-window-close"></i>
        </label>
      </nav>
    </heading>

    <router-view />
    <company />
  </div>
</template>
<script>
import heading from "./components/heading.vue";
import company from "./components/company.vue";

export default {
  components: {
    heading,
    company,
  },
  // methods: {
  //   addItem(item) {
  //     this.$refs.hd.$refs.bask.add(item);
  //   },
  // },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
