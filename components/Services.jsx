import IconAlarm from "$icons/alarm.tsx"
import IconAirBalloon from "$icons/air-balloon.tsx"
import IconArmchair from "$icons/armchair.tsx"
import IconChevronRight from "$icons/chevron-right.tsx"

const Services = () => {
  const serviceItems = [
    {
      // icon: IconAlarm,
      title: "Free Estimates",
      description:
        "We come to you and provide a free initial consultation of shade solutions for your building.",
      // link: "#",
    },
    {
      // icon: IconAirBalloon,
      title: "In-House Manufacturing",
      description:
        `We build your awning or shade structure in our shop – you get quality control from start to finish.`,
    },
    {
      // icon: IconArmchair,
      title: "Expert Installation",
      description:
        "We install your product right the first time taking care to connect your product with structural integrity to your building.",
    },
    {
      title: "Design Consultation",
      description:
        "We custom design your shade, awning or shade structure to suit your needs; functionally and aesthetically.",
    },
    {
      title: "Hand-painted Graphic Transfers",
      description:
        "Apply any artwork to your awning so that you’re branding your business at the same time that you cool it off.",
    },
    {
      title: "Maintenance Repair and Warranty Service",
      description:
        "We come back if anything isn’t perfect. We’ll also recover, repair or upgrade older awnings you already have.",
    },
  ]

  return (
    <div class="flex flex-col md:flex-row gap-8 bg-white p-8 flex-wrap grow">
      {serviceItems.map((item) => {
        return (
          <div class="space-y-2" style="flex: 1 1 25%">
            {item.icon &&
              (
                <div class="bg-purple inline-block p-3 rounded-xl text-green">
                  <item.icon class="w-10 h-10" />
                </div>
              )}
            {item.title && <h2>{item.title}</h2>}
            <p class="text-dark">
              {item.description}
            </p>
            {item.link &&
              (
                <a class="block" href={item.link}>
                  <p class="text-blue-500 cursor-pointer hover:underline inline-flex items-center group">
                    Read More{" "}
                    <IconChevronRight class="inline-block w-5 h-5 transition group-hover:translate-x-0.5" />
                  </p>
                </a>
              )}
          </div>
        )
      })}
    </div>
  )
}

export default Services
