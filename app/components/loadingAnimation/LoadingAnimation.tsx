"use client";
import Lottie from "lottie-react";
import React from "react";
import welcomeAnimation from "../../assets/welcomeAnimation.json";

const LoadingAnimation = () => {
  return (
    <div className="object-contain w-screen sm:w-52 md:w-96">
      <Lottie animationData={welcomeAnimation}></Lottie>
    </div>
  );
};

export default LoadingAnimation;
