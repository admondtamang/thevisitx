import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

export default function Article() {
    const onPress = () => console.log("hello");

    return (
        <TouchableOpacity style={styles.article} onPress={onPress}>
            <View style={styles.article__desc}>
                <Text style={{ fontWeight: "bold" }}>Discover new thing of the world</Text>
                <Text>
                    Discover new thing of the world Discover new thing of the world Discover new thing of the world Discover new thing of
                    the world
                </Text>
                <View>
                    <Text style={{ color: "grey" }}>Nov 3 . 10 min read</Text>
                </View>
            </View>
            <Image style={styles.article__pic} source={{ uri: "https://picsum.photos/700" }} />
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    article: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        height: 130,
        borderWidth: 1,
        borderColor: "#E5E5E5",
        padding: 10,
        marginBottom: 10,
    },
    article__desc: {
        flex: 1,
        flexDirection: "column",
        flexBasis: "70%",
        paddingRight: 10,
    },
    article__time: {
        color: "grey",
    },
    article__pic: {
        maxWidth: 100,
        borderRadius: 5,
        flexBasis: "30%",
    },
});
