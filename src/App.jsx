import { Header } from "./components/Header/Header";
import { AboutUs } from "./components/AboutUs/AboutUs";
import { Grid } from "./components/Grid/Grid";
import { Shop } from "./components/Shop/Shop";
import { Map } from "./components/Map/Map";
import { Gallery } from "./components/Gallery/Gallery";
import { Footer } from "./components/Footer/Footer";

const App = () => {
  return (
    <>
      <Header />
      <AboutUs></AboutUs>
      <Grid/>
      <Shop/>
      <Map/>
      <Gallery/>
      <Footer/>
    </>
  );
};

export default App;
