import React from "react";
import { View, StyleSheet } from "react-native";
import { ActivityIndicator } from "react-native-paper";
// import loading from "./loading.json";

// import LottieView from "lottie-react-native";

export default function Loading() {
    return (
        <View style={styles.container}>
            <ActivityIndicator size={"large"} />
            {/* <LottieView source={loading} autoPlay loop />; */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
    },
});
