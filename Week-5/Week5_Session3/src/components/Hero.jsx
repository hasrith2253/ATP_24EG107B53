
export default function Hero() {
  return (
    <div className="relative isolate px-6 pt-14 lg:px-8">
      <div className="mx-auto max-w-5xl py-32 sm:py-48 lg:py-56">
        <div className="text-center flex flex-col items-center">
          <h1 className="text-5xl font-bold tracking-tight text-white sm:text-7xl lg:text-8xl">
            Modern Shopping Experience
          </h1>
          <p className="mt-8 text-lg font-medium text-gray-300 sm:text-xl/8 max-w-2xl">
            Discover our curated collection of premium products, from high-fashion apparel to cutting-edge electronics. Designed for the modern consumer.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">

            <a
              href="#products"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Shop Now
            </a>
            <a href="#" className="text-sm font-semibold text-white">
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
