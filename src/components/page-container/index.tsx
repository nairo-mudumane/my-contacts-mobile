import React from "react";
import { StatusBar } from "native-base";
import type { IPageContainerProps } from "./@types";
import { View } from "react-native";

export function PageContainer(props: IPageContainerProps) {
  return (
    <React.Fragment>
      <StatusBar
        translucent
        barStyle="light-content"
        backgroundColor="#171717"
      />

      <View className={`w-full px-6 ${props.bg ? props.bg : "bg-[#171717]"}`}>
        {props.children}
      </View>
    </React.Fragment>
  );
}
