import { Head } from "$fresh/runtime.ts"
import Layout from "@/components/Layout.jsx"
import Features from "@/components/Features.jsx"
import { tw } from "twind"
import { homeStyles } from "@/utils/style.js"

export default function Home(props) {
  return (
    <>
      <Head>
        <title>A Shade Beyond LLC</title>
        <meta name="author" content="Taylor Young" />
        <meta
          name="description"
          content="We&apos;ve been in business for over 30 years as a full-service awning company that can handle any shade needs you might have."
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
          <h1 id="welcome">
            <a href="#welcome">Hello</a>
          </h1>
          <p>
            Simple and Fast websites can be very effective at getting your
            message across. At Hyprtxt we use Deno JavaScript to program, test
            and develop websites.
          </p>
        </section>
        <section class="mx-auto max-w-screen-md">
          <Features />
        </section>
      </Layout>
    </>
  )
}
