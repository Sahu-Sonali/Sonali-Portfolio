import AboutSection from "./components/AboutSection";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import ProjectsSection from "./components/ProjectsSection";
import Experience from "./components/Experience";
import EmailSection from "./components/EmailSection"
import Footer from "./components/Footer";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-gradient-to-br from-black via-purple-800 to-purple-600">
      <Navbar/>
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <Experience/>
        <EmailSection/>
      </div>
      <Footer />
    </main>
  );
}

