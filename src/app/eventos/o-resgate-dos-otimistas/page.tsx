import { Suspense } from "react";
import EventosResgateDosOtimistasPageClient from "./page.client";

export default function Page() {
  return (
    <Suspense fallback={null}>
      <EventosResgateDosOtimistasPageClient />
    </Suspense>
  );
}
