import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import React, { JSX } from "react";

export const SubscribeSection = ({data}: {data: any}): JSX.Element => {
    return (
        <Box sx={{ width: "100%", maxWidth: 616, mx: "auto", py: 3 }}>
            <Stack spacing={3} alignItems="center">
                <Stack spacing={1} alignItems="center">
                    <Typography
                        variant="h2"
                        sx={{
                            fontFamily: "Ubuntu, Helvetica, sans-serif",
                            fontWeight: "bold",
                            fontSize: "50px",
                            lineHeight: "60px",
                            color: "#42454a",
                            textAlign: "center",
                        }}
                    >
                        Subscribe To Newsletter
                    </Typography>

                    <Typography
                        variant="h6"
                        sx={{
                            fontFamily: "Ubuntu, Helvetica, sans-serif",
                            fontWeight: "normal",
                            fontSize: "20px",
                            lineHeight: "28px",
                            color: "#42454a",
                            textAlign: "center",
                        }}
                    >
                        Subscribe to our newsletter to get amazing offers in future.
                    </Typography>
                </Stack>

                <Stack direction="row" spacing={2} sx={{ width: "100%" }}>
                    <TextField
                        placeholder="Enter your email."
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
                        variant="contained"
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
                        Get start
                    </Button>
                </Stack>
            </Stack>
        </Box>
    );
};
