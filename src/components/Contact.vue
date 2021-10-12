<template>
    <n-space vertical style="padding-top:2rem;padding-bottom:3rem;">


    <n-space
      class="center"
      style="max-width: 600px; padding:24px; text-align: left;"
    >
    <n-card>

      <n-h2>
        Please contact Terry to discuss how we can make your journey hassle free.
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

</n-space>
</template>

<script>
import { MailOutline as MailIcon,
CallOutline as MobileIcon } from "@vicons/ionicons5";
import { defineComponent } from "vue";
export default defineComponent({
  components: {
    MailIcon,
    MobileIcon
  },
  setup(){
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
    return {
      sendEmail,
      callMobile,
    }
  }
});
</script>