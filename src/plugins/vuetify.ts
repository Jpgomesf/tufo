// plugins/vuetify.js
import { ThemeDefinition, createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const tufoBlue = '#3F16E3'
const tufoPurple = '#A130EB'
const tufoOrange = '#FF6F00'
const tufoBlueDark = '#230A63'
const tufoShadow = '#402A77'
const tufoLight = '#C6BAF7'
const tufoBlack = '#161616'
const tufoGray = '#6A6A6A'
const tufoGraphite = '#2C302E'
const gradientTufoA = '#4416E4'
const gradientTufoB = '#A115F5'
const gradientBlackA = '#1F0A63'
const gradientBlackB = '#450A6A'
const gradientGreenA = '#2FC16D'
const gradientGreenB = '#ADFF95'
const gradientGreenBlueA = '#38A9F9'
const gradientGreenBlueB = '#7BC2A1'
const gradientBlueA = '#33A2F9'
const gradientBlueB = '#1D3CDD'
const gradientPurpleA = '#4416E4'
const gradientPurpleB = '#A115F5'
const gradientMagentaA = '#FE72DA'
const gradientMagentaB = '#A645D2'
const gradientOrangeA = '#F8B77F'
const gradientOrangeB = '#E54C3F'
const gradientRedA = '#FF6955'
const gradientRedB = '#FD0000'

const primary = tufoBlue
const secondary = tufoOrange
const error = '#FF2F2F'
const info = '#068DDD'
const warning = '#FFE150'
const success = '#58DF56'

const dark: ThemeDefinition = {
  dark: true,
  colors: {
    primary,
    secondary,
    error,
    info,
    warning,
    success,
    tufoBlue,
    tufoPurple,
    tufoBlueDark,
    tufoShadow,
    tufoLight,
    tufoBlack,
    tufoGray,
    tufoGraphite,
    gradientTufoA,
    gradientTufoB,
    gradientBlackA,
    gradientBlackB,
    gradientGreenA,
    gradientGreenB,
    gradientGreenBlueA,
    gradientGreenBlueB,
    gradientBlueA,
    gradientBlueB,
    gradientPurpleA,
    gradientPurpleB,
    gradientMagentaA,
    gradientMagentaB,
    gradientOrangeA,
    gradientOrangeB,
    gradientRedA,
    gradientRedB,
  },
}

const light: ThemeDefinition = {
  ...dark,
  dark: false,
}
export default defineNuxtPlugin(nuxtApp => {
  const vuetify = createVuetify({
    ssr: true,
    components,
    directives,
    theme: {
      defaultTheme: 'light',
      variations: {
        colors: ['primary', 'secondary', 'success', 'error', 'info', 'warning'],
        lighten: 1,
        darken: 2,
      },
      themes: {
        dark,
        light,
      },
    },
  })

  nuxtApp.vueApp.use(vuetify)
})

