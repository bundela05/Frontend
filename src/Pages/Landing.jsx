import Content from "../components/Content";
import FeatureCard from "../components/Card1";
import Hero from "../components/Hero";
import Navbar from "../components/navbar";
import OurSources from "../components/OurSources";
import Feature from "../components/Features";
import BottomFeatures from "../components/BottomFeatures";
import Footer from "../components/Footer";


export default function Landing() {
    return (
        <>
            <Navbar />
            <Hero />
            <OurSources />
            <Feature />
            <BottomFeatures />
            <Footer />
        </>)

}