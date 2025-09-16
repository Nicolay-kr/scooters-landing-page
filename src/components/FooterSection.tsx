import Image from "next/image";
import { Box, Link, Stack, Typography } from "@mui/material";
import React, { JSX } from "react";

// Footer data structure
const footerSections = [
  {
    title: "About",
    links: ["Company", "Teams", "Profile", "Careers"],
  },
  {
    title: "Resources",
    links: ["Contact", "Application", "FQA", "Features"],
  },
  {
    title: "Legals",
    links: ["Copyright", "Privacy Policy", "Disclaimer", "Terms"],
  },
];

export const FooterSection = ({data}: {data: any}): JSX.Element => {
  return (
    <Box
      component="footer"
      sx={{
        width: "100%",
        height: 592,
        backgroundColor: "transparent",
      }}
    >
      <Box sx={{ width: "100%", height: 592 }}>
        {/* Main footer background */}
        <Box
          sx={{
            position: "absolute",
            width: "100%",
            maxWidth: 1440,
            height: 500,
            top: 92,
            left: "50%",
            transform: "translateX(-50%)",
            backgroundColor: "#42454a",
          }}
        />

        {/* Decorative image */}
        {/* <Box
          component={Image}
          src={image13}
          alt="Image"
          width={729}
          height={551}
          sx={{ position: "absolute", top: 0, left: 0, transform: "rotate(180deg)" }}
        /> */}

        {/* Social media icons */}
        {/* TODO: Add social media icons as <Image /> or SVGs here if available */}

        {/* Copyright text */}
        <Typography
          sx={{
            position: "absolute",
            top: 538,
            left: "50%",
            transform: "translateX(-50%)",
            fontFamily: "Poppins, Helvetica",
            fontWeight: 400,
            color: "#fbfbfb",
            fontSize: 16,
            textAlign: "center",
          }}
        >
          © Copyright 2021. All rights reserved.
        </Typography>

        {/* Footer sections */}
        <Stack
          direction="row"
          spacing={25}
          sx={{
            position: "absolute",
            top: 191,
            right: 210,
          }}
        >
          {footerSections.map((section, index) => (
            <Box key={index} sx={{ minWidth: 103 }}>
              <Typography
                sx={{
                  fontFamily: "Ubuntu, Helvetica",
                  fontWeight: 700,
                  color: "#fbfbfb",
                  fontSize: 22,
                  mb: 7.5,
                  whiteSpace: "nowrap",
                }}
              >
                {section.title}
              </Typography>
              <Stack spacing={3.375}>
                {section.links.map((linkText, linkIndex) => (
                  <Link
                    key={linkIndex}
                    href="#"
                    sx={{
                      fontFamily: "Ubuntu, Helvetica",
                      fontWeight: 400,
                      color: "#fbfbfb",
                      fontSize: 16,
                      textDecoration: "none",
                      "&:hover": {
                        textDecoration: "underline",
                      },
                    }}
                  >
                    {linkText}
                  </Link>
                ))}
              </Stack>
            </Box>
          ))}
        </Stack>
      </Box>
    </Box>
  );
};
