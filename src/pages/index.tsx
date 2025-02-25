import { GetStaticProps } from "next"

// Layouts
import SEO from "@/shared/helpers/SEO"

// View Model
import { useInitViewModel } from "@/hooks/useInit/useInit.hook"

// View
import { UserView } from "@/modules/user/user.view"

export type IHome = {
  social: {
    title: string
    description: string
  }
}

const Home = ({ social }: IHome) => {
  const viewModel = useInitViewModel()

  return (
    <>
      <SEO title={social.title} description={social.description} />
      <UserView vm={viewModel.user.vm} />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => ({
  props: {
    social: {
      title: "Título da página",
      description: "Descrição da página"
    }
  }
})

export default Home
