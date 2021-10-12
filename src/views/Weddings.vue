<template>
    
<n-layout-content>

<n-h1>Wedding Car Hire</n-h1>

<n-space class="center" style="max-width: 700px"> 
<div class="pad">
   <img
          class="img-pad"
          src="../assets/wedding-car.jpg"
        />
    </div>
</n-space>

<n-space vertical class="center" style="max-width: 700px;padding:24px;"> 
<n-h3>Let us take care of all your transport needs on your Special Day
We cover Northern Ireland and into the South as required.</n-h3>
<n-h3><n-text italic>Travel in Luxury and Style</n-text> </n-h3>
</n-space>



<n-grid cols="1 s:2" responsive="screen" style="padding-top:2rem;">
  <n-grid-item>
       <img src="../assets/merc.png"/>
       <n-h4 style="margin-top:-1rem;">Mercedes S Class</n-h4>
  </n-grid-item>
    <n-grid-item>
       <img src="../assets/jag.jpeg"/>
       <n-h4 style="margin-top:-1rem;">Jaguar XJ L</n-h4>
  </n-grid-item>
</n-grid>


<n-h3 class="center" style="text-align:left;max-width:700px;">We will look after:</n-h3>
<n-space class="center" style="max-width:700px;padding:24px;">

      <n-ol
        style="
          max-width: 700px;
          text-align: left;
          list-style: circle;
          font-size: 1.2rem;
        "
      >
        <n-li>Transport of Groom and Groomsmen to Wedding Service</n-li>
        <n-li>Transport of Bridesmaids to Wedding Service</n-li>
        <n-li>Transport of Bride to Wedding Service</n-li>
        <n-li>Transport of Bride and Groom to Reception Venue</n-li>
        <n-li>Transport of Bridesmaids and Groomsmen to Wedding Venue</n-li>
        <n-li>Photo stop as required</n-li>
        <n-li>We will even have a Bottle of Bubbly for you to enjoy.</n-li>
      </n-ol>
</n-space>


<n-space vertical class="center" style="padding:24px;text-align:left;max-width:700px;">
  <n-h3>
 <n-text strong>Leaving you to enjoy your day!
</n-text>  
</n-h3>
 <n-h4>
 <n-text italic>We can also source a range of other Luxury Vehicles on request just ask.</n-text>  
</n-h4>
</n-space>

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

</style>