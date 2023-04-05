import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { View } from "react-native";
import {
  Button,
  DefaultTheme,
  Provider as PaperProvider,
} from "react-native-paper";
import { SemicolonPreference } from "typescript";
import { AuthProvider } from "./app/core/context/Auth";
import Router from "./app/routes/Router";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "purple",
    secondary: "yellow",
  },
};

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <AuthProvider>
        <Router />
      </AuthProvider>
    </PaperProvider>
  );
}
