import { tw } from "twind"

const Location = () => {
  return (
    <div class="flex flex-col md:flex-row gap-8 bg-white p-8">
      <div class="border-dashed border-indigo border-4 p-32 w-full">
        <p class={tw`text-center w-full`}>
          A Google Maps API component?
        </p>
        <p class={tw`text-center w-full`}>
          Or we feature this on a location page.
        </p>
      </div>
    </div>
  )
}

export default Location
