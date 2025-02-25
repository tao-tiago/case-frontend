import getConfig from "next/config"

const { publicRuntimeConfig = {} } = getConfig()

// API
export const API = publicRuntimeConfig.API
