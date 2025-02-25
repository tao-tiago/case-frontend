import { useMutation, useQuery, useQueryClient } from "react-query"

import { IUserData, IUseUser } from "./user.model"
import { keys } from "@/services/query";
import { api } from "@/api";
import { Warning } from "@/errors";

export const useUser = (): IUseUser => {

  const useGetUsers = ({
    size,
    page,
  }: {
    size: number;
    page: number;
  }) => {
    const { isLoading, data } = useQuery([keys.user, page],
      async () => {
        try {
          const { data } = await api.get(`/users?page=${page}&size=${size}`);
          return data;
        } catch (error) {
          throw new Warning("Erro ao buscar as usuários");
        }
      },
      {
        staleTime: 1200000,
      },
    );

    return {
      data: data?.rows || [],
      isLoading,
    };
  }

  const useCreateUser = () => {
    const queryClient = useQueryClient();

    const { mutate: createUser } = useMutation(
      async (payload: Omit<IUserData, "id" | "createdAt" | "updatedAt">) => {
        await api.post("/users", payload);
      },
      {
        onSuccess: () => {
          queryClient.invalidateQueries([keys.user]);
        },
      },
    );

    return {
      createUser,
    };
  }

  const useUpdateUser = () => {
    const queryClient = useQueryClient();

    const { mutate: updateUser } = useMutation(
      async ({ id, ...payload }: IUserData) => {
        await api.put(`/users/${id}`, payload);
      },
      {
        onSuccess: () => {
          queryClient.invalidateQueries([keys.user]);
        },
      },
    );

    return {
      updateUser,
    };
  }

  const useDeleteUser = () => {
    const queryClient = useQueryClient();

    const { mutate: deleteUser } = useMutation(
      async (id) => {
        await api.delete(`/users/${id}`);
      },
      {
        onSuccess: () => {
          queryClient.invalidateQueries([keys.user]);
        },
      },
    );

    return {
      deleteUser,
    };
  }

  return {
    vm: {
      useGetUsers,
      useCreateUser,
      useUpdateUser,
      useDeleteUser
    }
  }
}
