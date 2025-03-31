'use client'

import Image from 'next/image';
import Link from 'next/link';
import PortfolioItem from '@/components/PortfolioItem';

export default function Home() {
  const portfolioItems = [
    {
      title: "Modern Tech Logo",
      description: "A sleek and modern logo design for a technology startup.",
      image: "/portfolio/tech-logo.jpg",
      details: {
        services: ["Logo Design", "Brand Identity", "Color Palette"],
        technologies: ["Adobe Illustrator", "Figma"],
        description: "Created a modern, minimalist logo that represents innovation and technology. The design incorporates geometric shapes and a vibrant color scheme to create a memorable brand identity."
      }
    },
    {
      title: "Restaurant Website",
      description: "A beautiful and functional website for a local restaurant.",
      image: "/portfolio/restaurant.jpg",
      details: {
        services: ["Web Development", "UI/UX Design", "Menu Integration"],
        technologies: ["Next.js", "Tailwind CSS", "React"],
        description: "Developed a responsive restaurant website featuring an interactive menu, online reservations, and a gallery of delicious dishes. The design focuses on creating an appetizing and inviting user experience."
      }
    },
    {
      title: "Brand Identity",
      description: "Complete brand identity design for a fashion brand.",
      image: "/portfolio/fashion-brand.jpg",
      details: {
        services: ["Brand Identity", "Logo Design", "Marketing Materials"],
        technologies: ["Adobe Creative Suite", "Figma"],
        description: "Created a comprehensive brand identity package including logo, color scheme, typography, and marketing materials. The design reflects the brand's luxury and sophistication."
      }
    },
    {
      title: "Fitness App UI",
      description: "User interface design for a fitness tracking application.",
      image: "/portfolio/fitness-app.jpg",
      details: {
        services: ["UI Design", "UX Research", "Mobile App Development"],
        technologies: ["Flutter", "Dart", "Firebase"],
        description: "Developed a cross-platform fitness tracking app using Flutter. The app features an intuitive user interface, real-time workout tracking, and seamless data synchronization. Built with modern Flutter practices and integrated with Firebase for backend services."
      }
    },
    {
      title: "Social Media Kit",
      description: "Complete social media design package for a restaurant.",
      image: "/portfolio/social-media.jpg",
      details: {
        services: ["Social Media Design", "Content Creation", "Brand Guidelines"],
        technologies: ["Adobe Photoshop", "Canva", "Illustrator"],
        description: "Created a cohesive social media presence for a restaurant, including post templates, story designs, and brand guidelines. The design maintains consistency across all platforms."
      }
    },
    {
      title: "Marketing Materials",
      description: "Print design for a company's marketing campaign.",
      image: "/portfolio/marketing.jpg",
      details: {
        services: ["Print Design", "Marketing Collateral", "Brand Guidelines"],
        technologies: ["Adobe InDesign", "Photoshop", "Illustrator"],
        description: "Developed a comprehensive marketing campaign including brochures, posters, and digital assets. The design communicates the company's commitment to sustainability and innovation."
      }
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 dark:from-gray-900 dark:to-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent via-black/10 to-black/20 dark:from-transparent dark:via-black/30 dark:to-black/50"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Creative Digital Solutions
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 mb-8 max-w-3xl mx-auto">
            Transforming ideas into stunning digital experiences through innovative design and development
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#portfolio"
              className="bg-white/10 backdrop-blur-sm text-white px-8 py-3 rounded-md hover:bg-white/20 transition-all duration-300 text-lg font-medium border border-white/20"
            >
              View Our Work
            </Link>
            <Link
              href="#contact"
              className="bg-white text-indigo-900 px-8 py-3 rounded-md hover:bg-gray-50 transition-all duration-300 text-lg font-medium font-semibold"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 dark:text-white">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-purple-600 dark:text-purple-400 text-4xl mb-4">🎨</div>
              <h3 className="text-2xl font-semibold mb-4 dark:text-white">Graphic Design</h3>
              <p className="text-gray-600 dark:text-gray-300">Stunning visuals that capture your brand&apos;s essence and communicate your message effectively.</p>
            </div>
            <div className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-purple-600 dark:text-purple-400 text-4xl mb-4">✨</div>
              <h3 className="text-2xl font-semibold mb-4 dark:text-white">Logo Design</h3>
              <p className="text-gray-600 dark:text-gray-300">Unique and memorable logos that make your brand stand out in the digital landscape.</p>
            </div>
            <div className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-purple-600 dark:text-purple-400 text-4xl mb-4">🌐</div>
              <h3 className="text-2xl font-semibold mb-4 dark:text-white">Web Development</h3>
              <p className="text-gray-600 dark:text-gray-300">Modern, responsive websites that provide an exceptional user experience.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 dark:text-white">Our Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <PortfolioItem key={index} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 dark:text-white">Get in Touch</h2>
          <div className="max-w-2xl mx-auto">
            <form 
              action="https://formspree.io/f/elbetelshineda@gmail.com" 
              method="POST"
              className="space-y-6"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Phone (Optional)</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-purple-600 text-white px-6 py-3 rounded-md hover:bg-purple-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
