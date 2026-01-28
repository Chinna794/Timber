import React, { useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { scroller } from 'react-scroll';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [hoveredSocial, setHoveredSocial] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  
  const isHomePage = location.pathname === "/";
  
  const goToSection = (id) => {
    if (!isHomePage) {
      navigate("/", { state: { scrollTo: id } });
    } else {
      scroller.scrollTo(id, {
        smooth: true,
        offset: -90,
        duration: 500,
      });
    }
  };
  
  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-[#FFD700] to-[#DAA520] rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-tl from-[#DAA520] to-[#FFD700] rounded-full blur-3xl" />
      </div>

      {/* Grain Texture */}
      <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay pointer-events-none" 
           style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' /%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' /%3E%3C/svg%3E")' }} 
      />

      <div className="relative container mx-auto px-6 py-16 md:py-20">
        {/* Top Border Accent */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#FFD700] to-transparent opacity-50" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-10 gap-12 lg:gap-8">
          {/* Company Information */}
          <div className="lg:col-span-4 space-y-6">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-[#FFD700] via-[#F4C430] to-[#DAA520] text-transparent bg-clip-text">
                SVM Timbers
              </h2>
              <div className="h-1 w-16 bg-gradient-to-r from-[#FFD700] to-transparent rounded-full" />
            </div>
            
            <p className="text-gray-300 leading-relaxed max-w-md font-light text-lg">
              Premium timber suppliers committed to quality, sustainability, and craftsmanship.
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-3 pt-2">
              <div className="px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-xs text-gray-300 hover:bg-white/10 transition-colors duration-300">
                ✓ Since 1982
              </div>
              <div className="px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-xs text-gray-300 hover:bg-white/10 transition-colors duration-300">
                ✓ Sustainable
              </div>
              <div className="px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-xs text-gray-300 hover:bg-white/10 transition-colors duration-300">
                ✓ Premium Quality
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-semibold mb-6 text-[#E8D4B0] tracking-wide">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: 'Home', type: 'scroll', target: 'home' },
                { name: 'About Us', type: 'scroll', target: 'about' },
                { name: 'Our Story', type: 'route', target: '/about-details#our-story' },
                { name: 'Timber', type: 'route', target: '/timber' },
                { name: 'Contact', type: 'scroll', target: 'contact' }
              ].map((link) => (
                <li key={link.name}>
                  {link.type === 'scroll' ? (
                    <button 
                      onClick={() => goToSection(link.target)}
                      className="group flex items-center text-gray-400 hover:text-white transition-all duration-300 w-full text-left"
                    >
                      <span className="inline-block w-0 group-hover:w-2 h-[1px] bg-gradient-to-r from-[#FFD700] to-transparent mr-0 group-hover:mr-3 transition-all duration-300" />
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        {link.name}
                      </span>
                    </button>
                  ) : (
                    <Link 
                      to={link.target} 
                      className="group flex items-center text-gray-400 hover:text-white transition-all duration-300"
                    >
                      <span className="inline-block w-0 group-hover:w-2 h-[1px] bg-gradient-to-r from-[#FFD700] to-transparent mr-0 group-hover:mr-3 transition-all duration-300" />
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        {link.name}
                      </span>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Information - Both Locations Side by Side */}
          <div className="lg:col-span-4">
            <h3 className="text-lg font-semibold mb-6 text-[#E8D4B0] tracking-wide">Contact Us</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Penukonda Location */}
              <address className="not-italic text-gray-300 space-y-3">
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 mt-0.5 text-[#DAA520] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                  <div>
                    <p className="text-[#FFD700] font-semibold text-base mb-1">Penukonda</p>
                    <p className="text-gray-300 text-sm leading-relaxed">Sri Venkateshwara Sawmill cum Depot</p>
                    <p className="text-gray-300 text-sm leading-relaxed">Opp to New Police Station</p>
                    <p className="text-gray-300 text-sm">Penukonda, PIN: 515110</p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <svg className="w-4 h-4 mt-0.5 text-[#DAA520] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                  <div className="text-base space-y-1">
                    <a href="tel:+919949743169" className="block text-gray-400 hover:text-white transition-colors">9949743169</a>
                    <a href="tel:+918919868689" className="block text-gray-400 hover:text-white transition-colors">8919868689</a>
                  </div>
                </div>
              </address>

              {/* Bagepalli Location */}
              <address className="not-italic text-gray-300 space-y-3">
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 mt-0.5 text-[#DAA520] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                  <div>
                    <p className="text-[#FFD700] font-semibold text-base mb-1">Bagepalli</p>
                    <p className="text-gray-300 text-sm leading-relaxed">Sri Vishnu Maheshwara Timber Hub</p>
                    <p className="text-gray-300 text-sm leading-relaxed">Sy.No: 8/2, Opp Narepalli Village</p>
                    <p className="text-gray-300 text-sm leading-relaxed">Beside Manjunatha Dabha TB Cross</p>
                    <p className="text-gray-300 text-sm">Chikkaballapur, Karnataka</p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <svg className="w-4 h-4 mt-0.5 text-[#DAA520] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                  <div className="text-base space-y-1">
                    <a href="tel:+919121212918" className="block text-gray-400 hover:text-white transition-colors">9121212918</a>
                    <a href="tel:+918309539452" className="block text-gray-400 hover:text-white transition-colors">8309539452</a>
                  </div>
                </div>
              </address>
            </div>
          </div>
        </div>
        
        {/* Divider */}
        <div className="my-12 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

        {/* Bottom Section - Social Media & Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Social Media */}
          <div className="flex items-center gap-1">
            {[
              { name: 'Facebook', href: 'https://facebook.com', icon: (
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
              )},
              { name: 'Twitter', href: 'https://twitter.com', icon: (
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
              )},
              { name: 'Instagram', href: 'https://instagram.com', icon: (
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              )},
              { name: 'LinkedIn', href: 'https://linkedin.com', icon: (
                <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
              )}
            ].map((social, index) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                onMouseEnter={() => setHoveredSocial(index)}
                onMouseLeave={() => setHoveredSocial(null)}
                className="group relative p-3 rounded-full transition-all duration-300 hover:bg-white/10"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="20" 
                  height="20" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                  className="text-gray-400 group-hover:text-white transition-all duration-300 group-hover:scale-110"
                >
                  {social.icon}
                </svg>
                
                {/* Glow Effect on Hover */}
                <div className={`absolute inset-0 rounded-full bg-gradient-to-br from-[#FFD700]/20 to-[#DAA520]/20 blur-md transition-opacity duration-300 ${
                  hoveredSocial === index ? 'opacity-100' : 'opacity-0'
                }`} />
              </a>
            ))}
          </div>

          
          
          {/* Copyright */}
          <div className="text-gray-400 text-sm">
            © {currentYear} <span className="text-gray-300">SVM Timbers</span>. All rights reserved.
          </div>
        </div>

        
      </div>
    </footer>
  );
};

export default Footer;