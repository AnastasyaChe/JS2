<template>
  <div>
    <div class="backArrivals container-fluid">
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
    <main>
      <details class="details container">
        <summary class="details__title">01. Shipping Adress</summary>
        <div
          class="details container d-flex flex-column flex-sm-row flex-lg-row flex-md-row flex-xl-row"
        >
          <form action="#" class="form-left">
            <h3 class="details__h">Check as a guest or register</h3>
            <p class="details__prompt">Register with us for future convenience</p>
            <div class="details__radio">
              <label>
                <p class="details__input">
                  <input name="details__input" type="radio" value="guest" /> checkout
                  as guest
                </p>
              </label>
              <label>
                <p class="details__input">
                  <input name="details__input" checked type="radio" value="reguister" /> register
                </p>
              </label>
            </div>
            <a href="#">
              <h3 class="details__h">register and save time!</h3>
            </a>
            <p class="details__prompt">Register with us for future convenience</p>
            <ul class="menu">
              <li class="menu__list">Fast and easy checkout</li>
              <li class="menu__list">Easy access to your order history and status</li>
            </ul>
            <button class="form-button">Continue</button>
          </form>
          <form action="#" class="form-right">
            <h3 class="details__h">Already registed?</h3>
            <p class="details__prompt details__prompt_right">Please log in below</p>
            <div class="form-right form-right__group">
              <label for="form-right__email">
                Email address
                <span class="form-right__span">*</span>
              </label>
              <input
                required
                type="email"
                class="form-right__email"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              <br />
              <label for="form-right__password">
                Password
                <span class="form-right__span">*</span>
              </label>
              <input
                required
                type="password"
                class="form-right__password"
                id="exampleInputPassword1"
              />
            </div>
            <p class="details__prompt_special">* Required Fileds</p>
            <div class="form-right__click">
              <button class="form-button">Log in</button>
              <a href="#" class="form-right__link">Forgot Password ?</a>
            </div>
          </form>
        </div>
      </details>
      <hr />
      <details class="details container">
        <summary class="details__title">02. BILLING INFORMATION</summary>
      </details>
      <hr />
      <details class="details container">
        <summary class="details__title">03. SHIPPING INFORMATION</summary>
      </details>
      <hr />
      <details class="details container">
        <summary class="details__title">04. SHIPPING METHOD</summary>
      </details>
      <hr />
      <details class="details container">
        <summary class="details__title">05. PAYMENT METHOD</summary>
      </details>
      <hr />
      <details class="details container">
        <summary class="details__title">06. ORDER REVIEW</summary>
      </details>
      <hr />
    </main>
  </div>
</template>
