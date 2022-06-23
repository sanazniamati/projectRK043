import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { Stage, Layer, RegularPolygon, Circle, Text } from "react-konva";

const App = () => {
  const [text, setText] = useState("");
  const handelPointerMove = (e) => {
    const stage = e.target.getStage();
    const pointerPosition = stage.getPointerPosition();
    const x = pointerPosition.x - 190;
    const y = pointerPosition.y - 40;
    setText(() => ("X:" + x, "Y:" + y));
  };
  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>
        <Text
          text={text}
          x={10}
          y={10}
          fontSize={24}
          fontFamily={"Calibri"}
          fill={"black"}
        />
        <RegularPolygon
          x={80}
          y={120}
          sides={3}
          radius={80}
          fill={"#00D2FF"}
          stroke={"black"}
          strokeWidth={4}
          onPointerMove={handelPointerMove}
        />
        <Circle
          x={230}
          y={100}
          radius={60}
          stroke={"black"}
          fill={"red"}
          strokeWidth={4}
          onPointerdown={() => setText("Pointerdown Circle")}
          onPointerUp={() => setText("PointerUp Circle")}
          onPointerDblClick={() => setText("DblClick Circle")}
        />
      </Layer>
    </Stage>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
