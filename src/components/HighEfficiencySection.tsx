import { Box, Stack } from "@mui/material";
import { SectionHeader } from "./SectionHeader";
import React, { JSX } from "react";
import { ContentStackImage } from "./ContentStackImage";

export const HighEfficiencySection = ({ data }: { data: any }): JSX.Element => {
  return (
    <Stack
      spacing={2}
      alignItems="center"
      direction="column"
    >
      <SectionHeader
        title={data.header?.title}
        description={data.header?.description}
      />
      <ContentStackImage
        url={data.image.image.url}
        alt={data.image.alt}
        width={"1000px"}
        height={"450px"}
        containerSx={{ position: "relative" }}
      />
    </Stack>
  );
};
