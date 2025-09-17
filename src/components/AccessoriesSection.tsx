import Star from "@mui/icons-material/Star";
import { Box, Stack, Typography } from "@mui/material";
import React, { JSX } from "react";
import { SectionHeader } from "./SectionHeader";
import { ContentStackImage } from "./ContentStackImage";
import { FeatureList } from "./FeatureList";

export const AccessoriesSection = ({ data }: { data: any }): JSX.Element => {
  const accessories = data?.accessory_block || [];
  return (
    <Stack spacing={4} alignItems="center" direction="column">
      <SectionHeader
        title={data.header?.title || "Multiple Accessories"}
        description={
          data.header?.description ||
          "There are multiple modes for the scooter for your multiple needs."
        }
      />

      <Stack direction="column" gap={10} sx={{ mt: 10 }}>
        {accessories.map((item: any, idx: number) => (
          <Stack
            direction={idx === 0 ? "row" : "row-reverse"}
            spacing={10}
            alignItems="center"
            justifyContent={"space-between"}
          >
            <Box sx={{ minWidth: "336px" }}>
              <FeatureList
                title={item.feature_list.header}
                features={item.feature_list.feature}
                iconUrl={item.feature_list.icon?.image.url}
                iconAlt={item.feature_list.icon?.image.alt}
              />
            </Box>
            <Stack
              direction="row"
              spacing={10}
              alignItems="center"
              justifyContent={"space-between"}
            >
              <ContentStackImage
                url={item.first_image.image.url}
                alt={item.first_image.image.alt}
                width={300}
                height={300}
                containerSx={{ position: "relative" }}
              />
              <ContentStackImage
                url={item.second_image.image.url}
                alt={item.second_image.image.alt}
                width={idx === 0 ? 300 : 200}
                height={idx === 0 ? 300 : 200}
                containerSx={{ position: "relative" }}
              />
            </Stack>
          </Stack>
        ))}
      </Stack>

      <Box sx={{ display: "flex", justifyContent: "center", margin: "40px" }}>
        <Box
          sx={{
            width: "570px",
            height: "94px",
            borderRadius: "10px",
            border: "2px solid #42454a",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mt: 8,
            cursor: "pointer",
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
            {data.button.label}
          </Typography>
        </Box>
      </Box>
    </Stack>
  );
};
