import { useNavigation } from "@react-navigation/core";
import moment from "moment";
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Card, Subheading, Title } from "react-native-paper";
import HTML from "react-native-render-html";
import useWindowDimensions from "react-native/Libraries/Utilities/useWindowDimensions";
import colors from "../../utils/colors";
export default function LargeArticle({ item }) {
    // Hooks
    const contentWidth = useWindowDimensions().width;
    const navigation = useNavigation();

    const { title, content, excerpt, jetpack_featured_media_url, date, slug } = item;

    // Converted date
    let post_date = moment(date).format("MMM DD") + " . " + moment(date).fromNow();

    const onPress = () => {
        navigation.navigate("ArticleDetail", {
            title,
            slug,
        });
    };

    return (
        <TouchableOpacity onPress={onPress} style={styles.article}>
            <Title style={{ fontWeight: "bold" }}>{title.rendered}</Title>

            <HTML source={{ html: excerpt.rendered }} contentWidth={contentWidth} />
            <Card style={{ marginVertical: 5 }}>
                <Card.Cover source={{ uri: jetpack_featured_media_url }} style={{ borderRadius: 10 }} />
            </Card>
            <Text style={{ color: "grey", paddingTop: 5 }}>{post_date}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    article: {
        marginHorizontal: 10,
        padding: 10,
        backgroundColor: colors.white,
        borderRadius: 5,
        marginBottom: 10,
    },
});
