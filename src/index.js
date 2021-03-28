import * as React from "react";

import { NavigationContainer, DarkTheme as NavigationDarkTheme, DefaultTheme as NavigationDefaultTheme } from "@react-navigation/native";
import { useTheme, DefaultTheme as PaperDefaultTheme, DarkTheme as PaperDarkTheme, Provider as PaperProvider } from "react-native-paper";
import StackNavigator from "./routes/StackNavigator";
import { StatusBar } from "expo-status-bar";
import store from "./redux/configureStore";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { persistStore, persistReducer } from "redux-persist";

const CombinedDarkTheme = {
    ...PaperDarkTheme,
    ...NavigationDarkTheme,
    colors: { ...PaperDarkTheme.colors, ...NavigationDarkTheme.colors, background: "#333333", text: "#ffffff" },
};

const combinedLightTheme = {
    ...NavigationDefaultTheme,
    ...PaperDefaultTheme,
    colors: {
        ...NavigationDefaultTheme.colors,
        ...PaperDefaultTheme.colors,
        background: "#ffffff",
        text: "#333333",
    },
};

// const theme = {
//     ...DefaultTheme,
//     roundness: 2,
//     colors: {
//         ...DefaultTheme.colors,
//         primary: "#3498db",
//         accent: "#f1c40f",
//     },
// };

export default function Main() {
    let persistor = persistStore(store);

    let isDarkTheme = store.getState().user.darkMode;
    React.useEffect(() => {}, [isDarkTheme]);
    const theme = isDarkTheme ? CombinedDarkTheme : combinedLightTheme;
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <PaperProvider theme={theme}>
                    <StatusBar style={!theme.dark ? "dark" : "light"} />
                    <NavigationContainer theme={theme}>
                        <StackNavigator />
                    </NavigationContainer>
                </PaperProvider>
            </PersistGate>
        </Provider>
    );
}
