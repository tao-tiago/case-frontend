/* eslint-isDisable react/no-array-index-key */
import { GetStaticProps } from "next"
import { FormEvent, useState } from "react"
import Image from "next/image"
import axios from "axios"
import { useForm } from "react-hook-form"
import { z as zod } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import {
  Box,
  Button,
  Text,
  Container,
  InputGroup,
  InputLeftElement,
  Input,
  ModalCloseButton,
  Flex
} from "@chakra-ui/react"

// Icons
import { TbArrowBigRightLineFilled } from "react-icons/tb"
import { IoPersonAddOutline } from "react-icons/io5"
import { FaArrowRight, FaWhatsapp } from "react-icons/fa"
import { HiOutlineMailOpen } from "react-icons/hi"

// Components Layouts
import { InformationTitle } from "@/layouts/InformationTitle"

// Components Internals
import WhoIAm from "@/components/WhoIAm"
import CopyRight from "@/components/CopyRight"
import { CardBonus } from "@/components/CardBonus"
import EmbedYouTube from "@/components/EmbedYouTube"
import CircularThumb from "@/components/CircularThumb/CircularThumb"
import FAQ from "@/components/FAQ"
import ActionCard from "@/components/ActionCard/ActionCard"
import CardDecision from "@/components/CardDecision"
import SupportWhatsApp from "@/components/SupportWhatsApp"
import ModalSimple from "@/components/ModalSimple"
import { FieldInner, Form, Label, Legend } from "@/components/Form"

// Shared
import SEO from "@/shared/helpers/SEO"
import { fieldInvalid, fieldRequired } from "@/shared/utils/messagesError"
import { phoneMask } from "@/shared/utils/fieldMask"

/*
import Fomo from "@/components/Fomo"
const ToastLeads = dynamic(() => import("@/components/ToastLeads"), {
  ssr: false
})
*/

const handleSubmitRegisterSchema = zod.object({
  name: zod.string().min(3, {
    message: fieldRequired("nome")
  }),
  phone: zod
    .string()
    .min(15, {
      message: fieldRequired("whatsapp")
    })
    .transform((phone) => "55" + phone.trim().replace(/\D/g, "")),
  email: zod
    .string()
    .email({
      message: fieldInvalid("e-mail")
    })
    .transform((email) => email.toLocaleLowerCase().trim())
})

type IhandleSubmitRegister = zod.infer<typeof handleSubmitRegisterSchema>

const JourneyCombatDiabetes = () => {
  const itemBonus = [
    {
      title: "Guia Prático para Controlar o Diabetes",
      content:
        "Esse e-book você pode levar para o supermercado, e, inclusive fazer suas compras, seguindo as orientações dele."
    },
    {
      title: "103 Receitas Deliciosas para Combater o Diabetes",
      content:
        "Com esse e-book você terá 103 receitas deliciosas, elaboradas por mim, para café da manhã, almoço, jantar e sobremesas."
    },
    {
      title: "Plantões de Dúvidas Quinzenais",
      content: "Para falar comigo, basta levantar a mão. Simples assim!"
    },
    {
      title: "Comunidade Exclusiva",
      content:
        "Nessa comunidade você poderá postar as fotos dos seus pratos, e receber avaliação se está fazendo corretamente.Poderá também postar as suas medições de glicose e mapa glicêmico.Tirar dúvidas comigo e com a minha equipe.Entre muito mais..."
    },
    {
      title: "Aulas Especiais com Médicos Especializados",
      content:
        "Você terá acesso a aulas exclusivas com médicos especializados sobre: saúde da tireóide, dos rins, cardiovascular, e muitas outras..."
    },
    {
      title:
        "A Resistência à Insulina como Porta de Entrada para Outras Doenças",
      content:
        "Vídeo aulas sobre a resistência à insulina e sua relação com a doença de Alzheimer e a SOP(Síndrome dos Ovários Policísticos)."
    },
    {
      title: "Cuidados que Você Precisa Ter com seu Corpo",
      content:
        "Vídeo aulas sobre como o diabético deve cuidar dos seus pés e da sua boca."
    },
    {
      title: "Jejum Intermite",
      content:
        "Vídeo aulas sobre o jejum intermitente e como ele pode te servir como ferramenta para combater o diabetes tipo 2."
    },
    {
      title: "Acesso às Aulas Gravadas por 01 Ano",
      content:
        "Mesmo após o término da mentoria, você continuará tendo acesso às aulas gravadas por um ano inteiro. Isso significa que você poderá revisitar o conteúdo sempre que precisar, consolidando seu aprendizado e refrescando suas práticas de gerenciamento do diabetes."
    }
  ]

  const itemOk = [
    {
      title:
        "Quem está pré-diabético e deseja combater a doença logo na fase inicial"
    },
    {
      title:
        "Quem tem diabetes tipo 2, mas não quer viver uma vida à base de remédios"
    },
    {
      title: "Quem tem pressão alta (pressão arterial elevada)"
    },
    {
      title:
        "Quem está com hipertrigliceridemia (níveis de triglicerídeos elevados ≥ 150 mg/dL)"
    },
    {
      title: "Quem tem esteatose hepática (gordura no fígado)"
    }
  ]

  const itemNotOk = [
    {
      title: "Para diabéticos Tipo 1"
    },
    {
      title: "Para vegetarianos"
    },
    {
      title: "Para pessoas saudáveis"
    },
    {
      title:
        "Para diabéticos que não desejam mudar a alimentação, e que acham que darei uma pílula mágica para resolver todos os problemas"
    }
  ]

  const itemFAQ = [
    {
      question: "Quantas vezes posso assistir às aulas?",
      answer:
        "As visualizações são ilimitadas, e você pode asssitir quantas vezes quiser."
    },
    {
      question: "Até quando terei acesso a jornada?",
      answer: "O conteúdo gravado será seu por um ano."
    },
    {
      question: "O valor pode ser parcelado?",
      answer: "Sim, em até 10x sem juros no cartão."
    },
    {
      question: "É fornecida nota fiscal?",
      answer: "Sim, você a receberá por email."
    },
    {
      question: "Posso desistir da compra?",
      answer:
        "Sim, temos uma garantia incondicional de 7 dias, basta mandar um e-mail que " +
        "devolvemos todo o valor pago, sem justificativas e nem burocracias."
    }
  ]

  const [showModal, setShowModal] = useState(false)
  const [isDisable, setIsDisable] = useState(false)
  const urlCheckout = "https://pay.hotmart.com/W86002185U?checkoutMode=10"

  const {
    handleSubmit,
    formState: { errors },
    register,
    reset
  } = useForm<IhandleSubmitRegister>({
    resolver: zodResolver(handleSubmitRegisterSchema)
  })

  const handleSubmitRegister = async ({
    name,
    email,
    phone
  }: IhandleSubmitRegister) => {
    setIsDisable(true)

    await axios.post(
      "https://bindigital-api.onrender.com/projects/3f301ea8-d289-4525-863a-a52cbb3974bd/sale-event",
      {
        name,
        email,
        phone
      }
    )

    window.open(urlCheckout, "_blank")

    setShowModal(false)
    setIsDisable(false)
    reset()
  }

  const checkOut = async () => {
    setIsDisable(() => true)
    setShowModal(() => true)
    setIsDisable(() => false)
  }

  return (
    <>
      <SEO title="Jornada do Combate ao Diabetes Tipo 2" />

      <Text
        as="h1"
        textAlign="center"
        margin="0 auto"
        backgroundColor="#427214"
        color="white"
        padding="10px 7px"
      >
        Jornada do Combate ao Diabetes Tipo 2
      </Text>

      <Box margin="0 auto 25px" maxWidth="620px">
        <Box display="flex" flexDirection="column" padding="0 7px">
          <Text
            as="h5"
            textAlign="center"
            margin="20px auto 15px"
            maxWidth={{
              base: "100%",
              md: "80%"
            }}
          >
            Ensino diabéticos tipo 2 a combater a doença, reduzindo ou até mesmo
            eliminando o uso de medicamentos!
          </Text>

          <Button
            variant="action"
            rightIcon={<TbArrowBigRightLineFilled size={20} />}
            colorScheme="facebook"
            onClick={checkOut}
            isLoading={isDisable}
          >
            Quero me Inscrever Agora!
          </Button>
        </Box>
      </Box>

      <InformationTitle />

      <Box
        sx={{
          backgroundColor: "#fdfff2",
          padding: "24px 0",
          display: "flex",
          flexDirection: "column"
        }}
      >
        <Container
          maxWidth="820px"
          paddingTop={{
            base: "0",
            md: "40px"
          }}
          paddingBottom={0}
        >
          <Text
            as="h2"
            textAlign="center"
            margin="0 auto 10px"
            color="#333030"
            maxWidth="520px"
          >
            O que você vai receber ao se inscrever na jornada?
          </Text>
        </Container>

        <Container
          maxWidth="1120px"
          gap="10px"
          flexDirection="row"
          flexWrap="wrap"
          paddingTop={0}
        >
          {itemBonus.map((bonus, index) => (
            <CardBonus
              key={index}
              title={bonus.title}
              content={bonus.content}
            />
          ))}
        </Container>
      </Box>

      <ActionCard onClick={checkOut} isLoading={isDisable} />

      <Box
        backgroundColor="#f9f9f9"
        padding="32px 0"
        display="flex"
        flexDirection="column"
        gap="35px"
      >
        <Box>
          <Text
            as="h2"
            maxWidth="520px"
            textAlign="center"
            margin="0 auto 10px"
            color="#333030"
          >
            Quem pode embarcar comigo nessa jornada?
          </Text>

          <Container
            maxWidth="1120px"
            gap="10px"
            flexDirection="row"
            flexWrap="wrap"
            paddingTop={0}
          >
            {itemOk.map((bonus, index) => (
              <CardDecision key={index} title={bonus.title} type="yes" />
            ))}
          </Container>
        </Box>

        <Box>
          <Text
            as="h2"
            textAlign="center"
            margin="0 auto 10px"
            color="#333030"
            maxWidth={{
              // base: "100%",
              md: "520px"
            }}
          >
            Para quem não é essa jornada?
          </Text>

          <Container
            maxWidth="1120px"
            gap="10px"
            flexDirection="row"
            flexWrap="wrap"
            paddingTop={0}
          >
            {itemNotOk.map((item, index) => (
              <CardDecision key={index} title={item.title} type="not" />
            ))}
          </Container>
        </Box>
      </Box>

      <ActionCard onClick={checkOut} isLoading={isDisable} />

      <Box backgroundColor="#fdfff2" padding="20px 15px 25px">
        <Box
          maxWidth="620px"
          display="flex"
          flexDirection="column"
          margin="0 auto"
        >
          <Box display="flex" justifyContent="center" marginTop="10px">
            <Image
              width="190"
              height="170"
              src="/images/selo-de-garantia-7-dias.png"
              alt="Selo de Garantia de 7 Dias - Josi Pires Nutricionista"
            />
          </Box>

          <Box
            display="flex"
            flexDirection="column"
            gap="15px"
            margin="20px 0 15px"
          >
            <Text as="h5" textAlign="center">
              Garantia Incondicional
              <br /> RISCO ZERO!
            </Text>

            <Text
              fontSize="18px"
              textAlign={{
                base: "left",
                md: "justify"
              }}
            >
              Oferecemos uma{" "}
              <strong style={{ fontSize: "18px" }}>
                garantia de 7 dias com reembolso de 100%
              </strong>{" "}
              do seu dinheiro! Caso você decida desistir da compra por algum
              motivo dentro desse prazo.
              <br />
              <br /> É só entrar em contato conosco{" "}
              <strong style={{ fontSize: "18px" }}>
                que devolveremos o valor total, sem perguntas, complicações ou
                letrinhas miúdas
              </strong>
              .
            </Text>
          </Box>

          <Box
            display="flex"
            flexDirection="column"
            gap="15px"
            margin="20px 0 15px"
          >
            <Text as="h5" textAlign="center">
              Garantia Condicional <br />
              90 + 30 + 500
            </Text>

            <Text
              fontSize="18px"
              textAlign={{
                base: "left",
                md: "justify"
              }}
            >
              Após 90 dias participando ativamente da jornada (assistindo a
              todas as aulas, comparecendo aos encontros ao-vivo e mandando a
              foto dos pratos), se mesmo assim você não obtiver resultados,
              ofereceremos uma consultoria de 01 hora e acompanhamento por mais
              30 dias.
              <br />
              <br />
              Caso ainda assim não alcance resultados, faremos a devolução
              integral do seu dinheiro, mais R$ 500,00!
            </Text>
          </Box>

          <Button
            variant="action"
            rightIcon={<TbArrowBigRightLineFilled size={20} />}
            colorScheme="facebook"
            marginTop={15}
            onClick={() => checkOut()}
            isLoading={isDisable}
          >
            Quero me Inscrever Agora!
          </Button>
        </Box>
      </Box>

      <Box backgroundColor="#fdfff2" padding="20px 15px 25px">
        <Box
          maxWidth="720px"
          display="flex"
          flexDirection="column"
          margin="0 auto"
        >
          <Text
            as="h2"
            textAlign="center"
            margin="0 auto 10px"
            color="#333030"
            maxWidth={{
              md: "720px"
            }}
          >
            Veja o que pessoas, como você, estão falando sobre a Jornada
          </Text>

          <Flex flexDirection="row" gap="15px">
            <Flex flexDirection="column" gap="15px" flex={1}>
              <EmbedYouTube
                maxWidth="800px"
                embedId="zRLSAcYw20Q"
                allow="allow"
                allowFullScreen={true}
              />
              <EmbedYouTube
                maxWidth="800px"
                embedId="xVRMWHTxPuM"
                allow="allow"
                allowFullScreen={true}
              />
              <EmbedYouTube
                maxWidth="800px"
                embedId="Z-XU_mtVQQM"
                allow="allow"
                allowFullScreen={true}
              />
              <EmbedYouTube
                maxWidth="800px"
                embedId="ZdkpdGZPhzQ"
                allow="allow"
                allowFullScreen={true}
              />
            </Flex>

            <Flex flexDirection="column" gap="15px" flex={1}>
              <EmbedYouTube
                maxWidth="800px"
                embedId="qGRJQfNn160"
                allow="allow"
                allowFullScreen={true}
              />
              <EmbedYouTube
                maxWidth="800px"
                embedId="lYxSV_YkO9A"
                allow="allow"
                allowFullScreen={true}
              />
              <EmbedYouTube
                maxWidth="800px"
                embedId="W6FpnQAIf6k"
                allow="allow"
                allowFullScreen={true}
              />
            </Flex>
          </Flex>

          <Button
            variant="action"
            rightIcon={<TbArrowBigRightLineFilled size={20} />}
            colorScheme="facebook"
            marginTop={15}
            onClick={() => checkOut()}
            isLoading={isDisable}
          >
            Quero Embarcar na Jornada!
          </Button>
        </Box>
      </Box>

      <ActionCard onClick={checkOut} isLoading={isDisable} />

      <Box padding="55px 15px">
        <Box
          maxWidth="820px"
          display="flex"
          margin="0 auto"
          gap="10px"
          flexDirection={{
            base: "column",
            md: "row"
          }}
        >
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flex={2}
            textAlign="center"
          >
            <CircularThumb
              title="Josi Pires"
              src="/images/footer/josipires-profile.png"
              width={200}
              height={200}
            />
          </Box>

          <Box flex={5}>
            <Text as="h2" marginBottom="15px">
              Serei sua tutora nessa jornada!
            </Text>

            <Text fontSize="18px">
              Sou Josi Pires, nutricionista clínica, especializada em diabetes
              tipo 2 e tenho por missão ensinar pessoas com diabetes tipo 2 a
              combater essa doença, reduzindo ou até mesmo eliminando o uso de
              medicamentos. <br />
              <br />
              Busco promover um estilo de vida saudável, com alimentação
              adequada para esse grupo, com base em ciência de qualidade e muita
              responsabilidade.
            </Text>
          </Box>
        </Box>
      </Box>

      <Box backgroundColor="#1c1c1c" padding="35px 0">
        <Container maxWidth="820px">
          <Box display="flex" flexDirection="column">
            <Text as="h2" color="white" textAlign="center">
              PERGUNTAS FREQUENTES
            </Text>

            <FAQ questions={itemFAQ} />

            <Button
              variant="action"
              rightIcon={<TbArrowBigRightLineFilled size={20} />}
              colorScheme="facebook"
              marginTop={15}
              isLoading={isDisable}
              onClick={() => checkOut()}
            >
              Quero me Inscrever Agora!
            </Button>
          </Box>
        </Container>
      </Box>

      <WhoIAm />
      <CopyRight />
      <SupportWhatsApp />

      <ModalSimple
        title="Jornada do Combate ao Diabetes Tipo 2"
        isOpen={showModal}
        onHandle={() => {
          setShowModal(false)
        }}
      >
        <ModalCloseButton />
        <Form onSubmit={handleSubmit(handleSubmitRegister)}>
          <Box
            display="flex"
            flexDirection="column"
            gap="15px"
            padding={{
              base: "10px 20px",
              md: "10px 20px"
            }}
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
                  isDisabled={isDisable}
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
                  isDisabled={isDisable}
                  style={{ borderColor: errors.email && "#e53e3e" }}
                  {...register("email")}
                />
              </InputGroup>
            </FieldInner>

            <FieldInner>
              <Label>Digite seu WhatsApp com DDD:</Label>
              <InputGroup>
                <InputLeftElement pointerEvents="none" height="45px">
                  <FaWhatsapp size={20} />
                </InputLeftElement>

                <Input
                  variant="action"
                  placeholder="(88) 98888-8888"
                  type="text"
                  isDisabled={isDisable}
                  onInput={(event: FormEvent<HTMLInputElement>) => {
                    event.currentTarget.value = phoneMask(
                      event.currentTarget.value
                    )
                  }}
                  style={{ borderColor: errors.phone && "#e53e3e" }}
                  {...register("phone")}
                />
              </InputGroup>
              <Legend>* Você receberá seu acesso no seu WhatsApp</Legend>
            </FieldInner>
          </Box>

          <Button
            variant="action"
            rightIcon={<FaArrowRight size={20} />}
            colorScheme="facebook"
            type="submit"
            isLoading={isDisable}
            isDisabled={isDisable}
            margin="0 20px 13px"
          >
            Quero entrar na Jornada
          </Button>
        </Form>
      </ModalSimple>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => ({
  props: {}
})

export default JourneyCombatDiabetes
