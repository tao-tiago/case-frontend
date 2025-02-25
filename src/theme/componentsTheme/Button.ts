import { pixelToRem } from "@/shared/utils/pixelToRem"
import { defineStyle, defineStyleConfig } from "@chakra-ui/styled-system"

export const buttonTheme = defineStyleConfig({
  baseStyle: defineStyle({
    whiteSpace: "inherit"
  }),
  sizes: {
    md: defineStyle({
      fontSize: "sm",
      height: "50px"
    })
  },
  variants: {
    social: defineStyle(({ colorScheme }) => {
      return {
        fontWeight: 600,
        color: "white",
        lineHeight: "20px",
        bg: `${colorScheme}.500`,
        borderRadius: "30px",
        transition: "transform 0.15s ease-out, background 0.15s ease-out",

        _hover: {
          bg: `${colorScheme}.600`
        }
      }
    }),
    action: defineStyle(({ colorScheme }) => {
      return {
        fontWeight: 600,
        fontSize: {
          base: pixelToRem(15),
          md: pixelToRem(16)
        },
        color: "white",
        textTransform: "uppercase",
        height: "48px",
        lineHeight: "20px",
        bg: `${colorScheme}.500`,
        borderRadius: "35px",
        transition: "transform 0.15s ease-out, background 0.15s ease-out",

        _hover: {
          bg: `${colorScheme}.600`
        },

        ":hover[disabled]": {
          bg: `${colorScheme}.600`
        }
      }
    }),
    solid: () => ({})
  },
  defaultProps: {
    colorScheme: "blue",
    variant: "solid",
    size: "md"
  }
})
