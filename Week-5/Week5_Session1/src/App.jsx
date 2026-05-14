
import Product from './components/product.jsx';
import Navbar from './components/Navbar.jsx';

function App(){
let products = [
  {
    id: 1,
    title: "Nike Air Max Running Shoes",
    price: 3499,
    description: "Comfortable running shoes with soft cushioning, breathable mesh, and stylish design for daily wear.",
    category: "Footwear",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    rating: {
      rate: 4.5,
      count: 220
    }
  },
  {
    id: 2,
    title: "Adidas Sports Hoodie",
    price: 2199,
    description: "Premium cotton hoodie suitable for workouts, college wear, and casual outings.",
    category: "Clothing",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7",
    rating: {
      rate: 4.3,
      count: 180
    }
  },
  {
    id: 3,
    title: "Puma Casual T-Shirt",
    price: 899,
    description: "Soft cotton casual t-shirt with a modern fit and comfortable fabric for everyday use.",
    category: "Clothing",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
    rating: {
      rate: 4.1,
      count: 150
    }
  },
  {
    id: 4,
    title: "Boat Rockerz Wireless Headphones",
    price: 1499,
    description: "Wireless headphones with deep bass, long battery life, and comfortable ear cushions.",
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
    rating: {
      rate: 4.4,
      count: 310
    }
  },
  {
    id: 5,
    title: "Noise Smart Watch Pro",
    price: 2999,
    description: "Smart watch with fitness tracking, heart rate monitor, step counter, and stylish display.",
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    rating: {
      rate: 4.2,
      count: 270
    }
  },
  {
    id: 6,
    title: "Wildcraft Travel Backpack",
    price: 1799,
    description: "Durable travel backpack with multiple compartments, laptop section, and water-resistant fabric.",
    category: "Bags",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62",
    rating: {
      rate: 4.6,
      count: 200
    }
  },
  {
    id: 7,
    title: "Samsung Galaxy Earbuds",
    price: 3999,
    description: "Compact wireless earbuds with clear sound, touch controls, and portable charging case.",
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df",
    rating: {
      rate: 4.5,
      count: 340
    }
  },
  {
    id: 8,
    title: "Apple iPhone Back Cover",
    price: 799,
    description: "Stylish and protective phone case with shockproof edges and smooth matte finish.",
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1601593346740-925612772716",
    rating: {
      rate: 4.0,
      count: 125
    }
  },
  {
    id: 9,
    title: "HP Wireless Mouse",
    price: 699,
    description: "Smooth and lightweight wireless mouse with ergonomic design and long battery life.",
    category: "Computer Accessories",
    image: "https://images.unsplash.com/photo-1527814050087-3793815479db",
    rating: {
      rate: 4.3,
      count: 190
    }
  },
  {
    id: 10,
    title: "Lenovo Laptop Sleeve",
    price: 999,
    description: "Protective laptop sleeve with soft inner lining, zip closure, and slim lightweight design.",
    category: "Computer Accessories",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
    rating: {
      rate: 4.1,
      count: 160
    }
  },
  {
    id: 11,
    title: "OnePlus Fast Charger",
    price: 1299,
    description: "Fast charging adapter with Type-C support, compact body, and reliable charging performance.",
    category: "Mobile Accessories",
    image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0",
    rating: {
      rate: 4.4,
      count: 230
    }
  },
  {
    id: 12,
    title: "Zara Denim Jacket",
    price: 2499,
    description: "Trendy denim jacket with a comfortable fit, stylish look, and durable stitching.",
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1543076447-215ad9ba6923",
    rating: {
      rate: 4.2,
      count: 175
    }
  }
]


  return(
    <div className='bg-gray-800 min-h-screen'>
      <Navbar />
      <div className='m-20'>
        <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        
        {/* <Product productObj = {products[3]} />
         <Product productObj = {products[4]} />
          <Product productObj = {products[5]} />
           <Product productObj = {products[1]} />
            <Product productObj = {products[9]} />
             <Product productObj = {products[10]} /> */}
           {
  products.map((product) => (
    <Product productObj={product} key={product.id} />
  ))
}
        
        </div>
      </div>
    </div>
    
  )

}


export default App;