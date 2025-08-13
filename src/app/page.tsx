// app/page.tsx
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}


      {/* Main */}
      <main className="flex-grow">
        {/* Intro Section */}
        {/* <section className="bg-gray-100 py-12 px-6">
          <div className="container mx-auto text-center max-w-3xl">
            <h2 className="text-3xl font-bold mb-4">Welcome to Idea Plus Software Jalandhar</h2>
            <p className="text-gray-700 leading-relaxed">
              Idea Plus Software is a Software Development company based in Jalandhar. 
              We are professional accounting software developers. We also provide customized software development, 
              computer software and hardware, and website designing services. Our accounting software demo is available—
              contact us for more details.
            </p>
          </div>
        </section> */}

        {/* Services Section */}
        <section className="py-1 ">
          <div className="container mx-auto">
            <h2 className="text-2xl font-bold text-center mb-8">Our Services</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              
              <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition">
                <h3 className="text-lg font-semibold mb-2">Accounting Softwares</h3>
                <p className="text-gray-600">
                  Website design which provides a gateway to your business on the internet.
                </p>
              </div>

              <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition">
                <h3 className="text-lg font-semibold mb-2">Customized Computer Softwares</h3>
                <p className="text-gray-600">
                  We create a website according to the guidelines which are helpful for website search engine optimization.
                </p>
              </div>

              <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition">
                <h3 className="text-lg font-semibold mb-2">Website Designing Services</h3>
                <p className="text-gray-600">
                  We also do digital marketing on Google, Facebook, Twitter, and other social platforms.
                </p>
              </div>

              <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition">
                <h3 className="text-lg font-semibold mb-2">Software and Hardware</h3>
                <p className="text-gray-600">
                  We use WordPress for CMS and develop custom themes and plugins.
                </p>
              </div>

            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-200 text-center py-6 text-sm text-gray-600">
        <p>Ideaplus Update 2025.528</p>
        <p>© 2025 IDEAPLUS SOFTWARES • ideaplus Software</p>
      </footer>
    </div>
  );
}




// "use client";
// import Image from "next/image";
// import React, { useEffect, useState } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import {
//   FaPhoneAlt,
//   FaEnvelope,
//   FaMapMarkerAlt,
//   FaWrench,
// } from "react-icons/fa";
// import { FaBars } from "react-icons/fa";
// import { UseSiteContext } from "@/SiteContext/SiteContext";
// import Header from "@/components/Header";
// import ServicesSection from "@/components/Services";

// import HeroSection from "@/components/Hero";
// import AboutUsSection from "@/components/about-us";
// import WhyChooseUsSection from "@/components/Why-choose-us";
// import TestimonialsSection from "@/components/TestimonialsSection";
// import SliderSection from "@/components/Slider";
// import Footer from "@/components/Footer";
// import ShowcaseSection from "@/components/ShowcaseSection";
// import ContactUs from "@/components/Contact-us";
// import FooterBottom from "@/components/FooterBottom";

// //import { usePathname } from "next/navigation";
// // import { Carousel } from "react-responsive-carousel";
// // import "react-responsive-carousel/lib/styles/carousel.min.css";

// export default function Home() {
//   const { bargerMenuToggle } = UseSiteContext();

//   useEffect(() => {
//     AOS.init();
//     AOS.refresh();
//     bargerMenuToggle(false);
//   }, []);



//   return (
   
//     <>
     
//       <ShowcaseSection />
//       <AboutUsSection />
//       <ServicesSection />
//       <TestimonialsSection />
//       <ContactUs />
//       {/* <HeroSection /> */}
//       {/* 

     
//      <WhyChooseUsSection />

     

//     <SliderSection  /> */}

//  </>
  
//   );
// }
