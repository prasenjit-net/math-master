import { MathContextProvider } from "../util/MathContext";
import { MathBody } from "./MathBody";
import { MathControl } from "./MathControl";
import { KeyboardHandler } from "./KeyboardHandler";

export const MathStage = () => {
  return (
    <MathContextProvider>
      <div>
        <KeyboardHandler />
        <MathControl />
        <MathBody />
      </div>
    </MathContextProvider>
  );
};
