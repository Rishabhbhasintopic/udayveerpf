"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

// Dynamically import lottie-react only on client
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const AnimationLottie = ({ animationPath, width }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <Lottie
      animationData={animationPath}
      loop
      autoplay
      style={{
        width: width || '95%',
      }}
    />
  );
};

export default AnimationLottie;
