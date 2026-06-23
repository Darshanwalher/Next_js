import React from 'react'

const page = async () => {
  const res = await fetch('https://fakestoreapi.com/products')
  const data = await res.json()

  return (
    <div className="max-w-7xl mx-auto p-8">
      <h1 className="text-4xl font-bold text-center mb-10">
        All Products
      </h1>

      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {data.map((product) => (
          <li
            key={product.id}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 p-5"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-52 object-contain mb-4"
            />

            <h2 className="font-bold text-black text-lg line-clamp-2 mb-2">
              {product.title}
            </h2>

            <p className="text-gray-500 text-sm mb-3">
              {product.category}
            </p>

            <p className="text-gray-600 text-sm line-clamp-3 mb-4">
              {product.description}
            </p>

            <div className="flex justify-between items-center">
              <span className="text-2xl font-bold text-green-600">
                ${product.price}
              </span>

              <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm">
                ⭐ {product.rating.rate}
              </span>
            </div>

            <p className="mt-2 text-xs text-gray-800">
              {product.rating.count} Reviews
            </p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default page