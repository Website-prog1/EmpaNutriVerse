import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Music, Sparkles } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-beige-light">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="min-h-[60vh] flex items-center justify-center bg-white relative overflow-hidden pt-24">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[600px] h-[600px] rounded-full bg-sage/5 absolute -top-40 -left-40"></div>
            <div className="w-[400px] h-[400px] rounded-full bg-sage/5 absolute bottom-40 right-40"></div>
            <div className="w-[300px] h-[300px] rounded-full bg-sage/5 absolute top-40 right-40"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex justify-center mb-6 sm:mb-8">
                <Sparkles className="w-8 h-8 sm:w-10 sm:h-10 text-sage" />
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-brown mb-6 sm:mb-8">
                Contact Us
              </h1>
              <div className="w-32 sm:w-40 h-1 bg-sage mx-auto mb-8 sm:mb-12"></div>
              <p className="text-base sm:text-lg md:text-xl text-brown/70 leading-relaxed max-w-2xl mx-auto">
                We'd love to hear from you! Reach out to us through any of these channels.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-12 sm:py-16 md:py-20 bg-beige-light">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
                {/* Contact Details */}
                <div className="space-y-6 sm:space-y-8">
                  <div className="bg-white p-6 sm:p-8 rounded-xl sm:rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300">
                    <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-sage/10 rounded-full flex items-center justify-center">
                        <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-sage" />
                      </div>
                      <h2 className="text-xl sm:text-2xl font-display font-bold text-brown">Phone</h2>
                    </div>
                    <p className="text-base sm:text-lg text-brown/70">09683507302</p>
                  </div>

                  <div className="bg-white p-6 sm:p-8 rounded-xl sm:rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300">
                    <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-sage/10 rounded-full flex items-center justify-center">
                        <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-sage" />
                      </div>
                      <h2 className="text-xl sm:text-2xl font-display font-bold text-brown">Email</h2>
                    </div>
                    <p className="text-base sm:text-lg text-brown/70 break-all">officialempanutriverse@gmail.com</p>
                  </div>

                  <div className="bg-white p-6 sm:p-8 rounded-xl sm:rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300">
                    <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-sage/10 rounded-full flex items-center justify-center">
                        <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-sage" />
                      </div>
                      <h2 className="text-xl sm:text-2xl font-display font-bold text-brown">Address</h2>
                    </div>
                    <p className="text-base sm:text-lg text-brown/70">69 A. Pablo St., Malinta, Valenzuela City</p>
                  </div>

                  <div className="bg-white p-6 sm:p-8 rounded-xl sm:rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300">
                    <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-sage/10 rounded-full flex items-center justify-center">
                        <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-sage" />
                      </div>
                      <h2 className="text-xl sm:text-2xl font-display font-bold text-brown">Store Hours</h2>
                    </div>
                    <div className="space-y-2">
                      <p className="text-base sm:text-lg text-brown/70">Monday - Saturday</p>
                      <p className="text-base sm:text-lg text-brown/70">9:00 AM - 7:00 PM</p>
                      <p className="text-base sm:text-lg text-brown/70">Closed on Sundays and Holidays</p>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div className="bg-white p-6 sm:p-8 rounded-xl sm:rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                    <h2 className="text-xl sm:text-2xl font-display font-bold text-brown">Follow Us</h2>
                  </div>
                  <div className="grid grid-cols-1 gap-4 sm:gap-6">
                    <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg sm:rounded-xl bg-beige-light/50 hover:bg-beige-light transition-colors duration-300">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-sage/10 rounded-full flex items-center justify-center">
                        <Facebook className="w-4 h-4 sm:w-5 sm:h-5 text-sage" />
                      </div>
                      <span className="text-base sm:text-lg text-brown/70">Facebook</span>
                    </div>
                    <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg sm:rounded-xl bg-beige-light/50 hover:bg-beige-light transition-colors duration-300">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-sage/10 rounded-full flex items-center justify-center">
                        <Instagram className="w-4 h-4 sm:w-5 sm:h-5 text-sage" />
                      </div>
                      <span className="text-base sm:text-lg text-brown/70">Instagram</span>
                    </div>
                    <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg sm:rounded-xl bg-beige-light/50 hover:bg-beige-light transition-colors duration-300">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-sage/10 rounded-full flex items-center justify-center">
                        <Music className="w-4 h-4 sm:w-5 sm:h-5 text-sage" />
                      </div>
                      <span className="text-base sm:text-lg text-brown/70">TikTok</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Section */}
              <div className="mt-8 sm:mt-12 bg-white p-6 sm:p-8 rounded-xl sm:rounded-2xl shadow-sm">
                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-sage/10 rounded-full flex items-center justify-center">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-sage" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-display font-bold text-brown">Find Us</h2>
                </div>
                <div className="aspect-video rounded-lg sm:rounded-xl overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3859.375295742751!2d120.96743269999999!3d14.6913563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b40b75e70b53%3A0xc1ffe3e9a68feb68!2s69%20A.%20Pablo%20St%2C%20Valenzuela%2C%20Metro%20Manila!5e0!3m2!1sen!2sph!4v1745757639382!5m2!1sen!2sph"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-lg sm:rounded-xl"
                  ></iframe>
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

export default Contact;
