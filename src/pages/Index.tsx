import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Phone, Mail, Clock, ChefHat, Leaf, Heart, Award, Facebook, Instagram } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback, useState, useEffect } from 'react';

// Smooth scroll utility function
const smoothScroll = (targetId: string) => {
  const target = document.getElementById(targetId);
  if (target) {
    const targetPosition = target.getBoundingClientRect().top;
    const startPosition = window.pageYOffset;
    const distance = targetPosition;
    const duration = 1000; // Duration in milliseconds
    let start: number | null = null;

    const animation = (currentTime: number) => {
      if (start === null) start = currentTime;
      const timeElapsed = currentTime - start;
      const run = ease(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    };

    // Easing function for smooth animation
    const ease = (t: number, b: number, c: number, d: number) => {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t + b;
      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
    };

    requestAnimationFrame(animation);
  }
};

const Index = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    containScroll: 'trimSnaps',
    loop: true,
  });

  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
  const navigate = useNavigate();

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  // Add smooth scroll behavior to all anchor links
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]');
      if (anchor) {
        e.preventDefault();
        const href = anchor.getAttribute('href');
        if (href) {
          smoothScroll(href.substring(1));
        }
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  const handleProductSelect = (productId: string) => {
    setSelectedProduct(productId);
  };

  const ProductCard = ({ 
    id, 
    name, 
    price, 
    description, 
    image, 
    isBestSeller = false 
  }: { 
    id: string;
    name: string;
    price: string;
    description: string;
    image: string;
    isBestSeller?: boolean;
  }) => {
    const isSelected = selectedProduct === id;

    return (
      <div 
        className={`bg-white/95 backdrop-blur-sm rounded-2xl overflow-hidden shadow-md transition-all duration-500 hover:-translate-y-2 group mx-4 border-2 cursor-pointer ${
          isSelected 
            ? 'border-sage/80 shadow-xl scale-105' 
            : 'border-beige/20 hover:border-sage/50'
        }`}
        onClick={() => handleProductSelect(id)}
      >
        <div className="relative h-64">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brown/90 via-brown/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          {isBestSeller && (
            <div className="absolute top-4 right-4 bg-sage/90 text-white px-3 py-1 rounded-full text-sm font-medium tracking-wide shadow-lg backdrop-blur-sm">
              Best Seller
            </div>
          )}
          <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
            <p className="text-white text-sm font-light tracking-wide">{description}</p>
          </div>
        </div>
        <div className="p-4 bg-white/95 backdrop-blur-sm">
          <div className="flex items-start justify-between mb-2">
            <h3 className="text-lg font-semibold text-brown/90">{name}</h3>
            <p className="text-xl font-bold text-sage/90">{price}</p>
          </div>
          <p className="text-brown/70 text-sm mb-3">{description}</p>
          <div className="flex items-center justify-between text-xs text-brown/60">
            <span className="flex items-center gap-1">
              <ChefHat className="w-3 h-3 text-sage/80" />
              Handcrafted
            </span>
            <span className="flex items-center gap-1">
              <Leaf className="w-3 h-3 text-sage/80" />
              Serves 1
            </span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-beige scroll-smooth">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="images/empanada.jpg"
            alt="Empanada"
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brown/90 via-brown/50 to-transparent"></div>
          {/* Animated Background Elements */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-sage/20 via-transparent to-transparent opacity-50"></div>
        </div>
        
        {/* Content */}
        <div className="container mx-auto px-4 relative z-20 text-beige">
          <div className="max-w-2xl pt-32">
            {/* Animated Tagline */}
            <div className="animate-fade-in mb-6 sm:mb-12">
              <span className="inline-block px-4 sm:px-6 py-2 bg-sage/20 backdrop-blur-sm rounded-full text-sage text-base sm:text-lg font-medium tracking-wide">
                Delicious & Nutritious
              </span>
            </div>
            
            {/* Main Heading with Animation */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-8 leading-tight animate-slide-up max-w-3xl">
              Welcome to Your <span className="text-sage">Premium Empanada</span> Store
            </h1>
            
            {/* Description with Animation */}
            <p className="text-base sm:text-lg md:text-xl mb-8 sm:mb-12 text-beige/90 animate-slide-up delay-100 max-w-2xl leading-relaxed">
              Savor the perfect harmony of crispy crust and rich, flavorful fillings in every bite
            </p>
            
            {/* CTA Button with Animation */}
            <div className="animate-slide-up delay-200 relative z-30">
              <Link 
                to="/menu"
                className="group relative bg-sage hover:bg-sage/90 text-beige text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3 rounded-full w-auto overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer inline-flex items-center justify-center"
              >
                <span className="relative z-10 flex items-center justify-center">
                  View Menu 
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-sage/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </Link>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 w-full h-24 sm:h-32 bg-gradient-to-t from-beige to-transparent z-10"></div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
          <div className="w-6 h-10 border-2 border-beige rounded-full flex justify-center">
            <div className="w-1 h-2 bg-beige rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* Information Section */}
      <section id="about" className="py-12 sm:py-20 bg-beige">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="space-y-3">
                <span className="text-sage font-semibold tracking-wider">OUR STORY</span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brown">Why Choose <span className="text-sage">EmpaNutriVerse</span>?</h2>
                <p className="text-brown/80 text-base sm:text-lg leading-relaxed">
                  A proudly Filipino-owned food business based in Valenzuela City, Metro Manila. We're not just serving empanadas – we're creating a universe of flavors that nourishes both body and soul.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3 p-3 bg-brown/5 rounded-xl hover:bg-brown/10 transition-colors duration-300">
                  <div className="w-10 h-10 bg-sage/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Leaf className="w-5 h-5 text-sage" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-brown">Fresh & Nutritious</h3>
                    <p className="text-sm text-brown/60">Made with locally-sourced, high-quality ingredients</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-brown/5 rounded-xl hover:bg-brown/10 transition-colors duration-300">
                  <div className="w-10 h-10 bg-sage/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <ChefHat className="w-5 h-5 text-sage" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-brown">Expert Craftsmanship</h3>
                    <p className="text-sm text-brown/60">Handcrafted with passion and precision</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-brown/5 rounded-xl hover:bg-brown/10 transition-colors duration-300">
                  <div className="w-10 h-10 bg-sage/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Heart className="w-5 h-5 text-sage" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-brown">Community Love</h3>
                    <p className="text-sm text-brown/60">Supporting local farmers and producers</p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <p className="text-brown/80 text-base leading-relaxed">
                  At EmpaNutriVerse, we believe that good food should be both delicious and nutritious. Our empanadas are crafted with care, using traditional recipes with a modern twist. We're committed to bringing you the best flavors while supporting our local community.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="w-full max-w-md mx-auto aspect-[3/4] rounded-2xl overflow-hidden shadow-lg transform hover:scale-[1.02] transition-transform duration-300">
                <img 
                  src="images/empanada2.jpg" 
                  alt="Empanada"
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brown/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-beige">
                  <h3 className="text-xl font-bold mb-1">Taste the Difference</h3>
                  <p className="text-beige/90 text-sm">Experience our commitment to quality in every bite</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-16 bg-gradient-to-b from-beige/30 to-beige/50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block px-4 py-1.5 bg-sage/20 text-sage rounded-full text-sm font-medium tracking-wider mb-3">OUR MENU</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brown/90">Discover Our Products</h2>
            <p className="text-brown/80 text-base leading-relaxed">Experience the perfect blend of traditional flavors and modern culinary excellence.</p>
          </div>
          
          {/* Empanadas Carousel */}
          <div className="mb-20">
            <div className="text-center mb-10">
              <h3 className="text-2xl md:text-3xl font-bold text-brown/90 mb-3">Signature Empanadas</h3>
              <p className="text-brown/70 max-w-xl mx-auto text-base">Handcrafted with premium ingredients and traditional recipes</p>
            </div>
            
            <div className="relative group">
              <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex gap-6 md:gap-8">
                  <div className="flex-[0_0_85%] sm:flex-[0_0_45%] lg:flex-[0_0_30%] min-w-0">
                    <div className="bg-beige/40 backdrop-blur-sm rounded-2xl p-4 shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group border-2 border-beige/50 hover:border-beige/70">
                      <div className="relative h-64 mb-4 rounded-xl overflow-hidden">
                        <img 
                          src="images/cheesy_potato_pumpkin.jpg"
                          alt="Cheesy Potato Pumpkin"
                          className="w-full h-full object-cover rounded-lg"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-beige/90 via-beige/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                          <p className="text-brown/90 text-sm font-light tracking-wide">Our signature empanada with a perfect blend of flavors</p>
                        </div>
                        <div className="absolute top-4 right-4 bg-beige/80 text-brown/90 px-3 py-1 rounded-full text-sm font-medium tracking-wide shadow-lg backdrop-blur-sm">
                          Best Seller
                        </div>
                      </div>
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-lg font-semibold text-brown/90">Cheesy Potato Pumpkin</h3>
                        <p className="text-xl font-bold text-brown/90">₱39</p>
                      </div>
                      <p className="text-brown/70 text-sm mb-3">Our signature empanada with a perfect blend of flavors</p>
                      <div className="flex items-center justify-between text-xs text-brown/60">
                        <span className="flex items-center gap-1">
                          <ChefHat className="w-3 h-3 text-brown/80" />
                          Handcrafted
                        </span>
                        <span className="flex items-center gap-1">
                          <Leaf className="w-3 h-3 text-brown/80" />
                          Serves 1
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex-[0_0_85%] sm:flex-[0_0_45%] lg:flex-[0_0_30%] min-w-0">
                    <div className="bg-beige/40 backdrop-blur-sm rounded-2xl p-4 shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group border-2 border-beige/50 hover:border-beige/70">
                      <div className="relative h-64 mb-4 rounded-xl overflow-hidden">
                        <img 
                          src="images/cheesy_corn.jpg"
                          alt="Cheesy Corn"
                          className="w-full h-full object-cover rounded-lg"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-beige/90 via-beige/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                          <p className="text-brown/90 text-sm font-light tracking-wide">Sweet corn with melted cheese in a crispy crust</p>
                        </div>
                      </div>
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-lg font-semibold text-brown/90">Cheesy Corn</h3>
                        <p className="text-xl font-bold text-brown/90">₱29</p>
                      </div>
                      <p className="text-brown/70 text-sm mb-3">Sweet corn with melted cheese in a crispy crust</p>
                      <div className="flex items-center justify-between text-xs text-brown/60">
                        <span className="flex items-center gap-1">
                          <ChefHat className="w-3 h-3 text-brown/80" />
                          Handcrafted
                        </span>
                        <span className="flex items-center gap-1">
                          <Leaf className="w-3 h-3 text-brown/80" />
                          Serves 1
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex-[0_0_85%] sm:flex-[0_0_45%] lg:flex-[0_0_30%] min-w-0">
                    <div className="bg-beige/40 backdrop-blur-sm rounded-2xl p-4 shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group border-2 border-beige/50 hover:border-beige/70">
                      <div className="relative h-64 mb-4 rounded-xl overflow-hidden">
                        <img 
                          src="images/apple_pie.jpg"
                          alt="Apple Pie"
                          className="w-full h-full object-cover rounded-lg"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-beige/90 via-beige/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                          <p className="text-brown/90 text-sm font-light tracking-wide">Sweet and tangy apple filling in our signature crust</p>
                        </div>
                      </div>
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-lg font-semibold text-brown/90">Apple Pie</h3>
                        <p className="text-xl font-bold text-brown/90">₱29</p>
                      </div>
                      <p className="text-brown/70 text-sm mb-3">Sweet and tangy apple filling in our signature crust</p>
                      <div className="flex items-center justify-between text-xs text-brown/60">
                        <span className="flex items-center gap-1">
                          <ChefHat className="w-3 h-3 text-brown/80" />
                          Handcrafted
                        </span>
                        <span className="flex items-center gap-1">
                          <Leaf className="w-3 h-3 text-brown/80" />
                          Serves 1
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex-[0_0_85%] sm:flex-[0_0_45%] lg:flex-[0_0_30%] min-w-0">
                    <div className="bg-beige/40 backdrop-blur-sm rounded-2xl p-4 shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group border-2 border-beige/50 hover:border-beige/70">
                      <div className="relative h-64 mb-4 rounded-xl overflow-hidden">
                        <img 
                          src="images/creamy_pechay.jpg"
                          alt="Creamy Pechay"
                          className="w-full h-full object-cover rounded-lg"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-beige/90 via-beige/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                          <p className="text-brown/90 text-sm font-light tracking-wide">Creamy vegetable filling in a crispy crust</p>
                        </div>
                      </div>
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-lg font-semibold text-brown/90">Creamy Pechay</h3>
                        <p className="text-xl font-bold text-brown/90">₱29</p>
                      </div>
                      <p className="text-brown/70 text-sm mb-3">Creamy vegetable filling in a crispy crust</p>
                      <div className="flex items-center justify-between text-xs text-brown/60">
                        <span className="flex items-center gap-1">
                          <ChefHat className="w-3 h-3 text-brown/80" />
                          Handcrafted
                        </span>
                        <span className="flex items-center gap-1">
                          <Leaf className="w-3 h-3 text-brown/80" />
                          Serves 1
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation Buttons */}
              <button 
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-beige/80 hover:bg-beige text-brown/90 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 z-10 shadow-lg hover:shadow-xl hover:scale-110 backdrop-blur-sm"
                onClick={scrollPrev}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button 
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-beige/80 hover:bg-beige text-brown/90 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 z-10 shadow-lg hover:shadow-xl hover:scale-110 backdrop-blur-sm"
                onClick={scrollNext}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Drinks Section */}
          <div>
            <div className="text-center mb-10">
              <h3 className="text-2xl md:text-3xl font-bold text-brown/90 mb-3">Refreshing Drinks</h3>
              <p className="text-brown/70 max-w-xl mx-auto text-base">Perfect pairings for your empanadas, made with fresh ingredients</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-beige/40 backdrop-blur-sm rounded-2xl p-4 shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group border-2 border-beige/50 hover:border-beige/70">
                <div className="relative h-64 mb-4 rounded-xl overflow-hidden">
                  <img 
                    src="images/lemonade.jpg"
                    alt="Lemonade"
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-beige/90 via-beige/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <p className="text-brown/90 text-sm font-light tracking-wide">Refreshing blue lemonade drink</p>
                  </div>
                </div>
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-semibold text-brown/90">Blue Lemonade</h3>
                  <p className="text-xl font-bold text-brown/90">₱29</p>
                </div>
                <p className="text-brown/70 text-sm mb-3">Refreshing blue lemonade drink</p>
                <div className="flex items-center justify-between text-xs text-brown/60">
                  <span className="flex items-center gap-1">
                    <ChefHat className="w-3 h-3 text-brown/80" />
                    Freshly Made
                  </span>
                  <span className="flex items-center gap-1">
                    <Leaf className="w-3 h-3 text-brown/80" />
                    500ml
                  </span>
                </div>
              </div>
              <div className="bg-beige/40 backdrop-blur-sm rounded-2xl p-4 shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group border-2 border-beige/50 hover:border-beige/70">
                <div className="relative h-64 mb-4 rounded-xl overflow-hidden">
                  <img 
                    src="images/buko_juice.jpg"
                    alt="Buko Juice"
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-beige/90 via-beige/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <p className="text-brown/90 text-sm font-light tracking-wide">Fresh coconut juice</p>
                  </div>
                </div>
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-semibold text-brown/90">Buko Juice</h3>
                  <p className="text-xl font-bold text-brown/90">₱29</p>
                </div>
                <p className="text-brown/70 text-sm mb-3">Fresh coconut juice</p>
                <div className="flex items-center justify-between text-xs text-brown/60">
                  <span className="flex items-center gap-1">
                    <ChefHat className="w-3 h-3 text-brown/80" />
                    Freshly Made
                  </span>
                  <span className="flex items-center gap-1">
                    <Leaf className="w-3 h-3 text-brown/80" />
                    500ml
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen bg-beige/50">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="inline-block px-6 py-2 bg-sage/10 text-sage rounded-full text-sm font-medium tracking-wider mb-4">VISIT US</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-brown">Find Our Location</h2>
            <p className="text-brown/70 text-lg leading-relaxed">Come visit us and experience our universe of flavors in Valenzuela City.</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[70vh]">
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group border-2 border-beige/20 hover:border-sage/50">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-sage/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-sage/20 transition-colors duration-300">
                      <MapPin className="w-6 h-6 text-sage" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-brown/90">Location</h3>
                      <p className="text-brown/70">69 A. Pablo St., Malinta, Valenzuela City</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group border-2 border-beige/20 hover:border-sage/50">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-sage/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-sage/20 transition-colors duration-300">
                      <Phone className="w-6 h-6 text-sage" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-brown/90">Phone</h3>
                      <p className="text-brown/70">09683507302</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group border-2 border-beige/20 hover:border-sage/50">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-sage/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-sage/20 transition-colors duration-300">
                      <Mail className="w-6 h-6 text-sage" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl font-semibold mb-2 text-brown/90">Email</h3>
                      <p className="text-brown/70 break-all">officialempanutriverse@gmail.com</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group border-2 border-beige/20 hover:border-sage/50">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-sage/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-sage/20 transition-colors duration-300">
                      <Clock className="w-6 h-6 text-sage" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-brown/90">Hours</h3>
                      <p className="text-brown/70">Monday - Saturday: 9:00 AM - 7:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group border-2 border-beige/20 hover:border-sage/50">
                <div className="flex items-start gap-4">
                  <div className="flex gap-2">
                    <div className="w-12 h-12 bg-sage/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-sage/20 transition-colors duration-300">
                      <Facebook className="w-6 h-6 text-sage" />
                    </div>
                    <div className="w-12 h-12 bg-sage/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-sage/20 transition-colors duration-300">
                      <Instagram className="w-6 h-6 text-sage" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-brown/90">Follow Us</h3>
                    <p className="text-brown/70">Facebook, Instagram, TikTok</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3859.0000000000005!2d120.9835!3d14.7338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b0f1c8d8d8d8%3A0x8d8d8d8d8d8d8d8d!2s69+A.+Pablo+St.%2C+Malinta%2C+Valenzuela+City!5e0!3m2!1sen!2sph!4v1234567890!5m2!1sen!2sph"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              ></iframe>
              <div className="absolute inset-0 bg-gradient-to-t from-brown/90 via-brown/20 to-transparent opacity-50"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-white text-xl font-semibold mb-2">Visit Our Store</h3>
                <p className="text-white/80 text-sm mb-4">Experience our delicious empanadas in person</p>
                <Button size="lg" className="bg-sage hover:bg-sage/90 text-beige text-base sm:text-lg px-4 sm:px-8 py-4 sm:py-6 rounded-full w-full sm:w-auto">
                  Get Directions <MapPin className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
