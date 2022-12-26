import React from "react";
import { Image } from "native-base";
import logoSrc from "../../../assets/logo.jpg";
import { ILogoProps } from "./@type";

export function Logo(props: ILogoProps) {
  return (
    <Image
      alt="logo"
      source={logoSrc}
      resizeMode="cover"
      w={props.w ? props.w : 98}
      h={props.h ? props.h : 98}
    />
  );
}
