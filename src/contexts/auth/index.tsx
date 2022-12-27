import React from "react";
import * as authSession from "expo-auth-session";
import * as Google from "expo-auth-session/providers/google";
import * as WebBrowser from "expo-web-browser";
import type { IChildren, IUser } from "../../@types";
import type { IAuthContext } from "./@types";
import { signInWithGoogle } from "../../services";

WebBrowser.maybeCompleteAuthSession();

export const AuthContext = React.createContext<IAuthContext>(
  {} as IAuthContext
);

export function AuthContextProvider(props: IChildren) {
  const redirectUri = authSession.makeRedirectUri({ useProxy: true });
  const scopes = ["profile", "email"];
  const [request, response, promptAsync] = Google.useAuthRequest({
    scopes,
    redirectUri,
    clientId:
      "326895618929-jc5qj0qqsbmqdtrjchtu1d70vk07um0t.apps.googleusercontent.com",
  });

  const [user, setUser] = React.useState<IUser>({} as IUser);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string>("");

  async function signIn() {
    try {
      setLoading(true);
      await promptAsync();
    } catch (error) {
      console.error(error);
    }
    // finally {
    //   setLoading(false);
    // }
  }

  async function loginWithGoogle(token: string) {
    console.log("google login");

    try {
      setLoading(true);
      await signInWithGoogle(token).then((userData) => {
        console.log("userData: ", userData);
        setUser(userData);
      });
    } catch (error) {
      console.log("error  here");
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  React.useEffect(() => {
    if (response && response.type === "success") {
      (async () => {
        console.log("accessToken: ", response.authentication.accessToken);
        await loginWithGoogle(response.authentication.accessToken);
      })();
    }
  }, [response]);

  return (
    <AuthContext.Provider value={{ user, signIn, loading, error }}>
      {props.children}
    </AuthContext.Provider>
  );
}
