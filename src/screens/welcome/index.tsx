import React from "react";
import { Box, Heading } from "native-base";
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

        <Box className="mt-10">
          <Button size="lg" text="Entrar com Google" />
        </Box>
      </Box>
    </PageContainer>
  );
}
