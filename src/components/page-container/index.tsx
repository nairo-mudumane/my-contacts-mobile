import React from "react";
import { Container } from "native-base";
import type { IPageContainerProps } from "./@types";
import { View } from "react-native";

export function PageContainer(props: IPageContainerProps) {
  return (
    <View className={`w-full px-6 ${props.bg ? props.bg : "bg-[#171717]"}`}>
      {props.children}
    </View>
  );
}
