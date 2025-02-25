import Head from "next/head"

type ISEO = {
  title: string
  description?: string
  cover?: string
  type?: "website" | "article" | "page"
  robots?: string
  redirect?: {
    url: string
    time: number
  } | null
}

const SEO = ({
  title,
  description = "Descrição padrão",
  cover = "",
  type = "page",
  robots = "index, follow",
  redirect = null
}: ISEO) => {
  let path = ""

  if (typeof window !== "undefined") {
    const { origin, pathname } = window.location
    path = origin + pathname
  }

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={robots} />
      <link rel="canonical" href={path} />
      <meta property="og:url" content={path} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />

      <meta property="og:image" content={cover} />
      <meta property="og:image:secure_url" content={cover} />
      <meta property="og:image:width" content="1280" />
      <meta property="og:image:height" content="720" />
      <meta property="og:image:alt" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={cover} />

      {redirect && (
        <meta
          httpEquiv="refresh"
          content={`${redirect.time}; url=${redirect.url}`}
        />
      )}
    </Head>
  )
}

export default SEO
