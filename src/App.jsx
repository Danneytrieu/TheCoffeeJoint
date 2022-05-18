import { Header } from "./components/Header/Header";
import { AboutUs } from "./components/AboutUs/AboutUs";
import { Grid } from "./components/Grid/Grid";
import { Shop } from "./components/Shop/Shop";
import { Map } from "./components/Map/Map";

const App = () => {
  return (
    <>
      <Header />
      <AboutUs></AboutUs>
      <Grid/>
      <Shop/>
      <Map/>
    </>
  );
};

export default App;
// main- the main content unique to that page (aboutus)
// section- specific section that have its own meaning (bloglist,contact)
// article- blog post
// aside- content relate to something else (similar blog)
