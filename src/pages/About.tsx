import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ChefHat, Leaf, Heart, Star, Sparkles } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-beige-light">
      <Header />
      <main>
        {/* Hero Section - Full Screen */}
        <section className="min-h-screen flex items-center justify-center bg-white relative overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[300px] sm:w-[400px] md:w-[500px] h-[300px] sm:h-[400px] md:h-[500px] rounded-full bg-sage/5 absolute -top-20 -left-20"></div>
            <div className="w-[200px] sm:w-[250px] md:w-[300px] h-[200px] sm:h-[250px] md:h-[300px] rounded-full bg-sage/5 absolute bottom-20 right-20"></div>
          </div>
          <div className="w-full px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="flex justify-center mb-4 sm:mb-6">
                <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-sage" />
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-bold text-brown mb-4 sm:mb-6">
                About Us
              </h1>
              <div className="w-20 sm:w-24 md:w-32 h-1 bg-sage mx-auto mb-6 sm:mb-8 md:mb-12"></div>
              <p className="text-lg sm:text-xl md:text-2xl text-brown/70 leading-relaxed">
                Creating a universe of flavors, one empanada at a time
              </p>
            </div>
          </div>
        </section>

        {/* About Section - Compact */}
        <section className="py-12 sm:py-16 md:py-20 flex items-center justify-center bg-beige-light relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[200px] sm:w-[300px] md:w-[400px] h-[200px] sm:h-[300px] md:h-[400px] rounded-full bg-sage/5 absolute top-20 left-20"></div>
            <div className="w-[100px] sm:w-[150px] md:w-[200px] h-[100px] sm:h-[150px] md:h-[200px] rounded-full bg-sage/5 absolute bottom-20 right-20"></div>
          </div>
          <div className="w-full px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="flex justify-center mb-4 sm:mb-6">
                <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-sage" />
              </div>
              <p className="text-base sm:text-lg md:text-xl text-brown/70 leading-relaxed">
                We make every bite a moment of joy, comfort, and connection. Join us in our journey to create a universe of flavors that brings people together.
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section - Compact */}
        <section className="py-16 sm:py-20 md:py-24 flex items-center justify-center bg-white relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[500px] h-[500px] rounded-full bg-sage/5 absolute -top-20 -right-20"></div>
            <div className="w-[300px] h-[300px] rounded-full bg-sage/5 absolute bottom-20 left-20"></div>
          </div>
          <div className="w-full px-4 relative z-10">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-center text-brown mb-12 sm:mb-16">
                Why Choose Us
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
                <div className="bg-beige-light p-6 sm:p-8 rounded-xl sm:rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
                  <div className="flex items-center gap-4 sm:gap-6 mb-4 sm:mb-6">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-sage/10 rounded-full flex items-center justify-center">
                      <Leaf className="w-8 h-8 sm:w-10 sm:h-10 text-sage" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-display font-bold text-brown">Fresh Ingredients</h3>
                  </div>
                  <p className="text-base sm:text-lg text-brown/70">
                    Made with fresh ingredients, ensuring quality and taste in every bite.
                  </p>
                </div>
                <div className="bg-beige-light p-6 sm:p-8 rounded-xl sm:rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
                  <div className="flex items-center gap-4 sm:gap-6 mb-4 sm:mb-6">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-sage/10 rounded-full flex items-center justify-center">
                      <ChefHat className="w-8 h-8 sm:w-10 sm:h-10 text-sage" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-display font-bold text-brown">Crafted with Care</h3>
                  </div>
                  <p className="text-base sm:text-lg text-brown/70">
                    Each empanada is carefully crafted to perfection by our skilled team.
                  </p>
                </div>
                <div className="bg-beige-light p-6 sm:p-8 rounded-xl sm:rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
                  <div className="flex items-center gap-4 sm:gap-6 mb-4 sm:mb-6">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-sage/10 rounded-full flex items-center justify-center">
                      <Heart className="w-8 h-8 sm:w-10 sm:h-10 text-sage" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-display font-bold text-brown">Community Love</h3>
                  </div>
                  <p className="text-base sm:text-lg text-brown/70">
                    Building connections through delicious food and warm service.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Closing Section - Compact */}
        <section className="py-16 sm:py-20 md:py-24 flex items-center justify-center bg-beige-light relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] rounded-full bg-sage/5 absolute top-20 left-20"></div>
            <div className="w-[150px] sm:w-[200px] h-[150px] sm:h-[200px] rounded-full bg-sage/5 absolute bottom-20 right-20"></div>
          </div>
          <div className="w-full px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="flex justify-center mb-4 sm:mb-6">
                <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-sage" />
              </div>
              <p className="text-lg sm:text-xl text-brown/70 leading-relaxed">
                We make every bite a moment of joy, comfort, and connection. Join us in our journey to create a universe of flavors that brings people together.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
