import { Box, Stack } from "@mui/material";
import { FeatureList } from "./FeatureList";
import { SectionHeader } from "./SectionHeader";
import React, { JSX } from "react";
import { ContentStackImage } from "./ContentStackImage";

export const ProductDetailsSection = ({ data }: { data: any }): JSX.Element => {
  return (
    <Stack
      spacing={2}
      alignItems="center"
      direction="column"
    >
      <SectionHeader
        title={data.header.title}
        description={data.header.description}
      />

      <Stack
        direction="row"
        spacing={20}
        alignItems="center"
        sx={{ width: "100%", maxWidth: 1389 }}
      >
        <ContentStackImage
          url={data.image.image.url}
          alt={data.image.alt}
          width={650}
          height={650}
          containerSx={{ position: "relative" }}
        />

        <FeatureList
          features={data?.feature_list?.feature || []}
          iconUrl={data?.feature_list?.icon?.image?.url}
          iconAlt={data?.feature_list?.icon?.image?.alt}
        />
      </Stack>
    </Stack>
  );
};
