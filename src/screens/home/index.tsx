import React from "react";
import { Heading, Text, View } from "native-base";
import { Header, PageContainer, SearchBar, Section } from "../../components";
import { useAuth } from "../../hooks";
import { Favorites } from "./favorites";

export function Home() {
  const { user } = useAuth();

  return (
    <React.Fragment>
      <Header back />

      <PageContainer>
        <Favorites />

        <Heading color="white">home - {user.fullname}</Heading>
      </PageContainer>
    </React.Fragment>
  );
}
