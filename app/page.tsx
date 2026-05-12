import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import HowItWorks from "@/components/HowItWorks";
import WhoItsFor from "@/components/WhoItsFor";
import WhyOwen from "@/components/WhyOwen";
import Demo from "@/components/Demo";
import TrustSignals from "@/components/TrustSignals";
import RequestAccess from "@/components/RequestAccess";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Nav />
      <Hero />
      <Problem />
      <HowItWorks />
      <Demo />
      <WhoItsFor />
      <WhyOwen />
      <TrustSignals />
      <RequestAccess />
      <Footer />
    </main>
  );
}
