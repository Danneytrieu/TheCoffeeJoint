
import { ParallaxProvider } from "react-scroll-parallax";
import { AboutUs } from "./components/AboutUs/AboutUs";
import { Header } from "./components/Header/Header";
import { Grid } from "./components/Grid/Grid";
import { BasicTabs } from "./components/Shop/Shop";
import Events from "./components/Events/Events";
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
      <BasicTabs />
      <Events/>
      <FAQ />
      <ContactUs />
      <Gallery />
      <Footer />
    </ParallaxProvider>
  );
};

export default App;
