import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Music, Sparkles, Send } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-beige-light/50 to-white">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-12 sm:py-16 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute w-[500px] h-[500px] rounded-full bg-sage/5 -top-20 -left-20 animate-pulse"></div>
            <div className="absolute w-[300px] h-[300px] rounded-full bg-sage/5 bottom-20 right-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 rounded-full bg-sage/10 flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-sage" />
                </div>
              </div>
              <h1 className="text-4xl sm:text-5xl font-display font-bold text-brown mb-4">
                Contact Us
              </h1>
              <div className="w-32 h-0.5 bg-gradient-to-r from-sage/0 via-sage to-sage/0 mx-auto mb-6"></div>
              <p className="text-lg text-brown/70 leading-relaxed">
                We'd love to hear from you! Reach out to us through any of these channels.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Contact Details */}
                <div className="space-y-4">
                  <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-sage/10">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-sage/10 rounded-lg flex items-center justify-center">
                        <Phone className="w-5 h-5 text-sage" />
                      </div>
                      <h2 className="text-xl font-display font-bold text-brown">Phone</h2>
                    </div>
                    <p className="text-base text-brown/70">09683507302</p>
                  </div>

                  <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-sage/10">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-sage/10 rounded-lg flex items-center justify-center">
                        <Mail className="w-5 h-5 text-sage" />
                      </div>
                      <h2 className="text-xl font-display font-bold text-brown">Email</h2>
                    </div>
                    <p className="text-base text-brown/70 break-all">officialempanutriverse@gmail.com</p>
                  </div>

                  <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-sage/10">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-sage/10 rounded-lg flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-sage" />
                      </div>
                      <h2 className="text-xl font-display font-bold text-brown">Address</h2>
                    </div>
                    <p className="text-base text-brown/70">69 A. Pablo St., Malinta, Valenzuela City</p>
                  </div>

                  <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-sage/10">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-sage/10 rounded-lg flex items-center justify-center">
                        <Clock className="w-5 h-5 text-sage" />
                      </div>
                      <h2 className="text-xl font-display font-bold text-brown">Store Hours</h2>
                    </div>
                    <div className="space-y-1">
                      <p className="text-base text-brown/70">Monday - Saturday</p>
                      <p className="text-base text-brown/70">9:00 AM - 7:00 PM</p>
                      <p className="text-base text-brown/70">Closed on Sundays and Holidays</p>
                    </div>
                  </div>
                </div>

                {/* Message Form */}
                <div className="space-y-6">
                  <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-sage/10">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 bg-sage/10 rounded-lg flex items-center justify-center">
                        <Send className="w-5 h-5 text-sage" />
                      </div>
                      <h2 className="text-xl font-display font-bold text-brown">Send Us a Message</h2>
                    </div>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-brown/70 mb-1">Name</label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-3 py-2 rounded-lg border border-beige-light focus:border-sage focus:ring-1 focus:ring-sage/20 outline-none transition-all duration-300 bg-white/50"
                            required
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-brown/70 mb-1">Email</label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-3 py-2 rounded-lg border border-beige-light focus:border-sage focus:ring-1 focus:ring-sage/20 outline-none transition-all duration-300 bg-white/50"
                            required
                          />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-brown/70 mb-1">Subject</label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          className="w-full px-3 py-2 rounded-lg border border-beige-light focus:border-sage focus:ring-1 focus:ring-sage/20 outline-none transition-all duration-300 bg-white/50"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-brown/70 mb-1">Message</label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows="4"
                          className="w-full px-3 py-2 rounded-lg border border-beige-light focus:border-sage focus:ring-1 focus:ring-sage/20 outline-none transition-all duration-300 bg-white/50 resize-none"
                          required
                        ></textarea>
                      </div>
                      <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-sage to-sage/80 text-white py-2.5 px-4 rounded-lg font-medium hover:from-sage/90 hover:to-sage/70 transition-all duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
                      >
                        <Send className="w-4 h-4" />
                        Send Message
                      </button>
                    </form>
                  </div>

                  {/* Social Media */}
                  <div className="grid grid-cols-3 gap-3">
                    <a href="https://www.facebook.com/share/1ARj4WaoPr/" target="_blank" rel="noopener noreferrer" className="bg-white/80 backdrop-blur-sm p-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-sage/10 flex items-center justify-center gap-2 group">
                      <div className="w-8 h-8 bg-sage/10 rounded-lg flex items-center justify-center group-hover:bg-sage/20 transition-colors duration-300">
                        <Facebook className="w-4 h-4 text-sage" />
                      </div>
                      <span className="text-sm text-brown/70 group-hover:text-brown transition-colors duration-300">Facebook</span>
                    </a>
                    <a href="https://www.instagram.com/empanutriverse_?igsh=MTlmOWJ3b3ZmbHdkYg==" target="_blank" rel="noopener noreferrer" className="bg-white/80 backdrop-blur-sm p-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-sage/10 flex items-center justify-center gap-2 group">
                      <div className="w-8 h-8 bg-sage/10 rounded-lg flex items-center justify-center group-hover:bg-sage/20 transition-colors duration-300">
                        <Instagram className="w-4 h-4 text-sage" />
                      </div>
                      <span className="text-sm text-brown/70 group-hover:text-brown transition-colors duration-300">Instagram</span>
                    </a>
                    <a href="https://www.tiktok.com/@official_empanutriverse?_t=ZS-8vvjJQbGL3f&_r=1" target="_blank" rel="noopener noreferrer" className="bg-white/80 backdrop-blur-sm p-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-sage/10 flex items-center justify-center gap-2 group">
                      <div className="w-8 h-8 bg-sage/10 rounded-lg flex items-center justify-center group-hover:bg-sage/20 transition-colors duration-300">
                        <Music className="w-4 h-4 text-sage" />
                      </div>
                      <span className="text-sm text-brown/70 group-hover:text-brown transition-colors duration-300">TikTok</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Map Section */}
              <div className="mt-8 bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-md border border-sage/10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-sage/10 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-sage" />
                  </div>
                  <h2 className="text-xl font-display font-bold text-brown">Find Us</h2>
                </div>
                <div className="aspect-video rounded-lg overflow-hidden shadow-md">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3859.375295742751!2d120.96743269999999!3d14.6913563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b40b75e70b53%3A0xc1ffe3e9a68feb68!2s69%20A.%20Pablo%20St%2C%20Valenzuela%2C%20Metro%20Manila!5e0!3m2!1sen!2sph!4v1745757639382!5m2!1sen!2sph"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-lg"
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
