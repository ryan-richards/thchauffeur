<template>
  <n-layout-content content-style="padding: 24px;" v-motion-fade>
    <n-h1 class="center" style="font-size: 2rem; max-width: 800px"
      >Professional Discrete Experienced Chauffeur Service</n-h1
    >
    <n-space class="center" style="max-width: 700px">
      <n-carousel autoplay>
               <img
          class="carousel-img"
          src="../assets/merc-logo.jpg"
        />
        <img
          class="carousel-img"
          src="../assets/wedding-car.jpg"
        />
        <img
          class="carousel-img"
          src="../assets/airport.jpg"
        />
        <img
          class="carousel-img"
          src="../assets/business.jpg"
        />
        <img
          class="carousel-img"
          src="../assets/jag-logo.jpg"
        />
      </n-carousel>
    </n-space>
  </n-layout-content>

  <n-layout-content content-style="padding: 24px;" v-motion-fade>
    <n-p
      class="center"
      style="
        max-width: 600px;
        text-align: left;
        font-size: 1.8rem;
        line-height: 1.9rem;
      "
    >
      Welcome to TH Chauffeur Service where we can offer you a range of
      transport options for
    </n-p>

    <n-space class="center" style="max-width: 600px">
      <n-ol
        style="
          max-width: 500px;
          text-align: left;
          list-style: circle;
          font-size: 1.5rem;
        "
      >
        <n-li>Wedding Day Vehicles</n-li>
        <n-li>Executive Travel Requirements</n-li>
        <n-li>VIP Airport Transfers</n-li>
        <n-li>Special Occasions</n-li>
        <n-li>Golf Tours</n-li>
      </n-ol>
    </n-space>

<n-button class="center" icon-placement="right" size="large">
        Contact
        <template #icon>
          <n-icon>
            <location-icon />
          </n-icon>
        </template>
      </n-button>

  </n-layout-content>
  <n-layout-content content-style="padding:24px;" v-motion-fade-visible>

    <n-space
      class="center"
      style="max-width: 600px; padding-top: 2rem; text-align: left"
      v-motion-fade-visible
    >
    <n-card>
<n-h2>
        Please contact Terry to discuss how we can help with your requirements
        and make your occasion go smoothly in Style and Luxury.
      </n-h2>
      <n-button class="center" icon-placement="right" size="large">
        Contact
        <template #icon>
          <n-icon>
            <mail-icon />
          </n-icon>
        </template>
      </n-button>
    </n-card>
      
    </n-space>
  </n-layout-content>
</template>

<script>
import { MailOutline as MailIcon,
LocationOutline as LocationIcon
 } from "@vicons/ionicons5";
import { defineComponent } from "vue";
export default defineComponent({
  components: {
    MailIcon,
    LocationIcon
  },
  setup() {},
});
</script>

<style>
.center {
  margin-left: auto;
  margin-right: auto;
}

.center-it,
.center-column,
.top,
.right,
.bottom,
.left {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
}

.carousel-img {
  width: 100%;
  height: 50vh;
  object-fit: cover;
}
</style>