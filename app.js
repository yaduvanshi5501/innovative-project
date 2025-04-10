import React from "react";
import { Bot, Mic } from "lucide-react";

export default function HomePage() {
  const services = [
    {
      name: "Foam-jet AC service",
      price: "₹599",
      rating: "4.80 (1.1M)",
      image: "https://source.unsplash.com/400x250/?air-conditioner,cleaning",
    },
    {
      name: "At-home consultation",
      price: "₹49",
      rating: "4.79 (45K)",
      image: "https://source.unsplash.com/400x250/?consultation,home",
    },
    {
      name: "Pest control",
      price: "₹1,098",
      rating: "4.79 (102K)",
      image: "https://source.unsplash.com/400x250/?pest,home",
    },
    {
      name: "Intense bathroom cleaning",
      price: "₹509",
      rating: "4.78 (2.2M)",
      image: "https://source.unsplash.com/400x250/?bathroom,cleaning",
    },
    {
      name: "Apartment pest control",
      price: "₹1,498",
      rating: "4.80 (30K)",
      image: "https://source.unsplash.com/400x250/?apartment,bugs",
    },
  ];

  const repairs = [
    {
      name: "Tap repair",
      price: "₹49",
      rating: "4.83 (96K)",
      image: "https://source.unsplash.com/400x250/?tap,plumbing",
    },
    {
      name: "Door lock repair & installation",
      price: "₹149",
      rating: "4.82 (44K)",
      image: "https://source.unsplash.com/400x250/?door,lock",
    },
    {
      name: "Electrician consultation",
      price: "₹49",
      rating: "4.76 (15K)",
      image: "https://source.unsplash.com/400x250/?electrician",
    },
    {
      name: "Cupboard repair",
      price: "₹79",
      rating: "4.79 (9K)",
      image: "https://source.unsplash.com/400x250/?carpenter,cabinet",
    },
    {
      name: "Ceiling fan installation",
      price: "Free",
      rating: "4.85 (8K)",
      image: "https://source.unsplash.com/400x250/?ceiling-fan,installation",
    },
  ];

  const testimonials = [
    {
      name: "Elizabeth P.",
      review: "Vitali assembled the IKEA Norli drawer chest for me in less than 30 minutes...",
      service: "IKEA Furniture Assembly",
    },
    {
      name: "Tiffany B.",
      review: "David did an awesome job assembling crib and dresser for nursery...",
      service: "Furniture Assembly",
    },
    {
      name: "Amanda L.",
      review: "I hired Joe to patch 2 holes on my wall and 1 on my ceiling...",
      service: "Home Repairs",
    },
    {
      name: "Sabrina K.",
      review: "Aleksandr was fantastic! He came with all the equipment to do the job...",
      service: "Electrical help",
    },
    {
      name: "Jana T.",
      review: "Jose fixed my AC drain line which was clogging my bathroom sink...",
      service: "Plumbing",
    },
    {
      name: "Elisa R.",
      review: "Michael did a great job helping us install frameless glass doors...",
      service: "General Mounting",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Header */}
      <header className="flex items-center justify-between p-4 shadow-md bg-white sticky top-0 z-10">
        <h1 className="text-2xl font-bold text-green-700">HomeEase</h1>
        <nav className="flex items-center gap-6">
          <a href="#services" className="hover:text-green-600 font-medium">Services</a>
          <a href="#" className="hover:text-green-600 font-medium">Sign Up / Log In</a>
          <button className="border border-green-600 text-green-600 px-4 py-2 rounded-full hover:bg-green-100 transition">Become a Helper</button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="text-center py-12 px-4 bg-gradient-to-r from-green-100 to-green-50">
        <h2 className="text-3xl font-bold text-green-800 mb-4">Book trusted help for home tasks</h2>
        <div className="max-w-xl mx-auto relative">
          <input
            type="text"
            placeholder="What do you need help with?"
            className="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-400 pr-20"
          />
          <div className="absolute inset-y-0 right-4 flex items-center space-x-2">
            <button className="text-gray-500 hover:text-green-600">
              <Mic className="h-5 w-5" />
            </button>
            <button className="text-gray-500 hover:text-green-600">
              <Bot className="h-5 w-5" />
            </button>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          {["Assembly", "Mounting", "Moving", "Cleaning", "Outdoor Help", "Home Repairs", "Painting", "Trending"].map((category) => (
            <button key={category} className="px-4 py-2 bg-green-100 text-green-700 rounded-full hover:bg-green-200">
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Most Booked Services */}
      <section className="px-6 py-10" id="services">
        <h3 className="text-2xl font-semibold mb-6">Most booked services</h3>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {services.map((service) => (
            <div key={service.name} className="border rounded-lg p-4 shadow-sm hover:shadow-md transition">
              <img src={service.image} alt={service.name} className="rounded-md mb-3 h-40 w-full object-cover" />
              <h4 className="font-semibold text-lg mb-2">{service.name}</h4>
              <p className="text-green-600 font-medium">{service.price}</p>
              <p className="text-sm text-gray-500">⭐ {service.rating}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Home Repairs */}
      <section className="px-6 py-10 bg-gray-50">
        <h3 className="text-2xl font-semibold mb-6">Quick home repairs</h3>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {repairs.map((repair) => (
            <div key={repair.name} className="border rounded-lg p-4 shadow-sm hover:shadow-md transition">
              <img src={repair.image} alt={repair.name} className="rounded-md mb-3 h-40 w-full object-cover" />
              <h4 className="font-semibold text-lg mb-2">{repair.name}</h4>
              <p className="text-green-600 font-medium">{repair.price}</p>
              <p className="text-sm text-gray-500">⭐ {repair.rating}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Get Help Today */}
      <section className="px-6 py-12 text-center">
        <h3 className="text-2xl font-bold text-green-800 mb-6">Get help Today</h3>
        <div className="flex flex-wrap justify-center gap-4">
          {["General Mounting", "TV Mounting", "Furniture Assembly", "IKEA Furniture Assembly", "Help Moving", "House Cleaning", "Yardwork", "Furniture Removal", "Lawn Care", "Hang Pictures", "In Home Furniture Movers", "Shelf Mounting", "Light Installation", "Plumbing"].map(service => (
            <button key={service} className="px-4 py-2 border border-gray-400 rounded-full hover:bg-green-100">{service}</button>
          ))}
        </div>
        <a href="#" className="inline-block mt-6 text-green-700 font-semibold">See All Services →</a>
      </section>

      {/* Testimonials */}
      <section className="bg-white px-6 py-12">
        <h3 className="text-2xl font-bold text-green-800 mb-8 text-center">See what happy customers are saying about HomeEase</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="bg-gray-100 p-4 rounded-lg shadow-sm">
              <img src={https://i.pravatar.cc/100?img=${idx + 10}} alt={testimonial.name} className="w-12 h-12 rounded-full mb-2" />
              <p className="font-bold">{testimonial.name} <span className="text-yellow-500">★★★★★</span></p>
              <p className="text-sm mt-2">{testimonial.review}</p>
              <p className="text-green-700 font-medium mt-2">{testimonial.service}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-700 text-white px-6 py-12 mt-10">
        <div className="flex flex-wrap justify-between gap-10">
          <div>
            <h4 className="font-semibold mb-2">Discover</h4>
            <ul className="space-y-1">
              <li>Become a Tasker</li>
              <li>Services By City</li>
              <li>Services Nearby</li>
              <li>All Services</li>
              <li>Elite Taskers</li>
              <li>Help</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Company</h4>
            <ul className="space-y-1">
              <li>About Us</li>
              <li>Careers</li>
              <li>Partner with HomeEase</li>
              <li>Press</li>
              <li>Blog</li>
              <li>Terms & Privacy</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Download our app</h4>
            <p className="mb-2">Tackle your to-do list wherever you are.</p>
            <div className="flex gap-2">
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/5f/Available_on_the_App_Store_(black)_SVG.svg" alt="App Store" className="h-10" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="h-10" />
            </div>
          </div>
        </div>
        <div className="mt-6 flex items-center gap-4 text-sm text-gray-300">
          Follow us:
          <span className="text-white">Facebook</span>
          <span className="text-white">Instagram</span>
          <span className="text-white">LinkedIn</span>
        </div>
      </footer>
    </div>
  );
}