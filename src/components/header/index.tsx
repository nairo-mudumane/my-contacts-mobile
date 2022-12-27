import React from "react";
import { Fontisto } from "@expo/vector-icons";
import { Avatar, Box, Heading, Icon, IconButton } from "native-base";
import type { IHeaderProps } from "./@types";
import { PageContainer } from "../page-container";
import { useAuth } from "../../hooks";
import { useNavigation } from "@react-navigation/native";

export function Header(props: IHeaderProps) {
  const { user } = useAuth();
  const navigation = useNavigation();
  const { goBack } = navigation;

  if (props.back)
    return (
      <PageContainer flex={0}>
        <Box className="flex-row items-center justify-between">
          <IconButton
            rounded="3xl"
            onPress={goBack}
            icon={
              <Icon as={Fontisto} name="angle-left" size="md" color="white" />
            }
          />

          <Box>
            <Avatar source={{ uri: user.avatar }} size="md">
              {user.firstname.slice(0, 1) + user.lastname.slice(0, 1)}
            </Avatar>
          </Box>
        </Box>
      </PageContainer>
    );

  return (
    <PageContainer flex={0}>
      <Box className="flex-row items-center justify-between">
        <Box>
          <Heading color="white" fontSize={20}>
            {props.title ? props.title : "MyContacts"}
          </Heading>
        </Box>

        <Box>
          <Avatar source={{ uri: user.avatar }} size="md" />
        </Box>
      </Box>
    </PageContainer>
  );
}
