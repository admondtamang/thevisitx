import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, useWindowDimensions, ImagePickerIOS } from "react-native";
import he from "he";
import moment from "moment";

import { useNavigation, useTheme } from "@react-navigation/native";
import styled from "styled-components/native";

export default function Article({ item, RealtedPosts, SearchArticle }) {
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

    const Conatiner = styled.TouchableOpacity`
        flex-direction: row;
        justify-content: space-between;
        /* align-items: center; */
        height: ${SearchArticle ? "80px" : "130px"};
        border-width: 1px;
        background-color: ${colors.background};
        border-color: #e5e5e5;
        padding: 10px;
        margin-bottom: 10px;
    `;
    const Row = styled.View`
        flex-direction: column;
        flex-basis: 70%;
        flex: 1;
        padding-right: 10px;
    `;

    if (SearchArticle) {
        return (
            <Conatiner>
                <Image style={styles.article__pic} source={{ uri: jetpack_featured_media_url }} />
                <Text style={{ fontWeight: "bold", color: colors.text, flexBasis: "70%", alignSelf: "center" }}>{title.rendered}</Text>
            </Conatiner>
        );
    }

    return (
        <Conatiner onPress={onPress}>
            <Row>
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
            </Row>
            <Image style={styles.article__pic} source={{ uri: jetpack_featured_media_url }} />
        </Conatiner>
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
