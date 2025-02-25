import { QueryClient } from "react-query"

export const generateQueryClient = (): QueryClient => {
  return new QueryClient()
}

export const queryClient = generateQueryClient()
