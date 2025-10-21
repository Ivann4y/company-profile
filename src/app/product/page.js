export default function ProductPage() {
  const products = [
    {
      id: 1,
      name: "Premium Laptop",
      description: "High-performance laptop for professionals and creators",
      price: "$1,299",
      image: "💻",
      category: "Electronics"
    },
    {
      id: 2,
      name: "Wireless Headphones",
      description: "Noise-canceling headphones with premium sound quality",
      price: "$299",
      image: "🎧",
      category: "Audio"
    },
    {
      id: 3,
      name: "Smart Watch",
      description: "Track your fitness and stay connected on the go",
      price: "$399",
      image: "⌚",
      category: "Wearables"
    },
    {
      id: 4,
      name: "4K Camera",
      description: "Professional-grade camera for stunning photography",
      price: "$1,899",
      image: "📷",
      category: "Photography"
    },
    {
      id: 5,
      name: "Gaming Console",
      description: "Next-gen gaming experience with ray tracing",
      price: "$499",
      image: "🎮",
      category: "Gaming"
    },
    {
      id: 6,
      name: "Tablet Pro",
      description: "Powerful tablet with stylus support for creativity",
      price: "$799",
      image: "📱",
      category: "Electronics"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      
      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden group"
            >
              {/* Product Image/Icon */}
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 h-48 flex items-center justify-center text-8xl group-hover:scale-110 transition-transform duration-300">
                {product.image}
              </div>

              {/* Product Info */}
              <div className="p-6">
                {/* Category Badge */}
                <span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                  {product.category}
                </span>

                {/* Product Name */}
                <h3 className="text-2xl font-bold mb-2 text-gray-800 dark:text-white">
                  {product.name}
                </h3>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                  {product.description}
                </p>

                {/* Price and Button */}
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                    {product.price}
                  </span>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg transition-colors duration-200 hover:shadow-lg">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
