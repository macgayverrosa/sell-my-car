import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

export default function SiteHero() {
  return (
    <div className="relative h-[600px] w-full overflow-hidden">
      <Image
        src="/placeholder.svg"
        alt="Hero background"
        fill={true}
        style={{ objectFit: "cover" }}
        priority
      />
      <div className="absolute inset-0 bg-opacity-0" />
      <div className="absolute inset-0 flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl m-10">
            <h1 className="mb-6 text-4xl font-bold sm:text-2xl md:text-3xl lg:text-4xl">
              title
            </h1>
            <p className="mb-8 text-lg sm:text-lg md:text-xl">
              Description.
            </p>
            <Link
              href="/get-started"
              className="group inline-flex items-center rounded-full bg-primary px-6 py-3 text-lg font-semibold text-black transition-colors hover:bg-gray-200"
            >
              Book Now
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
