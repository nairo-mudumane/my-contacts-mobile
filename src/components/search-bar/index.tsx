import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { Text, View } from "native-base";
import { TouchableOpacity } from "react-native";

export function SearchBar() {
  return (
    <View className="flex-1 items-center justify-between rounded-[9999px]">
      <TouchableOpacity className="flex-1 flex-row items-center justify-between py-2 rounded-[9999px] px-4">
        <Text
          className="flex-1 mr-2 text-white overflow-ellipsis"
          numberOfLines={1}
        >
          Search
        </Text>

        <FontAwesome name="search" color="white" size={18} />
      </TouchableOpacity>
    </View>
  );
}
