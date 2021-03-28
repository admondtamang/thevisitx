import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, useWindowDimensions, ImagePickerIOS } from "react-native";
import he from "he";
import moment from "moment";

import { useNavigation, useTheme } from "@react-navigation/native";
export default function Article({ item, RealtedPosts }) {
    const navigation = useNavigation();
    const { colors } = useTheme();
    const { title, content, excerpt, jetpack_featured_media_url, date, slug } = item;

    const onPress = () => {
        navigation.navigate("ArticleDetail", {
            title,
            slug,
        });
    };

    // Converted date
    let post_date = moment(date).format("MMM DD") + " . " + moment(date).fromNow();

    // Delete Html tags
    var stripedHtml = excerpt.rendered.replace(/<[^>]+>/g, "");
    var decodedStripedHtml = he.decode(stripedHtml);

    // mobile with
    const contentWidth = useWindowDimensions().width;

    return (
        <TouchableOpacity style={[styles.article, { backgroundColor: colors.background }]} onPress={onPress}>
            <View style={styles.article__desc}>
                <Text numberOfLines={2} style={{ fontWeight: "bold", color: colors.text }}>
                    {title.rendered}
                </Text>
                <Text style={{ color: colors.text }} numberOfLines={RealtedPosts ? 3 : 3}>
                    {decodedStripedHtml}
                </Text>
                {/* <HTML source={{ html: excerpt.rendered }} contentWidth={contentWidth} /> */}
                <View>
                    <Text style={styles.article__time}>{post_date}</Text>
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
        // backgroundColor: colors.background,
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
        fontSize: 13,
    },
    article__pic: {
        maxWidth: 100,
        borderRadius: 5,
        flexBasis: "30%",
    },
});
