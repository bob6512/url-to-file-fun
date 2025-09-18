import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ServiceCards from "@/components/ServiceCards";
import CompanyStats from "@/components/CompanyStats";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <ServiceCards />
      <CompanyStats />
      <Footer />
    </div>
  );
};

export default Home;