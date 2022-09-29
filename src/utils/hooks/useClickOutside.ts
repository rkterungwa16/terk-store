import { MutableRefObject, useEffect } from "react";

export function useClickOutside(
  ref: MutableRefObject<HTMLElement | null>,
  action: () => void
) {
  useEffect(() => {
    function handleClickOutside(
      this: Document,
      event: globalThis.MouseEvent
    ): any {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        action();
      }
      return;
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}
