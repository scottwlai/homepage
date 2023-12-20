import React from "react";
import HeaderLink from "./HeaderLink";

const Name = () => {
  return (
    <HeaderLink
      text={"Scott Lai"}
      link={"/#"}
      style={{
        "marginRight": "auto"
      }}
      buttonSx={{
        "fontSize": "clamp(1rem, 4vw, 2rem)",
        "textTransform": "none"
      }}
    />
  )
}

export default Name;
