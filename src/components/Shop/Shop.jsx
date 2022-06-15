import * as React from "react";
import { ProductCard } from "./ProductCard";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import * as S from "./Shop.styled";

// <section>
//   <button>CBD OILS</button>
//   <button>CANNABIS</button>
//   <button>EDIBLES</button>
// </section>

export function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <S.Container>
      <h3>Popular Products</h3>
      <section>
        <Box sx={{ width: "100%" }}>
          <Box
            sx={{
              marginBottom: "25px",
            }}
          >
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="Shopping tabs"
              centered
            >
              <Tab
                sx={{
                  fontSize: "2rem",
                }}
                label="EDIBLES"
                {...a11yProps(0)}
              />
              <Tab
                sx={{
                  fontSize: "2rem",
                }}
                label="FLOWERS"
                {...a11yProps(1)}
              />
              <Tab
                sx={{
                  fontSize: "2rem",
                }}
                label="CARTRIDGES"
                {...a11yProps(2)}
              />
            </Tabs>
          </Box>

          {/* Tab: Edibles */}
          <TabPanel value={value} index={0}>
            <S.ProductContainer>
              <ProductCard
                url="https://www.iheartjane.com/embed/stores/17/products/128752/wyld-marionberry-indica-enhanced-gummies-100-mg-thc?recommended=false&fromMenu=true&blockScrollToTop=true"
                img="https://product-assets.iheartjane.com/cdn-cgi/image/width=400,fit=scale-down,format=auto,metadata=none/photos/9c/b6/9cb6c19c-220a-43c9-bd14-e094b3ca896f.jpeg"
                name="Marionberry Indica Enhanced Gummies"
                description="Our Marionberry gummies are made with real fruit and an Indica enhanced botanical terpene blend, making them a great addition to the end of any long day."
                price="$16.00"
              />
              <ProductCard
                url="https://www.iheartjane.com/embed/stores/17/products/142581/wana-5-1-pomegranate-blueberry-acai-20-pk-500-mg-cbd-100-mg-thc?recommended=false&fromMenu=true&blockScrollToTop=true"
                img="https://uploads.iheartjane.com/cdn-cgi/image/width=400,fit=scale-down,format=auto,metadata=none/uploads/f37f516c-0c08-4a28-b4a0-8576729fb8fa.jpg"
                name="5:1 Pomegranate Blueberry Acai"
                description="Slightly acidic with hints of juicy fruit, these three powerhouse flavors blend beautifully to form our Pomegranate Blueberry Acai Sour Gummies."
                price="$16.00"
              />
              <ProductCard
                url="https://www.iheartjane.com/embed/stores/17/products/210560/1906-bliss-drops-20-pk-100-mg-cbd-100-mg-thc?recommended=false&fromMenu=true&blockScrollToTop=true"
                img="https://product-assets.iheartjane.com/cdn-cgi/image/width=400,fit=scale-down,format=auto,metadata=none/photos/68/83/6883918d-52e7-48c9-a65d-99325cc04dc3.jpeg"
                name="Bliss Drops (100mg CBD/100mg THC)"
                description="Drops for Happiness. A euphoric blend of three plant medicines and cannabis to promote extroverted happiness."
                price="$25.00"
              />
              <ProductCard
                url="https://www.iheartjane.com/embed/stores/17/products/7848/1906-love-gems-6-pk-30-mg-cbd-30-mg-thc?recommended=false&fromMenu=true&blockScrollToTop=true"
                img="https://product-assets.iheartjane.com/cdn-cgi/image/width=400,fit=scale-down,format=auto,metadata=none/photos/72/f7/72f701d7-766a-4534-a446-449889c41403.jpeg"
                name="Love Gems (30mg CBD/30mg THC)"
                description="Love uses optimal doses of five herbal aphrodisiacs and sense-enhancing cannabis to create the best sex drug in the world."
                price="$28.00"
              />
            </S.ProductContainer>
          </TabPanel>

          {/* Tab: Flowers */}
          <TabPanel value={value} index={1}>
            <S.ProductContainer>
              <ProductCard
                url="https://www.iheartjane.com/embed/stores/17/products/633572/training-day?recommended=false&fromMenu=true&blockScrollToTop=true"
                img="https://uploads.iheartjane.com/cdn-cgi/image/width=400,fit=scale-down,format=auto,metadata=none/uploads/fe9bf3f5-0295-4836-9b2c-85dc9f608827.jpg"
                name="Training Day (14 gram)"
                description="Training Day is a deceptively potent (THC levels as high as 21%), not-for-beginners, hazily blissful, powerfully relaxing and potentially immobilizing."
                price="$42.00"
              />
              <ProductCard
                url="https://www.iheartjane.com/embed/stores/17/products/1063/white-walker-kush?recommended=false&fromMenu=true&blockScrollToTop=true"
                img="https://uploads.iheartjane.com/cdn-cgi/image/width=400,fit=scale-down,format=auto,metadata=none/uploads/f480f941-03ca-42ce-b238-6217ca38adac.jpg"
                name="White Walker Kush (1 gram)"
                description="White Walker Kush, often confused with the award-winning Whitewalker OG,relax-at-home hybrid cross between White Widow and Skywalker. "
                price="$9.00"
              />
              <ProductCard
                url="https://www.iheartjane.com/embed/stores/17/products/327001/red-headed-stranger?recommended=false&fromMenu=true&blockScrollToTop=true"
                img="https://uploads.iheartjane.com/cdn-cgi/image/width=400,fit=scale-down,format=auto,metadata=none/uploads/3f43ff67-aa74-469d-8112-018a88c8a763.jpeg"
                name="Red Headed Stranger (1 gram)"
                description="Red Headed Stranger appears to be a pleasantly potent (THC levels as high as 17%), happy, energetic, creative and focused."
                price="$9.00"
              />
              <ProductCard
                url="https://www.iheartjane.com/embed/stores/17/products/93/critical-mass?recommended=false&fromMenu=true&blockScrollToTop=true"
                img="https://uploads.iheartjane.com/cdn-cgi/image/width=400,fit=scale-down,format=auto,metadata=none/uploads/9cc76810-bcf1-4521-81f2-0a9a9ee51fcc.jpg"
                name="Critical Mass (1 gram)"
                description="Critical Mass is a reasonably potent, 80/20, Indica-Dominant, late-afternoon-into-evening hybrid with an earthy, herbal aroma and taste."
                price="$8.00"
              />
            </S.ProductContainer>
          </TabPanel>

          {/* Tab: CARTRIDGES */}
          <TabPanel value={value} index={2}>
            <S.ProductContainer>
              <ProductCard
                url="https://www.iheartjane.com/embed/stores/17/products/955420/binske-banana-creamsicle?recommended=false&fromMenu=true&blockScrollToTop=true"
                img="https://product-assets.iheartjane.com/cdn-cgi/image/width=400,fit=scale-down,format=auto,metadata=none/photos/d4/05/d405eb56-a896-4a0d-b466-b2fe8f65fadd.jpeg"
                name="Banana Creamsicle"
                description="Each cartridge contains 250 puffs of the highest quality HTE (High Terpene Extract) live resin sauce. "
                price="$30.00"
              />
              <ProductCard
                url="https://www.iheartjane.com/embed/stores/17/products/70939/eureka-vapor-hybrid-1-g?recommended=false&fromMenu=true&blockScrollToTop=true"
                img="https://product-assets.iheartjane.com/cdn-cgi/image/width=400,fit=scale-down,format=auto,metadata=none/photos/08/89/0889ec30-4e8d-4fea-a553-311f33b4b93b.jpeg"
                name="Hybrid [1g]"
                description="These cartridges are filled with 100% natural, solvent free CO2 extracted cannabis oil.  "
                price="$34.00"
              />
              <ProductCard
                url="https://www.iheartjane.com/embed/stores/17/products/923119/lazercat-zuffy?recommended=false&fromMenu=true&blockScrollToTop=true"
                img="https://product-assets.iheartjane.com/cdn-cgi/image/width=400,fit=scale-down,format=auto,metadata=none/photos/e1/df/e1df86b0-132d-494c-b0c1-6307c136130e.jpeg"
                name="Zuffy"
                description="Our solventless cartridges are the result of years of research & development."
                price="$70.00"
              />
              <ProductCard
                url="https://www.iheartjane.com/embed/stores/17/products/71332/seed-smith-golden-lemons?recommended=false&fromMenu=true&blockScrollToTop=true"
                img="https://product-assets.iheartjane.com/cdn-cgi/image/width=400,fit=scale-down,format=auto,metadata=none/photos/65/5b/655b0eca-e175-4702-a2e3-fa325e0a47d6.jpeg"
                name="Golden Lemons"
                description="Our cartridges range from 70-85% THC potency with natural strain-specific, cannabis-derived terpenes reintroduced around 8-12% by weight."
                price="$16.00"
              />
            </S.ProductContainer>
          </TabPanel>

          <a
            target="_blank"
            rel="noreferrer"
            href="https://yumaway.com/locations/menu/17?"
          >
            <button className="button">See more</button>
          </a>
        </Box>
      </section>
    </S.Container>
  );
}
