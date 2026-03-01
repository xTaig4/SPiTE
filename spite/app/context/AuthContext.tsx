import React, { createContext, useContext, useState, useEffect } from "react";
import * as SecureStore from "expo-secure-store";

interface AuthContextType {
  accessToken: string | null;
  refreshToken: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (tokens: {
    accessToken: string;
    refreshToken: string;
    expiresIn: number;
  }) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [refreshToken, setRefreshToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Load tokens on mount
  useEffect(() => {
    loadTokens();
  }, []);

  const loadTokens = async () => {
    try {
      const access = await SecureStore.getItemAsync("spotify_access_token");
      const refresh = await SecureStore.getItemAsync("spotify_refresh_token");
      setAccessToken(access);
      setRefreshToken(refresh);
    } catch (error) {
      console.error("Failed to load tokens:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const login = async (tokens: {
    accessToken: string;
    refreshToken: string;
    expiresIn: number;
  }) => {
    try {
      await SecureStore.setItemAsync("spotify_access_token", tokens.accessToken);
      await SecureStore.setItemAsync("spotify_refresh_token", tokens.refreshToken);
      await SecureStore.setItemAsync(
        "spotify_token_expiry",
        String(Date.now() + tokens.expiresIn * 1000)
      );

      setAccessToken(tokens.accessToken);
      setRefreshToken(tokens.refreshToken);
    } catch (error) {
      console.error("Failed to save tokens:", error);
      throw error;
    }
  };

  const logout = async () => {
    try {
      await SecureStore.deleteItemAsync("spotify_access_token");
      await SecureStore.deleteItemAsync("spotify_refresh_token");
      await SecureStore.deleteItemAsync("spotify_token_expiry");

      setAccessToken(null);
      setRefreshToken(null);
    } catch (error) {
      console.error("Failed to clear tokens:", error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        accessToken,
        refreshToken,
        isAuthenticated: !!accessToken,
        isLoading,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
};
