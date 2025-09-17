import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { ContentStackImage } from "./ContentStackImage";

interface FeatureListProps {
  title?: string;
  features: Array<{ label: string }>;
  iconUrl: string;
  iconAlt?: string;
}

export const FeatureList: React.FC<FeatureListProps> = ({
  title = null,
  features,
  iconUrl,
  iconAlt,
}) => (
  <>
    {title && <Typography sx={{ fontSize: "40px" }}>{title}</Typography>}
    <Stack spacing={2} sx={{ flex: 1, pt: 4 }}>
      {features.map((feature, index) => (
        <Stack key={index} direction="row" spacing={2} alignItems="center">
          <Box sx={{ width: "49px", height: "49px", position: "relative" }}>
            <ContentStackImage
              url={iconUrl}
              alt={iconAlt}
              width={49}
              height={49}
              containerSx={{ position: "absolute" }}
              style={{ objectFit: "cover" }}
            />
          </Box>
          <Typography
            sx={{
              fontFamily: "Ubuntu-Regular, Helvetica",
              color: "#42454a",
              fontSize: "20px",
              lineHeight: "28px",
            }}
          >
            {feature.label}
          </Typography>
        </Stack>
      ))}
    </Stack>
  </>
);
