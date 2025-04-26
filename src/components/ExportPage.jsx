
export default function ExportPage() {
  // You can add state and effects here as needed
  
  return (
    <div className="export-section mt-24">
      {/* Hero Section */}
      <section className="bg-[#FAF3E0] py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#4A3B21] mb-6">
            Global Timber Export Solutions
          </h2>
          <p className="text-lg max-w-3xl mx-auto text-[#674C28] mb-8">
            Premium quality timber sourced from sustainable forests, ready for international markets.
          </p>
          <button className="px-6 py-3 bg-[#4A3B21] text-white rounded-lg hover:bg-[#674C28] transition-colors">
            Request Export Quote
          </button>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-[#4A3B21]">
            Our Export Products
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Product Cards - Add your actual products here */}
            {['Walnut', 'Teak', 'Oak'].map((wood) => (
              <div key={wood} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 bg-gray-200"></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#4A3B21] mb-2">{wood}</h3>
                  <p className="text-[#674C28] mb-4">
                    Premium quality {wood.toLowerCase()} timber, carefully selected and processed for export.
                  </p>
                  <button className="px-4 py-2 bg-[#4A3B21] text-white rounded hover:bg-[#674C28] transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Export Process Section */}
      <section className="bg-[#F5EFE0] py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-[#4A3B21]">
            Our Export Process
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: 1, title: 'Selection', desc: 'Carefully selecting premium timber' },
              { step: 2, title: 'Processing', desc: 'Processing according to international standards' },
              { step: 3, title: 'Quality Control', desc: 'Rigorous quality control measures' },
              { step: 4, title: 'Shipping', desc: 'Secure packaging and reliable shipping' }
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 bg-[#4A3B21] text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold">{item.step}</span>
                </div>
                <h3 className="text-lg font-semibold text-[#4A3B21] mb-2">{item.title}</h3>
                <p className="text-[#674C28]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-[#4A3B21]">
            Contact Our Export Team
          </h2>
          
          <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-[#4A3B21] mb-2">Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#674C28]" 
                  />
                </div>
                <div>
                  <label className="block text-[#4A3B21] mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#674C28]" 
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label className="block text-[#4A3B21] mb-2">Company</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#674C28]" 
                />
              </div>
              
              <div className="mb-6">
                <label className="block text-[#4A3B21] mb-2">Message</label>
                <textarea 
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#674C28]"
                  rows="4"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="w-full px-6 py-3 bg-[#4A3B21] text-white rounded-lg hover:bg-[#674C28] transition-colors"
              >
                Send Inquiry
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}