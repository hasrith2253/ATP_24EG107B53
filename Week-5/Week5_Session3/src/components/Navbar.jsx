function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-800">
      <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <span className="text-xl font-bold text-white tracking-tight">SHOP.modern</span>
          </a>
        </div>
        <div className="flex lg:hidden">
          <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400">
            <span className="sr-only">Open main menu</span>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <a href="#products" className="text-sm font-semibold leading-6 text-white hover:text-indigo-400 transition-colors">Products</a>
          <a href="#brands" className="text-sm font-semibold leading-6 text-white hover:text-indigo-400 transition-colors">Brands</a>
          <a href="#pricing" className="text-sm font-semibold leading-6 text-white hover:text-indigo-400 transition-colors">Pricing</a>
          <a href="#" className="text-sm font-semibold leading-6 text-white hover:text-indigo-400 transition-colors">Company</a>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#" className="text-sm font-semibold leading-6 text-white">Log in <span aria-hidden="true">&rarr;</span></a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;