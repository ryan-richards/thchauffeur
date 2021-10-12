<template>
    <n-layout-content>

<n-h1>Executive Transfers</n-h1>

<n-space class="center " style="max-width: 700px">
    <div class="pad">
   <img
          class="img-pad"
          src="../assets/business1.jpg"
        />
    </div>
 
</n-space>

<n-h3>We can provide a range of Modern Luxury vehicles for all your transport needs</n-h3>

<n-space class="center" style="max-width: 500px">
      <n-ol
        style="
          max-width: 500px;
          text-align: left;
          list-style: circle;
          font-size: 1.2rem;
        "
      >
        <n-li>VIP visits</n-li>
        <n-li>Business meetings</n-li>
        <n-li>To and from Restaurants</n-li>
        <n-li>Collection from airport to meetings</n-li>
        <n-li>Around Northern and Southern Ireland</n-li>
      </n-ol>
</n-space>

<n-h3 class="center" style="max-width:600px;padding:24px;">
 <n-text italic>Travel without the worry of parking and get to your 
appointments ready to do business.
Our Chauffeurs provide you with a discreet and confidential 
journey getting you there on time and fully refreshed.</n-text>  
</n-h3>
 

<Contact />

</n-layout-content>
</template>

<script>
import { defineComponent } from "vue";
import Contact from "../components/Contact.vue"
export default defineComponent({
  components: {
    Contact,
  },
});
</script>

<style>
.img-pad {
  width: 100%;
  height: 50vh;
  object-fit: cover;
}

.pad{
    padding-left: 1rem;
    padding-right: 1rem;
}

</style>