<template>
  <div id="basket" class="account">
    <item v-for="item of items" type="basket" :key="item.id" :item="item" @remove="remove" />
    <div class="account-total">
      <h3 class="account-total__h">Total</h3>
      <h3 class="account-total__h">{{basketSum}}</h3>
    </div>
    <button class="account__btn" onclick="document.location='checkout.html'">Checkout</button>
    <button class="account__btn" onclick="document.location='ShoppingCart.html'">
      Go to
      cart
    </button>
  </div>
</template>
<script>
import item from "./item.vue";
import {
    get,
    put,
    del,
    post
} from '../utils/reqs.js';
export default {
  components: { item },
  data() {
    return {
      url: "/api/basket",
      items: [],
      basketSum: 0,
    };
  },
  methods: {
    add(item) {
      let find = this.items.find((el) => el.id == item.id);
      if (!find) {
        let newItem = Object.assign({}, item, { quantity: 1 });
        post(this.url, newItem)
          .then(res => {
            if(res.status) {
              this.items.push(newItem);
            } else {
              console.log('Server err')
            }
          })
        
      } else {
        put(`${this.url}/${item.id}`, 1)
        .then (res => {
          if(res.status) {
            find.quantity++;
          } else {
              console.log('Server err')
            }
        })
        
      }
      this.getSum(item);
    },

    remove(item) {
      let find = this.items.find((el) => el.id == item.id);
      if (find.quantity > 1) {
        put(`${this.url}/${item.id}`, -1)
          .then (res => {
            if(res.status) {
              find.quantity--;
            }else {
              console.log('Server err')
            }
        })
      } else {
         del(`${this.url}/${item.id}`)
            .then(res => {
                if (res.status) {
                  this.items.splice(this.items.indexOf(find), 1);
                } else {
                  console.log('Server err')
                }
            })
      }
      this.getRemove(item);
    },
    getSum(item) {
      return (this.basketSum += item.price);
    },
    getRemove(item) {
      return (this.basketSum -= item.price);
    },
  },


  mounted() {
    get(this.url)
      .then(basket => {
        this.items = basket.contents
      });
  }
};
</script>