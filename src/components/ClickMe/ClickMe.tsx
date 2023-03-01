import { Button } from "@mui/material";
import React from "react";

const ClickMe: React.FC = () => {
  const [text, setText] = React.useState("foobar");

  function handleClick() {
    setText("random string");
  }

  return (
    <div className="ClickMe">
      <Button onClick={handleClick} variant="contained">Click Me</Button>
      <p>{text}</p>
    </div>
  );
};

export default ClickMe
