import { Cursor, ScrollBar, SmoothScroll } from "./lib/shell";
import Hagane from "./Hagane";

export default function App() {
  return (
    <>
      <SmoothScroll />
      <Cursor />
      <ScrollBar tone="#c2521b" />
      <Hagane />
    </>
  );
}
