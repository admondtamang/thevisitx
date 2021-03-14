import React from "react";
import { Feather } from "@expo/vector-icons";
import { View, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { Title } from "react-native-paper";
import HomeNav from "./Navigation/HomeNav";
import { StatusBar } from "expo-status-bar";
import MyTabs from "../../routes/HomeTopTabs";

export default function Home() {
    const onPress = () => {
        console.log("hel");
    };
    return (
        <ScrollView style={styles.container}>
            <StatusBar />
            <View style={styles.heading}>
                <Title style={{ fontWeight: "bold" }}>Monty Express</Title>
                <TouchableOpacity onPress={onPress}>
                    <Feather name="search" size={24} color="black" />
                </TouchableOpacity>
            </View>
            <MyTabs />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    heading: {
        marginTop: 20,
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10,
    },
    container: {
        backgroundColor: "white",
    },
});
