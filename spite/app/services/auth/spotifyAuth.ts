import * as AuthSession from "expo-auth-session";
import * as WebBrowser from "expo-web-browser";

WebBrowser.maybeCompleteAuthSession();

const CLIENT_ID = process.env.EXPO_PUBLIC_SPOTIFY_CLIENT_ID!;
const REDIRECT_URI = AuthSession.makeRedirectUri({
  scheme: "spite",
});

const discovery = {
  authorizationEndpoint: "https://accounts.spotify.com/authorize",
  tokenEndpoint: "https://accounts.spotify.com/api/token",
};

export const spotifyAuth = async () => {
  try {
    const request = new AuthSession.AuthRequest({
      clientId: CLIENT_ID,
      scopes: [
        "user-read-private",
        "user-read-email",
        // "user-library-read",
        // "playlist-read-private",
      ],
      redirectUri: REDIRECT_URI,
      usePKCE: true, // Enable PKCE automatically
    });

    const result = await request.promptAsync(discovery);

    if (result.type === "success") {
      const { code } = result.params;
      const tokens = await exchangeCodeForToken(code, request.codeVerifier!);
      return tokens;
    }
  } catch (error) {
    console.error("Auth error:", error);
  }
};

async function exchangeCodeForToken(code: string, codeVerifier: string) {
  const body = new URLSearchParams({
    client_id: CLIENT_ID,
    grant_type: "authorization_code",
    code,
    redirect_uri: REDIRECT_URI,
    code_verifier: codeVerifier,
  });

  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: body.toString(),
  });

  const data = await response.json();
  return {
    accessToken: data.access_token,
    refreshToken: data.refresh_token,
    expiresIn: data.expires_in,
  };
}
