import { useState } from "react"
import {
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Button,
} from "@chakra-ui/react"

// Components Icons
import { TbTrashX } from "react-icons/tb"
import { FaPencilAlt } from "react-icons/fa"

import { UserForm } from "@/components/Form/UserForm"

// Models
import { IUserData, IUseUser } from "./user.model"


export const UserView: React.FC<IUseUser> = ({ vm }) => {
  const { useGetUsers, useCreateUser, useUpdateUser, useDeleteUser } = vm
  const { data, isLoading } = useGetUsers({ size: 10, page: 0 })
  const { createUser } = useCreateUser()
  const { updateUser } = useUpdateUser()
  const { deleteUser } = useDeleteUser()

  const [user, setUser] = useState<IUserData | null>(null)

  return (
    <Box borderTop="5px solid #2c467b">
      <Box margin="0 auto 25px" maxWidth="750px">
        <TableContainer>
          <Table variant='simple'>
            <TableCaption>Listagem de usuários</TableCaption>
            <Thead>
              <Tr>
                <Th>Nome</Th>
                <Th>Email</Th>
              </Tr>
            </Thead>
            <Tbody>
              {data.map((user) => (
                <Tr key={user.id}>
                  <Td>{user.name}</Td>
                  <Td>{user.email}</Td>
                  <Td>
                    <Button onClick={async () => { setUser(user) }}>
                      <FaPencilAlt size="35" />
                    </Button>
                  </Td>
                  <Td>
                    <Button onClick={async () => { await deleteUser(user.id) }}>
                      <TbTrashX size="35" />
                    </Button>
                  </Td>
                </Tr>
              ))}

              {!isLoading && data.length === 0 && (
                <Tr>
                  <Td colSpan={4}>Nenhum usuário encontrado</Td>
                </Tr>
              )}

              {isLoading && (
                <Tr>
                  <Td colSpan={4}>Carregando usuários...</Td>
                </Tr>
              )}
            </Tbody>
          </Table>
        </TableContainer>

        <Box borderTop="solid 2px #eaeaea" />

        <UserForm
          user={user}
          createUser={createUser}
          updateUser={updateUser}
          resetForm={() => setUser(null)}
        />
      </Box>
    </Box>
  )
}
