<template>

<n-layout-footer style="padding:24px;">

<n-grid cols="1 s:2" responsive="screen" style="padding-top:2rem;">
<n-grid-item style="padding-bottom:2rem;">
<n-ul style="text-align:left;font-size:1rem;">
  <n-li>TH Chauffeur Service</n-li>
  <n-li><n-a href="mailto:terryhutley@me.com">terryhutley@me.com</n-a></n-li>
  <n-li>© Terry Hutley 2022</n-li>
</n-ul>
</n-grid-item>
<n-grid-item style="padding-bottom:2rem;">
  <n-ul style="text-align:left;font-size:1rem;">
  <n-li><router-link to="/airport-transfers"><n-a>Airport Transfers</n-a></router-link></n-li>
  <n-li><router-link to="/weddings"><n-a>Weddings</n-a></router-link></n-li>
  <n-li><router-link to="/private-hire"><n-a>Private Hire</n-a></router-link></n-li>
  <n-li><router-link to="/executive"><n-a>Executive</n-a></router-link></n-li>
  <n-li><router-link to="/reccomended"><n-a>Reccomended Vendors</n-a></router-link></n-li>
</n-ul>
</n-grid-item>
</n-grid>


  
</n-layout-footer>
    
</template>

<script>

</script>

<style scoped>

.n-a:hover{
  color:#63e2b7;
  text-decoration: underline;
}


</style>