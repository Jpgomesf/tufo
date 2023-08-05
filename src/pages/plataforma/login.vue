<script setup lang="ts">
import { useDisplay } from 'vuetify/lib/framework.mjs';

definePageMeta({
  layout: "login",
})

const { mobile } = useDisplay()

</script>
<template lang="pug">
v-card.py-4.px-3(flat width="370px" color="transparent")
  v-card-title.d-flex.flex-column.justify-center.align-center
    v-icon.mb-3(icon="mdi-silverware" size="x-large")
    .mb-12.text-h4 Login
  v-card-text
    v-form
      v-text-field.mb-2(variant="solo" type="email" label="Email")
      v-text-field(variant="solo" append-inner-icon="mdi-eye" type="password" label="Password")
  v-card-actions
    v-row.mx-auto
      v-col(cols="12")
        v-btn(block variant="elevated" elevation="1" color="secondary") Entrar 
      v-col(cols="12")
        v-btn(block variant="text" color="secondary") Esqueceu sua senha? 
      v-col.mt-3(cols="4")
        v-divider.border-opacity-75(color="white")
      v-col(cols="4")
        .text-body-1.text-center ou
      v-col.mt-3(cols="4")
        v-divider.border-opacity-75(color="white")
      v-col(cols="12")
        v-btn(block variant="elevated" elevation="2" color="black") Entrar com Google 
      v-col(:cols="mobile ? 12 : 7")
        .d-flex.flex-column.align-center
          .text-body-4 Não possui cadastro?
          v-btn(v-if="mobile" size="small" variant="tonal" elevation="1" color="secondary") Cadastre-se
      v-col(v-if="!mobile" cols="5")
        v-btn(size="small" variant="tonal" elevation="1" color="secondary") Cadastre-se
</template>
