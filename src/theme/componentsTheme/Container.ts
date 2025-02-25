import { defineStyle, defineStyleConfig } from "@chakra-ui/styled-system"

export const containerTheme = defineStyleConfig({
  baseStyle: defineStyle({
    maxWidth: "720px",
    display: "flex",
    flexDirection: "column"
  })
})
