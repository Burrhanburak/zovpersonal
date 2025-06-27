"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const IndustriesCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const industries = [
    {
      id: 1,
      image: "/doctor-two.png",
      title: "Healthcare",
      description: "Nurses, doctors, therapists, and medical professionals with verified qualifications and proven expertise in patient care.",
      badge: "@healthcare",
      bgColor: "bg-green-300",
      positions: "500+ Active Positions",
      icon: "🏥"
    },
    {
      id: 2,
      image: "/It.png",
      title: "Engineering & IT",
      description: "Software developers, engineers, and tech specialists ready to innovate and drive technological advancement in your organization.",
      badge: "@engineering",
      bgColor: "bg-blue-300",
      positions: "800+ Active Positions",
      icon: "💻"
    },
    {
      id: 3,
      image: "/insaat.png",
      title: "Manufacturing",
      description: "Skilled workers, technicians, and production staff with proven expertise in modern manufacturing processes and quality control.",
      badge: "@manufacturing",
      bgColor: "bg-purple-300",
      positions: "300+ Active Positions",
      icon: "🔧"
    },
    {
      id: 4,
      image: "/egitim.png",
      title: "Education",
      description: "Teachers, researchers, and academic professionals committed to excellence in education and knowledge transfer.",
      badge: "@education",
      bgColor: "bg-orange-300",
      positions: "200+ Active Positions",
      icon: "🎓"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % industries.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + industries.length) % industries.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 mx-auto container rounded-2xl p-10 ">
      <div className="container mx-auto">
        <div className="flex flex-col items-start justify-between gap-6 px-4 lg:flex-row lg:px-10">
          <div className="flex flex-col justify-between lg:h-[460px] lg:w-[445px] lg:pr-10">
            <div className="flex flex-col gap-4">
              <div className="mb-4">
                <span className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 gap-1 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden text-foreground">
                  Industries We Serve
                </span>
              </div>
              <h2 className="text-3xl font-semibold lg:text-4xl">
                Specialized Recruitment<br />
                Across Multiple Sectors
              </h2>
              <p className="text-muted-foreground text-lg">
                From healthcare to technology, we connect you with qualified professionals across diverse industries and specialized sectors.
              </p>
                             <div className="mt-6 flex flex-wrap gap-2">
                 <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">🏥 500+ Healthcare</span>
                 <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">💻 800+ Tech Roles</span>
                 <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">🔧 300+ Manufacturing</span>
                 <span className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full">🎓 200+ Education</span>
               </div>
            </div>
            <div className="hidden justify-start gap-4 lg:flex">
              <button 
                onClick={prevSlide}
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 size-9 rounded-full"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-4" aria-hidden="true">
                  <path d="m12 19-7-7 7-7"></path>
                  <path d="M19 12H5"></path>
                </svg>
              </button>
              <button 
                onClick={nextSlide}
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 size-9 rounded-full"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-4" aria-hidden="true">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </button>
            </div>
          </div>
          <div className="relative w-full overflow-hidden pb-12 lg:flex-1">
            <div className="relative" role="region" aria-roledescription="carousel">
              <div className="overflow-hidden">
                <div 
                  className="flex transition-transform duration-500 ease-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {industries.map((industry, index) => (
                    <div key={industry.id} role="group" aria-roledescription="slide" className="min-w-full flex-shrink-0">
                      <div className="flex gap-2 px-2">
                        <div className="h-[460px] w-[400px] max-w-[50%]">
                          <Image 
                            src={industry.image}
                            alt={industry.title}
                            width={400}
                            height={460}
                            className="aspect-[1] h-full w-full rounded-2xl object-cover"
                          />
                        </div>
                        <div className={`relative flex h-[460px] w-[400px] max-w-[50%] flex-col items-start justify-end rounded-2xl p-8 ${industry.bgColor}`}>
                          <span className="inline-flex items-center justify-center rounded-md border text-xs font-medium w-fit whitespace-nowrap shrink-0 gap-1 border-transparent bg-background mb-auto px-4 py-2 text-black">
                            {industry.badge}
                          </span>
                          <span className="-rotate-[4deg] text-7xl leading-none">"</span>
                          <p className="text-xl font-semibold mb-4">{industry.description}</p>
                          <p className="text-lg font-bold text-black">{industry.title}</p>
                          <p className="text-sm font-medium text-black/80 mt-2">{industry.positions}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="absolute bottom-4 left-1/2 h-[2px] w-[240px] -translate-x-1/2 rounded bg-gray-200">
              <div 
                className="bg-primary h-[2px] rounded transition-transform duration-300 ease-out" 
                style={{ 
                  width: `${240 / industries.length}px`, 
                  transform: `translateX(${(currentSlide * 240) / industries.length}px)` 
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesCarousel; 