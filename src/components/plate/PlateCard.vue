<template lang="pug">
v-card(
  width="400"
)
  v-img(
    cover
    height="250"
    aspect-ratio="16 / 9"
    src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
  )
    v-toolbar(
      color="rgba(0, 0, 0, 0)"
      theme="dark"
    )
      template(v-slot:append)
        v-btn(icon="mdi-heart")
        v-btn(icon="mdi-dots-vertical")
  v-card-item
    v-card-title Cafe Badilico
    v-card-subtitle
      span.me-1 Local Favorite
      v-icon(
        color="error"
        icon="mdi-fire-circle"
        size="small"
      )
  v-card-text
    v-row(
      align="center"
      class="mx-0"
    )
      v-rating(
        :model-value="4.5"
        color="amber"
        density="compact"
        half-increments
        readonly
        size="small"
      )
      .text-grey.ms-4 4.5 (413)
    .my-4.text-subtitle-1 $ • Italian, Cafe
    div Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.
  v-divider.mx-3.mb-1
  v-card-actions.mr-1.mb-1
    v-spacer
    v-btn(color="red" variant="outlined") ADICIONAR
</template>
