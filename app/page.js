// app/page.js
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import HowItWorks from "@/components/home/HowItWorks";
// import FocusAreas from "@/components/home/FocusAreas";
import ValuePropositionStatement from "@/components/home/ValuePropositionStatement";
// import Testimonials from "@/components/home/zzTestimonials";
import WhatYouGet from "@/components/home/WhatYouGet";
import WhatIBuild from "@/components/home/WhatIBuild";
import CTA from "@/components/home/CTA";

const App = () => {
  return (
    <>
      <Hero />
      <ValuePropositionStatement />
      <WhatYouGet />
      {/* <ValueStrip /> */}
      <WhatIBuild />
      <HowItWorks />
      {/* <FocusAreas /> */}
      {/* Testimonials hidden until real ones are ready — uncomment when you have them */}
      {/* <Testimonials /> */}
      <About />
      <CTA />
    </>
  );
};

export default App;
