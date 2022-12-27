import React from "react";
import { Feather } from "@expo/vector-icons";
import { Avatar, Box, Heading, Icon, IconButton, Text } from "native-base";
import { TouchableOpacity } from "react-native";
import { IContactItemProps } from "./@types";

export function ContactItem({ contact, type = "avatar" }: IContactItemProps) {
  if (type === "inline")
    return (
      <TouchableOpacity className="mb-4">
        <Box className="flex-1 flex-row items-center justify-start gap-4">
          <Avatar rounded="md" size={"md"} source={{ uri: contact.avatar }}>
            {contact.firstname.slice(0, 1) + contact.lastname.slice(0, 1)}
          </Avatar>

          <Box className="flex-1 py-2">
            <Heading fontSize={18}>{contact.fullname}</Heading>

            <Text fontSize={12} className="hidden">
              {contact.email}
            </Text>

            <Text fontSize={12} className="text-gray-700">
              {contact.phone}
            </Text>
          </Box>

          <IconButton
            rounded="full"
            alignItems={"center"}
            justifyContent={"center"}
            bg="rgba(0,0,0,0.4)"
          >
            <Feather name="edit" flex={1} size={19} />
          </IconButton>
        </Box>
      </TouchableOpacity>
    );

  return (
    <TouchableOpacity className="m-2">
      <Box className="gap-3">
        <Avatar size={"md"} source={{ uri: contact.avatar }}>
          {contact.firstname.slice(0, 1) + contact.lastname.slice(0, 1)}
        </Avatar>

        <Text color="white" fontSize={12}>
          {contact.firstname}
        </Text>
      </Box>
    </TouchableOpacity>
  );
}
