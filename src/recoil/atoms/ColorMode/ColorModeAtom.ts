import { PaletteMode } from "@mui/material";
import { atom } from "recoil";
import localStorageEffect from "../../atom-effects/localStorageEffect";

export const colorModeState = atom({
  key: "colorModeState",
  default: 'light' as PaletteMode,
  effects: [localStorageEffect<PaletteMode>("color_mode")],
});
