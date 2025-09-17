import React from "react";
import { Box, Typography } from "@mui/material";

interface SectionHeaderProps {
  title: string;
  description?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ title, description }) => (
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
      {title}
    </Typography>
    {description && (
      <Typography
        sx={{
          fontFamily: "Ubuntu-Regular, Helvetica",
          color: "#42454a",
          fontSize: "20px",
          lineHeight: "28px",
        }}
      >
        {description}
      </Typography>
    )}
  </Box>
);
