import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Root from "./src";
import { LogBox } from "react-native";
export default function App() {
    // Ignore log notification by message:

    LogBox.ignoreAllLogs(true);
    return <Root />;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
