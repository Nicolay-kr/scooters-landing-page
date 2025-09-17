// Placeholder for ProductCard component
import { Box, Stack, Typography } from "@mui/material";
import React, { JSX } from "react";
import Image from "next/image";

const colorSwatches = [
  { id: "01", image: "/image.png" },
  { id: "02", image: "/image-8.png" },
  { id: "03", image: "/image-11.png" },
  { id: "04", image: "/image-12.png" },
];

export const ColorsSection = ({data}: {data: any}): JSX.Element => {
  return (
    <Box sx={{ width: "100%", height: "1266px" }}>
      <Box
        sx={{
          width: "100%",
          height: "1040px",
          mt: "226px",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            width: "100%",
            height: "837px",
            top: 0,
            left: 0,
            background:
              "linear-gradient(90deg, rgba(241,237,233,1) 0%, rgba(253,253,252,1) 93%, rgba(253,253,252,1) 100%)",
          }}
        />

        {/* <Box
          component={Image}
          alt="Image"
          width={1920}
          height={873}
          sx={{ position: "absolute", width: "100%", height: "873px", top: "8px", left: 0 }}
        /> */}

        <Stack
          direction="row"
          spacing={4}
          sx={{
            position: "absolute",
            bottom: "0px",
            left: "50px",
            width: "calc(100% - 100px)",
          }}
        >
          {colorSwatches.map((swatch) => (
            <Box
              key={swatch.id}
              sx={{
                width: "266px",
                height: "264px",
              }}
            >
              <Box
                sx={{
                  width: "383px",
                  height: "404px",
                  top: "-55px",
                  left: swatch.id === "01" ? "-50px" : "-70px",
                }}
              >
                <Box
                  component={Image}
                  src={swatch.image}
                  alt={`Color Swatch ${swatch.id}`}
                  width={383}
                  height={404}
                  sx={{ position: "absolute", top: 0, left: 0 }}
                />
                <Typography
                  sx={{
                    position: "absolute",
                    top: "223px",
                    left: swatch.id === "01" ? "215px" : "235px",
                    fontFamily: "Ubuntu-Bold, Helvetica",
                    fontWeight: "bold",
                    color: "rgba(255, 255, 255, 0.6)",
                    fontSize: "80px",
                    textAlign: "center",
                    lineHeight: "normal",
                    whiteSpace: "nowrap",
                  }}
                >
                  {swatch.id}
                </Typography>
              </Box>
            </Box>
          ))}
        </Stack>
      </Box>

      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "275px",
          height: "122px",
          textAlign: "center",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Ubuntu-Bold, Helvetica",
            fontWeight: "bold",
            color: "#42454a",
            fontSize: "50px",
            lineHeight: "60px",
            mb: "34px",
          }}
        >
          Colors
        </Typography>

        <Typography
          sx={{
            fontFamily: "Ubuntu-Regular, Helvetica",
            fontWeight: "normal",
            color: "#42454a",
            fontSize: "20px",
            lineHeight: "28px",
          }}
        >
          Checkout our products colors.
        </Typography>
      </Box>
    </Box>
  );
};
