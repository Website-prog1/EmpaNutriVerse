
import { Facebook, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-brown text-beige">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="font-display text-2xl mb-4">Contact Us</h3>
            <div className="space-y-2">
              <p>Phone: 09683507302</p>
              <p>Email: officialempanutriverse@gmail.com</p>
              <p>69 A. Pablo St., Malinta, Valenzuela City</p>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-display text-2xl mb-4">Store Hours</h3>
            <p>Monday - Saturday</p>
            <p>9:00 AM - 7:00 PM</p>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-display text-2xl mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a href="#" className="hover:text-sage transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-sage transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-beige/20 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} EmpaNutriVerse. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

