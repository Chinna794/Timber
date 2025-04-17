// import { useState, useEffect, useRef, useMemo } from 'react';
// import { MapPin } from 'lucide-react';
// const FORMSPREE_URL = import.meta.env.VITE_FORMSPREE_ENDPOINT;

// const luxury = {
//   bg: 'bg-[#F8F4EF] dark:bg-[#231915]',
//   heading: 'text-[#674C28] dark:text-[#FFD700]',
//   tabActive: 'from-[#BFA77A] to-[#D8C69C] text-black dark:from-[#FFD700] dark:to-[#DAA520] dark:text-black',
//   tabInactive: 'bg-[#FFF] text-[#5A4A30] border-[#CBB27D] dark:bg-[#1C1C1C] dark:text-[#EADCA6] dark:border-[#7F6E3C] hover:ring-yellow-500',
//   cardBg: 'bg-[#FFFDF8]/70 dark:bg-[#1B1B1B]/80 border-[#EADCA6] dark:border-[#5F4E2A]',
//   gradientBox: 'from-[#F0E5CF] via-[#E5D4B7] to-[#D9C7A5] dark:from-[#3B2C1A] dark:via-[#2A1F12] dark:to-[#1C140A]',
//   textMain: 'text-[#4A3B21] dark:text-[#FAF3E0]',
//   textSub: 'text-[#7A684A] dark:text-[#D6C49A]',
//   textLabel: 'text-[#5F4E2A] dark:text-[#FFEBC1]'
// };

// const timberOptions = [
//   'Burma Teak',
//   'Hunsur Teak',
//   'Balharshah Teak',
//   'Indian Ponne (Honne)',
//   'Australia (Honne)',
//   'Mathi Logs'
// ];

// const ContactUs = () => {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     phone: '',
//     services: timberOptions.reduce((acc, timber) => {
//       acc[timber] = false;
//       return acc;
//     }, {})
//   });

//   const penukondaCoords = useMemo(() => [14.0872, 77.5949], []);
//   const [mapType, setMapType] = useState('default');
//   const [mapLoaded, setMapLoaded] = useState(false);
//   const [formStatus, setFormStatus] = useState(null); // To track form status (success/failure)
//   const [timer, setTimer] = useState(0); // To track timer for message fade-out
//   const mapRef = useRef(null);
//   const mapContainerRef = useRef(null);
//   const markerRef = useRef(null);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleCheckboxChange = (e) => {
//     const { name, checked } = e.target;
//     setFormData({
//       ...formData,
//       services: { ...formData.services, [name]: checked }
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
  
//     const selectedServices = Object.keys(formData.services)
//       .filter((key) => formData.services[key])
//       .join(', ');
  
//     const payload = {
//       firstName: formData.firstName,
//       lastName: formData.lastName,
//       email: formData.email,
//       phone: formData.phone,
//       services: selectedServices
//     };
  
//     try {
//       const res = await fetch(FORMSPREE_URL, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           Accept: 'application/json'
//         },
//         body: JSON.stringify(payload)
//       });
  
//       if (res.ok) {
//         setFormStatus('success');
//         setFormData({
//           firstName: '',
//           lastName: '',
//           email: '',
//           phone: '',
//           services: timberOptions.reduce((acc, timber) => {
//             acc[timber] = false;
//             return acc;
//           }, {})
//         });
//         startTimer();
//       } else {
//         setFormStatus('failure');
//         startTimer();
//       }
//     } catch (err) {
//       console.error(err);
//       setFormStatus('failure');
//       startTimer();
//     }
//   };

//   const startTimer = () => {
//     setTimer(0);
//     const interval = setInterval(() => {
//       setTimer((prev) => {
//         if (prev >= 100) {
//           clearInterval(interval);
//           setTimeout(() => setFormStatus(null), 500); // Hide message after the timer ends
//           return 100;
//         }
//         return prev + 1;
//       });
//     }, 50);
//   };

//   const toggleMapType = () => {
//     if (mapRef.current) {
//       mapRef.current.eachLayer((layer) => {
//         if (layer instanceof window.L.TileLayer) {
//           mapRef.current.removeLayer(layer);
//         }
//       });

//       const tileUrl =
//         mapType === 'default'
//           ? 'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png'
//           : 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';

//       const attribution =
//         mapType === 'default'
//           ? 'Map data: &copy; OpenStreetMap contributors, SRTM | Style: &copy; OpenTopoMap'
//           : '&copy; OpenStreetMap contributors';

//       window.L.tileLayer(tileUrl, { attribution }).addTo(mapRef.current);
//       setMapType(mapType === 'default' ? 'satellite' : 'default');
//     }
//   };

//   const getDirectionsUrl = () => {
//     return `https://www.google.com/maps/dir/?api=1&destination=${penukondaCoords[0]},${penukondaCoords[1]}`;
//   };

//   useEffect(() => {
//     const loadLeafletCSS = () => {
//       if (!document.getElementById('leaflet-css')) {
//         const link = document.createElement('link');
//         link.id = 'leaflet-css';
//         link.rel = 'stylesheet';
//         link.href = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.css';
//         document.head.appendChild(link);
//       }
//     };

//     const loadLeafletJS = () => {
//       return new Promise((resolve) => {
//         if (window.L) {
//           resolve();
//         } else {
//           const script = document.createElement('script');
//           script.src = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.js';
//           script.onload = resolve;
//           document.head.appendChild(script);
//         }
//       });
//     };

//     const initMap = async () => {
//       loadLeafletCSS();
//       await loadLeafletJS();

//       if (mapContainerRef.current && !mapRef.current) {
//         const screenZoom = window.innerWidth < 768 ? 14 : 12;
//         const map = window.L.map(mapContainerRef.current, { zoomControl: false }).setView(penukondaCoords, screenZoom);

//         window.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//           attribution: '&copy; OpenStreetMap contributors'
//         }).addTo(map);

//         const customIcon = window.L.divIcon({
//           className: 'custom-map-marker',
//           html: `<div style="background-color: #8B5CF6; width: 16px; height: 16px; border-radius: 50%; border: 2px solid white;"></div>`,
//           iconSize: [20, 20],
//           iconAnchor: [10, 10]
//         });

//         const marker = window.L.marker(penukondaCoords, { icon: customIcon })
//           .addTo(map)
//           .bindPopup('Our location in Penukonda');

//         mapRef.current = map;
//         markerRef.current = marker;

//         document.head.insertAdjacentHTML('beforeend', `
//           <style>
//             .custom-map-marker {
//               display: flex;
//               justify-content: center;
//               align-items: center;
//             }
//           </style>
//         `);

//         setTimeout(() => setMapLoaded(true), 500);
//       }
//     };

//     initMap();

//     return () => {
//       if (mapRef.current) {
//         mapRef.current.remove();
//         mapRef.current = null;
//         markerRef.current = null;
//       }
//     };
//   }, [penukondaCoords]);

//   return (
//     <div className={`flex flex-col md:flex-row w-full min-h-screen ${luxury.bg} ${luxury.textMain}`}>
//       {/* Form */}
//       <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
//         <h1 className={`text-4xl font-serif font-bold mb-2 ${luxury.heading}`}>Get in touch</h1>
//         <p className={`${luxury.textSub} mb-6`}>We're here to help. Chat to our team 24/7 and get started in minutes.</p>

//         <form onSubmit={handleSubmit} className="w-full">
//           {/* Name Fields */}
//           <div className="flex flex-col md:flex-row gap-4 mb-4">
//             {['firstName', 'lastName'].map((field) => (
//               <div key={field} className="w-full md:w-1/2">
//                 <label className={`block text-sm font-medium mb-1 ${luxury.textLabel}`}>
//                   {field === 'firstName' ? 'First Name' : 'Last Name'}
//                 </label>
//                 <input
//                   type="text"
//                   name={field}
//                   value={formData[field]}
//                   onChange={handleInputChange}
//                   className="w-full p-2 border border-gray-300 rounded bg-white focus:ring-2 focus:ring-yellow-600"
//                   required
//                 />
//               </div>
//             ))}
//           </div>

//           {/* Email */}
//           <div className="mb-4">
//             <label className={`block text-sm font-medium mb-1 ${luxury.textLabel}`}>Email</label>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleInputChange}
//               className="w-full p-2 border border-gray-300 rounded bg-white focus:ring-2 focus:ring-yellow-600"
//               required
//             />
//           </div>

//           {/* Phone */}
//           <div className="mb-4">
//             <label className={`block text-sm font-medium mb-1 ${luxury.textLabel}`}>Phone</label>
//             <div className="flex">
//               <select className="p-2 border border-gray-300 rounded-l bg-white text-sm">
//                 <option>IN</option><option>US</option><option>UK</option>
//               </select>
//               <input
//                 type="tel"
//                 name="phone"
//                 value={formData.phone}
//                 onChange={handleInputChange}
//                 className="w-full p-2 border-t border-b border-r border-gray-300 rounded-r bg-white focus:ring-2 focus:ring-yellow-600"
//               />
//             </div>
//           </div>

//           {/* Timber Checkboxes */}
//           <div className="mb-6">
//             <label className={`block text-sm font-medium mb-2 ${luxury.textLabel}`}>Timbers and Products</label>
//             <div className="grid grid-cols-2 gap-2">
//               {timberOptions.map((product) => (
//                 <label key={product} className={`flex items-center text-sm ${luxury.textMain}`}>
//                   <input
//                     type="checkbox"
//                     name={product}
//                     checked={formData.services[product]}
//                     onChange={handleCheckboxChange}
//                     className="mr-2 h-4 w-4 text-yellow-600"
//                   />
//                   {product}
//                 </label>
//               ))}
//             </div>
//           </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             className={`w-full py-2 px-4 rounded transition font-medium bg-gradient-to-r ${luxury.tabActive}`}>
//             Send message
//           </button>
//         </form>

//         {/* Success/Failure Banner */}
//         {formStatus && (
//   <div
//     className={`w-full mt-4 p-4 text-white text-center rounded font-serif text-lg`}
//     style={{
//       backgroundColor: formStatus === 'success' ? '#22c55e' : '#ef4444', // green / red
//       fontFamily: `'Fairplay', serif`,
//       opacity: timer === 100 ? 0 : 1,
//       transition: 'opacity 0.6s ease'
//     }}
//   >
//     {formStatus === 'success'
//       ? 'Thanks for contacting us!'
//       : 'Something went wrong. Please try again.'}
//     <div
//       className="mt-2 h-1 bg-yellow-600 transition-all duration-200 ease-linear"
//       style={{ width: `${timer}%` }}
//     />
//   </div>
// )}


//       </div>

//       {/* Map */}
//       <div className="w-full md:w-1/2 relative">
//         <div className="absolute top-4 left-4 z-10 space-x-2">
//           <button
//             onClick={toggleMapType}
//             className={`px-3 py-1 rounded shadow text-sm transition ${luxury.tabInactive}`}>
//             {mapType === 'default' ? 'Satellite' : 'Map'}
//           </button>
//           <a
//             href={getDirectionsUrl()}
//             target="_blank"
//             rel="noopener noreferrer"
//             className={`inline-flex items-center px-3 py-1 rounded text-sm shadow transition bg-gradient-to-r ${luxury.tabActive}`}>
//             <MapPin className="w-4 h-4 mr-1" /> Get Directions
//           </a>
//         </div>

//         {!mapLoaded && (
//           <div className="absolute inset-0 flex items-center justify-center bg-white z-0">
//             <div className="w-10 h-10 border-4 border-yellow-500 border-t-transparent rounded-full animate-spin"></div>
//           </div>
//         )}

//         <div ref={mapContainerRef} className="h-full w-full" style={{ minHeight: '400px' }} />
//       </div>
//     </div>
//   );
// };

// export default ContactUs;



import { useState, useEffect, useRef, useMemo } from 'react';
import { MapPin } from 'lucide-react';
const FORMSPREE_URL = import.meta.env.VITE_FORMSPREE_ENDPOINT;

const luxury = {
  bg: 'bg-[#F8F4EF] dark:bg-[#231915]',
  heading: 'text-[#674C28] dark:text-[#FFD700]',
  tabActive: 'from-[#BFA77A] to-[#D8C69C] text-black dark:from-[#FFD700] dark:to-[#DAA520] dark:text-black',
  tabInactive: 'bg-[#FFF] text-[#5A4A30] border-[#CBB27D] dark:bg-[#1C1C1C] dark:text-[#EADCA6] dark:border-[#7F6E3C] hover:ring-yellow-500',
  cardBg: 'bg-[#FFFDF8]/70 dark:bg-[#1B1B1B]/80 border-[#EADCA6] dark:border-[#5F4E2A]',
  gradientBox: 'from-[#F0E5CF] via-[#E5D4B7] to-[#D9C7A5] dark:from-[#3B2C1A] dark:via-[#2A1F12] dark:to-[#1C140A]',
  textMain: 'text-[#4A3B21] dark:text-[#FAF3E0]',
  textSub: 'text-[#7A684A] dark:text-[#D6C49A]',
  textLabel: 'text-[#5F4E2A] dark:text-[#FFEBC1]'
};

const timberOptions = [
  'Burma Teak',
  'Hunsur Teak',
  'Balharshah Teak',
  'Indian Ponne (Honne)',
  'Australia (Honne)',
  'Mathi Logs'
];

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    services: timberOptions.reduce((acc, timber) => {
      acc[timber] = false;
      return acc;
    }, {})
  });

  const penukondaCoords = useMemo(() => [14.0872, 77.5949], []);
  const [mapType, setMapType] = useState('default');
  const [mapLoaded, setMapLoaded] = useState(false);
  const [formStatus, setFormStatus] = useState(null);
  const [timer, setTimer] = useState(0);
  const mapRef = useRef(null);
  const mapContainerRef = useRef(null);
  const markerRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData({
      ...formData,
      services: { ...formData.services, [name]: checked }
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const selectedServices = Object.keys(formData.services)
      .filter((key) => formData.services[key])
      .join(', ');

    const payload = { ...formData, services: selectedServices };

    try {
      const res = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify(payload)
      });

      if (res.ok) {
        setFormStatus('success');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          services: timberOptions.reduce((acc, timber) => {
            acc[timber] = false;
            return acc;
          }, {})
        });
        startTimer();
      } else {
        setFormStatus('failure');
        startTimer();
      }
    } catch (err) {
      console.error(err);
      setFormStatus('failure');
      startTimer();
    }
  };

  const startTimer = () => {
    setTimer(0);
    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setFormStatus(null), 500);
          return 100;
        }
        return prev + 1;
      });
    }, 50);
  };

  const toggleMapType = () => {
    if (mapRef.current) {
      mapRef.current.eachLayer((layer) => {
        if (layer instanceof window.L.TileLayer) {
          mapRef.current.removeLayer(layer);
        }
      });

      const tileUrl =
        mapType === 'default'
          ? 'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png'
          : 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';

      const attribution =
        mapType === 'default'
          ? 'Map data: &copy; OpenStreetMap contributors, SRTM | Style: &copy; OpenTopoMap'
          : '&copy; OpenStreetMap contributors';

      window.L.tileLayer(tileUrl, { attribution }).addTo(mapRef.current);
      setMapType(mapType === 'default' ? 'satellite' : 'default');
    }
  };

  const getDirectionsUrl = () =>
    `https://www.google.com/maps/dir/?api=1&destination=${penukondaCoords[0]},${penukondaCoords[1]}`;

  useEffect(() => {
    const loadLeafletCSS = () => {
      if (!document.getElementById('leaflet-css')) {
        const link = document.createElement('link');
        link.id = 'leaflet-css';
        link.rel = 'stylesheet';
        link.href = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.css';
        document.head.appendChild(link);
      }
    };

    const loadLeafletJS = () =>
      new Promise((resolve) => {
        if (window.L) resolve();
        else {
          const script = document.createElement('script');
          script.src = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.js';
          script.onload = resolve;
          document.head.appendChild(script);
        }
      });

    const initMap = async () => {
      loadLeafletCSS();
      await loadLeafletJS();

      if (mapContainerRef.current && !mapRef.current) {
        const screenZoom = window.innerWidth < 768 ? 14 : 12;
        const map = window.L.map(mapContainerRef.current, { zoomControl: false }).setView(penukondaCoords, screenZoom);

        window.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; OpenStreetMap contributors'
        }).addTo(map);

        const customIcon = window.L.divIcon({
          className: 'custom-map-marker',
          html: `<div style="background-color: #8B5CF6; width: 16px; height: 16px; border-radius: 50%; border: 2px solid white;"></div>`,
          iconSize: [20, 20],
          iconAnchor: [10, 10]
        });

        const marker = window.L.marker(penukondaCoords, { icon: customIcon })
          .addTo(map)
          .bindPopup('Our location in Penukonda');

        mapRef.current = map;
        markerRef.current = marker;

        document.head.insertAdjacentHTML('beforeend', `
          <style>
            .custom-map-marker {
              display: flex;
              justify-content: center;
              align-items: center;
            }
          </style>
        `);

        setTimeout(() => setMapLoaded(true), 500);
      }
    };

    initMap();

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
        markerRef.current = null;
      }
    };
  }, [penukondaCoords]);

  return (
    <div className={`flex flex-col md:flex-row w-full min-h-screen ${luxury.bg} ${luxury.textMain}`}>
      {/* Form Section */}
      <div className="w-full md:w-1/2 p-6 sm:p-8 md:p-12 flex flex-col justify-center">
        <h1 className={`text-2xl sm:text-3xl md:text-4xl font-serif font-bold mb-2 ${luxury.heading}`}>Get in touch</h1>
        <p className={`${luxury.textSub} mb-6`}>We're here to help. Chat to our team 24/7 and get started in minutes.</p>

        <form onSubmit={handleSubmit} className="w-full">
          {/* Name */}
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            {['firstName', 'lastName'].map((field) => (
              <div key={field} className="w-full md:w-1/2">
                <label className={`block text-sm font-medium mb-1 ${luxury.textLabel}`}>
                  {field === 'firstName' ? 'First Name' : 'Last Name'}
                </label>
                <input
                  type="text"
                  name={field}
                  value={formData[field]}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded bg-white focus:ring-2 focus:ring-yellow-600"
                  required
                />
              </div>
            ))}
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className={`block text-sm font-medium mb-1 ${luxury.textLabel}`}>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded bg-white focus:ring-2 focus:ring-yellow-600"
              required
            />
          </div>

          {/* Phone */}
          <div className="mb-4">
            <label className={`block text-sm font-medium mb-1 ${luxury.textLabel}`}>Phone</label>
            <div className="flex">
              <select className="p-2 border border-gray-300 rounded-l bg-white text-sm">
                <option>IN</option><option>US</option><option>UK</option>
              </select>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full p-2 border-t border-b border-r border-gray-300 rounded-r bg-white focus:ring-2 focus:ring-yellow-600"
              />
            </div>
          </div>

          {/* Timber Products */}
          <div className="mb-6">
            <label className={`block text-sm font-medium mb-2 ${luxury.textLabel}`}>Timbers and Products</label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {timberOptions.map((product) => (
                <label key={product} className={`flex items-center text-sm ${luxury.textMain}`}>
                  <input
                    type="checkbox"
                    name={product}
                    checked={formData.services[product]}
                    onChange={handleCheckboxChange}
                    className="mr-2 h-4 w-4 text-yellow-600"
                  />
                  {product}
                </label>
              ))}
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className={`w-full py-2 px-4 text-sm md:text-base rounded transition font-medium bg-gradient-to-r ${luxury.tabActive}`}>
            Send message
          </button>
        </form>

        {/* Status Banner */}
        {formStatus && (
          <div
            className={`w-full mt-4 px-2 sm:px-4 py-4 text-white text-center rounded font-serif text-lg`}
            style={{
              backgroundColor: formStatus === 'success' ? '#22c55e' : '#ef4444',
              fontFamily: `'Fairplay', serif`,
              opacity: timer === 100 ? 0 : 1,
              transition: 'opacity 0.6s ease'
            }}
          >
            {formStatus === 'success'
              ? 'Thanks for contacting us!'
              : 'Something went wrong. Please try again.'}
            <div
              className="mt-2 h-1 bg-yellow-600 transition-all duration-200 ease-linear"
              style={{ width: `${timer}%` }}
            />
          </div>
        )}
      </div>

      {/* Map Section */}
      <div className="w-full md:w-1/2 relative">
        <div className="absolute top-4 left-4 z-10 space-y-2 md:space-y-0 md:space-x-2 flex flex-col md:flex-row">
          <button
            onClick={toggleMapType}
            className={`px-3 py-1 rounded shadow text-sm transition ${luxury.tabInactive}`}>
            {mapType === 'default' ? 'Satellite' : 'Map'}
          </button>
          <a
            href={getDirectionsUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center px-3 py-1 rounded text-sm shadow transition bg-gradient-to-r ${luxury.tabActive}`}>
            <MapPin className="w-4 h-4 mr-1" /> Get Directions
          </a>
        </div>

        {!mapLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-white z-0">
            <div className="w-10 h-10 border-4 border-yellow-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}

        <div ref={mapContainerRef} className="h-[300px] md:h-full w-full" />
      </div>
    </div>
  );
};

export default ContactUs;
