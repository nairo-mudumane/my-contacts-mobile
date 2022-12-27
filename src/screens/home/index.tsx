import React from "react";
import { Heading } from "native-base";
import { PageContainer } from "../../components";

export function Home() {
  React.useEffect(() => {
    console.log("entrou na home");
  }, []);

  return (
    <PageContainer>
      <Heading>home</Heading>
    </PageContainer>
  );
}
