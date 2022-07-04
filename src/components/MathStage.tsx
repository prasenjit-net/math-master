import { MathContextProvider } from "../util/MathContext";
import { MathBody } from "./MathBody";
import { MathControl } from "./MathControl";

export const MathStage = () => {
  return (
    <MathContextProvider>
      <div>
        <MathControl />
        <MathBody />
      </div>
    </MathContextProvider>
  );
};
