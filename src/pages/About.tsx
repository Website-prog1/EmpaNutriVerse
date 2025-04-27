import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ChefHat, Leaf, Heart, Star, Sparkles, Award, Clock } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-beige-light overflow-x-hidden">
      <Header />
      <main>
        {/* Hero Section - Full Screen */}
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-beige-light relative overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[400px] sm:w-[500px] md:w-[600px] h-[400px] sm:h-[500px] md:h-[600px] rounded-full bg-sage/10 absolute -top-20 -left-20 animate-pulse"></div>
            <div className="w-[300px] sm:w-[400px] md:w-[500px] h-[300px] sm:h-[400px] md:h-[500px] rounded-full bg-sage/10 absolute bottom-20 right-20 animate-pulse delay-300"></div>
          </div>
          <div className="w-full px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="flex justify-center mb-6 sm:mb-8">
                <div className="bg-sage/10 p-4 rounded-full">
                  <Sparkles className="w-8 h-8 sm:w-10 sm:h-10 text-sage" />
                </div>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-bold text-brown mb-6 sm:mb-8">
                About Us
              </h1>
              <div className="w-32 sm:w-40 md:w-48 h-1 bg-gradient-to-r from-sage/20 via-sage to-sage/20 mx-auto mb-8 sm:mb-12"></div>
              <p className="text-xl sm:text-2xl md:text-3xl text-brown/80 leading-relaxed font-medium">
                Creating a universe of flavors, one empanada at a time
              </p>
            </div>
          </div>
        </section>

        {/* About Section - Enhanced */}
        <section className="py-16 sm:py-20 md:py-24 flex items-center justify-center bg-white relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[300px] sm:w-[400px] md:w-[500px] h-[300px] sm:h-[400px] md:h-[500px] rounded-full bg-sage/5 absolute top-20 left-20 animate-pulse"></div>
            <div className="w-[200px] sm:w-[300px] md:w-[400px] h-[200px] sm:h-[300px] md:h-[400px] rounded-full bg-sage/5 absolute bottom-20 right-20 animate-pulse delay-300"></div>
          </div>
          <div className="w-full px-4 relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-sage/10 rounded-full flex items-center justify-center">
                      <Award className="w-6 h-6 text-sage" />
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-display font-bold text-brown">Our Story</h2>
                  </div>
                  <p className="text-lg sm:text-xl text-brown/70 leading-relaxed">
                    EmpaNutriverse is a proudly Filipino-owned food business based in Valenzuela City, Metro Manila. Our goal is to create a new universe of flavors, offering healthier and more exciting options for every Filipino to enjoy.
                  </p>
                  <p className="text-lg sm:text-xl text-brown/70 leading-relaxed">
                    We make every bite a moment of joy, comfort, and connection. Join us in our journey to create a universe of flavors that brings people together.
                  </p>
                </div>
                <div className="relative">
                  <div className="aspect-square rounded-2xl overflow-hidden shadow-xl transform hover:scale-[1.02] transition-transform duration-300">
                    <img 
                      src="images/empanada2.jpg" 
                      alt="Empanada"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brown/50 to-transparent"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section - Enhanced */}
        <section className="py-16 sm:py-20 md:py-24 bg-beige-light relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] rounded-full bg-sage/5 absolute top-20 left-20 animate-pulse"></div>
            <div className="w-[200px] sm:w-[300px] h-[200px] sm:h-[300px] rounded-full bg-sage/5 absolute bottom-20 right-20 animate-pulse delay-300"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex justify-center mb-6">
                <div className="bg-sage/10 p-4 rounded-full">
                  <Star className="w-8 h-8 text-sage" />
                </div>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-brown mb-12">
                Why Choose EmpaNutriverse?
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-sage/10 rounded-full flex items-center justify-center">
                      <ChefHat className="w-8 h-8 text-sage" />
                    </div>
                    <h3 className="text-2xl font-display font-bold text-brown">Crafted with Care</h3>
                  </div>
                  <p className="text-lg text-brown/70">
                    Each empanada is carefully crafted to perfection by our skilled team, ensuring quality in every bite.
                  </p>
                </div>
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-sage/10 rounded-full flex items-center justify-center">
                      <Leaf className="w-8 h-8 text-sage" />
                    </div>
                    <h3 className="text-2xl font-display font-bold text-brown">Healthy Choices</h3>
                  </div>
                  <p className="text-lg text-brown/70">
                    Offering healthier and more exciting options for every Filipino to enjoy, made with fresh ingredients.
                  </p>
                </div>
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-sage/10 rounded-full flex items-center justify-center">
                      <Heart className="w-8 h-8 text-sage" />
                    </div>
                    <h3 className="text-2xl font-display font-bold text-brown">Community Love</h3>
                  </div>
                  <p className="text-lg text-brown/70">
                    Building connections through delicious food and warm service, supporting local communities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Closing Section - Enhanced */}
        <section className="py-16 sm:py-20 md:py-24 flex items-center justify-center bg-white relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[400px] sm:w-[500px] h-[400px] sm:h-[500px] rounded-full bg-sage/5 absolute top-20 left-20 animate-pulse"></div>
            <div className="w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] rounded-full bg-sage/5 absolute bottom-20 right-20 animate-pulse delay-300"></div>
          </div>
          <div className="w-full px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="flex justify-center mb-6">
                <div className="bg-sage/10 p-4 rounded-full">
                  <Clock className="w-8 h-8 text-sage" />
                </div>
              </div>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-brown mb-6">
                Join Our Flavorful Journey
              </h2>
              <p className="text-xl text-brown/70 leading-relaxed">
                Join us in our mission to create a universe of flavors that brings people together through delicious, healthy, and exciting empanadas.
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
