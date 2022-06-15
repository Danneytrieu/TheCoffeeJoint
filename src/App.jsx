import { ParallaxProvider } from "react-scroll-parallax";
import { AboutUs } from "./components/AboutUs/AboutUs";
import { Header } from "./components/Header/Header";
import { Grid } from "./components/Grid/Grid";
// import { Shop } from "./components/Shop/Shop";
import { BasicTabs } from "./components/Shop/Shop";
import { Map } from "./components/Map/Map";
import { Gallery } from "./components/Gallery/Gallery";
import { Footer } from "./components/Footer/Footer";
import { FAQ } from "./components/FAQ/FAQ";
import { ContactUs } from "./components/ContactUs/ContactUs";

const App = () => {
  return (
    <ParallaxProvider>
      <Header />
      <AboutUs />
      <Grid />
      {/* <Shop /> */}
      <BasicTabs />
      <ContactUs />
      <FAQ />
      <Map />
      <Gallery />
      <Footer />
    </ParallaxProvider>
  );
};

export default App;
