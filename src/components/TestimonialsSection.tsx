import ArrowBackIos from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIos from "@mui/icons-material/ArrowForwardIos";
import Star from "@mui/icons-material/Star";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import React, { JSX } from "react";
import { SectionHeader } from "./SectionHeader";

const data = [
  {
    id: 1,
    rating: 5,
    text: "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure.",
    name: "Serhiy Hipskyy",
    title: "CEO Universal",
    avatar: "https://via.placeholder.com/48x48",
  },
  {
    id: 2,
    rating: 5,
    text: "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.",
    name: "Justus Menke",
    title: "CEO Eronaman",
    avatar: "https://via.placeholder.com/48x48",
  },
  {
    id: 3,
    rating: 5,
    text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.",
    name: "Britain Eriksen",
    title: "CEO Universal",
    avatar: "https://via.placeholder.com/48x48",
  },
];

export const TestimonialsSection = ({ data }: { data: any }): JSX.Element => {
  return (
    <Stack
      alignItems="center"
      sx={{
        width: "100%",
        height: 712,
        backgroundColor: "#f9f9f9",
        py: 10,
      }}
    >
      <SectionHeader
        title={data.header?.title || "Testimonials"}
        description={data.header?.description}
      />

      <Stack
        direction="row"
        spacing={3}
        justifyContent="center"
        alignItems="center"
        sx={{ px: 2 }}
        mt={6}
      >
        {data.testimonials.map((testimonial: any, index: number) => (
          <Card
            key={testimonial.id}
            sx={{
              width: 360,
              height: 366,
              border: index === 0 ? "none" : "1px solid #d7d7d7",
              boxShadow:
                index === 0
                  ? "0px 1.85px 3.15px rgba(49, 49, 49, 0.024), 0px 20px 13px rgba(49, 49, 49, 0.051), 0px 38.52px 25.48px rgba(49, 49, 49, 0.063)"
                  : "none",
              backgroundColor: index === 0 ? "white" : "transparent",
            }}
          >
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                p: 4,
                height: "100%",
              }}
            >
              <Stack direction="row" spacing={0.5} sx={{ mb: 2 }}>
                {[...Array(testimonial.rating.value)].map((_, starIndex) => (
                  <Star
                    key={starIndex}
                    sx={{
                      width: 17,
                      height: 15,
                      color: "#FFD700",
                    }}
                  />
                ))}
              </Stack>

              <Typography
                sx={{
                  fontFamily: "Ubuntu, Helvetica, sans-serif",
                  fontWeight: "normal",
                  color: "#42454a",
                  fontSize: 20,
                  lineHeight: "28px",
                  textAlign: "center",
                  mb: 4,
                  flex: 1,
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {testimonial.text}
              </Typography>

              <Stack direction="row" alignItems="center" spacing={2}>
                <Avatar
                  src={testimonial.person_image.image.url}
                  sx={{
                    width: 48,
                    height: 48,
                  }}
                />
                <Box>
                  <Typography
                    sx={{
                      fontFamily: "Ubuntu, Helvetica, sans-serif",
                      fontWeight: "medium",
                      color: "#42454a",
                      fontSize: 16,
                      lineHeight: "normal",
                    }}
                  >
                    {testimonial.name}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Ubuntu, Helvetica, sans-serif",
                      fontWeight: "normal",
                      color: "#42454a",
                      fontSize: 14,
                      lineHeight: "normal",
                    }}
                  >
                    {testimonial.position}
                  </Typography>
                </Box>
              </Stack>
            </CardContent>
          </Card>
        ))}
      </Stack>

      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
        sx={{ mt: 4 }}
      >
        <IconButton
          sx={{
            width: 56,
            height: 56,
            borderRadius: "50%",
            border: "2px solid #42454a",
            backgroundColor: "#fff",
            transition: "background 0.2s",
            boxShadow: "none",
            "&:hover": {
              backgroundColor: "#35383d",
              color: "#fff",
            },
          }}
        >
          <ArrowBackIos sx={{ position: "relative", left: "5px" }} />
        </IconButton>
        <IconButton
          sx={{
            width: 56,
            height: 56,
            borderRadius: "50%",
            border: "2px solid #42454a",
            backgroundColor: "#fff",
            transition: "background 0.2s",
            boxShadow: "none",
            "&:hover": {
              backgroundColor: "#35383d",
              color: "#fff",
            },
          }}
        >
          <ArrowForwardIos sx={{ position: "relative", left: "2px" }} />
        </IconButton>
      </Stack>
    </Stack>
  );
};
