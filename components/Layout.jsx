import Header from "@/components/Header.jsx"
import Footer from "@/components/Footer.jsx"
import { tw } from "twind"
import { DENO_ENV } from "@/utils/config.js"
import { globalStyles } from "@/utils/style.js"

const Layout = ({ children, data = {}, size = "md" }) => (
  <>
    <div class={tw`${globalStyles}`}></div>
    <section class={tw`flex justify-center header-wrapper`}>
      <Header size={size} />
    </section>
    {children}
    <section class={tw`flex justify-center`}>
      <Footer size={size} />
    </section>
    {DENO_ENV === "development"
      ? (
        <section
          class={`max-w-screen-${size} mx-auto py-8 px(8) space-y-4 bg-white`}
        >
          <pre>{JSON.stringify(data, null, 2 )}</pre>
        </section>
      )
      : <></>}
  </>
)

export default Layout
