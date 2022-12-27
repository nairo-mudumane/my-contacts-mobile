import React from "react";
import type { IPageContainerProps } from "./@types";
import { Platform, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export function PageContainer(props: IPageContainerProps) {
  return (
    <>
      <StatusBar
        translucent
        barStyle="light-content"
        backgroundColor="#171717"
      />

      <SafeAreaView
        className={`py-${props.py !== undefined ? props.py : 1} px-${
          props.px !== undefined ? props.px : 6
        } flex-${props.flex !== undefined ? props.flex : 1}`}
        style={{
          backgroundColor: props.bg ? props.bg : "#171717",
          paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        }}
      >
        {props.children}
      </SafeAreaView>
    </>
  );
}
