import { Header } from "./components/Header/Header.jsx";
import { AboutUs } from "./components/AboutUs/AboutUs.jsx";
import { Grid } from "./components/Grid/Grid";
import { Shop } from "./components/Shop/Shop";

const App = () => {
  return (
    <>
      <Header />
      <AboutUs></AboutUs>
      <Grid/>
      <Shop/>
    </>
  );
};

export default App;
// main- the main content unique to that page (aboutus)
// section- specific section that have its own meaning (bloglist,contact)
// article- blog post
// aside- content relate to something else (similar blog)
