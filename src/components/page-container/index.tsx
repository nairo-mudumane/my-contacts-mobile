import React from "react";
import { Container } from "native-base";
import type { IPageContainerProps } from "./@types";
import { View } from "react-native";

export function PageContainer(props: IPageContainerProps) {
  return (
    <View
      style={{
        width: "100%",
        backgroundColor: props.bg ? props.bg : "#171717",
      }}
    >
      <Container w="full" px={4}>
        {props.children}
      </Container>
    </View>
  );
}
