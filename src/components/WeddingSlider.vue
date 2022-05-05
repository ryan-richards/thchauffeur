<template>
    <n-space class="center" style="max-width: 700px">
      <n-carousel show-arrow>
        <img
          class="carousel-img"
          src="../assets/Pic14.jpg"
        />
        <img
          class="carousel-img"
          src="../assets/Pic13.jpg"
        />
        <img
          class="carousel-img"
          src="../assets/Pic15.jpg"
        />
        <img
          class="carousel-img"
          src="../assets/Pic16.jpg"
        />
        <img
          class="carousel-img"
          src="../assets/Pic17.jpg"
        />
      </n-carousel>
    </n-space>
</template>

<style scoped>

.n-carousel{
  pointer-events:all;
}

.carousel-img{
    object-fit: contain;
    min-height: 300px;;
}
</style>