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
      <n-button style="margin-top:0rem;" class="center" icon-placement="right" size="large">
        Contact
        <template #icon>
          <n-icon>
            <mail-icon />
          </n-icon>
        </template>
      </n-button>

    </n-card>

    </n-space>

</n-space>
</template>

<script>
import { MailOutline as MailIcon } from "@vicons/ionicons5";
import { defineComponent } from "vue";
export default defineComponent({
  components: {
    MailIcon,
  }
});
</script>