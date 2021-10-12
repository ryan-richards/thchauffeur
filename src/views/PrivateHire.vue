<template>
    <n-layout-content>

<n-h1>Private Hire</n-h1>

<n-space class="center " style="max-width: 700px">
    <div class="pad">
   <img
          class="img-pad"
          src="../assets/private-hire.jpg"
        />
    </div>
 
</n-space>

<n-h3>We can provide you with a range to Modern Luxury vehicles to suit your requirements.</n-h3>

<n-space class="center" style="max-width: 500px">
      <n-ol
        style="
          max-width: 500px;
          text-align: left;
          list-style: circle;
          font-size: 1.2rem;
        "
      >
        <n-li>Anniversaries</n-li>
        <n-li>Christenings</n-li>
        <n-li>Evenings Out</n-li>
        <n-li>Golf Tours</n-li>
        <n-li>Holiday Airport Transfers</n-li>
      </n-ol>
</n-space>

<n-h3>
 <n-text italic>Let us drive you in comfort and style with no worries as to parking etc.</n-text>  
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