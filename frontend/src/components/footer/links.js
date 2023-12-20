import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";

const links = [
  {
    "text": "LinkedIn",
    "url": "https://linkedin.com/in/scottwlai",
    "icon": <LinkedInIcon />
  },
  {
    "text": "GitHub",
    "url": "https://github.com/scottwlai",
    "icon": <GitHubIcon />
  },
  {
    "text": "scottlai@cs.utexas.edu",
    "url": "mailto:scottlai@cs.utexas.edu",
    "icon": <EmailIcon />
  },
  {
    "text": "(713) 820-5695",
    "url": "tel:+17138205695",
    "icon": <PhoneIcon />
  }
];

export default links;
