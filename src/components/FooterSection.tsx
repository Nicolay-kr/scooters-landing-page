import { ContentStackImage } from "./ContentStackImage";
import { Box, Link, Stack, Typography } from "@mui/material";
import React, { JSX } from "react";

export const FooterSection = ({ data }: { data: any }): JSX.Element => {
  console.log("data.image.image.url:", data);

  const template = data.copyright_text.text;
  const dateStr = data.copyright_text.date;
  const year = new Date(dateStr).getFullYear();
  const copyRightText = template.replace("{date}", year.toString());

  return (
    <Box
      component="footer"
      sx={{
        width: "100%",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: 592,
          position: "relative",
          backgroundColor: "#42454a",
        }}
      >
        <Box
          sx={{
            position: "relative",
            width: "100%",
            height: 92,
            backgroundColor: "white",
          }}
        />

        {data?.image && (
          <ContentStackImage
            url={data.image.image.url}
            alt={data.image.image.alt}
            width={550}
            height={550}
            containerSx={{ position: "absolute", left: "-60px", top: 0 }}
          />
        )}

        <Stack direction="row" spacing={2} sx={{ mt: "80px" }}>
          <Box sx={{ position: "relative", width: "550px" }} />

          <Stack
            direction="row"
            spacing={25}
          >
            {data.footer_links.links_group.map((section: any, index: any) => (
              <Box key={index} sx={{ minWidth: 103 }}>
                <Typography
                  sx={{
                    fontFamily: "Ubuntu, Helvetica",
                    fontWeight: 700,
                    color: "#fbfbfb",
                    fontSize: 22,
                    mb: 7.5,
                    whiteSpace: "nowrap",
                  }}
                >
                  {section.group_name}
                </Typography>
                <Stack spacing={3}>
                  {section.links.map((link: any, linkIndex: number) => (
                    <Link
                      key={linkIndex}
                      href={link.link.link.href}
                      target={
                        link.link.link.open_in_new_window ? "_blank" : "_self"
                      }
                      sx={{
                        fontFamily: "Ubuntu, Helvetica",
                        fontWeight: 400,
                        color: "#fbfbfb",
                        fontSize: 16,
                        textDecoration: "none",
                        "&:hover": {
                          textDecoration: "underline",
                        },
                      }}
                    >
                      {link.link.link.title}
                    </Link>
                  ))}
                </Stack>

                {index === 2 && (
                  <Stack direction="row" spacing={2} sx={{ mt: 4 }}>
                    {data.icons.map((icon: any, index: number) => (
                      <ContentStackImage
                        key={icon.icon._metadata.uid || index}
                        url={icon.icon.image.url}
                        alt={icon.icon.image.alt || `icon-${index}`}
                        width={32}
                        height={32}
                        containerSx={{ cursor: "pointer" }}
                      />
                    ))}
                  </Stack>
                )}
              </Box>
            ))}
          </Stack>
        </Stack>
        <Box sx={{ backgroundColor: "#42454a", mt: 10 }}>
          <Typography
            sx={{
              fontFamily: "Poppins, Helvetica",
              fontWeight: 400,
              color: "#fbfbfb",
              fontSize: 16,
              textAlign: "center",
            }}
          >
            {copyRightText}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
