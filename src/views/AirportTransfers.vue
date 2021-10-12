<template>
    
<n-layout-content>

<n-h1>Airport Transfers</n-h1>

<n-space class="center" style="max-width: 700px"> 
<div class="pad">
   <img
          class="img-pad"
          src="../assets/airport.jpg"
        />
    </div>
</n-space>

<n-h3>We can provide you a full service of Meet and Greet and Transfer to your destination.</n-h3>

<n-space class="center" style="max-width: 600px">
      <n-ol
        style="
          max-width: 500px;
          text-align: left;
          list-style: circle;
          font-size: 1.2rem;
        "
      >
        <n-li>Belfast International Airport</n-li>
        <n-li>Belfast City Airport (George Best)</n-li>
        <n-li>City of Derry Airport</n-li>
        <n-li>Dublin International Airport</n-li>
      </n-ol>
</n-space>

<n-h3>
 <n-text italic>Travel in style in our Luxury Mercedes S class</n-text>  
</n-h3>
 

<Contact />

</n-layout-content>


</template>


<script>
import { defineComponent } from "vue";
import Contact from "../components/Contact.vue"
export default defineComponent({
  components: {
    Contact
  },
  setup() {},
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