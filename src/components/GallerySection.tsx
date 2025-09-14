import { Box, Button, Stack, Typography } from "@mui/material";
import React, { JSX } from "react";

const galleryCategories = [
  "Battery Images",
  "Spare Parts Images",
  "Charging Cable Images",
];

const galleryImages = [
  {
    title: "Scooter",
    image: "/image-2.png",
  },
  {
    title: "Built Quality",
    image: "/image-4.png",
  },
  {
    title: "Parts",
    image: "/image-5.png",
  },
];

export const GallerySection = ({data}: {data: any}): JSX.Element => {
  return (
    <Box sx={{ width: "100%", position: "relative", py: 4 }}>
      {/* Header Section */}
      <Box sx={{ textAlign: "center", mb: 6 }}>
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
          Gallery
        </Typography>
        <Typography
          variant="h6"
          sx={{
            fontFamily: "Ubuntu-Regular, Helvetica",
            fontWeight: "normal",
            color: "#42454a",
            fontSize: "20px",
            lineHeight: "28px",
          }}
        >
          View gallery of our products and make yourself satisfied with our
          creation.
        </Typography>
      </Box>

      {/* Main Content Layout without Grid */}
      <Box sx={{ display: 'flex', gap: 4, flexWrap: 'wrap' }}>
        {/* Left Column - Category Buttons and First Image */}
        <Box sx={{ flex: 1, minWidth: 300 }}>
          <Stack spacing={3}>
            {/* First Gallery Image */}
            <Box
              sx={{
                width: "100%",
                height: "485px",
                backgroundImage: `url(${galleryImages[0].image})`,
                backgroundSize: "100% 100%",
                borderRadius: "10px",
                position: "relative",
              }}
            >
              <Typography
                sx={{
                  position: "absolute",
                  top: "30px",
                  left: "38px",
                  fontFamily: "Ubuntu-Bold, Helvetica",
                  fontWeight: "bold",
                  color: "#42454a",
                  fontSize: "30px",
                }}
              >
                {galleryImages[0].title}
              </Typography>
            </Box>

            {/* Category Buttons */}
            <Stack spacing={2}>
              {galleryCategories.map((category, index) => (
                <Button
                  key={index}
                  variant="outlined"
                  sx={{
                    width: "100%",
                    height: "94px",
                    borderRadius: "10px",
                    border: "2px solid #42454a",
                    color: "#42454a",
                    fontFamily: "Ubuntu-Bold, Helvetica",
                    fontWeight: "bold",
                    fontSize: "30px",
                    textTransform: "none",
                    "&:hover": {
                      border: "2px solid #42454a",
                      backgroundColor: "rgba(66, 69, 74, 0.04)",
                    },
                  }}
                >
                  {category}
                </Button>
              ))}
            </Stack>
          </Stack>
        </Box>

        {/* Right Column - Two Gallery Images */}
        <Box sx={{ flex: 1, minWidth: 300 }}>
          <Stack spacing={4}>
            {galleryImages.slice(1).map((image, index) => (
              <Box
                key={index}
                sx={{
                  width: "100%",
                  height: "485px",
                  backgroundImage: `url(${image.image})`,
                  backgroundSize: index === 1 ? "cover" : "100% 100%",
                  backgroundPosition: index === 1 ? "50% 50%" : "center",
                  borderRadius: "10px",
                  position: "relative",
                }}
              >
                <Typography
                  sx={{
                    position: "absolute",
                    top: "30px",
                    left: "38px",
                    fontFamily: "Ubuntu-Bold, Helvetica",
                    fontWeight: "bold",
                    color: "#42454a",
                    fontSize: "30px",
                  }}
                >
                  {image.title}
                </Typography>
              </Box>
            ))}
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};
