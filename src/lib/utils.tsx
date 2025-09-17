import React from "react";
import { Typography, Link, Box, List, ListItem } from "@mui/material";

export function renderContentstackRTE(rteJson: any): React.ReactNode {
  if (!Array.isArray(rteJson)) return null;

  return rteJson.map((node: any, idx: number) => {
    switch (node.type) {
      case "p":
        return (
          <Typography key={node.uid} paragraph>
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
          <Typography key={node.uid} variant={node.type}>
            {renderContentstackRTE(node.children)}
          </Typography>
        );
      case "hr":
        return <Box key={node.uid} component="hr" sx={{ my: 2 }} />;
      case "ul":
        return (
          <List key={node.uid}>
            {node.children?.map((item: any, i: number) => (
              <ListItem key={i}>{renderContentstackRTE(item.children)}</ListItem>
            ))}
          </List>
        );
      case "li":
        return (
          <ListItem key={node.uid}>{renderContentstackRTE(node.children)}</ListItem>
        );
      default:
        // Handle text and inline formatting (bold, italic, underline)
        if (node.text !== undefined) {
          let textElem: React.ReactNode = node.text;
          if (node.bold) {
            textElem = <Box key={node.uid} component="span" fontWeight="bold">{textElem}</Box>;
          }
          if (node.italic) {
            textElem = <Box key={node.uid} component="span" fontStyle="italic">{textElem}</Box>;
          }
          if (node.underline) {
            textElem = <Box key={node.uid} component="span" sx={{ textDecoration: "underline" }}>{textElem}</Box>;
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
