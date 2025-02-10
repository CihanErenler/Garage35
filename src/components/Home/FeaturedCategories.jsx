import { Link } from 'react-router-dom';

const FeaturedCategories = () => {
  const categories = [
    {
      title: "Luxury Cars",
      image: "https://images.unsplash.com/photo-1563720360172-67b8f3dce741",
      count: 45,
      link: "/listing?category=luxury"
    },
    {
      title: "Electric Vehicles",
      image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89",
      count: 32,
      link: "/listing?category=electric"
    },
    {
      title: "SUVs",
      image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b",
      count: 58,
      link: "/listing?category=suv"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Browse by Category</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Explore our diverse range of vehicles to find exactly what you're looking for
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Link 
              key={index}
              to={category.link}
              className="group relative h-64 rounded-lg overflow-hidden"
            >
              <img 
                src={category.image} 
                alt={category.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-xl font-bold text-white mb-2">{category.title}</h3>
                <p className="text-gray-300">{category.count} vehicles available</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories; 