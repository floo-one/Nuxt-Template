// eslint.config.js
import { stefanobartoletti, tailwind, vue } from '@stefanobartoletti/eslint-config'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  // More ESlint Flat configs, appended to Nuxt's
)
  .prepend(
    stefanobartoletti(
      {}, // Antfu Options, required
      vue, // Optional, but recommended to follow this config style preferences
      tailwind, // Optional, depending on the project
    ),

  )
