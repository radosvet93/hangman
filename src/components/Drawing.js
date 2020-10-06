import React from "react";
import { useRecoilState } from "recoil";

import { styleState } from "../recoil/atoms";

const Drawing = ({ errors = 0 }) => {
  const [style] = useRecoilState(styleState);

  return (
    <svg width="100%" height="200" style={style.marginSM} xmlns="http://www.w3.org/2000/svg">
      <line x1={50} y1={2} x2={150} y2={2} style={style.line} /> {/* Top line */}
      <line x1={150} y1={30} x2={150} y2={0} style={style.line} /> {/* Top vertical small line */}
      <line x1={50} y1={0} x2={50} y2={200} style={style.line} /> {/* vertical line */}
      <line x1={0} y1={198} x2={100} y2={198} style={style.line} /> {/* Bottom line */}
      {/* Hangman */}
      {errors >= 1 && <circle cx="150" cy="46" r="16" style={style.circle} />}
      {errors >= 2 && <line x1={150} y1={62} x2={150} y2={130} style={style.line} />}
      {errors >= 3 && <line x1={110} y1={62} x2={150} y2={80} style={style.line} />}
      {errors >= 4 && <line x1={190} y1={62} x2={150} y2={80} style={style.line} />}
      {errors >= 5 && <line x1={150} y1={128} x2={120} y2={170} style={style.line} />}
      {errors >= 6 && <line x1={150} y1={128} x2={180} y2={170} style={style.line} />}
    </svg>
  );
};

export default Drawing;
