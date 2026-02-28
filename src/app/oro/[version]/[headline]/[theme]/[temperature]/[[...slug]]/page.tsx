"use client";

import { useParams } from "next/navigation";
import Formv2 from "@/app/oro/[version]/v2";
import SplashScreenOro from "@/components/SplashScreen/SplashScreenOro";

export default function Home() {
  const { version } = useParams();

  return (
    <SplashScreenOro>
      <Formv2 />
    </SplashScreenOro>
  );
}
