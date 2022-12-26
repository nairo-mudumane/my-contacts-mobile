import React from "react";
import { Center, Spinner } from "native-base";

export function FullScreenLoader() {
  return (
    <Center alignItems="center" justifyContent="center" flex={1}>
      <Spinner size="lg" />
    </Center>
  );
}
