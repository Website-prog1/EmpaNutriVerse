import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";
import { ChefHat, Coffee, Droplets, Utensils, Sparkles } from "lucide-react";

const Menu = () => {
  return (
    <div className="min-h-screen bg-beige-light">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="min-h-screen d-flex align-items-center justify-content-center bg-white position-relative overflow-hidden">
          <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center">
            <div className="w-[600px] h-[600px] rounded-circle bg-sage/5 position-absolute top-0 start-0 translate-middle"></div>
            <div className="w-[400px] h-[400px] rounded-circle bg-sage/5 position-absolute bottom-0 end-0 translate-middle"></div>
            <div className="w-[300px] h-[300px] rounded-circle bg-sage/5 position-absolute top-0 end-0 translate-middle"></div>
            <div className="w-[200px] h-[200px] rounded-circle bg-sage/5 position-absolute bottom-0 start-0 translate-middle"></div>
          </div>
          <div className="container position-relative z-10">
            <div className="row justify-content-center">
              <div className="col-12 col-md-10 col-lg-8 text-center">
                <div className="d-flex justify-content-center mb-4 mb-md-6">
                  <Sparkles className="w-8 h-8 w-md-10 h-md-10 text-sage" />
                </div>
                <h1 className="display-1 display-md-2 display-lg-3 font-display fw-bold text-brown mb-4 mb-md-6">
                  Our Menu
                </h1>
                <div className="w-32 w-md-40 h-1 bg-sage mx-auto mb-4 mb-md-8"></div>
                <p className="lead text-brown/70">
                  Discover our universe of flavors with our signature empanadas and refreshing drinks
                </p>
                <div className="d-flex justify-content-center gap-4 gap-md-8">
                  <div className="d-flex align-items-center gap-2">
                    <ChefHat className="w-6 h-6 text-sage" />
                    <span className="text-lg text-brown/70">Freshly Made</span>
                  </div>
                  <div className="d-flex align-items-center gap-2">
                    <Coffee className="w-6 h-6 text-sage" />
                    <span className="text-lg text-brown/70">Daily Specials</span>
                  </div>
                  <div className="d-flex align-items-center gap-2">
                    <Droplets className="w-6 h-6 text-sage" />
                    <span className="text-lg text-brown/70">Homemade Sauces</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Menu Categories */}
        <section className="py-12 py-md-16 py-lg-20 bg-beige-light">
          <div className="container">
            <div className="row">
              {/* Empanadas Section */}
              <div className="col-12 mb-12 mb-md-16">
                <div className="d-flex align-items-center gap-3 gap-md-4 mb-6 mb-md-8">
                  <div className="w-10 h-10 w-md-12 h-md-12 bg-sage/10 rounded-circle d-flex align-items-center justify-content-center">
                    <ChefHat className="w-5 h-5 w-md-6 h-md-6 text-sage" />
                  </div>
                  <h2 className="h2 font-display fw-bold text-brown">
                    Empanadas
                  </h2>
                </div>
                <div className="row g-4 g-md-6">
                  <div className="col-12 col-sm-6 col-lg-3">
                    <ProductCard 
                      name="Cheesy Potato Pumpkin" 
                      price={39}
                      image="images/cheesy_potato_pumpkin.jpg"
                      description="A delightful blend of creamy potato and sweet pumpkin with melted cheese"
                      isPopular={true}
                    />
                  </div>
                  <div className="col-12 col-sm-6 col-lg-3">
                    <ProductCard 
                      name="Cheesy Corn" 
                      price={29}
                      image="images/cheesy_corn.jpg"
                      description="Sweet corn kernels mixed with gooey cheese in a crispy crust"
                    />
                  </div>
                  <div className="col-12 col-sm-6 col-lg-3">
                    <ProductCard 
                      name="Apple Pie" 
                      price={29}
                      image="images/apple_pie.jpg"
                      description="Classic apple pie filling with cinnamon in a flaky pastry"
                    />
                  </div>
                  <div className="col-12 col-sm-6 col-lg-3">
                    <ProductCard 
                      name="Creamy Pechay" 
                      price={29}
                      image="images/creamy_pechay.jpg"
                      description="Fresh pechay leaves in a creamy sauce, wrapped in golden pastry"
                    />
                  </div>
                </div>
              </div>

              {/* Drinks Section */}
              <div className="col-12 mb-12 mb-md-16">
                <div className="d-flex align-items-center gap-3 gap-md-4 mb-6 mb-md-8">
                  <div className="w-10 h-10 w-md-12 h-md-12 bg-sage/10 rounded-circle d-flex align-items-center justify-content-center">
                    <Coffee className="w-5 h-5 w-md-6 h-md-6 text-sage" />
                  </div>
                  <h2 className="h2 font-display fw-bold text-brown">
                    Drinks
                  </h2>
                </div>
                <div className="row g-4 g-md-6">
                  <div className="col-12 col-sm-6 col-lg-3">
                    <ProductCard 
                      name="Blue Lemonade" 
                      price={29}
                      image="images/lemonade.jpg"
                      description="Refreshing blue lemonade with a hint of mint"
                    />
                  </div>
                  <div className="col-12 col-sm-6 col-lg-3">
                    <ProductCard 
                      name="Buko Juice" 
                      price={29}
                      image="images/buko_juice.jpg"
                      description="Fresh coconut water with tender coconut meat"
                    />
                  </div>
                </div>
              </div>

              {/* Sauces Section */}
              <div className="col-12">
                <div className="d-flex align-items-center gap-3 gap-md-4 mb-6 mb-md-8">
                  <div className="w-10 h-10 w-md-12 h-md-12 bg-sage/10 rounded-circle d-flex align-items-center justify-content-center">
                    <Droplets className="w-5 h-5 w-md-6 h-md-6 text-sage" />
                  </div>
                  <h2 className="h2 font-display fw-bold text-brown">
                    Sauces
                  </h2>
                </div>
                <div className="row g-4 g-md-6">
                  <div className="col-12 col-sm-6 col-lg-3">
                    <ProductCard 
                      name="Chocolate Dip" 
                      price={10}
                      image="/images/chocolate_dip.jpg"
                      description="Rich and creamy chocolate sauce for dipping"
                    />
                  </div>
                  <div className="col-12 col-sm-6 col-lg-3">
                    <ProductCard 
                      name="Garlic Mayo" 
                      price={10}
                      image="/images/garlic_mayo.jpg"
                      description="Creamy garlic mayonnaise with a hint of herbs"
                    />
                  </div>
                  <div className="col-12 col-sm-6 col-lg-3">
                    <ProductCard 
                      name="Cheese Sauce" 
                      price={10}
                      image="images/cheese_sauce.jpg"
                      description="Smooth and tangy cheese sauce for extra flavor"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

const ProductCard = ({ 
  name, 
  price, 
  image, 
  description,
  isPopular
}: { 
  name: string; 
  price: number;
  image: string;
  description: string;
  isPopular?: boolean;
}) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 200);
  };

  return (
    <div 
      className={`bg-white rounded-xl shadow-sm overflow-hidden transition-all duration-300 cursor-pointer
        ${isClicked ? 'scale-95 shadow-lg' : 'hover:shadow-lg hover:-translate-y-1'}`}
      onClick={handleClick}
    >
      <div className="relative h-32 sm:h-40">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover rounded-lg"
        />
        {isPopular && (
          <div className="absolute top-2 sm:top-3 right-2 sm:right-3 bg-sage text-white px-2 py-0.5 rounded-full text-xs font-medium">
            Popular
          </div>
        )}
      </div>
      <div className="p-3 sm:p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-base sm:text-lg font-display font-bold text-brown">{name}</h3>
          <span className="text-base sm:text-lg font-bold text-sage">₱{price}</span>
        </div>
        <p className="text-xs sm:text-sm text-brown/70 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default Menu;
