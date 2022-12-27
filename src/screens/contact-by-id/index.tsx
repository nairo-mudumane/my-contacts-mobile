import React from "react";
import { Feather, MaterialIcons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Button, Header, PageContainer } from "../../components";
import { IContactByIdScreenParams } from "./@types";
import {
  Alert,
  Avatar,
  Box,
  Center,
  Heading,
  HStack,
  IconButton,
  Spinner,
  Text,
} from "native-base";
import { useQuery } from "@tanstack/react-query";
import { getContactById } from "../../services";
import { useAuth } from "../../hooks";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Detail } from "./detail";

export function ContactById() {
  const navigation = useNavigation();
  const { user, loading, error: authError } = useAuth();
  const route = useRoute();
  const { params } = route.params as IContactByIdScreenParams;

  const {
    data: contact,
    isLoading,
    error: errContact,
    refetch,
  } = useQuery([`/contacts/${params._id}`], () =>
    getContactById(user.token!, params._id)
  );
  const error = errContact as Error;

  const [isFavorite, setIsFavorite] = React.useState<boolean>(
    contact?.favorite ?? false
  );

  async function toggleFavorite() {
    setIsFavorite(!isFavorite);
  }

  React.useEffect(() => {
    if (contact) {
      setIsFavorite(contact.favorite);
    }
  }, [contact?.favorite]);

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

  if (error || !contact)
    return (
      <>
        <Header back />

        <PageContainer px={0} py={0}>
          <Box className="bg-white rounded-t-3xl pt-8 px-6 flex-1">
            <Center className="items-center justify-center flex-1">
              <Alert status="error">
                <HStack space={2} flexShrink={1} alignItems="center">
                  <Alert.Icon mt="1" />
                  <Text fontSize="md" color="coolGray.800">
                    {error.message ?? "Failed to get contact"}
                  </Text>
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
      </>
    );

  return (
    <>
      <Header back />

      <PageContainer px={0} py={0}>
        <Box className="bg-white rounded-t-3xl pt-8 px-6 flex-1">
          <Box className="flex-row items-center justify-between">
            <Avatar source={{ uri: contact.avatar }} size="md">
              {contact.firstname.slice(0, 1) + contact.lastname.slice(0, 1)}
            </Avatar>

            <Heading fontSize={18}>{contact.fullname}</Heading>

            {isFavorite ? (
              <TouchableOpacity onPress={toggleFavorite}>
                <MaterialIcons name="favorite" size={32} />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={toggleFavorite}>
                <MaterialIcons name="favorite-outline" size={32} />
              </TouchableOpacity>
            )}
          </Box>

          <Box className="mt-2">
            {Object.keys(contact).map((key) => {
              if (key === "phone")
                return (
                  <Detail
                    key={contact[key]}
                    title={key}
                    value={contact[key]}
                    icon={<MaterialIcons name="phone" size={32} />}
                  />
                );
            })}
          </Box>
        </Box>
      </PageContainer>
    </>
  );
}
