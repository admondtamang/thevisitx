import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, useWindowDimensions } from "react-native";
import he from "he";
import moment from "moment";

import { useNavigation } from "@react-navigation/native";
export default function Article({ item, RealtedPosts }) {
    const navigation = useNavigation();
    const { title, content, excerpt, jetpack_featured_media_url, date, slug } = item;

    const onPress = () => {
        navigation.navigate("ArticleDetail", {
            title,
            slug,
        });
    };
    let post_date = moment(date).format("YYYY-MM-DD");

    // Delete Html tags
    var stripedHtml = excerpt.rendered.replace(/<[^>]+>/g, "");
    var decodedStripedHtml = he.decode(stripedHtml);

    const contentWidth = useWindowDimensions().width;

    return (
        <TouchableOpacity style={styles.article} onPress={onPress}>
            <View style={styles.article__desc}>
                <Text numberOfLines={2} style={{ fontWeight: "bold" }}>
                    {title.rendered}
                </Text>
                <Text numberOfLines={RealtedPosts ? 3 : 3}>{decodedStripedHtml}</Text>
                {/* <HTML source={{ html: excerpt.rendered }} contentWidth={contentWidth} /> */}
                <View>
                    <Text style={{ color: "grey" }}>{post_date}</Text>
                </View>
            </View>
            <Image style={styles.article__pic} source={{ uri: jetpack_featured_media_url }} />
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
