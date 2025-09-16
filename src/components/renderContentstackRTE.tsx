import React from "react";
import { Typography, Link, Box, List, ListItem } from "@mui/material";

export function renderContentstackRTE(rteJson: any): React.ReactNode {
  if (!Array.isArray(rteJson)) return null;

  return rteJson.map((node: any, idx: number) => {
    switch (node.type) {
      case "p":
        return (
          <Typography key={idx} paragraph>
            {renderContentstackRTE(node.children)}
          </Typography>
        );
      case "h1":
      case "h2":
      case "h3":
      case "h4":
      case "h5":
      case "h6":
        return (
          <Typography key={idx} variant={node.type}>
            {renderContentstackRTE(node.children)}
          </Typography>
        );
      case "hr":
        return <Box key={idx} component="hr" sx={{ my: 2 }} />;
      case "ul":
        return (
          <List key={idx}>
            {node.children?.map((item: any, i: number) => (
              <ListItem key={i}>{renderContentstackRTE(item.children)}</ListItem>
            ))}
          </List>
        );
      case "li":
        return (
          <ListItem key={idx}>{renderContentstackRTE(node.children)}</ListItem>
        );
      default:
        // Handle text and inline formatting (bold, italic, underline)
        if (node.text !== undefined) {
          let textElem: React.ReactNode = node.text;
          if (node.bold) {
            textElem = <Box component="span" fontWeight="bold">{textElem}</Box>;
          }
          if (node.italic) {
            textElem = <Box component="span" fontStyle="italic">{textElem}</Box>;
          }
          if (node.underline) {
            textElem = <Box component="span" sx={{ textDecoration: "underline" }}>{textElem}</Box>;
          }
          return textElem;
        }
        // Recursively render children if present
        if (node.children) {
          return renderContentstackRTE(node.children);
        }
        return null;
    }
  });
}
