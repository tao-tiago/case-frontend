import { IUseInit } from "./useInit.model"

import { useUser } from "@/modules/user/user.hook"

export const useInitViewModel = (): IUseInit => {
  return {
    user: useUser(),
  }
}
