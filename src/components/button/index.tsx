import React from "react";
import { Button as NativeBaseButton } from "native-base";
import type { IButtonProps } from "./@types";

export function Button({ text, ...rest }: IButtonProps) {
  return <NativeBaseButton {...rest}>{text}</NativeBaseButton>;
}
