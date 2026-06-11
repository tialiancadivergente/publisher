import { Suspense } from "react";
import Formv9 from "./index";

export default function Temporario() {
  return (
    <Suspense fallback={null}>
      <Formv9 />
    </Suspense>
  );
}
