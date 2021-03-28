import React from "react";
import { Feather } from "@expo/vector-icons";
import { View, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { Title } from "react-native-paper";
import MyTabs from "../../routes/HomeTopTabs";

import { useNavigation, useTheme } from "@react-navigation/native";
export default function Home() {
    const navigation = useNavigation();
    const { colors } = useTheme();
    const onPress = () => {
        navigation.navigate("Search");
    };
    return (
        <ScrollView style={{ backgroundColor: colors.backgroud }}>
            <View style={styles.heading}>
                <Title style={{ fontWeight: "bold" }}>Monty Express</Title>
                <TouchableOpacity onPress={onPress}>
                    <Feather name="search" size={24} color="black" onPress={onPress} />
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
});
