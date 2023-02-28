import { Head } from "$fresh/runtime.ts"
import Layout from "@/components/Layout.jsx"
// import Features from "@/components/Features.jsx"
// import { tw } from "twind"
// import { apply, css, theme } from "twind/css"

export default function Home() {
  return (
    <>
      <Head>
        <title>Hyprtxt | Good Websites</title>
      </Head>
      <Layout>
        <section class="max-w-screen-md mx-auto py-8 px(8) space-y-4 bg-white">
          <h1>
            Showcase
          </h1>
          <p>
            Some websites I have created.
          </p>
          <h3>Open Source</h3>
          <ul>
            <li>
              <a href="https://videopoker.academy/">Video Poker Academy</a>
            </li>
            <li>
              <a href="https://classic.videopoker.academy/">
                JavaScript Video Poker
              </a>
            </li>
            <li>
              <a href="https://fresh-strapi.deno.dev/">Fresh Strapi</a>
            </li>
            <li>
              <a href="https://linceo.club/">Linceo Club</a>
            </li>
          </ul>
          <h3>For Hire</h3>
          <ul>
            <li>
              <a href="https://cactusstone.com/">Cactus Stone</a>
            </li>
            <li>
              <a href="https://andbounds.com/">ANDBOUNDS Inc.</a>
            </li>
            <li>
              <a href="https://www.afaa.com/">AFAA</a>
            </li>
          </ul>
          <h3>Contributed to a Team Effort</h3>
          <ul>
            <li>
              <a href="https://www.breakfasttelevision.ca/">
                Breakfast Television
              </a>
            </li>
            <li>
              <a href="https://boomi.com/">Dell Boomi</a>
            </li>
            <li>
              <a href="https://8x8.com/">8x8</a>
            </li>
          </ul>
        </section>
      </Layout>
    </>
  )
}