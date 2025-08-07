// CoreButtonRounded.jsx

import CoreButton from "../CoreButton/CoreButton";

export default function CoreButtonRounded() {
  return (
    <CoreButton
      text="Rounded Edges"
      size="md"
      variant="solid"
      color="purple"
      rounded="lg"
    />
  );
}

/*
Explanation:
- A solid purple button with large rounded corners.
- Focuses on the `rounded` prop for aesthetic variation.
- `rounded="lg"` applies larger border-radius than default.
*/
