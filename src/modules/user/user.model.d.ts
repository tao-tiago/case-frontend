export type IUserData = {
  id: string
  name: string
  email: string
  password: string
  createdAt: string
  updatedAt: string
}

export type IUseUser = {
  vm: {
    useGetUsers: (payload: {
      size: number
      page: number
    }) => {
      data: IUserData[],
      isLoading: boolean
    },
    useCreateUser: () => function
    useUpdateUser: () => function
    useDeleteUser: () => function
  }
}
