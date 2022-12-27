import React from "react";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useQuery } from "@tanstack/react-query";
import {
  Alert,
  Box,
  Center,
  FlatList,
  HStack,
  IconButton,
  Spinner,
  Text,
} from "native-base";
import { Button, ContactItem, PageContainer } from "../../components";
import { useAuth } from "../../hooks";
import { getContacts } from "../../services";

export function All() {
  const { user, loading, error: authError } = useAuth();
  const navigation = useNavigation();

  const {
    data: contacts,
    isLoading,
    error: errContacts,
    refetch,
  } = useQuery(["/contacts"], () => getContacts(user.token!), {
    staleTime: 1000,
    refetchInterval: 1000,
  });
  const error = errContacts as Error;

  if (isLoading || loading)
    return (
      <PageContainer px={0} py={0}>
        <Box className="bg-white rounded-t-3xl pt-8 px-6 flex-1">
          <Center className="items-center justify-center flex-1">
            <Spinner size="lg" />
          </Center>
        </Box>
      </PageContainer>
    );

  if (authError) {
    navigation.navigate("login" as never);
    return null;
  }

  if (error)
    return (
      <PageContainer px={0} py={0}>
        <Box className="bg-white rounded-t-3xl pt-8 px-6 flex-1">
          <Center className="items-center justify-center flex-1">
            <Alert status="error">
              <HStack space={2} flexShrink={1} alignItems="center">
                <Alert.Icon mt="1" />
                <Text fontSize="md" color="coolGray.800">
                  {error.message}
                </Text>
                <IconButton></IconButton>
              </HStack>
            </Alert>

            <Box className="mt-6">
              <Button
                size="sm"
                text="reload"
                onPress={() => refetch()}
                endIcon={<Feather name="refresh-ccw" size={14} />}
              />
            </Box>
          </Center>
        </Box>
      </PageContainer>
    );

  return (
    <PageContainer px={0} py={0}>
      <Box className="bg-white rounded-t-3xl pt-8 px-6 flex-1">
        <FlatList
          data={contacts}
          horizontal={false}
          showsVerticalScrollIndicator={false}
          renderItem={({ item: contact }) => (
            <ContactItem type="inline" contact={contact} />
          )}
        />
      </Box>
    </PageContainer>
  );
}
