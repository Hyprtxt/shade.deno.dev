// import HyprtxtIcon from "@/components/HyprtxtIcon.jsx"
import BrandGithub from "$icons/brand-github.tsx"

export default function Footer({ children, size = "md" }) {
  const menus = [
    {
      title: "Pages",
      children: [
        { name: "Home", href: "/" },
        { name: "Showcase", href: "/showcase" },
        { name: "Location", href: "/location" },
      ],
    },
    {
      title: "Community",
      children: [
        { name: "Facebook", href: "https://www.facebook.com/hyprtxt" },
        // { name: "Discord", href: "#" },
      ],
    },
  ]

  return (
    <div
      class={`bg-white flex flex-col md:flex-row w-full max-w-screen-${size} gap-8 md:gap-16 px-8 py-8 text-sm mb-5`}
    >
      <div class="flex-1">
        <div class="flex items-center gap-1">
          {/* <HyprtxtIcon clazz="h-5 w-5" /> */}
          <div class="font-bold text-2xl font-heading">
            A Shade Beyond
          </div>
        </div>
        <div class="text-gray-500">
          Full Service Awnings
        </div>
        <div class="text-gray-500">
          <a href="tel:+19287789300">+1 928 778-9300</a>{" "}
          (<a href="sms:+19287789300">sms</a>)
        </div>
      </div>

      {menus.map((item) => (
        <div class="mb-4" key={item.title}>
          <div class="font-bold font-heading">{item.title}</div>
          <ul class="mt-2">
            {item.children.map((child) => (
              <li class="mt-2" key={child.name}>
                <a
                  class="text-gray-500 hover:text-gray-700"
                  href={child.href}
                >
                  {child.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}

      <div class="text-gray-500 space-y-2">
        <div class="text-xs">
          Copyright © A Shade Beyond LLC<br />
          Coded in Arizona by <a href="https://hyprtxt.dev">Hyprtxt</a>
        </div>
        <a
          href="https://github.com/Hyprtxt/shade.deno.dev"
          class="inline-block hover:text-black"
          aria-label="Github Icon"
        >
          <BrandGithub />
        </a>
      </div>
    </div>
  )
}
