"use client";
import React, { JSX } from "react";
import Image from "next/image";
import {
  AppBar,
  Box,
  Button,
  Container,
  Menu,
  MenuItem,
  Paper,
  Popover,
  Popper,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { renderContentstackRTE } from "./renderContentstackRTE";

const featureCard = ({
  characteristic,
  description,
}: {
  characteristic: any;
  description: any;
}): JSX.Element => {
  return (
    <Paper
      sx={{
        width: "180px",
        height: "140px",
        padding: "16px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 2,
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
      }}
      elevation={3}
    >
      <Typography variant="h5" sx={{ fontWeight: "bold" }}>{characteristic}</Typography>
      <Typography variant="body2">{description}</Typography>
    </Paper>
  );
};

export const HeroSection = ({
  heading,
  cta,
  productImageGallery,
  characteristicCards,
}: {
  heading: any;
  cta: any;
  productImageGallery: any;
  characteristicCards: any;
}): JSX.Element => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          display: "flex",
          position: "relative",
          width: "100%",
          mt: "120px",
        }}
      >
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "left",
            width: "50%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "left",
              justifyContent: "center",
              mt: "40px",
              "&>hr": { my: 4, width: "50%" },
            }}
          >
            {renderContentstackRTE(heading.children)}
          </Box>
          <Box
            className="call-to-action"
            sx={{
              display: "flex",
              gap: "100px",
              mt: "24px",
              justifyContent: "left",
              width: "100%",
            }}
          >
            <Box
              component="a"
              href={cta[0].link.href}
              sx={{
                display: "flex",
                gap: "24px",
                alignItems: "center",
                textDecoration: "none",
                color: "#42454A",
                cursor: "pointer",
              }}
            >
              <Box
                sx={{
                  width: "58px",
                  height: "58px",
                  cursor: "pointer",
                  bgcolor: "#42454A",
                  position: "relative",
                }}
              >
                <img
                  src={cta[0].icon.url}
                  style={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    objectFit: "none",
                  }}
                  alt="Call to Action"
                />
              </Box>
              <Typography sx={{ textAlign: "center", fontWeight: "bold" }}>
                {cta[0].link.title}
              </Typography>
            </Box>

            <Box
              component="a"
              href={cta[1].link.href}
              sx={{
                display: "flex",
                gap: "24px",
                alignItems: "center",
                textDecoration: "none",
                color: "#42454A",
                cursor: "pointer",
              }}
            >
              <Typography
                sx={{ textAlign: "left", width: "100px", fontWeight: "bold" }}
              >
                {cta[1].link.title}
              </Typography>
              <Box
                sx={{
                  width: "80px",
                  height: "80px",
                  cursor: "pointer",
                  position: "relative",
                  "&>img": { position: "relative" },
                }}
              >
                <img
                  src={cta[1].icon.url}
                  style={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                  alt="Call to Action"
                />
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: "50%",
            height: "100%",
          }}
        >
          <Box sx={{ width: "100%", mt: 2, height: "62vh" }}>
            <img
              src={productImageGallery[0].image.image.url}
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
              alt="Hero"
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              width: "100%",
              justifyContent: "right",
              alignItems: "center",
              gap: 4,
            }}
          >
            <Typography
              sx={{
                textAlign: "center",
                fontFamily: "Calistoga",
                fontSize: "120px",
                lineHeight: "1",
                color: "#B0B0B0",
              }}
            >
              0{productImageGallery[0].model_number}
            </Typography>
            <Box
              sx={{
                display: "flex",
                border: "1px solid #42454A",
                borderRadius: "40px",
                overflow: "hidden",
                width: "120px",
                height: "48px",
                alignItems: "center",
                justifyContent: "center",
                ml: 4,
              }}
            >
              <Button
                sx={{
                  minWidth: 0,
                  width: "60px",
                  height: "48px",
                  borderRadius: 0,
                  borderRight: "1px solid #42454A",
                  color: "#42454A",
                  fontSize: 24,
                }}
              >
                <img
                  src="/left-arrow.svg"
                  alt="Left Arrow"
                  style={{ width: 10, height: 10 }}
                />
              </Button>
              <Button
                sx={{
                  minWidth: 0,
                  width: "60px",
                  height: "48px",
                  borderRadius: 0,
                  color: "#42454A",
                  fontSize: 24,
                }}
              >
                <img
                  src="/right-arrow.svg"
                  alt="Right Arrow"
                  style={{ width: 10, height: 10 }}
                />
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
      <Stack direction="row" spacing={4} sx={{ mt: 8, mb: 10 }}>
        {characteristicCards.map(
          ({
            characteristic,
            description,
          }: {
            characteristic: string;
            description: string;
          }) =>
            featureCard({
              characteristic,
              description,
            })
        )}
      </Stack>
    </Container>
  );
};
