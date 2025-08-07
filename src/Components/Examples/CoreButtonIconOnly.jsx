// CoreButtonIconOnly.jsx

import CoreButton from "../CoreButton/CoreButton";
import { FaHeart } from "react-icons/fa";

export default function CoreButtonIconOnly() {
  return (
    <CoreButton
      iconLeft={<FaHeart />}
      size="sm"
      variant="ghost"
      color="red"
      rounded="full"
      onClick={() => console.log("Liked ❤️")}
    />
  );
}

/*
Explanation:
- This button has no text, only a left icon, making it circular.
- `variant`: Ghost for transparent look.
- `rounded`: Full rounding makes it icon-friendly.
- Useful for like/favorite buttons in UI.
*/
