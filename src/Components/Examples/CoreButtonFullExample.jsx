// CoreButtonFullExample.jsx

import CoreButton from "../CoreButton/CoreButton";
import { FaRocket } from "react-icons/fa";

export default function CoreButtonFullExample() {
  return (
    <CoreButton
      text="Launch 🚀"
      size="lg"
      color="green"
      variant="solid"
      iconLeft={<FaRocket />}
      iconRight={<FaRocket />}
      isDisabled={false}
      isLoading={false}
      rounded="full"
      onClick={() => alert("Launching now!")}
    />
  );
}

/*
Explanation:
- A fully customized button with every prop used.
- `iconLeft` and `iconRight`: Adds icons on both sides of the text.
- `isDisabled` & `isLoading`: Can be toggled for UX behavior.
- `rounded`: Fully rounded pill-style button.
- `onClick`: Custom click behavior using alert.
*/
