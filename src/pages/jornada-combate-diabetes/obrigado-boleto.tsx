import { GetStaticProps } from "next"
import { Box, Text } from "@chakra-ui/react"

import CircularThumb from "@/components/CircularThumb/CircularThumb"
import FAQ from "@/components/FAQ"
import SEO from "@/shared/helpers/SEO"

const SpecialMessage = () => {
  const itemFAQ = [
    {
      question: "Agora só falta realizar o pagamento",
      answer:
        "A compensação do boleto pode demorar até dois dias úteis.<br/>" +
        "Após o boleto ser compensado você receberá um e-mail com as instruções para entrar no grupo exclusivo do telegram e também um email da Hotmart informando sobre seu acesso ao material gravado.<br/><br/>" +
        "Fique atento, pois o acesso será enviado lá assim que o banco confirmar o pagamento.<br/><br/>" +
        "Se após 10 minutos e mesmo verificando na sua caixa de spam não encontrar nosso e-mail, pode ser que você tenha digitado errado na hora de se cadastrar na plataforma, nesse caso entre em contato: <br />contato@josipires.com.br ou WhatsApp (15) 99614-8715"
    }
  ]

  return (
    <>
      <SEO title="Recado Especial" robots="noindex, nofollow" />

      <Box minHeight="100%" backgroundColor="#1c1c1c" padding="20px 15px 25px">
        <Box
          maxWidth="620px"
          margin="20px auto 15px"
          display="flex"
          flexDirection="column"
          gap="15px"
        >
          <Text as="h2" color="white" textAlign="center">
            Parabéns, seu boleto foi EMITIDO!
          </Text>

          <FAQ questions={itemFAQ} />

          <Box textAlign="center">
            <CircularThumb
              title="Josi Pires"
              src="/images/footer/josipires-profile.png"
              width={200}
              height={200}
            />
          </Box>
        </Box>
      </Box>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => ({
  props: {},
  revalidate: 86400
})

export default SpecialMessage
