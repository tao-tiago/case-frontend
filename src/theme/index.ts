import { extendTheme } from "@chakra-ui/react"

import components from "./componentsTheme"
import styles from "./global"
import colors from "./colors"

const theme = extendTheme({
  components,
  styles,
  colors
})

export { theme }
