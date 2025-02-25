import { pixelToRem } from "../shared/utils/pixelToRem"

const styles = {
  global: {
    "*": {
      margin: 0,
      padding: 0,
      boxSizing: "border-box",
      fontFamily: "'Lato', 'sans-serif'",
      fontSize: "18px",
      fontWeight: 400,
      lineHeight: {
        base: "1.4",
        md: "1.6"
      }
    },

    "html, body, #__next": {
      height: "100%",
      color: "#333030"
    },

    a: {
      color: "blue"
    },

    strong: {
      fontWeight: 700
    },

    h1: {
      fontFamily: "'Rubik', 'sans-serif'",
      fontWeight: 700,
      fontSize: {
        md: pixelToRem(34),
        base: pixelToRem(22)
      },
      lineHeight: {
        md: pixelToRem(40),
        base: pixelToRem(26)
      }
    },

    h2: {
      fontFamily: "'Rubik', 'sans-serif'",
      fontWeight: 700,
      fontSize: {
        md: pixelToRem(34),
        base: pixelToRem(24)
      },
      lineHeight: {
        md: pixelToRem(40),
        base: pixelToRem(30)
      }
    },

    h5: {
      fontWeight: 400,
      fontSize: {
        md: pixelToRem(24),
        base: pixelToRem(17)
      },
      lineHeight: {
        md: pixelToRem(32),
        base: pixelToRem(24)
      }
    },

    input: {
      _disabled: {
        bg: "hsl(0, 0%, 95%)",
        color: "hsl(0, 0%, 60%)",
        opacity: "1 !important"
      },

      _focusVisible: {
        outline: "none!important",
        boxShadow: "none!important"
      }
    }
  }
}

export default styles
