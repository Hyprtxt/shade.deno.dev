import { Head } from "$fresh/runtime.ts"
import Layout from "@/components/Layout.jsx"
// import Features from "@/components/Features.jsx"
// import { tw } from "twind"
// import { apply, css, theme } from "twind/css"

export default function Showcase(props) {
  return (
    <>
      <Head>
        <title>Hyprtxt | Good Websites</title>
      </Head>
      <Layout data={props} size={`lg`}>
        <section class="max-w-screen-lg mx-auto py-8 px(8) space-y-4 bg-white markdown">
          <h1>
            Showcase
          </h1>
          <h2>Commercial</h2>
          <h3>Patio Covers</h3>
          <h3>Shade Sails</h3>
          <h3>Awnings</h3>
          <h2>Residential</h2>
          <h3>Patio Covers</h3>
          <h3>Vertical Drops</h3>
          <h3>Shade Sails</h3>
          <h3>Awnings</h3>
          <h3>Retractable Awnings</h3>
        </section>
      </Layout>
    </>
  )
}
