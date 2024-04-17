import React from 'react'
import { SketchPicker } from "react-color";
import { snapshot } from "valtio";

import state from '../store';

const ColorPicker = () => {
  const snap = snapshot(state);
  return (
    <div className="left-full ml-3">
      <SketchPicker
        color={snap.color}
        disableAlpha
        onChange={(color) => state.color = color.hex}
      />
    </div>
  )
}

export default ColorPicker;