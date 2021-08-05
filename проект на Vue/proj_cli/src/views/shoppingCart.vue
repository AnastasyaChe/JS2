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
    <section class="shoppingMenu container">
      <div class="shoppingCartRow shoppingCartHead">
        <h2 class="shoppingCartRow shoppingCatrFirst">Product Details</h2>
        <h2 class="shoppingCartRow">unite Price</h2>
        <h2 class="shoppingCartRow">Quantity</h2>
        <h2 class="shoppingCartRow">shipping</h2>
        <h2 class="shoppingCartRow">Subtotal</h2>
        <h2 class="shoppingCartRow">Action</h2>
      </div>
      <div class="line container"></div>
      <article class="shoppingCartRow">
        <div class="product">
          <img
            src="https://raw.githubusercontent.com/AnastasyaChe/static/master/ProductDetails1.jpg"
            alt="product"
          />

          <div class="productDetails">
            <h2>Mango People T-shirt</h2>
            <span class="color">Color:</span> Red
            <br />
            <span class="size">Size:</span> Xll
          </div>
        </div>
        <div class="productPrice tabElement">$150</div>
        <div class="productQuantity tabElement">
          <input type="number" plaseholder="2" />
        </div>
        <div class="produtcShipping tabElement">FREE</div>
        <div class="productSubtotal tabElement">$300</div>
        <div class="productAction tabElement">
          <i class="fas fa-times-circle"></i>
        </div>
      </article>
      <div class="line container"></div>
      <article class="shoppingCartRow">
        <div class="product">
          <img
            src="https://raw.githubusercontent.com/AnastasyaChe/static/master/ProductDetails2.jpg"
            alt="product"
          />

          <div class="productDetails">
            <h2>Mango People T-shirt</h2>
            <span class="color">Color:</span> Red
            <br />
            <span class="size">Size:</span> Xll
          </div>
        </div>
        <div class="productPrice tabElement">$150</div>
        <div class="productQuantity tabElement">
          <input type="number" plaseholder="2" />
        </div>
        <div class="produtcShipping tabElement">FREE</div>
        <div class="productSubtotal tabElement">$300</div>
        <div class="productAction tabElement">
          <i class="fas fa-times-circle"></i>
        </div>
      </article>
      <div class="line container"></div>
      <article class="shoppingCartRow">
        <div class="product">
          <img
            src="https://raw.githubusercontent.com/AnastasyaChe/static/master/ProductDetails3.jpg"
            alt="product"
          />

          <div class="productDetails">
            <h2>Mango People T-shirt</h2>
            <span class="color">Color:</span> Red
            <br />
            <span class="size">Size:</span> Xll
          </div>
        </div>
        <div class="productPrice tabElement">$150</div>
        <div class="productQuantity tabElement">
          <input type="number" plaseholder="2" />
        </div>
        <div class="produtcShipping tabElement">FREE</div>
        <div class="productSubtotal tabElement">$300</div>
        <div class="productAction tabElement">
          <i class="fas fa-times-circle"></i>
        </div>
      </article>
      <div class="line container"></div>
    </section>
    <div class="btns container">
      <button class="btnLeft">cLEAR SHOPPING CART</button>

      <button class="btnRight">cONTINUE sHOPPING</button>
    </div>
    <form class="inputs container">
      <div class="blockAdress">
        <h2 class="blockAdress__h">Shipping Adress</h2>
        <select required size="1">
          <option value="Бангладеш">Bangladesh</option>
          <option value="Сингапур">Singapur</option>
        </select>

        <input required type="text" class="adressState" placeholder="State" />
        <input required type="text" class="adressPost" placeholder="Postcode / Zip" />
        <button class="getQuote">get a quote</button>
      </div>
      <div class="blockAdress">
        <h2 class="blockAdress__h">coupon discount</h2>
        <label for="coupon">Enter your coupon code if you have one</label>
        <br />
        <input type="text" placeholder="State" />
        <br />
        <button class="applyCoupon">Apply coupon</button>
      </div>
      <div class="blockAdress rightBlockAdress">
        <h2 class="subTotal">Sub total &nbsp; &nbsp; $900</h2>
        <h2 class="grandT">
          GRAND TOTAL &nbsp;
          <span class="grandTotal">$900</span>
        </h2>
        <div class="lineInBlock"></div>
        <button class="proceedCheckout">proceed to checkout</button>
      </div>
    </form>
  </div>
</template>
