<template>
    <n-space class="center" style="max-width: 700px">
      <n-carousel show-arrow>
               <img
          class="carousel-img"
          src="../assets/merc-jag.jpeg"
        />
        <img
          class="carousel-img"
          src="../assets/jag-wed.jpeg"
        />
        <img
          class="carousel-img"
          src="../assets/black-merc.jpg"
        />
        <img
          class="carousel-img"
          src="../assets/black-merc-van.jpeg"
        />
      </n-carousel>
    </n-space>
</template>

<style scoped>

.n-carousel{
  pointer-events:all;
}

.carousel-img{
    max-height: 300px;;
}
</style>