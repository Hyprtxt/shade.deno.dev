import { Head } from "$fresh/runtime.ts"
import Layout from "@/components/Layout.jsx"
import Services from "@/components/Services.jsx"
import Location from "@/components/Location.jsx"
import Features from "@/components/Features.jsx"
import { tw } from "twind"

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

      <Layout data={props}>
        <section class="mx-auto max-w-screen-md">
          <div class="flex flex-col md:flex-row gap-8 bg-white p-8">
            <div class="border-dashed border-purple border-4 p-32">
              <p class={tw`text-center w-full`}>
                This is a place for a slideshow. Really close tight in
                photography, to avoid context. Alternate commerical and
                residential, show many categories of products.
              </p>
            </div>
          </div>
        </section>
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
          <Features />
          <div class="flex flex-col md:flex-row gap-8 bg-white p-8">
            <p class={tw`text-center w-full`}>
              We also provide maintenance, repairs, and warranty services!
            </p>
          </div>
        </section>
        <section class="mx-auto max-w-screen-md">
          <Services />
        </section>
        <section class="mx-auto max-w-screen-md">
          <Location />
        </section>
      </Layout>
    </>
  )
}
