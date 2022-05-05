<template>
    
<n-layout-content>

<n-h1 style="margin-top:50px;">Reccomended Vendors</n-h1>

<n-space class="center" style="max-width: 600px; padding-bottom:50px; padding-left:10px; padding-right:10px;">
<n-h3>Here are some other wedding vendors I love to work with!</n-h3>
      <n-ol
        style="
          max-width: 500px;
          text-align: left;
          list-style: circle;
          font-size: 1.2rem;
        "
      >
        <n-li><n-a href="https://brookavenue.co.uk/" target="_blank">Brook Avenue Gelato</n-a></n-li>
        <n-li><n-a href="https://www.instagram.com/ryanjrichards_/" target="_blank">Ryan Richards Photo</n-a></n-li>
      </n-ol>
</n-space>

<Contact/>

</n-layout-content>


</template>


<script>
import { defineComponent , ref } from "vue";
import Contact from "../components/Contact.vue"
import ImageSlider from "../components/ImageSlider.vue"
export default defineComponent({
  components: {
    Contact,
    ImageSlider
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