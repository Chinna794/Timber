import { useState, useEffect, useRef, useMemo } from "react";
import { MapPin } from "lucide-react";
const FORMSPREE_URL = import.meta.env.VITE_FORMSPREE_ENDPOINT;

const luxury = {
  bg: "bg-[#F8F4EF]",
  heading: "text-[#674C28]",
  tabActive: "from-[#BFA77A] to-[#D8C69C] text-black",
  tabInactive:
    "bg-[#FFF] text-[#5A4A30] border-[#CBB27D] hover:ring-yellow-500",
  cardBg: "bg-[#FFFDF8]/70 border-[#EADCA6]",
  gradientBox: "from-[#F0E5CF] via-[#E5D4B7] to-[#D9C7A5]",
  textMain: "text-[#4A3B21]",
  textSub: "text-[#7A684A]",
  textLabel: "text-[#5F4E2A]",
};

const timberOptions = [
  "Burma Teak",
  "Hunsur Teak",
  "Balharshah Teak",
  "Indian Ponne (Honne)",
  "Australia (Honne)",
  "Mathi Logs",
];

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    comments: "",
    services: timberOptions.reduce((acc, timber) => {
      acc[timber] = false;
      return acc;
    }, {}),
  });

const [validationErrors, setValidationErrors] = useState({
  services: false,
  comments: false,
});

const branchLocations = useMemo(
  () => [
    {
      name: "Penukonda",
      lat: 14.074806,
      lng: 77.602361,
    },
    {
      name: "Bagepalli",
      lat: 13.787139,
      lng: 77.770833,
    },
  ],
  []
);


  const [mapType, setMapType] = useState("default");
  const [mapLoaded, setMapLoaded] = useState(false);
  const [formStatus, setFormStatus] = useState(null);
  const [timer, setTimer] = useState(0);
  const [activeBranch, setActiveBranch] = useState(branchLocations[0]);
  const mapRef = useRef(null);
  const mapContainerRef = useRef(null);
  const markerRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Clear validation error for comments when the user types
    if (name === "comments") {
      setValidationErrors({ ...validationErrors, comments: false });
    }
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    const updatedServices = { ...formData.services, [name]: checked };
    setFormData({
      ...formData,
      services: updatedServices,
    });

    // Clear validation error for services when a checkbox is checked
    if (checked) {
      setValidationErrors({ ...validationErrors, services: false });
    }
  };

  const validateForm = () => {
    const hasSelectedTimber = Object.values(formData.services).some(
      (value) => value
    );
    const hasComments = formData.comments.trim().length > 0;

    const errors = {
      services: !hasSelectedTimber,
      comments: !hasComments,
    };

    setValidationErrors(errors);

    return !errors.services && !errors.comments;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form before submission
    if (!validateForm()) {
      return;
    }

    const selectedServices = Object.keys(formData.services)
      .filter((key) => formData.services[key])
      .join(", ");

    const payload = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      services: selectedServices,
      comments: formData.comments,
    };

    try {
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setFormStatus("success");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          comments: "",
          services: timberOptions.reduce((acc, timber) => {
            acc[timber] = false;
            return acc;
          }, {}),
        });
        startTimer();
      } else {
        setFormStatus("failure");
        startTimer();
      }
    } catch (err) {
      console.error(err);
      setFormStatus("failure");
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
        mapType === "default"
          ? "https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png"
          : "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";

      const attribution =
        mapType === "default"
          ? "Map data: &copy; OpenStreetMap contributors, SRTM | Style: &copy; OpenTopoMap"
          : "&copy; OpenStreetMap contributors";

      window.L.tileLayer(tileUrl, { attribution }).addTo(mapRef.current);
      setMapType(mapType === "default" ? "satellite" : "default");
    }
  };

  const getDirectionsUrl = () =>
  activeBranch
    ? `https://www.google.com/maps/dir/?api=1&destination=${activeBranch.lat},${activeBranch.lng}`
    : "#";


  useEffect(() => {
    const loadLeafletCSS = () => {
      if (!document.getElementById("leaflet-css")) {
        const link = document.createElement("link");
        link.id = "leaflet-css";
        link.rel = "stylesheet";
        link.href =
          "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.css";
        document.head.appendChild(link);
      }
    };

    const loadLeafletJS = () =>
      new Promise((resolve) => {
        if (window.L) resolve();
        else {
          const script = document.createElement("script");
          script.src =
            "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.js";
          script.onload = resolve;
          document.head.appendChild(script);
        }
      });

    const initMap = async () => {
  loadLeafletCSS();
  await loadLeafletJS();

  if (mapContainerRef.current && !mapRef.current) {
    const screenZoom = window.innerWidth < 768 ? 14 : 12;

    const { lat, lng } = branchLocations[0];

    const map = window.L.map(mapContainerRef.current, {
      zoomControl: false,
    }).setView([lat, lng], screenZoom);

    window.L.tileLayer(
      "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      {
        attribution: "&copy; OpenStreetMap contributors",
      }
    ).addTo(map);

    const customIcon = window.L.divIcon({
      className: "custom-map-marker",
      html: `<div style="background-color: #8B5CF6; width: 16px; height: 16px; border-radius: 50%; border: 2px solid white;"></div>`,
      iconSize: [20, 20],
      iconAnchor: [10, 10],
    });

    const marker = window.L.marker([lat, lng], { icon: customIcon })
      .addTo(map)
      .bindPopup(`Our location in ${branchLocations[0].name}`);

    mapRef.current = map;
    markerRef.current = marker;

    document.head.insertAdjacentHTML(
      "beforeend",
      `
      <style>
        .custom-map-marker {
          display: flex;
          justify-content: center;
          align-items: center;
        }
      </style>
      `
    );

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
  }, [branchLocations]);

 useEffect(() => {
  if (!mapRef.current || !activeBranch) return;

  const { lat, lng } = activeBranch;

  // Remove old marker
  if (markerRef.current) {
    mapRef.current.removeLayer(markerRef.current);
  }

  // Add new marker
  const marker = window.L.marker([lat, lng])
    .addTo(mapRef.current)
    .bindPopup(`Location: ${activeBranch.name}`)
    .openPopup();

  markerRef.current = marker;

  // CENTER MAP (Leaflet way)
  mapRef.current.setView([lat, lng], 14, {
    animate: true,
    duration: 0.6,
  });
}, [activeBranch]);


  return (
    <div
      id="contact"
      className={`flex flex-col md:flex-row w-full min-h-screen ${luxury.bg} ${luxury.textMain}`}
    >
      <div className="w-full md:w-1/2 p-6 sm:p-8 md:p-12 flex flex-col justify-center">
  {/* Heading */}
  <h1
    className={`text-2xl sm:text-3xl md:text-4xl font-serif font-bold mb-2 ${luxury.heading}`}
  >
    Get in touch
  </h1>

  <p className={`${luxury.textSub} mb-8 text-sm sm:text-base leading-relaxed`}>
    We’re here to help. Share your requirements and our team will get back to
    you shortly.
  </p>

  {/* Form */}
  <form onSubmit={handleSubmit} className="w-full space-y-6">
    {/* Name fields */}
    <div className="flex flex-col md:flex-row gap-4">
      {["firstName", "lastName"].map((field) => (
        <div key={field} className="w-full">
          <label
            className={`block text-sm font-medium mb-1 ${luxury.textLabel}`}
          >
            {field === "firstName" ? "First Name" : "Last Name"}
          </label>
          <input
            type="text"
            name={field}
            value={formData[field]}
            onChange={handleInputChange}
            required
            placeholder={field === "firstName" ? "John" : "Doe"}
            className="w-full px-3 py-2.5 rounded-lg border border-gray-300 bg-white text-gray-800
                       focus:outline-none focus:ring-2 focus:ring-yellow-600/60 focus:border-yellow-600
                       transition"
          />
        </div>
      ))}
    </div>

    {/* Email */}
    <div>
      <label
        className={`block text-sm font-medium mb-1 ${luxury.textLabel}`}
      >
        Email
      </label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
        required
        placeholder="you@example.com"
        className="w-full px-3 py-2.5 rounded-lg border border-gray-300 bg-white text-gray-800
                   focus:outline-none focus:ring-2 focus:ring-yellow-600/60 focus:border-yellow-600
                   transition"
      />
    </div>

    {/* Phone */}
    <div>
      <label
        className={`block text-sm font-medium mb-1 ${luxury.textLabel}`}
      >
        Phone
      </label>
      <div className="flex">
        <div className="px-3 py-2.5 border border-r-0 border-gray-300 rounded-l-lg bg-gray-100 text-sm text-gray-700 flex items-center">
          IN
        </div>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          placeholder="98765 43210"
          className="w-full px-3 py-2.5 rounded-r-lg border border-gray-300 bg-white text-gray-800
                     focus:outline-none focus:ring-2 focus:ring-yellow-600/60 focus:border-yellow-600
                     transition"
        />
      </div>
    </div>

    {/* Timber Options */}
    <div>
      <label
        className={`block text-sm font-medium mb-3 ${luxury.textLabel}`}
      >
        Timbers & Products <span className="text-red-500">*</span>
      </label>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {timberOptions.map((product) => (
          <label
            key={product}
            className={`flex items-center gap-2 p-3 rounded-lg border border-gray-200
                        hover:border-yellow-600/60 hover:bg-yellow-50/40
                        transition cursor-pointer text-sm ${luxury.textMain}`}
          >
            <input
              type="checkbox"
              name={product}
              checked={formData.services[product]}
              onChange={handleCheckboxChange}
              className="h-4 w-4 text-yellow-600 focus:ring-yellow-600"
            />
            {product}
          </label>
        ))}
      </div>

      {validationErrors.services && (
        <p className="text-red-500 text-sm mt-2">
          Please select at least one timber option.
        </p>
      )}
    </div>

    {/* Comments */}
    <div>
      <label
        className={`block text-sm font-medium mb-2 ${luxury.textLabel}`}
      >
        Comments or Questions <span className="text-red-500">*</span>
      </label>
      <textarea
        name="comments"
        value={formData.comments || ""}
        onChange={handleInputChange}
        rows={4}
        placeholder="Tell us more about your project or requirements..."
        className={`w-full px-3 py-2.5 rounded-lg border bg-white text-gray-800
                    focus:outline-none focus:ring-2 focus:ring-yellow-600/60 focus:border-yellow-600
                    transition ${
                      validationErrors.comments
                        ? "border-red-500"
                        : "border-gray-300"
                    }`}
      />
      {validationErrors.comments && (
        <p className="text-red-500 text-sm mt-2">
          Please provide your comments or questions.
        </p>
      )}
    </div>

    {/* Submit */}
    <button
      type="submit"
      className={`w-full py-3 rounded-lg text-sm sm:text-base font-semibold
                  bg-gradient-to-r ${luxury.tabActive}
                  hover:opacity-95 active:scale-[0.99] transition`}
    >
      Send Message
    </button>
  </form>

  {/* Status Message */}
  {formStatus && (
    <div
      className="w-full mt-6 px-4 py-4 text-white text-center rounded-lg text-sm sm:text-base font-serif"
      style={{
        backgroundColor: formStatus === "success" ? "#22c55e" : "#ef4444",
        opacity: timer === 100 ? 0 : 1,
        transition: "opacity 0.6s ease",
      }}
    >
      {formStatus === "success"
        ? "Thank you for reaching out. Our team will contact you shortly."
        : "Something went wrong. Please try again."}

      <div
        className="mt-3 h-1 bg-yellow-600 rounded-full transition-all duration-200 ease-linear"
        style={{ width: `${timer}%` }}
      />
    </div>
  )}
</div>


     <div className="w-full md:w-1/2 relative overflow-hidden rounded-2xl border border-[#EADCA6] shadow-xl">
  {/* Floating Controls Panel */}
  <div className="absolute top-4 left-4 right-4 z-20">
    <div className="bg-white/80 backdrop-blur-md rounded-xl shadow-lg border border-[#EADCA6] p-3 space-y-3">
      {/* Map Actions */}
      <div className="flex flex-wrap gap-2 justify-between items-center">
        <button
          onClick={toggleMapType}
          className={`px-4 py-1.5 rounded-full text-sm font-medium transition cursor-pointer ${luxury.tabInactive}`}
        >
          {mapType === "default" ? "Satellite View" : "Map View"}
        </button>

        <a
          href={getDirectionsUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-1 px-4 py-1.5 rounded-full text-sm font-medium shadow transition cursor-pointer bg-gradient-to-r ${luxury.tabActive}`}
        >
          <MapPin className="w-4 h-4" />
          Directions
        </a>
      </div>

      {/* Branch Selector */}
      <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
        {branchLocations.map((branch, index) => (
          <button
            key={index}
            onClick={() => setActiveBranch(branch)}
            className={`whitespace-nowrap px-4 py-1.5 rounded-full text-sm font-medium transition cursor-pointer ${
              activeBranch?.name === branch.name
                ? "bg-[#BFA77A] text-black shadow"
                : `${luxury.tabInactive}`
            }`}
          >
            {branch.name}
          </button>
        ))}
      </div>
    </div>
  </div>

  {/* Loading Skeleton */}
  {!mapLoaded && (
    <div className="absolute inset-0 z-10 bg-[#F8F4EF] flex flex-col items-center justify-center gap-3">
      <div className="w-12 h-12 border-4 border-[#BFA77A] border-t-transparent rounded-full animate-spin"></div>
      <p className="text-sm text-[#7A684A] tracking-wide">
        Loading map…
      </p>
    </div>
  )}

  {/* Map Container */}
  <div
    ref={mapContainerRef}
    className="h-[320px] sm:h-[380px] md:h-full w-full"
  />
</div>

    </div>
  );
};

export default ContactUs;
