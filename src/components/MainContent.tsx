import { Button } from "./ui/button";
import { Coffee, Timer } from "lucide-react";
import { Link } from "react-router-dom";

const MainContent = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="min-h-screen relative bg-gradient-to-b from-brown-dark to-brown">
        <div className="absolute inset-0 bg-black/40" />
        <div className="container relative z-10 mx-auto px-4 pt-32 pb-20 flex items-center min-h-screen">
          <div className="max-w-2xl text-left">
            <h1 className="text-5xl md:text-7xl font-display font-bold text-beige-light mb-6">
              Discover Our Perfect Brew
            </h1>
            <p className="text-xl md:text-2xl text-beige/90 mb-8">
              Indulge in our handcrafted empanadas and artisanal coffee, where every bite and sip tells a story of flavor and tradition.
            </p>
            <Link to="/menu">
              <Button 
                className="bg-beige hover:bg-beige-dark text-brown-dark text-lg px-8 py-6"
                size="lg"
              >
                Explore Menu
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-20 bg-beige-light">
        <div className="container mx-auto px-4">
          <div className="max-w-md">
            <h2 className="text-3xl font-display font-bold text-brown-dark mb-4">
              Why Choose Us?
            </h2>
            <p className="text-lg text-brown-dark/80 mb-6">
              Experience perfection in every bite with our unique blend of Filipino flavors and modern culinary techniques.
            </p>
            <Link to="/about">
              <Button variant="outline" className="border-brown-dark text-brown-dark hover:bg-brown-dark hover:text-beige">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Menu Preview */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-display font-bold text-center text-brown-dark mb-12">
            Our Specialties
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <MenuItem 
              name="Cheesy Potato Pumpkin"
              price={39}
              description="Our signature empanada"
              icon={<Coffee className="w-6 h-6" />}
            />
            <MenuItem 
              name="Blue Lemonade"
              price={29}
              description="Refreshing drink"
              icon={<Timer className="w-6 h-6" />}
            />
            <MenuItem 
              name="Cheesy Corn"
              price={29}
              description="Sweet corn with melted cheese"
            />
            <MenuItem 
              name="Apple Pie"
              price={29}
              description="Sweet and tangy apple filling"
            />
            <MenuItem 
              name="Creamy Pechay"
              price={29}
              description="Creamy vegetable filling"
            />
          </div>
        </div>
      </section>

      {/* Hours Section */}
      <section className="py-20 bg-brown text-beige">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-display font-bold mb-6">Store Hours</h2>
          <p className="text-xl mb-4">Monday - Saturday</p>
          <p className="text-2xl font-bold">9:00 AM - 7:00 PM</p>
        </div>
      </section>
    </main>
  );
};

const MenuItem = ({ name, price, description, icon }: { 
  name: string; 
  price: number; 
  description: string;
  icon?: React.ReactNode;
}) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md transition-transform hover:scale-105">
      {icon && (
        <div className="flex items-center justify-center w-12 h-12 bg-brown text-beige rounded-full mb-4">
          {icon}
        </div>
      )}
      <h4 className="text-xl font-display font-bold text-brown-dark mb-2">{name}</h4>
      <p className="text-brown-dark/70 mb-4">{description}</p>
      <p className="text-lg font-bold text-sage-dark">₱{price}</p>
    </div>
  );
};

export default MainContent;
