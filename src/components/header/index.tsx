import React from "react";
import { Fontisto } from "@expo/vector-icons";
import { Box, Container, Heading, Icon, IconButton, Text } from "native-base";
import type { IHeaderProps } from "./@types";
import { PageContainer } from "../page-container";
import { Button } from "../button";

export function Header(props: IHeaderProps) {
  if (props.back)
    return (
      <PageContainer flex={0}>
        <Box className="flex-row items-center justify-between">
          <IconButton
            rounded="3xl"
            icon={
              <Icon as={Fontisto} name="angle-left" size="md" color="white" />
            }
          />

          <Heading color="white" fontSize={22}>
            {props.title ? props.title : "My Contacts"}
          </Heading>
        </Box>
      </PageContainer>
    );

  return (
    <PageContainer flex={0}>
      <Box className="">
        <Text color="white">{props.title ? props.title : "My Contacts"}</Text>
        <Button text="" />
      </Box>
    </PageContainer>
  );
}
