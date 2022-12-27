import React from "react";
import { Center, Spinner } from "native-base";
import { PageContainer } from "../page-container";

export function FullScreenLoader() {
  return (
    <PageContainer>
      <Center className="w-full h-full items-center justify-center">
        <Spinner size="lg" />
      </Center>
    </PageContainer>
  );
}
