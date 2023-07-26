<script setup lang="ts">
const props = withDefaults(defineProps<{
  variant?:
  | 'outlined'
  | 'plain'
  | 'solo'
  | 'filled'
  | 'underlined'
  | 'solo-inverted'
  | 'solo-filled'

}>(), {
  variant: 'outlined'
})
const defaults = {
  VTextField: {
    variant: props.variant,
    color: 'green',
  },
}



</script>
<template lang="pug">
v-defaults-provider(:defaults="defaults")
  v-card.mx-auto.px-6.py-8(max-width="344")
    v-form(
      v-model="form"
      @submit.prevent="onSubmit"
    )
      v-text-field.mb-2(
        v-model="email"
        :readonly="loading"
        :rules="[required]"
        clearable
        label="Email"
      )
      v-text-field.mb-4(
        v-model="password"
        :readonly="loading"
        :rules="[required]"
        clearable
        label="Password"
        placeholder="Enter your password"
      )
      v-btn(
        :disabled="!form"
        :loading="loading"
        block
        color="success"
        size="large"
        type="submit"
        variant="elevated"
      ) Sign In
</template>
