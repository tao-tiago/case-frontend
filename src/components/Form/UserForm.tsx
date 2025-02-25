import {
  Input,
  InputGroup,
  InputLeftElement,
  Box,
  Button,
} from "@chakra-ui/react"

import { useForm } from "react-hook-form"
import { z as zod } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

// Icons
import { IoPersonAddOutline } from "react-icons/io5";
import { HiOutlineMailOpen } from "react-icons/hi";
import { RiLockPasswordLine } from "react-icons/ri";

import { FieldInner, Form, Label } from "@/components/Form"
import { IUserData } from "@/modules/user/user.model";
import { useEffect } from "react";

const handleSubmitRegisterSchema = zod.object({
  id: zod.string().optional(),
  name: zod
    .string()
    .min(5),
  email: zod
    .string()
    .email()
    .transform((email) => email.trim().toLocaleLowerCase().replace(/,/g, "")),
  password: zod
    .string()
    .min(6)
})

type IhandleSubmitRegister = zod.infer<typeof handleSubmitRegisterSchema>

type IUserAction = {
  user: IUserData | null
  createUser: (payload: Partial<IUserData>) => Promise<void>
  updateUser: (payload: Partial<IUserData>) => Promise<void>
  resetForm: () => void
}

export const UserForm = ({ user, createUser, updateUser, resetForm }: IUserAction) => {

  const {
    handleSubmit,
    formState: { errors },
    register,
    reset,
    setValue
  } = useForm<IhandleSubmitRegister>({
    defaultValues: user
      ? {
        id: user.id,
        name: user.name,
        email: user.email,
        password: user.password
      }
      : undefined,
    resolver: zodResolver(handleSubmitRegisterSchema)
  })

  const handleUser = async ({
    name,
    email,
    password
  }: IhandleSubmitRegister) => {
    if (user) {
      await updateUser({
        id: user.id,
        name,
        email,
        password
      })

      reset()
      resetForm()

    } else {
      await createUser({
        name,
        email,
        password
      })

      reset()
    }
  }

  useEffect(() => {
    if (user) {
      setValue("name", user.name)
      setValue("email", user.email)
      setValue("password", user.password)
    }
  }, [user, setValue])

  return (
    <Form onSubmit={handleSubmit(handleUser)}>
      <Box
        display="flex"
        flexDirection="column"
        gap="15px"
        padding="10px 20px"
      >
        <FieldInner>
          <Label>Digite seu nome:</Label>
          <InputGroup>
            <InputLeftElement pointerEvents="none" height="45px">
              <IoPersonAddOutline size={20} />
            </InputLeftElement>
            <Input
              variant="action"
              placeholder="Seu nome"
              type="text"
              style={{ borderColor: errors.name && "#e53e3e" }}
              {...register("name")}
            />
          </InputGroup>
        </FieldInner>

        <FieldInner>
          <Label>Digite seu e-mail:</Label>
          <InputGroup>
            <InputLeftElement pointerEvents="none" height="45px">
              <HiOutlineMailOpen size={20} />
            </InputLeftElement>

            <Input
              variant="action"
              placeholder="exemplo@gmail.com"
              type="text"
              style={{ borderColor: errors.email && "#e53e3e" }}
              {...register("email")}
            />
          </InputGroup>
        </FieldInner>

        <FieldInner>
          <Label>Digite sua senha:</Label>
          <InputGroup>
            <InputLeftElement pointerEvents="none" height="45px">
              <RiLockPasswordLine size={20} />
            </InputLeftElement>

            <Input
              variant="action"
              placeholder="Sua senha"
              type="text"
              style={{ borderColor: errors.password && "#e53e3e" }}
              {...register("password")}
            />
          </InputGroup>
        </FieldInner>
      </Box>

      <Button
        type="submit"
        margin="0 20px 10px"
      >
        {user ? "Atualizar usuário" : "Criar usuário"}
      </Button>

      {user && (
        <Button
          type="button"
          onClick={() => {
            resetForm()
            reset()
          }}
          margin="0 20px 10px"
        >
          Cancelar
        </Button>
      )}
    </Form>
  )
}
