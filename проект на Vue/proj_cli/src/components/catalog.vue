<template>
  <div id="catalog" class="center galery">
    <item v-for="item of items" :key="item.id" :item="item" />
  </div>
</template>

<script>
import item from "./item.vue";
import { get } from "../utils/reqs.js";
export default {
  components: { item },
  data() {
    return {
      url: "/api/catalog",
      items: [],
    };
  },

  mounted() {
    get(this.url).then((d) => {
      this.items = d;
    });
  },
};
</script>