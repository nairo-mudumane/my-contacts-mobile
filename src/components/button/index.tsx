import React from "react";
import { Button as NativeBaseButton, Text } from "native-base";
import type { IButtonProps } from "./@types";

export function Button({ text, color, ...rest }: IButtonProps) {
  return (
    <NativeBaseButton
      {...rest}
      rounded="lg"
      px={8}
      py={4}
      textTransform="uppercase"
    >
      <Text className="uppercase" ml={4} color={color ? color : "white"}>
        {text}
      </Text>
    </NativeBaseButton>
  );
}
