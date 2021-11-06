<template>
<n-layout>
<n-layout-header align="left">
<n-space justify="space-between" >
 <img
          class="logo"
          src="../assets/logo.png"
        />
<n-menu v-model:value="activeKey" mode="horizontal" :options="menuOptions" v-if="!(isMobile || isTablet)"/>

<n-dropdown
    v-if="isMobile || isTablet"
    trigger="click"
    :options="menuOptions"
    :show-arrow="true"
    placement="bottom-end"
  >
<n-button text style="font-size: 24px;">
        <n-icon>
          <menu-outline />
        </n-icon>
    </n-button>
</n-dropdown>

    </n-space>
</n-layout-header>
</n-layout>
</template>

<script>
import { defineComponent, h, ref } from 'vue'
import { NIcon } from 'naive-ui'
import { RouterLink } from 'vue-router'
import {
  MenuOutline,
  BriefcaseOutline as ExecutiveIcon,
  HomeOutline as HomeIcon,
  HeartOutline as WeddingIcon,
  AirplaneOutline as AirportIcon,
  SparklesOutline as PrivateIcon
} from '@vicons/ionicons5'
import { useIsMobile, useIsTablet } from '../utils/composables'
function renderIcon (icon) {
  return () => h(NIcon, null, { default: () => h(icon) })
}
const menuOptions = [
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: 'Home',
          }
        },
        { default: () => 'Home' }
      ),
    key: 'go-back-home',
    icon: renderIcon(HomeIcon)
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            path: '/airport-transfers'
          }
        },
        { default: () => 'Airport Transfers' }
      ),
    key: 'Airport Transfers',
    icon: renderIcon(AirportIcon)
  },
    {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            path: '/weddings'
          }
        },
        { default: () => 'Weddings' }
      ),
    key: 'Weddings',
    icon: renderIcon(WeddingIcon)
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            path: '/private-hire'
          }
        },
        { default: () => 'Private Hire' }
      ),
    key: 'Private Hire',
    icon: renderIcon(PrivateIcon)
  },
    {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            path: '/executive'
          }
        },
        { default: () => 'Executive' }
      ),
    key: 'Executive',
    icon: renderIcon(ExecutiveIcon)
  },
]
export default defineComponent({
components: {
   MenuOutline
  },
  setup () {
    const isMobileRef = useIsMobile()
    const isTabletRef = useIsTablet()
    return {
      overlap: ref(false),
      activeKey: ref(null),
      isMobile: isMobileRef,
      isTablet: isTabletRef,
      menuOptions
    }
  }
})
</script>


<style scoped>
.n-layout-header,
.n-layout-footer {
background-color:rgb(16,16,20) ;
  padding: 24px;
}

.logo {
  max-width:60px;
}
</style>