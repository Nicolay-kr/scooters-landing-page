"use client";
import React, { JSX } from "react";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import Image from "next/image";
import {
  AppBar,
  Box,
  Button,
  Divider,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { AccessoriesSection } from "./AccessoriesSection";
import { ColorsSection } from "./ColorsSection";
import { FooterSection } from "./FooterSection";
import { GallerySection } from "./GallerySection";
import { HighEfficiencySection } from "./HighEfficiencySection";
import { ProductDetailsSection } from "./ProductDetailsSection";
import { SubscribeSection } from "./SubscribeSection";
import { TestimonialsSection } from "./TestimonialsSection";
import { Navigation } from "./Navigation";
import { renderContentstackRTE } from "./renderContentstackRTE";
import { HeroSection } from "./HeroSection";

export const LandingPage = ({ data }: { data: any }): JSX.Element => {
  console.log("page data", data);

  return (
    <Box sx={{ bgcolor: "white", width: "100vw" }}>
      <Box
        sx={{
          bgcolor: "white",
          overflow: "hidden",
          width: "100%",
        }}
      >
        <AppBar
          sx={{
            top: 0,
            minHeight: "120px",
            bgcolor: "white",
            boxShadow: "none",
            borderBottom: "1px solid #E0E0E0",
          }}
        >
          <Navigation data={data.page_header} />
        </AppBar>

        <HeroSection
          heading={data.heading}
          cta={data.cta}
          productImageGallery={data.product_image_gallery}
          characteristicCards= {data.characteristic_cards}
        />
      </Box>
      <ProductDetailsSection data={data} />
      {/* <HighEfficiencySection data={data} /> */}
      {/* <AccessoriesSection data={data} /> */}
      {/* <GallerySection data={data} /> */}
      {/* <ColorsSection data={data} /> */}
      {/* <TestimonialsSection data={data} /> */}
      {/* <SubscribeSection data={data} /> */}
      {/* <FooterSection data={data} /> */}
    </Box>
  );
};
