import React from "react";
import { Fontisto } from "@expo/vector-icons";
import { Button as NativeBaseButton, Icon, Text } from "native-base";
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
      <>
        {text && (
          <Text className="uppercase" ml={4} color={color ? color : "white"}>
            {text}
          </Text>
        )}

        {rest.children}
      </>
    </NativeBaseButton>
  );
}
