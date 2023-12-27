import React from "react";
import DataObjectIcon from '@mui/icons-material/DataObject';
import CodeIcon from '@mui/icons-material/Code';
import SourceIcon from "@mui/icons-material/Source";
import StorageIcon from "@mui/icons-material/Storage";
import CloudIcon from "@mui/icons-material/Cloud";
import TerminalIcon from "@mui/icons-material/Terminal";
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';

export const getIcon = (name) => {
  switch (name) {
  case "Programming Languages": return <DataObjectIcon />
  case "Other Languages": return <CodeIcon />
  case "Frameworks / Libraries": return <SourceIcon />
  case "Database": return <StorageIcon />
  case "Cloud": return <CloudIcon />
  case "Tools": return <TerminalIcon />
  case "Digital Media Production": return <VideoCameraBackIcon />
  default: return null;
  }
};
