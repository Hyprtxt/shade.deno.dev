import { Head } from "$fresh/runtime.ts"
import Layout from "@/components/Layout.jsx"
import Services from "@/components/Services.jsx"
import { tw } from "twind"
import { homeStyles } from "@/utils/style.js"

export default function Home(props) {
  return (
    <>
      <Head>
        <title>A Shade Beyond LLC</title>
        <meta
          name="description"
          content="We&apos;ve been in business for over 20 years as a full-service awning company that can handle any shade needs you might have."
        />
      </Head>
      <div class={tw`${homeStyles}`}></div>
      <section class="landing-page">
        <div class="mx-auto">
          <p class="my-8">Welcome 👋</p>
          <div class="logo"></div>
          <p class="my-8">本当に速いのウェブサイト</p>
        </div>
      </section>
      <Layout data={props}>
        <section class="max-w-screen-md mx-auto py-8 px(8) space-y-4 bg-white">
          <h1>
            Get Cool, Save Money, Beautify Your Home!
          </h1>
          <p>
            You can accomplish all these things with just one shade solution
            from <strong>A Shade Beyond</strong>.
          </p>
          <p>
            We&apos;ve been in business for <strong>over 20 years</strong> as a
            {" "}
            <em>full-service</em>{" "}
            awning company that can handle any shade needs you might have.
          </p>
        </section>
        <section class="mx-auto max-w-screen-md">
          <Services />
        </section>
      </Layout>
    </>
  )
}
