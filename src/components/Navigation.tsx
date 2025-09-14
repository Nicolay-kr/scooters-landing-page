"use client";
import React, { JSX } from "react";
import Image from "next/image";
import { AppBar, Box, Button, Menu, MenuItem, Stack, Toolbar, Typography } from "@mui/material";
import Link from "next/link";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


export const Navigation = ({ data }: { data: any }): JSX.Element => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [isUserLogIn, setIsUserLogIn] = React.useState<boolean>(false);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const navData = data[0]
  console.log('navigation data', navData)

  const logInButton = navData.user_menu.find((item: any) => item.purpose === 'login');
  const logOutButton = navData.user_menu.find((item: any) => item.purpose === 'logout');
  const signUpButton = navData.user_menu.find((item: any) => item.purpose === 'signup');

  const getLinks = (links: any[]) => {
    return links.map((link, index) => {
      if (link.links_dropdowns) {
        return (
          <Box key={index} sx={{ minWidth: 120 }}>
            <Button
              sx={{ color: '#42454A', fontSize: '14px', fontFamily: 'Ubuntu-Regular, Helvetica' }}
              id="basic-button"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
              endIcon={<KeyboardArrowDownIcon />}
            >
              {link.links_dropdowns.group_title}
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              slotProps={{
                list: {
                  'aria-labelledby': 'basic-button',
                },
              }}
            >
              {
                link.links_dropdowns.link.map((dropdowns_link: any) => (
                  < MenuItem key={dropdowns_link._metadata.uid} value={dropdowns_link.link.title}><Link href={dropdowns_link.link.href}>
                    {dropdowns_link.link.title}
                  </Link></MenuItem>))
              }
            </Menu>
          </Box >
        )
      }
      if (link.link) {
        return (<Link key={link.link._metadata?.uid} href={link?.link.link.href}>
          {link.link.link.title}
        </Link>)

      }
    })
  }

  return (
    <AppBar
      position="absolute"
      sx={{
        top: 26,
        left: 0,
        width: "100%",
        height: 74,
        bgcolor: "rgba(255, 255, 255, 0.8)",
        backdropFilter: "blur(40px)",
        boxShadow: "none",
        borderBottom: `1px solid transparent`,
      }}
    >
      <Toolbar sx={{ height: "100%", px: 6, justifyContent: "space-between" }}>
        <Box
          sx={{
            position: "relative", width: 69, height: 47, cursor: navData.logo.is_clickable ? 'pointer' : 'default'
          }}
          {...(navData.logo.is_clickable ? { component: Link, href: navData.logo.link.href } : {})}
        >
          <Image
            src={navData.logo.image.url}
            alt={navData.logo.alt}
            fill
            style={{ objectFit: "contain" }}
          />
        </Box>

        <Box sx={{ display: 'flex', gap: '80px', alignItems: 'center' }}>
          {...getLinks(navData.navigation_menu)}
        </Box>

        {isUserLogIn ? (
          <Button
            color={logOutButton.button.color}
            variant={logOutButton.button.type}
            sx={{
              width: 106,
              height: 48,
              borderRadius: 1,
              fontFamily: "Ubuntu-Regular, Helvetica",
              fontWeight: 400,
              fontSize: 14,

            }}
          >
            {logOutButton.button.label}
          </Button>

        ) : (
          <Stack direction="row" spacing={1.5}>
            <Button
              color={logInButton.button.color}
              variant={logInButton.button.type}
              sx={{
                width: 106,
                height: 48,
                borderRadius: 1,
                fontFamily: "Ubuntu-Regular, Helvetica",
                fontWeight: 400,
                fontSize: 14,
              }}
            >
              {logInButton.button.label}
            </Button>
            <Button
              color={signUpButton.button.color}
              variant={signUpButton.button.type}
              sx={{

                width: 106,
                height: 48,
                borderRadius: 1,
                fontFamily: "Ubuntu-Regular, Helvetica",
                fontWeight: 400,
                fontSize: 14,
                textTransform: "none",
                letterSpacing: "0.28px",
              }}
            >
              {signUpButton.button.label}
            </Button>
          </Stack>
        )
        }

      </Toolbar >
    </AppBar >
  )
};
