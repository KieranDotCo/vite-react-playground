import { TextField } from "@mui/material";
import React, { ChangeEvent } from "react";

type Props = {
  defaultInput?: string;
};

const TypeMe: React.FC<Props> = (props) => {
  const [text, setText] = React.useState(props.defaultInput || "");

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setText(event.target.value);
  }

  return (
    <div className="TypeMe">
      <TextField
        label="Type In Me"
        variant="outlined"
        onChange={handleChange}
        value={text}
      />
      <p>{text}</p>
    </div>
  );
};

export default TypeMe