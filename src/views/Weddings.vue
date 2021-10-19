<template>
    
<n-layout-content>

<n-h1>Wedding Car Hire</n-h1>

<n-space justify class="center" style="max-width: 700px"> 
<div class="pad">
   <img
          class="img-pad"
          src="../assets/wedding-car1.jpg"
        />
    </div>
</n-space>

<n-space vertical class="center" style="max-width: 700px;padding:24px;"> 
<n-h3>Let us take care of all your transport needs on your Special Day
We cover Northern Ireland and into the South as required.</n-h3>
<n-h3><n-text italic>Travel in Luxury and Style</n-text> </n-h3>
</n-space>

<n-h3 class="center" style="text-align:left;max-width:700px;">We will look after:</n-h3>
<n-space class="center" style="max-width:500px;padding:10px;">

      <n-ol
        style="
          max-width: 500px;
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

<n-space justify class="center" style="max-width: 700px" @click="openModal" > 
    <n-button @click="openModal">View Vehicles</n-button>
</n-space>

<n-modal v-model:show="showModal" 
:mask-closable="false" preset="dialog" title="Available Vehicles"
:show-icon="false" :on-close="unlock"
>
    <ImageSlider />
</n-modal>

<Contact />

</n-layout-content>


</template>


<script>
import { defineComponent, ref} from "vue";
import Contact from "../components/Contact.vue"
import ImageSlider from "../components/ImageSlider.vue"
export default defineComponent({
  components: {
    Contact,
    ImageSlider
  },
  setup() {

    const showModal = ref(false);
  
    function openModal(){
      showModal.value = true;
      document.body.classList.add("modal-open");
    }

    function unlock(){
      document.body.classList.remove("modal-open");
    }

    return{
      showModal,
      openModal,
      unlock
    }
  },
});
</script>

<style>

.center {
  margin-left: auto;
  margin-right: auto;
  
}

.img-pad {
  width: 100%;
  height: 50vh;
  object-fit: cover;
}

.pad{
    padding-left: 1rem;
    padding-right: 1rem;
    position: relative;
}

body.modal-open{
  overflow: hidden;
}
</style>
