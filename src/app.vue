<script setup lang="ts">
const getLayout = (path: string) => {
  // if (path.startsWith('/institucional')) return 'institutional'
  // if (path.startsWith('/tests')) return 'test'
  if (path.startsWith('/plataforma')) return 'platform'
  return 'default'
}
const route = useRoute()
const path = computed(() => route.path)
const layout = computed(() => route?.meta?.layout ?? getLayout(path.value))
</script>
<template lang="pug">
NuxtLayout(:name="layout")
  NuxtPage
</template>
