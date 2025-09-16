import Star from "@mui/icons-material/Star";
import { Box, Stack, Typography } from "@mui/material";
import React, { JSX } from "react";
import Image from "next/image";

const features = [
  "Lightweight aircraft grade aluminium frame",
  "Car grade lithium battery",
  "Self-balanced",
  "Plug n play",
  "Quick release adapter",
  "RFID key card",
];

export const ProductDetailsSection = ({data}: {data: any}): JSX.Element => {
  return (
    <Box sx={{ width: "100%", py: 4 }}>
      <Stack spacing={4} alignItems="center">
        <Box sx={{ textAlign: "center", maxWidth: 602 }}>
          <Typography
            variant="h2"
            sx={{
              fontFamily: "Ubuntu-Bold, Helvetica",
              fontWeight: "bold",
              color: "#42454a",
              fontSize: "50px",
              lineHeight: "60px",
              mb: 2,
            }}
          >
            Product Information
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontFamily: "Ubuntu-Regular, Helvetica",
              color: "#42454a",
              fontSize: "20px",
              lineHeight: "28px",
            }}
          >
            Our Scooter has following unique design and technology features:
          </Typography>
        </Box>

        <Stack
          direction="row"
          spacing={4}
          alignItems="flex-start"
          sx={{ width: "100%", maxWidth: 1389 }}
        >
          <Box
            component={Image}
            src={""}
            alt="Scooter"
            width={748}
            height={400}
            sx={{ flex: 1,maxWidth: 748, height: 400 }}
          />

          <Stack spacing={4} sx={{ flex: 1, maxWidth: 464, pt: 4 }}>
            {features.map((feature, index) => (
              <Stack
                key={index}
                direction="row"
                spacing={2}
                alignItems="center"
              >
                <Box
                  sx={{
                    width: 49,
                    height: 49,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Star sx={{ color: "#42454a", fontSize: 32 }} />
                </Box>
                <Typography
                  sx={{
                    fontFamily: "Ubuntu-Regular, Helvetica",
                    color: "#42454a",
                    fontSize: "20px",
                    lineHeight: "28px",
                  }}
                >
                  {feature}
                </Typography>
              </Stack>
            ))}
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};
