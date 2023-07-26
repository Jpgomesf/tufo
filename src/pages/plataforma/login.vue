<script setup lang="ts">

</script>
<template lang="pug">
v-parallax(
  src="https://static.vecteezy.com/system/resources/previews/002/076/927/original/cooking-ingredients-on-a-blue-wooden-background-free-photo.jpg"
  height="100vh"
)
  .d-flex.flex-column.fill-height.justify-center.align-center.text-white
    v-card.py-4.px-3(flat width="370px" color="transparent")
      v-card-title.d-flex.flex-column.justify-center.align-center
        v-icon.mb-3(icon="mdi-silverware" size="x-large")
        .mb-12.text-h4 Login
      v-card-text
        v-form
          v-text-field.mb-2(variant="outlined" type="email" label="Email")
          v-text-field(variant="outlined" append-inner-icon="mdi-eye" type="password" label="Password")
      v-card-actions
        v-row.mx-auto
          v-col(cols="12")
            v-btn.bg-blue(block elevation="2") Entrar 
          v-col(cols="12")
            v-btn(block variant="text" color="blue") Esqueceu sua senha? 
          v-col.mt-3(cols="4")
            v-divider.border-opacity-75(color="white")
          v-col(cols="4")
            .text-body-1.text-center ou
          v-col.mt-3(cols="4")
            v-divider.border-opacity-75(color="white")
          v-col(cols="12")
            v-btn.bg-black(block elevation="2") Entrar com Google 
          v-col(cols="7")
            .text-body-4 Não possui cadastro?
          v-col(cols="5")
            v-btn(variant="text" size="small" color="blue") Cadastre-se
</template>
