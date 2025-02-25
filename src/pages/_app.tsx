import { AppProps } from "next/app"
import { QueryClientProvider } from "react-query";
import { ChakraProvider } from "@chakra-ui/react"

// Serviços
import { ReactQueryDevtools } from "react-query/devtools";
import { queryClient } from "../services/query";

// Tema
import { theme } from "../theme"

function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>

      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}

export default App
