import { chakra, Box, Text } from "@chakra-ui/react"
import { pixelToRem } from "@/shared/utils/pixelToRem"

export const Form = chakra("form", {
  baseStyle: {
    width: "100%",
    maxWidth: "720px",
    display: "flex",
    flexDirection: "column",
    gap: "8px"
  }
})

export const FieldInner = chakra(Box, {
  baseStyle: {
    display: "flex",
    flexDirection: "column",
    gap: "5px",

    "> span": {
      fontSize: pixelToRem(22),
      fontWeight: 500,
      color: "white"
    }
  }
})

export const Label = chakra(Text, {
  baseStyle: {
    fontSize: pixelToRem(15),
    fontWeight: "bold",
    color: "#555"
  }
})

export const Legend = chakra(Text, {
  baseStyle: {
    fontSize: pixelToRem(14),
    lineHeight: "18px",
    color: "#555"
  }
})

export const ListButton = chakra("ul", {
  baseStyle: {
    width: "100%",
    display: "flex",
    listStyle: "none",
    margin: 0,
    overflow: "auto",

    "> li": {
      background: "#fefefe",
      border: "1px solid #c9ced4",
      color: "#707780",
      height: "90px",
      margin: 0,
      maxWidth: "120px",
      minWidth: "120px",
      padding: 0,

      "&.active": {
        background: "#ebf0ff",
        border: "1px solid rgb(35, 46, 86)",
        color: "rgb(35, 46, 86)"
      }
    }
  }
})

export const IconButton = chakra(Box, {
  baseStyle: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    gap: "7px",

    "> svg": {
      width: "25px",
      height: "25px"
    },

    "> span": {
      fontSize: "14px",
      textAlign: "center"
    }
  }
})
