<script setup lang="ts">
import { useDisplay } from 'vuetify/lib/framework.mjs'

const { mobile } = useDisplay()
const drawer = ref(false)
const items = [
  { title: 'Login', icon: 'mdi-login-variant', to: '/plataforma/login' },
  { title: 'My Profile', icon: 'mdi-account' },
  { title: 'Favorites', icon: 'mdi-star' },
  { title: 'About us', icon: 'mdi-information' }
]

</script>
<template lang="pug">
v-app
  v-app-bar
    v-app-bar-title fusca
    v-spacer
    v-app-bar-nav-icon(v-if="mobile" variant="text" @click.stop="drawer = !drawer")
  v-navigation-drawer(v-if="mobile" v-model="drawer" location="bottom" temporary)
    v-list(
      :lines="false"
      density="compact"
      nav
    )
      v-list-item(
        v-for="(item, i) in items"
        :key="i"
        :value="item"
        :to="item.to"
        color="secondary"
      )
        template(v-slot:prepend)
          v-icon(:icon="item.icon")
        v-list-item-title(v-text="item.title")
  v-layout
    v-main
      slot
</template>
