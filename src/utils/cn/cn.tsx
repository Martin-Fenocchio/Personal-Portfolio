/* eslint-disable react-refresh/only-export-components */
// utils/cn.ts
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import useCanvasCursor from "./cn-hook";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const CanvasCursor = () => {
  useCanvasCursor();

  return (
    <canvas
      style={{
        pointerEvents: "none",
        position: "fixed",
        inset: 0,
      }}
      id="canvas"
    />
  );
};
