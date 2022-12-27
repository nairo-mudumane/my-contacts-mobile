import React from "react";
import {
  Box,
  Icon,
  Heading,
  Alert,
  VStack,
  HStack,
  IconButton,
  CloseIcon,
  Text,
} from "native-base";
import { Fontisto } from "@expo/vector-icons";
import { Button, PageContainer } from "../../components";
import { useAuth } from "../../hooks";

export function Login() {
  const { signIn, error, loading, user } = useAuth();

  React.useEffect(() => {
    console.log("loading: ", loading);
  }, [loading]);

  return (
    <PageContainer>
      <Box className="flex-col w-full h-full items-center justify-center">
        <Box>
          <Heading color="white" size="xl">
            Welcome to MContacts
          </Heading>
        </Box>

        {error && (
          <Box my={4} w="full">
            <Alert w="full" status="error">
              <VStack space={2} flexShrink={1} w="100%">
                <HStack flexShrink={1} space={2} justifyContent="space-between">
                  <HStack space={2} flexShrink={1}>
                    <Alert.Icon mt="1" />
                    <Text fontSize="md" color="coolGray.800">
                      {error}
                    </Text>
                  </HStack>
                  <IconButton
                    variant="unstyled"
                    _focus={{
                      borderWidth: 0,
                    }}
                    icon={<CloseIcon size="3" />}
                    _icon={{
                      color: "coolGray.600",
                    }}
                  />
                </HStack>
              </VStack>
            </Alert>
          </Box>
        )}

        <Box className="mb-6">
          {user && user._id && <Text>{user.fullname}</Text>}

          <Button
            leftIcon={
              <Icon as={Fontisto} name="google" size="md" color="white" />
            }
            size="lg"
            text="Get started with Google"
            onPress={signIn}
            disabled={loading}
            isLoading={loading}
            isLoadingText="Reading"
          />
        </Box>

        <Text color="white">
          We do not use any information other than your{"\n"} email to create
          your account.
        </Text>
      </Box>
    </PageContainer>
  );
}
