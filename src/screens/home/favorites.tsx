import React from "react";
import { FlatList } from "native-base";
import { ContactItem, Section } from "../../components";
import { useQuery } from "@tanstack/react-query";
import { getFavorites } from "../../services";
import { useAuth } from "../../hooks";

export function Favorites() {
  const { user } = useAuth();

  const { data: contacts } = useQuery(["/favorites"], () =>
    getFavorites(user.token!)
  );

  if (contacts && contacts.length > 0)
    return (
      <Section title="Favorites">
        <FlatList
          data={contacts}
          contentContainerStyle={{
            paddingHorizontal: 6,
          }}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item: contact }) => (
            <ContactItem key={contact._id} contact={contact} />
          )}
        />
      </Section>
    );

  return null;
}
