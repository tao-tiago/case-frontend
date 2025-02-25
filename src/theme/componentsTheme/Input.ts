import { pixelToRem } from "@/shared/utils/pixelToRem"
import { defineStyle, defineStyleConfig } from "@chakra-ui/styled-system"

export const inputTheme = defineStyleConfig({
  baseStyle: defineStyle({
    whiteSpace: "inherit"
  }),
  variants: {
    action: defineStyle(() => {
      return {
        field: {
          fontSize: {
            base: pixelToRem(15),
            md: pixelToRem(16)
          },
          border: "1px solid #E2E8F0",
          borderRadius: "5px",
          height: "45px"
        }
      }
    }),
    outline: () => ({})
  },
  sizes: {
    md: {
      field: {
        height: "50px"
      }
    }
  },
  defaultProps: {
    variant: "outline"
  }
})
