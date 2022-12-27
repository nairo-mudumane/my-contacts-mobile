import React from "react";
import { Heading, ScrollView, Text, View } from "native-base";
import { Header, PageContainer, SearchBar, Section } from "../../components";
import { useAuth } from "../../hooks";
import { Favorites } from "./favorites";
import { All } from "./all";

export function Home() {
  const { user } = useAuth();

  return (
    <React.Fragment>
      <Header />
      <Favorites />
      <All />
    </React.Fragment>
  );
}
