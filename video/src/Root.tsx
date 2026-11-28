import React from "react";
import { Composition } from "remotion";
import { DURATION_S, FPS, H, W } from "./kit";
import { AngieLoop, ClaraLoop, HomeLoop, LoraLoop, SophieLoop } from "./scenes";

const LOOPS = { home: HomeLoop, lora: LoraLoop, angie: AngieLoop, sophie: SophieLoop, clara: ClaraLoop };

export const RemotionRoot: React.FC = () => (
  <>
    {Object.entries(LOOPS).map(([id, component]) => (
      <Composition key={id} id={id} component={component} durationInFrames={DURATION_S * FPS} fps={FPS} width={W} height={H} />
    ))}
  </>
);
