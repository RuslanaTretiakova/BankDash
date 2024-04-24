<template>
  <div class="card-container">
    <section class="col-span-2">
      <h2 class="title">My Cards</h2>
      <div class="card">1</div>
    </section>
    <section>
      <h2 class="title">Recent Transaction</h2>
      <div class="card">1</div>
    </section>
    <section class="col-span-2 weekly-activity">
      <h2 class="title">Weekly Activity</h2>
      <div class="card">
        <canvas class="weekly-activity__canvas j-weekly-activity-chart"></canvas>
      </div>
    </section>
    <section>
      <h2 class="title">Expense Statistics</h2>
      <div class="card">
        <canvas class="canvas j-expense-statistics-chart"></canvas>
      </div>
    </section>
    <section>
      <h2 class="title">Quick transfer</h2>
      <div class="card">
        <div class="quick-transfer-swiper j-quick-transfer">
          <div class="swiper-wrapper">
            <div class="swiper-slide quick-transfer-swiper__slide">
              <img class="quick-transfer-swiper__img" src="/swiper/Livia.jpg" alt="Avatar" />
              <div>
                <h5 class="quick-transfer-swiper__name">Livia Bator</h5>
                <p class="quick-transfer-swiper__position">CEO</p>
              </div>
            </div>
            <div class="swiper-slide quick-transfer-swiper">
              <img
                class="quick-transfer-swiper__img quick-transfer-swiper__img--bottom"
                src="/swiper/Randy.jpg"
                alt="Avatar"
              />
              <div>
                <p class="quick-transfer-swiper__name">Randy Press</p>
                <p class="quick-transfer-swiper__position">Director</p>
              </div>
            </div>
            <div class="swiper-slide quick-transfer-swiper">
              <img class="quick-transfer-swiper__img" src="/swiper/Workman.jpg" alt="Avatar" />
              <div>
                <p class="quick-transfer-swiper__name">Workman</p>
                <p class="quick-transfer-swiper__position">Designer</p>
              </div>
            </div>
            <div class="swiper-slide quick-transfer-swiper">
              <img class="quick-transfer-swiper__img" src="/swiper/Livia.jpg" alt="Avatar" />
              <div>
                <p class="quick-transfer-swiper__name">Livia Bator</p>
                <p class="quick-transfer-swiper__position">CEO</p>
              </div>
            </div>
            <div class="swiper-slide quick-transfer-swiper">
              <img
                class="quick-transfer-swiper__img quick-transfer-swiper__img--bottom"
                src="/swiper/Randy.jpg"
                alt="Avatar"
              />
              <div>
                <p class="quick-transfer-swiper__name">Randy Press</p>
                <p class="quick-transfer-swiper__position">Director</p>
              </div>
            </div>
            <div class="swiper-slide quick-transfer-swiper">
              <img class="quick-transfer-swiper__img" src="/swiper/Workman.jpg" alt="Avatar" />
              <div>
                <p class="quick-transfer-swiper__name">Workman</p>
                <p class="quick-transfer-swiper__position">Designer</p>
              </div>
            </div>
          </div>
          <div class="swiper-button-next"></div>
        </div>
        <form action="#" class="transfer">
          <label class="transfer__label" for="transfer">Write amount</label>
          <input class="transfer__input" type="number" placeholder="00.00" name="transfer" />
          <button class="transfer__button">
            Send
            <i class="ri-send-plane-fill"></i>
          </button>
        </form>
      </div>
    </section>
    <section class="col-span-2">
      <h2 class="title">Balance History</h2>
      <div class="card">
        <canvas class="canvas j-balance-history-chart"></canvas>
      </div>
    </section>
  </div>
</template>
