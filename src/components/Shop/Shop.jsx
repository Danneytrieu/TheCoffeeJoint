import * as React from "react";
import { ProductCard } from "./ProductCard";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import * as S from "./Shop.styled";

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
      <h3>POPULAR PRODUCTS AT 1136</h3>
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
                  fontSize: "1rem",
                }}
                label="EDIBLES"
                {...a11yProps(0)}
              />
              <Tab
                sx={{
                  fontSize: "1rem",
                }}
                label="CONCENTRATES"
                {...a11yProps(1)}
              />
              <Tab
                sx={{
                  fontSize: "1rem",
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

          {/* Tab: CONCENTRATES */}
          <TabPanel value={value} index={1}>
            <S.ProductContainer>
              <ProductCard
                url="https://www.iheartjane.com/embed/stores/17/products/852305/binske-french-glue?recommended=false&fromMenu=true&blockScrollToTop=true"
                img="https://product-assets.iheartjane.com/cdn-cgi/image/width=400,fit=scale-down,format=auto,metadata=none/photos/dd/31/dd319c36-99e8-42ad-91c5-6397859dddb2.png"
                name="French Glue"
                description="Freshly harvested plant material flash frozen at -85F and extracted to create a golden yellow hash that has no rivals in terms of terpene aroma and taste."
                price="$34.00"
              />
              <ProductCard
                url="https://www.iheartjane.com/embed/stores/17/products/986395/denver-dab-co-bazookies-og?recommended=false&fromMenu=true&blockScrollToTop=true"
                img="https://product-assets.iheartjane.com/default-photos/extract/waxes.png"
                name="Bazookies OZ"
                description="A strain specific cannabis extract by Denver Dab Co."
                price="$18.00"
              />
              <ProductCard
                url="https://www.iheartjane.com/embed/stores/17/products/1047412/denver-dab-co-berry-haze?recommended=false&fromMenu=true&blockScrollToTop=true"
                img="https://uploads.iheartjane.com/cdn-cgi/image/width=400,fit=scale-down,format=auto,metadata=none/uploads/05cf5f6d-adf9-4e4f-84b2-0ee1f6ca85bf.jpg"
                name="Berry Haze"
                description="WITH A GRANULATED SUGAR OR WET SAND TEXTURE, AND GOLD AND AMBER IN COLOR - SUGAR WAX IS CREATED THROUGH A SPECIFIC SOLVENT MIX AND PURGING PROCESS, SLIGHTLY DIFFERENT FROM SHATTER OR BATTER. "
                price="$18.00"
              />
              <ProductCard
                url="https://www.iheartjane.com/embed/stores/17/products/815334/kush-masters-papaya-mac-2-g?recommended=false&fromMenu=true&blockScrollToTop=true"
                img="https://product-assets.iheartjane.com/cdn-cgi/image/width=400,fit=scale-down,format=auto,metadata=none/photos/06/a9/06a90a42-f445-4edb-8218-f362126586f1.jpeg"
                name="Papaya MAC [2g]"
                description="With a creamy “butter” texture wax is known for its aroma and great flavor as well as being the most user-friendly form of Cured BHO"
                price="$33.00"
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
