
// import Navbar from './components/Navbar';
// import Hero3D from './components/Hero3D';
// import AboutUs from './components/AboutUs';
// import Details from './components/Details';
// import TimberProducts from './components/TimberProducts';
// import TestimonialsSection from './components/TestimonialsSection';
// import ContactUs from './components/ContactUs';
// import { Routes, Route } from 'react-router-dom';

// function App() {
//   return (
//     <>
//       <Navbar />
      
//       <Routes>
//         <Route path="/" element={
//           <main className="pt-20">
//             <section id="home" className="min-h-screen bg-white dark:bg-black">
//               <Hero3D />
//             </section>

//             <section id="about" className="min-h-screen bg-white dark:bg-black">
//               <AboutUs />
//             </section>

//             <section id="timber" className="min-h-screen bg-[#F8F4EF] dark:bg-[#231915] text-gray-800 dark:text-white">
//               <TimberProducts />
//             </section>

//             <section id="testimonials" className="min-h-screen bg-white dark:bg-black text-gray-800 dark:text-white">
//               <TestimonialsSection />
//             </section>

//             <section id="contact" className="min-h-screen bg-gray-100 dark:bg-zinc-900 text-gray-800 dark:text-white">
//             <ContactUs />
//             </section>
//           </main>
//         } />
        
//         <Route path="/about-details" element={<Details />} />
//       </Routes>
//     </>
//   );
// }

// export default App;


import Navbar from './components/Navbar';
import Hero3D from './components/Hero3D';
import AboutUs from './components/AboutUs';
import Details from './components/Details';
import TimberProducts from './components/TimberProducts';
import TestimonialsSection from './components/TestimonialsSection';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import ExportPage from './components/ExportPage';

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <main className="pt-20">
              <section id="home" className="min-h-screen bg-white dark:bg-black">
                <Hero3D />
              </section>

              <section id="about" className="min-h-screen bg-white dark:bg-black">
                <AboutUs />
              </section>

              <section id="timber" className="min-h-screen bg-[#F8F4EF] dark:bg-[#231915] text-gray-800 dark:text-white">
                <TimberProducts />
              </section>

              {/* ✅ Removed min-h-screen here */}
              <section id="testimonials" className="bg-white dark:bg-black text-gray-800 dark:text-white">
                <TestimonialsSection />
              </section>

              <section id="contact" className="min-h-screen bg-gray-100 dark:bg-zinc-900 text-gray-800 dark:text-white">
                <ContactUs />
              </section>
              <Footer />
            </main>
          }
        />

        <Route path="/about-details" element={<Details />} />
        <Route path="/export/*" element={<ExportPage />} />

      </Routes>
    </>
  );
}

export default App;
