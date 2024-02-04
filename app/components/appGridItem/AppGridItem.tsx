"use client";
import Link from "next/link";
import React from "react";
import Image, { StaticImageData } from "next/image";

interface Props {
  url: string;
  logo: StaticImageData;
  text: string;
}

const AppGridItem = ({ url, logo, text }: Props) => {
  return (
    <div className="flex flex-col items-center justify-between">
      <Link href={url} target="_blank">
        <Image
          src={logo}
          alt={text}
          className="object-contain w-24 h-24 rounded-xl bg-white"
        />
      </Link>
      <h3 className="m-2 text-lg">{text}</h3>
    </div>
  );
};

export default AppGridItem;
