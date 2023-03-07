import { IconButton, Tooltip, useColorScheme, useTheme } from "@mui/material";
import React from "react";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";


const ColorModeToggle: React.FC = () => {
  const { mode, setMode } = useColorScheme();
  return (
    <Tooltip
      title={`Toggle ${
        mode === "dark" ? "light" : "dark"
      } mode theme`}
    >
      <IconButton
        onClick={() => {
          setMode(mode === "light" ? "dark" : "light");
        }}
        color="inherit"
        className="mr05"
        size="large"
      >
        {mode === "dark" ? (
          <Brightness7Icon />
        ) : (
          <Brightness4Icon />
        )}
      </IconButton>
    </Tooltip>
  );
};

export default ColorModeToggle;
