import { Heading, View } from "native-base";
import React from "react";
import type { ISectionProps } from "./@types";

export function Section(props: ISectionProps) {
  return (
    <View>
      {props.title && (
        <View className="my-4 mb-6">
          <Heading className="text-white " fontSize={16}>
            {props.title}
          </Heading>
        </View>
      )}

      {props.children && <View className="mb-4">{props.children}</View>}
    </View>
  );
}
