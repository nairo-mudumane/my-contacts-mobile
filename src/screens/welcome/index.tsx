import React from "react";
import { Box, Icon, Heading, Text } from "native-base";
import { Fontisto } from "@expo/vector-icons";
import { Button, PageContainer } from "../../components";

export function Welcome() {
  return (
    <PageContainer>
      <Box className="flex-col w-full h-full items-center justify-center">
        <Box>
          <Heading color="white" size="xl">
            Welcome to MContacts
          </Heading>
        </Box>

        <Box className="my-6">
          <Button
            leftIcon={
              <Icon as={Fontisto} name="google" size="md" color="white" />
            }
            size="lg"
            text="Get started with Google"
          />
        </Box>

        <Text color="white">
          We do not use any information other than your{"\n"} email to create
          your account.
        </Text>
      </Box>
    </PageContainer>
  );
}
