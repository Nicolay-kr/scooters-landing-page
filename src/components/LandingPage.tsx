"use client";
import React, { JSX } from "react";

import { AppBar, Box } from "@mui/material";
import { AccessoriesSection } from "./AccessoriesSection";
import { ColorsSection } from "./ColorsSection";
import { FooterSection } from "./FooterSection";
import { GallerySection } from "./GallerySection";
import { HighEfficiencySection } from "./HighEfficiencySection";
import { ProductDetailsSection } from "./ProductDetailsSection";
import { SubscribeSection } from "./SubscribeSection";
import { TestimonialsSection } from "./TestimonialsSection";
import { Navigation } from "./Navigation";
import { HeroSection } from "./HeroSection";

export const LandingPage = ({ data }: { data: any }): JSX.Element => {
  console.log("page data", data);

  const sectionComponents: Record<string, (props: any) => JSX.Element> = {
    product_information: (props) => <ProductDetailsSection {...props} />,
    high_efficiency_motor: (props) => <HighEfficiencySection {...props} />,
    multiple_accessories: (props) => <AccessoriesSection {...props} />,
    // gallery: (props) => <GallerySection {...props} />,
    // colors: (props) => <ColorsSection {...props} />,
    testimonials: (props) => <TestimonialsSection {...props} />,
    subscribe_to_newsletter: (props) => <SubscribeSection {...props} />,
  };

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
          characteristicCards={data.characteristic_cards}
        />
      </Box>
      {Array.isArray(data.page_sections) &&
        data.page_sections.map((section: any, idx: number) => {
          const key = Object.keys(section).find(
            (k) => k !== "$" && k !== "_metadata"
          );
          if (!key) return null;
          const Component = sectionComponents[key];
          return Component ? (
            <Component key={key + idx} data={section[key]} />
          ) : null;
        })}
      <FooterSection data={data.page_footer[0]} />
    </Box>
  );
};
