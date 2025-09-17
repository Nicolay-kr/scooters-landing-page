import { Box, Button, Stack, TextField } from "@mui/material";
import { SectionHeader } from "./SectionHeader";
import React, { JSX } from "react";

export const SubscribeSection = ({ data }: { data: any }): JSX.Element => {
  return (
    <Box sx={{ width: "100%", maxWidth: 600, mx: "auto", py: 3, mt: 10 }}>
      <Stack spacing={3} alignItems="center" gap={4}>
        <SectionHeader
          title={data.header?.title}
          description={data.header?.description}
        />

        <Stack direction="row" spacing={2} sx={{ width: "100%" }}>
          <TextField
            placeholder={data.email_field.placeholder}
            variant="outlined"
            sx={{
              flex: 1,
              maxWidth: 400,
              "& .MuiOutlinedInput-root": {
                height: 81,
                backgroundColor: "#f9f9f9",
                borderRadius: "10px",
                border: "1.5px solid #e5e5e5",
                "& input": {
                  fontFamily: "Ubuntu, Helvetica, sans-serif",
                  fontSize: "20px",
                  color: "#42454a",
                  padding: "26px 36px",
                },
              },
            }}
          />

          <Button
            variant={data.submit_button?.variant}
            sx={{
              width: 198,
              height: 81,
              backgroundColor: "#42454a",
              borderRadius: "10px",
              fontFamily: "Ubuntu, Helvetica, sans-serif",
              fontSize: "20px",
              color: "#fbfbfb",
              textTransform: "none",
              "&:hover": {
                backgroundColor: "#35383d",
              },
            }}
          >
            {data.submit_button?.label}
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};
