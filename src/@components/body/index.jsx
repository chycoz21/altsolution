import "./index.scss";
import AboutUsSection from "./section/about-us";
import ContactUsSection from "./section/contact-us";
import HeroSection from "./section/hero";
// import BerandaSection from "./section/beranda";
import LocationSection from "./section/location";
import OurCustomerSection from "./section/our-customer";
import ProductSection from "./section/product";
import ProjectSection from "./section/project";

const Body = () => {
  return (
    <section className="container-body">
      {/* <div className="section-beranda" id="hero">
        <BerandaSection />
      </div> */}
      <div className="section-hero" id="hero">
        <HeroSection />
      </div>
      <div className="section-about" id="about">
        <AboutUsSection />
      </div>
      <div className="section-product" id="product">
        <ProductSection />
      </div>
      <div className="section-project" id="project">
        <ProjectSection />
      </div>
      <div className="section-our-customer" id="customer">
        <OurCustomerSection />
      </div>
      <div className="section-contact-us" id="contact">
        <ContactUsSection />
      </div>
      <div className="section-location" id="location">
        <LocationSection />
      </div>
    </section>
  );
};

export default Body;
