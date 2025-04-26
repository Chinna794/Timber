import React from "react";

const luxury = {
  bg: "bg-[#F8F4EF] dark:bg-[#231915]",
  heading: "text-[#674C28] dark:text-[#FFD700]",
  tabActive:
    "from-[#BFA77A] to-[#D8C69C] text-black dark:from-[#FFD700] dark:to-[#DAA520] dark:text-black",
  tabInactive:
    "bg-white text-[#5A4A30] border-[#CBB27D] dark:bg-[#1C1C1C] dark:text-[#EADCA6] dark:border-[#7F6E3C] hover:ring-yellow-500",
  cardBg:
    "bg-[#FFFDF8]/70 dark:bg-[#1B1B1B]/80 border-[#EADCA6] dark:border-[#5F4E2A]",
  gradientBox:
    "from-[#F0E5CF] via-[#E5D4B7] to-[#D9C7A5] dark:from-[#3B2C1A] dark:via-[#2A1F12] dark:to-[#1C140A]",
  textMain: "text-[#4A3B21] dark:text-[#FAF3E0]",
  textSub: "text-[#7A684A] dark:text-[#D6C49A]",
  textLabel: "text-[#5F4E2A] dark:text-[#FFEBC1]",
};

const testimonials = [
  {
    name: "John Doe",
    role: "Interior Designer",
    content:
      "The quality of timber from SVM Timbers is unparalleled. My clients love the finish and grain!",
    image: "/testimonials/john.jpg",
  },
  {
    name: "Saira Malik",
    role: "Architect",
    content:
      "Elegant selection and superb service. My go-to supplier for premium wood!",
    image: "/testimonials/saira.jpg",
  },
  {
    name: "Ravi Nair",
    role: "Furniture Maker",
    content:
      "Their teak is top-tier. Love the sustainability and the craftsmanship behind every log.",
    image: "/testimonials/ravi.jpg",
  },
];

function TestimonialsSection() {
  return (
    <section className={`${luxury.bg} py-16 px-4 md:px-12`}>
      <div className="max-w-6xl mx-auto text-center">
        <h2 className={`text-3xl md:text-4xl font-semibold mb-10 ${luxury.heading}`}>
          What Our Clients Say
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className={`p-6 rounded-xl shadow-md border ${luxury.cardBg}`}
            >
              <div className="flex flex-col items-center text-center">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-20 h-20 rounded-full object-cover mb-4 border-4 border-[#CBB27D] dark:border-[#7F6E3C]"
                />
                <p className={`italic mb-4 ${luxury.textSub}`}>"{t.content}"</p>
                <h4 className={`font-semibold ${luxury.textMain}`}>{t.name}</h4>
                <span className={`text-sm ${luxury.textLabel}`}>{t.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
