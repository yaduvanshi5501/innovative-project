import React from 'react';
import { Home } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center">
            <Home className="h-8 w-8 text-green-600" />
            <span className="ml-2 text-xl font-semibold text-green-600">HomeEase</span>
          </div>
          <div className="flex items-center space-x-4">
            <a href="/services" className="text-gray-600 hover:text-gray-900">Services</a>
            <a href="/signup" className="text-gray-600 hover:text-gray-900">Sign Up / Log In</a>
            <a href="/become-helper" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700">
              Become a Helper
            </a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl font-bold text-gray-900 text-center mb-8">
            Book trusted help for home tasks
          </h1>
          
          {/* Search Bar */}
          <div className="max-w-3xl mx-auto">
            <div className="flex shadow-sm rounded-lg overflow-hidden">
              <input
                type="text"
                placeholder="What do you need help with?"
                className="flex-1 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <button className="px-6 py-3 bg-green-600 text-white font-medium hover:bg-green-700">
                Search
              </button>
            </div>
          </div>

          {/* Service Categories */}
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {['Assembly', 'Mounting', 'Moving', 'Cleaning', 'Outdoor Help', 'Home Repairs', 'Painting', 'Trending'].map((category) => (
              <a
                key={category}
                href={`/services/${category.toLowerCase()}`}
                className="flex flex-col items-center p-4 rounded-lg hover:bg-gray-50"
              >
                <span className="text-sm text-gray-600">{category}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Popular Services */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl font-semibold text-gray-900 mb-8">Most booked services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: 'Foam-jet AC service', price: '₹599', rating: '4.80', reviews: '1.1M' },
            { title: 'At-home consultation', price: '₹49', rating: '4.79', reviews: '45K' },
            { title: 'Pest control', price: '₹1,098', rating: '4.79', reviews: '102K' },
            { title: 'Intense bathroom cleaning', price: '₹509', rating: '4.78', reviews: '2.2M' },
          ].map((service) => (
            <div key={service.title} className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-2">{service.title}</h3>
              <p className="text-green-600 font-semibold">₹{service.price}</p>
              <div className="mt-2 flex items-center">
                <span className="text-yellow-400">★</span>
                <span className="ml-1 text-sm text-gray-600">{service.rating} ({service.reviews})</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;