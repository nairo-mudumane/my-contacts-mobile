import { Avatar, Box, Text } from "native-base";
import React from "react";
import { TouchableOpacity } from "react-native";
import { IContactItemProps } from "./@types";

export function ContactItem({ contact, type = "avatar" }: IContactItemProps) {
  if (type === "avatar")
    return (
      <TouchableOpacity className="m-2">
        <Box className="gap-3">
          <Avatar size={"md"} source={{ uri: contact.avatar }} />

          <Text color="white" fontSize={12}>
            {contact.firstname}
          </Text>
        </Box>
      </TouchableOpacity>
    );

  return null;
}
