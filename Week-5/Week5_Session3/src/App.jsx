import Product from './components/Product.jsx';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Pricing from './components/Pricing.jsx';

function App() {
  const products = [
    {
      id: 1,
      title: "Fjallraven - Foldsack No. 1 Backpack",
      price: 109.95,
      description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop in the padded sleeve.",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    },
    {
      id: 2,
      title: "Mens Casual Premium Slim Fit T-Shirts",
      price: 22.3,
      description: "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric.",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    },
    {
      id: 3,
      title: "Mens Cotton Jacket",
      price: 55.99,
      description: "Great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions.",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    },
    {
      id: 4,
      title: "Mens Casual Slim Fit",
      price: 15.99,
      description: "The color could be slightly different between on the screen and in practice.",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
    },
    {
      id: 9,
      title: "WD 2TB Elements Portable Hard Drive",
      price: 64,
      description: "USB 3.0 and USB 2.0 Compatibility. Fast data transfers and improved PC performance.",
      category: "electronics",
      image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
    },
    {
      id: 10,
      title: "SanDisk SSD PLUS 1TB Internal SSD",
      price: 109,
      description: "Easy upgrade for faster boot up, shutdown, application load and response.",
      category: "electronics",
      image: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
    },
    {
      id: 11,
      title: "Silicon Power 256GB SSD",
      price: 109,
      description: "3D NAND flash are applied to deliver high transfer speeds and improved performance.",
      category: "electronics",
      image: "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
    },
    {
      id: 12,
      title: "WD 4TB Gaming Drive for PS4",
      price: 114,
      description: "Expand your PS4 gaming experience. Play anywhere with this sleek portable drive.",
      category: "electronics",
      image: "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
    }
  ];

  return (
    <div className='bg-gray-900 min-h-screen'>
      <Navbar />
      
      <Hero />

      <section id="products" className='py-24 sm:py-32'>
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Featured Products</h2>
            <p className="mt-4 text-lg leading-8 text-gray-300">
              Check out our most popular items available right now.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <Product userObj={product} key={product.id} />
            ))}
          </div>
        </div>
      </section>

      <section id="pricing">
        <Pricing />
      </section>

      <footer className="bg-gray-900 py-12 border-t border-gray-800">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center text-gray-400 text-sm">
          <p>&copy; 2026 SHOP.modern. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}


export default App;