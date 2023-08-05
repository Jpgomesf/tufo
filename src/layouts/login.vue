<template lang="pug">
v-app
  v-layout
    v-main
      .d-flex.flex-column.fill-height.justify-center.align-center.text-white.image(height="100vh")
        slot
</template>
<style scoped>
.image {
  background-image: url('/images/tufo-bg.jpg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}
</style>
