import React from "react";
import { Container, Heading } from "native-base";
import type { IHeaderProps } from "./@types";
import { PageContainer } from "../page-container";

export function Header(props: IHeaderProps) {
  return (
    <PageContainer>
      <Container py={4} pt={6}>
        <Heading color="white">
          {props.title ? props.title : "My Contacts"}
        </Heading>
      </Container>
    </PageContainer>
  );
}
