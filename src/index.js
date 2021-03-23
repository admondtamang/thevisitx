import * as React from "react";

import { NavigationContainer, DarkTheme as NavigationDarkTheme } from "@react-navigation/native";
import { DefaultTheme, DarkTheme as PaperDarkTheme, Provider as PaperProvider } from "react-native-paper";
import StackNavigator from "./routes/StackNavigator";
import { StatusBar } from "expo-status-bar";

// const CombinedDarkTheme = {
//     ...PaperDarkTheme,
//     ...NavigationDarkTheme,
//     colors: { ...PaperDarkTheme.colors, ...NavigationDarkTheme.colors },
// };

const theme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
        ...DefaultTheme.colors,
        primary: "#3498db",
        accent: "#f1c40f",
    },
};

export default function Main() {
    return (
        <PaperProvider theme={theme}>
            {/* <StatusBar /> */}
            <NavigationContainer>
                <StackNavigator />
            </NavigationContainer>
        </PaperProvider>
    );
}
