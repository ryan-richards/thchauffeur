<template>
  <n-layout-content content-style="padding: 24px;" v-motion-fade>
    <n-h1 class="center" style="font-size: 2rem; max-width: 800px"
      >Professional Discreet Experienced Chauffeur Service</n-h1
    >
    <n-space class="center" style="max-width: 700px">
      <n-carousel autoplay>
               <img
          class="carousel-img"
          src="../assets/merc-logo.jpg"
        />
        <img
          class="carousel-img"
          src="../assets/wedding-car1.jpg"
        />
        <img
          class="carousel-img"
          src="../assets/airport2.jpg"
        />
        <img
          class="carousel-img"
          src="../assets/business1.jpg"
        />
        <img
          class="carousel-img"
          src="../assets/private-hire.jpg"
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
      <n-space justify="center">
      <n-button @click="sendEmail" style="margin-top:0rem;min-width:150px;" class="center" icon-placement="right" size="large">
        Email
        <template #icon>
          <n-icon>
            <mail-icon />
          </n-icon>
        </template>
      </n-button>
        <n-button @click="callMobile" style="margin-top:0rem;min-width:150px;" class="center" icon-placement="right" size="large">
        Mobile
        <template #icon>
          <n-icon>
            <mobile-icon />
          </n-icon>
        </template>
      </n-button>

      </n-space>
    </n-card>
      
    </n-space>
  </n-layout-content>
</template>

<script>
import { MailOutline as MailIcon,
CallOutline as MobileIcon
 } from "@vicons/ionicons5";
import { defineComponent } from "vue";
export default defineComponent({
  components: {
    MailIcon,
    MobileIcon,
  },
  setup() {

    function sendEmail() {
    var email = "terryhutley@me.com";
    var subject = "I'm interested in chauffeur services ";
    var emailBody = 'Hello Terry,';
    document.location = "mailto:"+email+"?subject="+subject+"&body="+emailBody;
    }
    function callMobile() {
    var mobile = "07595023157";
    document.location = "tel:"+mobile;
    }

    return{
      sendEmail,
      callMobile,
    }

  },
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


.n-carousel{
  pointer-events: none;
}
</style>
