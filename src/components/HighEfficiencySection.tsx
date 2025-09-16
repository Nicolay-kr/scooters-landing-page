import { Box, Stack, Typography } from "@mui/material";
import React, { JSX } from "react";

export const HighEfficiencySection = ({data}: {data: any}): JSX.Element => {
  return (
    <Box
      component="section"
      sx={{
        width: "100%",
        height: 852,
        // backgroundImage: `url(${image16})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        pt: 0,
      }}
    >
      <Stack
        spacing={2}
        sx={{
          width: 688,
          textAlign: "center",
          mt: 0,
        }}
      >
        <Typography
          variant="h1"
          component="h2"
          sx={{
            fontFamily: "Ubuntu, Helvetica, sans-serif",
            fontWeight: "bold",
            color: "#42454a",
            fontSize: 50,
            lineHeight: "60px",
            mt: 0,
          }}
        >
          High Efficiency Motor
        </Typography>

        <Typography
          variant="h6"
          component="p"
          sx={{
            fontFamily: "Ubuntu, Helvetica, sans-serif",
            fontWeight: "normal",
            color: "#42454a",
            fontSize: 20,
            lineHeight: "28px",
            mt: 4,
          }}
        >
          More torque for powerful riding with 22% maximum hill climbing
          capability.
        </Typography>
      </Stack>
    </Box>
  );
};
