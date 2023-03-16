import IconAlarm from "$icons/alarm.tsx"
import IconAirBalloon from "$icons/air-balloon.tsx"
import IconArmchair from "$icons/armchair.tsx"
import IconChevronRight from "$icons/chevron-right.tsx"

export default function Features() {
  const featureItems = [
    {
      icon: IconArmchair,
      description: "Make your home or business a more pleasant place to:",
      features: [
        "Sit",
        "Lounge",
        "Entertain",
        "Dine",
      ],
    },
    {
      icon: IconAirBalloon,
      description: "Reduce solar gain in your home or business to:",
      features: [
        "Save money on your A/C",
        "Save energy",
        "Create a greener home or business",
      ],
    },
    {
      icon: IconAlarm,
      description: "A Shade Beyond provides:",
      features: [
        "FREE Estimates",
        "Design consultation",
        "In-House custom manufacturing",
        "Hand-painted commercial graphic transfers",
        "Expert installation",
      ],
      // link: "#",
    },
  ]

  return (
    <div class="flex flex-col md:flex-row gap-8 bg-white p-8">
      {featureItems.map((item) => {
        return (
          <div class="flex-1 space-y-2">
            <div class="bg-purple inline-block p-3 rounded-xl text-green">
              <item.icon class="w-10 h-10" />
            </div>
            <h3 class="text-dark">
              {item.description}
            </h3>
            <ul>
              {item.features.map((feature) => <li>{feature}</li>)}
            </ul>
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
