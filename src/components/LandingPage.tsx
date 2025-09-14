import React, { JSX } from "react";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import Image from "next/image";
// TODO: Replace with actual image paths or static assets
const divider = "/divider.png";
const logo = "/logo.png";
import { AppBar, Box, Button, Stack, Toolbar, Typography } from "@mui/material";
import { AccessoriesSection } from "./AccessoriesSection";
import { ColorsSection } from "./ColorsSection";
import { FooterSection } from "./FooterSection";
import { GallerySection } from "./GallerySection";
import { HighEfficiencySection } from "./HighEfficiencySection";
import { ProductDetailsSection } from "./ProductDetailsSection";
import { SubscribeSection } from "./SubscribeSection";
import { TestimonialsSection } from "./TestimonialsSection";
import { Navigation } from "./Navigation";
// import features from "./features.png";
// import hero from "./hero.png";

const navigationItems = [
  { label: "PRODUCTS", hasDropdown: true },
  { label: "GALLERY", hasDropdown: false },
  { label: "CONTACT", hasDropdown: false },
];

export const LandingPage = ({ data }: { data: any }): JSX.Element => {
  console.log('page data', data);
  return (
    <Box sx={{ bgcolor: "white", width: "100vw" }}>
      <Box
        sx={{
          bgcolor: "white",
          overflow: "hidden",
          width: "100%",
          position: "relative",
        }}
      >
        <AppBar>
          <Navigation data={data.page_header} />
        </AppBar>

        <Box sx={{ position: "relative", width: "100%", mt: "134px", px: 3 }}>
          {/* <Box
            component={Image}
            src={hero}
            alt="Hero"
            width={1390}
            height={807}
            priority
            sx={{ position: "relative", width: "100%", maxWidth: 1390, height: 807 }}
          /> */}
          {/* <Box
            component={Image}
            src={features}
            alt="Features"
            width={1393}
            height={190}
            sx={{ position: "relative", width: "100%", maxWidth: 1393, height: 190, mt: -1 }}
          /> */}
        </Box>

        {/* <ProductDetailsSection data={data} /> */}
        {/* <HighEfficiencySection data={data} /> */}
        {/* <AccessoriesSection data={data} /> */}
        {/* <GallerySection data={data} /> */}
        {/* <ColorsSection data={data} /> */}
        {/* <TestimonialsSection data={data} /> */}
        {/* <SubscribeSection data={data} /> */}
        {/* <FooterSection data={data} /> */}
      </Box >
    </Box >
  );
};
