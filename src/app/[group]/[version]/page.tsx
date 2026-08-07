"use client";

import { useParams } from "next/navigation";
import Versoin1 from "../v1";

export default function Home() {
    const { version } = useParams();

    //   if (version === "v11") {
    //     return (
    //       <SplashScreenOro>
    //         <Formv11 />
    //       </SplashScreenOro>
    //     );
    //   }

    return (
        <Versoin1 />
    );
}
