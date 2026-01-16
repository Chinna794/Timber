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

  const penukondaCoords = useMemo(() => [14.0872, 77.5949], []);
  const branchLocations = [
    { name: "Penukonda, Andhra Pradesh", coords: [14.0872, 77.5949] },
    { name: "Karnataka Branch", coords: [15.3173, 75.7139] }, // Update with actual coordinates for the Karnataka branch
  ];

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
      ? `https://www.google.com/maps/dir/?api=1&destination=${activeBranch.coords[0]},${activeBranch.coords[1]}`
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
        const map = window.L.map(mapContainerRef.current, {
          zoomControl: false,
        }).setView(penukondaCoords, screenZoom);

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

        const marker = window.L.marker(penukondaCoords, { icon: customIcon })
          .addTo(map)
          .bindPopup("Our location in Penukonda");

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
  }, [penukondaCoords]);

  useEffect(() => {
    if (mapRef.current && activeBranch) {
      markerRef.current && mapRef.current.removeLayer(markerRef.current);

      const marker = window.L.marker(activeBranch.coords)
        .addTo(mapRef.current)
        .bindPopup(`Location: ${activeBranch.name}`);

      markerRef.current = marker;
      mapRef.current.setView(activeBranch.coords, 14);
    }
  }, [activeBranch]);

  return (
    <div
      id="contact"
      className={`flex flex-col md:flex-row w-full min-h-screen ${luxury.bg} ${luxury.textMain}`}
    >
      <div className="w-full md:w-1/2 p-6 sm:p-8 md:p-12 flex flex-col justify-center">
        <h1
          className={`text-2xl sm:text-3xl md:text-4xl font-serif font-bold mb-2 ${luxury.heading}`}
        >
          Get in touch
        </h1>
        <p className={`${luxury.textSub} mb-6 `}>
          We're here to help. Chat to our team 24/7 and get started in minutes.
        </p>

        <form onSubmit={handleSubmit} className="w-full">
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            {["firstName", "lastName"].map((field) => (
              <div key={field} className="w-full md:w-1/2">
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
                  className="w-full p-2 border border-gray-300 rounded bg-white focus:ring-2 focus:ring-yellow-600 text-gray-800"
                  required
                />
              </div>
            ))}
          </div>

          <div className="mb-4">
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
              className="w-full p-2 border border-gray-300 rounded bg-white focus:ring-2 focus:ring-yellow-600 text-gray-800"
              required
            />
          </div>

          <div className="mb-4">
            <label
              className={`block text-sm font-medium mb-1 ${luxury.textLabel}`}
            >
              Phone
            </label>
            <div className="flex">
              <div className="p-2 border border-gray-300 rounded-l bg-white text-sm text-gray-800 flex items-center">
                IN
              </div>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full p-2 border-t border-b border-r border-gray-300 rounded-r bg-white focus:ring-2 focus:ring-yellow-600 text-gray-800"
              />
            </div>
          </div>

          <div className="mb-6">
            <label
              className={`block text-sm font-medium mb-2 ${luxury.textLabel}`}
            >
              Timbers and Products <span className="text-red-500">*</span>
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {timberOptions.map((product) => (
                <label
                  key={product}
                  className={`flex items-center text-sm ${luxury.textMain}`}
                >
                  <input
                    type="checkbox"
                    name={product}
                    checked={formData.services[product]}
                    onChange={handleCheckboxChange}
                    className="mr-2 h-4 w-4 text-yellow-600 cursor-pointer"
                  />
                  {product}
                </label>
              ))}
            </div>
            {validationErrors.services && (
              <p className="text-red-500 text-sm mt-1">
                Please select at least one timber option
              </p>
            )}
          </div>

          <div className="mb-6">
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
              placeholder="Tell us more about what you're looking for..."
              className={`w-full p-2 border ${
                validationErrors.comments ? "border-red-500" : "border-gray-300"
              } rounded bg-white focus:ring-2 focus:ring-yellow-600 text-gray-800`}
            />
            {validationErrors.comments && (
              <p className="text-red-500 text-sm mt-1">
                Please provide your comments or questions
              </p>
            )}
          </div>

          <button
            type="submit"
            className={`w-full py-2 px-4 text-sm md:text-base rounded transition cursor-pointer font-medium bg-gradient-to-r ${luxury.tabActive}`}
          >
            Send message
          </button>
        </form>

        {formStatus && (
          <div
            className={`w-full mt-4 px-2 sm:px-4 py-4 text-white text-center rounded font-serif text-lg`}
            style={{
              backgroundColor: formStatus === "success" ? "#22c55e" : "#ef4444",
              fontFamily: `'Fairplay', serif`,
              opacity: timer === 100 ? 0 : 1,
              transition: "opacity 0.6s ease",
            }}
          >
            {formStatus === "success"
              ? "Thanks for contacting us!"
              : "Something went wrong. Please try again."}
            <div
              className="mt-2 h-1 bg-yellow-600 transition-all duration-200 ease-linear"
              style={{ width: `${timer}%` }}
            />
          </div>
        )}
      </div>

      <div className="w-full md:w-1/2 relative">
        <div className="absolute top-4 left-4 z-10 space-y-2 md:space-y-0 md:space-x-2 flex flex-col md:flex-row">
          <button
            onClick={toggleMapType}
            className={`px-3 py-1 rounded shadow text-sm transition cursor-pointer ${luxury.tabInactive}`}
          >
            {mapType === "default" ? "Satellite" : "Map"}
          </button>
          <a
            href={getDirectionsUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center px-3 py-1 rounded text-sm shadow transition cursor-pointer bg-gradient-to-r ${luxury.tabActive}`}
          >
            <MapPin className="w-4 h-4 mr-1" /> Get Directions
          </a>
        </div>
        <div className="absolute top-16 left-4 z-10 space-y-2 flex flex-col">
          {branchLocations.map((branch, index) => (
            <button
              key={index}
              onClick={() => setActiveBranch(branch)}
              className={`px-3 py-1 rounded shadow text-sm transition cursor-pointer ${
                activeBranch?.name === branch.name
                  ? "bg-[#BFA77A] text-black"
                  : luxury.tabInactive
              }`}
            >
              {branch.name}
            </button>
          ))}
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
