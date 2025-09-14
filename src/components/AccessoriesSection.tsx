import Star from "@mui/icons-material/Star";
import { Box, Stack, Typography } from "@mui/material";
import React, { JSX } from "react";
import Image from "next/image";

const productData = [
  {
    id: 1,
    title: "Golf Bag Rock",
    images: [
      "/api/placeholder/472/427",
      "/api/placeholder/479/479",
      "/api/placeholder/493/438",
    ],
    specifications: [
      { label: "Material : Aluminium alloy" },
      { label: "Color : Black" },
      { label: "Capacity : 45lbs" },
      { label: "Ease : Steady & adjustable" },
    ],
  },
  {
    id: 2,
    title: "Shopping Rack",
    images: ["/api/placeholder/472/427", "/api/placeholder/240/210"],
    specifications: [
      { label: "Material : Aluminium alloy" },
      { label: "Color : Black" },
      { label: "Capacity : 45lbs" },
      { label: "Ease : Quick & adjustable" },
    ],
  },
];

export const AccessoriesSection = ({data}: {data: any}): JSX.Element => {
  return (
    <Box sx={{ width: "100%", position: "relative" }}>
      <Stack spacing={2} alignItems="center" sx={{ mb: 4 }}>
        <Typography
          variant="h2"
          sx={{
            fontFamily: "Ubuntu-Bold, Helvetica",
            fontWeight: "bold",
            color: "#42454a",
            fontSize: "50px",
            lineHeight: "60px",
            textAlign: "center",
          }}
        >
          Multiple Accessories
        </Typography>
        <Typography
          variant="h6"
          sx={{
            fontFamily: "Ubuntu-Regular, Helvetica",
            fontWeight: "normal",
            color: "#42454a",
            fontSize: "20px",
            lineHeight: "28px",
            textAlign: "center",
          }}
        >
          There are multiple modes for the scooter for your multiple needs.
        </Typography>
      </Stack>

      {/* Golf Bag Rock Section */}
      <Box sx={{ mb: 6 }}>
        <Stack direction="row" spacing={4} alignItems="center">
          {/* Specifications */}
          <Box sx={{ minWidth: "336px" }}>
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
              Golf Bag Rock
            </Typography>

            <Stack spacing={2}>
              {productData[0].specifications.map((spec, index) => (
                <Stack
                  key={index}
                  direction="row"
                  alignItems="center"
                  spacing={2}
                >
                  <Star sx={{ width: 49, height: 49, color: "#42454a" }} />
                  <Typography
                    sx={{
                      fontFamily: "Ubuntu-Regular, Helvetica",
                      fontWeight: "normal",
                      color: "#42454a",
                      fontSize: "20px",
                      lineHeight: "28px",
                    }}
                  >
                    {spec.label}
                  </Typography>
                </Stack>
              ))}
            </Stack>
          </Box>

          {/* Images */}
          <Stack direction="row" spacing={2}>
            <Box
              component={Image}
              src="/api/placeholder/479/479"
              alt="Golf Bag Rock"
              width={479}
              height={479}
              sx={{ position: "relative" }}
            />
            <Box
              component={Image}
              src="/api/placeholder/493/438"
              alt="Golf Bag Rock"
              width={493}
              height={438}
              sx={{ position: "relative" }}
            />
          </Stack>
        </Stack>
      </Box>

      <Box sx={{ mb: 6 }}>
        <Stack direction="row" spacing={4} alignItems="center">
          <Stack direction="row" spacing={2}>
            <Box
              component={Image}
              src="/api/placeholder/472/427"
              alt="Shopping Rack"
              width={472}
              height={427}
              sx={{ position: "relative" }}
            />
            <Box
              component={Image}
              src="/api/placeholder/240/210"
              alt="Shopping Rack"
              width={240}
              height={210}
              sx={{ position: "relative", mt: 19 }}
            />
          </Stack>

          <Box sx={{ minWidth: "349px" }}>
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
              Shopping Rack
            </Typography>

            <Stack spacing={2}>
              {productData[1].specifications.map((spec, index) => (
                <Stack
                  key={index}
                  direction="row"
                  alignItems="center"
                  spacing={2}
                >
                  <Star sx={{ width: 49, height: 49, color: "#42454a" }} />
                  <Typography
                    sx={{
                      fontFamily: "Ubuntu-Regular, Helvetica",
                      fontWeight: "normal",
                      color: "#42454a",
                      fontSize: "20px",
                      lineHeight: "28px",
                    }}
                  >
                    {spec.label}
                  </Typography>
                </Stack>
              ))}
            </Stack>
          </Box>
        </Stack>
      </Box>

      <Box sx={{ display: "flex", jusstifyContent: "center" }}>
        <Box
          sx={{
            width: "570px",
            height: "94px",
            borderRadius: "10px",
            border: "2px solid #42454a",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Ubuntu-Bold, Helvetica",
              fontWeight: "bold",
              color: "#42454a",
              fontSize: "30px",
              lineHeight: "36px",
              textAlign: "center",
            }}
          >
            More Accessories Coming Soon
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
