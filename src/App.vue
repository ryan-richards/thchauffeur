<template>
 <n-config-provider :theme="darkTheme">
   <n-global-style />
  <Navbar />
  <div>
    <router-view />
  </div>
  <Footer />
   </n-config-provider>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import { darkTheme } from 'naive-ui'

 export default {
   components: { 
     Navbar,
     Footer
   },
    setup() {
      return{
        darkTheme
      }
    }
 }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

.center,
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

body {
  overflow-x: hidden ;
}

</style>
